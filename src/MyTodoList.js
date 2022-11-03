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

  handleReset = () => {
    this.setState({
      items: [],
    });
  };

  handleDeleteItem = (index) => {
    let newArray = [...this.state.items];
    newArray.splice(index, 1);
    this.setState({
      items: newArray,
    });
  };

  render() {
    return (
      <>
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
        <button type="button" onClick={this.handleReset}>
          Reset List
        </button>
        <div>{this.props.render(this.state.items, this.handleDeleteItem)}</div>
      </>
    );
  }
}

export default TodoList;
