import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import ListOfUsers from "./ListOfUsers";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedList: []
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Available Users</h2>
        <div>
          <ListOfUsers users={this.props.users} moveUsers={(para) => {
            this.setState({
              selectedList: [
                ...this.state.selectedList,
                para
              ]
            });
          }} />
        </div>
        <br />
        <h2>Selected Users</h2>
        <div>
          <ListOfUsers users={this.state.selectedList} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  users: PropTypes.array.isRequired
};



export default App;
