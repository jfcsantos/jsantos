var BioContent = React.createClass({displayName: 'BioContent',
  render: function() {
    return (
      <div className="bioContent main-content-section">
        <h1>My bio.</h1>
        <br/><span>Meanwhile feel free to contact me in the social webz!</span>
        <ul className="info">
          <li><p className="email"><a href="mailto:jfs.santos.im@gmail.com">jfs.santos.im@gmail.com</a></p></li>
        </ul>
      </div>
    );
  }
});

var WorkItem = React.createClass({
  render: function() {
    // console.log(this.props);
    return (
      <div className="workItem" key={this.props.id}>
        <h2 className="companyTitle" key={this.props.id}>
          {this.props.company}
        </h2>
        {this.props.children}
      </div>
    );
  }
});


var WorkContent = React.createClass({displayName: 'WorkContent',
  loadWorkListFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadWorkListFromServer();
    // setInterval(this.loadWorkListFromServer, this.props.pollInterval);
  },
  render: function() {
    var data = this.state.data;
    var workItems = data.map(function(workItem) {
      return (
        <WorkItem company={workItem.company} key={workItem.id}>
          {workItem.description}
        </WorkItem>
      );
    });
    return (
      <div className="workContent main-content-section">
        {workItems}
      </div>
    );
  }
});

var ContactForm = React.createClass({displayName: 'ContactForm',
  onContactSubmit: function(contact) {
    contact.id = Date.now();
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: contact,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if(!text || !author) {
      return;
    }
    this.onContactSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  },
  render: function () {
    return (
      <form className="contactForm" onSubmit={this.handleSubmit}>
       <input
        type="text"
        placeholder="Your name"
        value={this.state.author}
        onChange={this.handleAuthorChange}
      />
       <input
        type="text"
        placeholder="Say something..."
        value={this.state.text}
        onChange={this.handleTextChange}
      />
       <input type="submit" value="Post" />
     </form>
    );
  }
});

var MainContent = React.createClass({displayName: 'MainContent',
  render: function() {
    return (
      <div className="mainContent">
        <BioContent />
        <WorkContent url="http://localhost:3000/api/worklist" />
        <ContactForm url="http://localhost:3000/api/contacts"  />
      </div>
    );
  }
});

ReactDOM.render(
  <MainContent/>,
  document.getElementById('main_content')
);
