$(function () {
  $('.accordion').accordion();
});

// Used for the About  header
var Well = function Well(props) {
  return React.createElement(
    "div",
    { className: "well" },
    props.title
  );
};
Well.propTypes = {
  title: React.PropTypes.string.isRequired
};
Well.defaultProps = {
  title: "You should pass a title as a prop!"

  // A wrapper around an a tag
};

var PanelGroup = function PanelGroup(props) {
  return React.createElement(
    "div",
    { className: "panel-group", id: props.dpid },
    props.children
  );
};

var Panel = React.createClass({
  displayName: "Panel",

  propTypes: {
    title: React.PropTypes.string,
    dpid: React.PropTypes.string.isRequired,
    id: React.PropTypes.number.isRequired
  },
  getDefaultProps: function getDefaultProps() {
    return {
      title: "You need to pass a title as a prop!"
    };
  },
  render: function render() {
    var idee = "collapse" + this.props.id;
    var ref = "#" + idee;
    var bodyClasses = "panel-collapse collapse " + this.props.addClass;
    var dpidee = "#accoridon" + this.props.dpid;
    return React.createElement(
      "div",
      { className: "panel panel-default" },
      React.createElement(
        "div",
        { className: "panel-heading" },
        React.createElement(
          "a",
          { "data-toggle": "collapse", "data-parent": this.props.dpid, href: ref },
          React.createElement(
            "div",
            { className: "my-panel-heading" },
            this.props.title
          )
        )
      ),
      React.createElement(
        "div",
        { id: idee, className: bodyClasses },
        React.createElement(
          "div",
          { className: "panel-body" },
          this.props.children,
          this.props.body
        )
      )
    );
  }
});

var AboutNebula = React.createClass({
  displayName: "AboutNebula",

  render: function render() {
    var aboutBody = "N E B U L A  /  body text.";
    var teamBody = "T E A M  /  body text.";
    var moreBody = "M O R E  /  body text.";
    return React.createElement(
      "div",
      { className: "flex" },
      React.createElement("div", { id: "top" }),
      React.createElement(Well, { title: "A B O U T " }),
      React.createElement(
        PanelGroup,
        { dpid: "1" },
        React.createElement(Panel, { title: "NEBULA", body: aboutBody, id: "1", addClass: "", dpid: "#1" }),
        React.createElement(Panel, { title: "TEAM", body: teamBody, id: "2", addClass: "", dpid: "#1" }),
        React.createElement(Panel, { title: "MORE", body: moreBody, id: "3", addClass: "", dpid: "#1" }),
      )
    );
  }
});

ReactDOM.render(React.createElement(AboutNebula, null), document.getElementById('main'));