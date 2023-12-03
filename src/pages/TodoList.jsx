import React, { useEffect, useState } from "react";
import "./style.css";
import { connect } from "react-redux";
import {
  addTaskApi,
  deleteTaskApi,
  getTaskListApi,
} from "../redux/actions/TodoListAction";

function TodoList({ taskList, getList, addTask, deleteTask }) {
  const [task, setTask] = useState({
    taskName: "",
    status: true,
  });
  const handleChangeInput = (e) => {
    setTask({
      ...task,
      taskName: e.target.value,
    });
  };
  // GET TASK
  const getTaskList = () => {
    getList();
  };

  // ADD TASK
  const handleAddTask = () => {
    addTask(task);
  };
  // EFFECT
  useEffect(() => {
    getTaskList();
    return () => {};
  }, []);

  // RENDER
  const renderCompletedTask = () => {
    return taskList
      .filter((item) => item.status)
      .map((item, index) => {
        return (
          <li key={index}>
            <span>{item.taskName}</span>
            <div className="buttons">
              <button className="remove">
                <i className="fa fa-trash-alt" />
              </button>
              <button className="complete">
                <i className="far fa-check-circle" />
                <i className="fas fa-check-circle" />
              </button>
            </div>
          </li>
        );
      });
  };
  const renderUncompleteTask = () => {
    return taskList
      .filter((item) => item.status === false)
      .map((item, index) => {
        return (
          <li key={index}>
            <span>{item.taskName}</span>
            <div className="buttons">
              <button
                onClick={() => deleteTask(item.taskName)}
                className="remove"
              >
                <i className="fa fa-trash-alt" />
              </button>
              <button className="complete">
                <i className="far fa-check-circle" />
                <i className="fas fa-check-circle" />
              </button>
            </div>
          </li>
        );
      });
  };

  return (
    <div>
      <div className="card">
        <div className="card__header">
          <img src="./img/X2oObC4.png" alt="sfun" />
        </div>
        <div className="card__body">
          <div className="card__content">
            <div className="card__title">
              <h2>My Tasks</h2>
              <p>September 9,2020</p>
            </div>
            <div className="card__add">
              <input
                id="newTask"
                type="text"
                placeholder="Enter an activity..."
                name="newTask"
                value={task.taskName}
                onChange={handleChangeInput}
              />
              <button onClick={() => handleAddTask(task.taskName)} id="addItem">
                <i className="fa fa-plus" />
              </button>
            </div>
            <div className="card__todo">
              {/* Uncomplete Task */}
              <ul className="todo" id="todo">
                {renderUncompleteTask()}
              </ul>
              {/* Complete Task */}

              <ul className="todo" id="completed">
                {renderCompletedTask()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    taskList: state.TodoListReducer.taskList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getList: () => {
      dispatch(getTaskListApi());
    },
    addTask: (item) => {
      dispatch(addTaskApi(item));
    },
    deleteTask: (item) => {
      dispatch(deleteTaskApi(item));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
