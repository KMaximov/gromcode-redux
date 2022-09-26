import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CreateTaskInput from './CreateTaskInput';
import * as tasksActions from '../tasks.actions';
import { sortedTasksListSelector } from '../tasks.selectors';
import TasksList from './TasksList';

class TodoList extends Component {
    componentDidMount() {
    this.props.getTaskList();
  }

  render() {
    return (
      <>
      <h1 className='title'>Todo List</h1>
      <main className='todo-list'>
        <CreateTaskInput
          createTask={this.props.createTask}
        />
        <TasksList 
          tasks={this.props.tasks}
          updateTask={this.props.updateTask}
          deleteTask={this.props.deleteTask}
        />
      </main>
      </>
    )
  }
}


TodoList.protoTypes = {
  getTaskList: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
};

const mapState = state => {
  return {
    tasks: sortedTasksListSelector(state),
  }
};

const mapDispatch = {
  getTaskList: tasksActions.getTaskList,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
  createTask: tasksActions.createTask,
}

export default connect(mapState, mapDispatch)(TodoList);
