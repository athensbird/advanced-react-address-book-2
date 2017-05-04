import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import ListOfUsers from "./ListOfUsers";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedListNotEmpty: false,
      idList: []
    };
  }
  render() {
    // create available user list
    let availableList = this.props.users.filter((user) => {
      if (!(this.state.idList.includes(user.id))) {
        return user;
      }
    });
    const chosenList = this.props.users.filter((user) => {
      if (this.state.idList.includes(user.id)) {
        return user;
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
          <ListOfUsers users={availableList} moveUsers={(para) => {
            this.setState({
              idList: [
                ...this.state.idList,
                para.id
              ],
              selectedListNotEmpty: true
            });
            // console.log(chosenList);
            // console.log(availableList);
          }} selectedListNotEmpty={true}
            buttonText={"Select User"} />
        </div>
        <br />
        <h2>Selected Users</h2>
        <div>
          <ListOfUsers users={chosenList}
            selectedListNotEmpty={this.state.selectedListNotEmpty}
            buttonText={"Deselect User"}
            moveUsers={(para) => {
              // const removeIndex = this.state.idList.indexOf(para.id);
              console.log("user", para);
              this.setState({
                idList: this.state.idList.length > 1 ?
                 this.state.idList.filter((id) => {
                   return id !== para.id;
                 }) : []
              });
            }} />
        </div>
        <h3>Reset</h3>
        <button onClick={() => {
          availableList = this.props.users;
          this.setState({
            selectedListNotEmpty: false
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
