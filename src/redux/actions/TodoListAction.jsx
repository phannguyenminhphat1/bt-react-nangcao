import Axios from "axios";
import { GET_TASK_API } from "../types/TodoListType";

export const getTaskListApi = () => {
  return (dispatch) => {
    let promise = Axios({
      url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
      method: "GET",
    });
    promise
      .then((result) => {
        dispatch({
          type: GET_TASK_API,
          tasks: result.data,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export const addTaskApi = (taskName) => {
  return (dispatch) => {
    let promise = Axios({
      url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
      method: "POST",
      data: taskName,
    });
    promise
      .then((result) => {
        dispatch(getTaskListApi());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteTaskApi = (taskName) => {
  return (dispatch) => {
    let promise = Axios({
      url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
      method: "DELETE",
    });
    promise
      .then((result) => {
        dispatch(getTaskListApi());
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};
