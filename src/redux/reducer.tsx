export interface IState {
  data: string,
}

type Action = {
  type: "DATA",
  payload: string,
}

export const searchDataReducer = (
  state: IState = { data: "" }, 
  action: Action,
) => {
  switch (action.type) {
    case "DATA":
      console.log(action.payload);
      return { ...state, data: action.payload };
    default:
      return state;
  }
};