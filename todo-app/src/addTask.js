import React, { Component } from "react";
class Addtask extends Component {
  state = {
    task: null,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.addtask(this.state);
    this.setState({
      task: "",
    });
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    return (
      <div>
        <br />
        <form onSubmit={this.handleSubmit} id="create-form">
          <input
            type="text"
            id="task"
            onChange={this.handleOnChange}
            placeholder="Enter task here..."
            value={this.state.task}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Addtask;
