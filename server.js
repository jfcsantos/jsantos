/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var WORK_ITEMS_FILE = path.join(__dirname, 'portfolio.json');
var CONTACTS_FILE = path.join(__dirname, 'contacts.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/worklist', function(req, res) {
  fs.readFile(WORK_ITEMS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

app.post('/api/contacts', function(req, res) {
  fs.readFile(CONTACTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var contacts = JSON.parse(data);
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    var newContact = {
      id: Date.now(),
      author: req.body.author,
      text: req.body.text,
    };
    contacts.push(newContact);
    fs.writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(contacts);
    });

  var nodemailer = require('nodemailer');
  var mg = require('nodemailer-mailgun-transport');

  // This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
  var auth = {
    auth: {
      api_key: 'pubkey-cfe35cdf248c8910c68376220fc61edd',
      domain: 'sandbox76c43b22c28945a0bb8d008eeb0d45ff.mailgun.org'
    }
  }

  var nodemailerMailgun = nodemailer.createTransport(mg(auth));

  nodemailerMailgun.sendMail({
    from: req.body.author,
    to: 'jfs.csantos@gmail.com', // An array if you have multiple recipients.
    subject: 'New contact request',
    'h:Reply-To': 'reply2this@company.com',
    //You can use "html:" to send HTML email content. It's magic!
    html: '<b>' + req.body.text + '</b>',
  }, function (err, info) {
    if (err) {
      console.log('Error: ' + err);
    }
    else {
      console.log('Response: ' + info);
    }
  });



  });
});


app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
