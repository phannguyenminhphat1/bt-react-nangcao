import { GET_TASK_API } from "../types/TodoListType";

const stateDefault = {
  taskList: [],
};
export const TodoListReducer = (state = stateDefault, action) => {
  console.log(action);
  switch (action.type) {
    case GET_TASK_API: {
      state.taskList = action.tasks;
      break;
    }

    default:
      break;
  }
  return { ...state };
};
