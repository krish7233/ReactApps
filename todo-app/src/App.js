import React, { Component } from "react";
import Showtask from "./showTask";
import Addtask from "./addTask.js";

class App extends Component {
  state = {
    tasks: [],
  };

  addTask = (task) => {
    if (task.task !== "") {
      task.id = Math.random();
      this.setState({
        tasks: [...this.state.tasks, task],
      });
    }
  };

  deleteTask = (id) => {
    const filteredtasks = this.state.tasks.filter((task) => {
      return task.id !== id;
    });
    this.setState({ tasks: filteredtasks });
  };
  render() {
    return (
      <div className="App-content">
        <h1>Todo's</h1>
        <Showtask deletetask={this.deleteTask} mytasks={this.state.tasks} />
        <Addtask addtask={this.addTask} />
      </div>
    );
  }
}

export default App;
