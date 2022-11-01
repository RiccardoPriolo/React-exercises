import React from "react";

class TodoList extends React.Component {
  state = {
    items: ["Do homeworks", "Go to Gym", "Go To Cinema"],
    newItem: null,
    addItem: true,
  };

  handleInput = (event) => {
    this.setState({
      newItem: event.target.value,
      addBtn: !event.target.value,
    });
  };
  handleAdd = () => {
    this.setState({
      items: [...this.state.items, this.state.newItem],
      newItem: " ",
    });
  };

  render() {
    return (
      <>
        <ul>
          {this.state.items.map((items, index) => (
            <li key={index}>{items}</li>
          ))}
        </ul>
        <input
          name="todo"
          type="text"
          onChange={this.handleInput}
          value={this.state.newItem}
        ></input>
        <button
          type="button"
          onClick={this.handleAdd}
          disabled={this.state.addBtn}
        >
          Add{" "}
        </button>
      </>
    );
  }
}

export default TodoList;
