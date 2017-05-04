import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import ListOfUsers from "./ListOfUsers";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedList: [],
      availableList: [ ...this.props.users],
      selectedListNotEmpty: false,
      idList: []
    };
  }
  render() {
    // create available user list
    const list = this.props.users.filter((val) => {
      if (!(this.state.idList.includes(val.id))) {
        return val;
      }
    });
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
          <ListOfUsers users={list} moveUsers={(para) => {
            this.setState({
              selectedList: [
                ...this.state.selectedList,
                para
              ],
              idList: [
                ...this.state.idList,
                para.id
              ],
              selectedListNotEmpty: true
            });
          }} selectedListNotEmpty={true}
            buttonText={"Select User"} />
        </div>
        <br />
        <h2>Selected Users</h2>
        <div>
          <ListOfUsers users={this.state.selectedList}
            selectedListNotEmpty={this.state.selectedListNotEmpty}
            buttonText={"Deselect User"}
            moveUsers={(para) => {
              this.setState({
                availableList: this.state.availableList.splice(para.id, 1)
              });
            }} />
        </div>
        <h3>Reset</h3>
        <button onClick={() => {
          this.setState({
            selectedListNotEmpty: false,
            availableList: this.props.users,
            selectedList: []
          });
        }}>Click Me</button>
      </div>
    );
  }
}

App.propTypes = {
  users: PropTypes.array.isRequired
};



export default App;
