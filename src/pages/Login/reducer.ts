import actions from "./actions";

export type LoginReducerStateType = {
  email: string;
  password: string;
  loading: boolean;
  error: null | string;
};

export const LoginReducerInitialState: LoginReducerStateType = {
  email: "",
  password: "",
  loading: false,
  error: null,
};

export function LoginReducer(
  state = LoginReducerInitialState,
  action,
): LoginReducerStateType {
  if (action.type === actions.SET_LOGIN_DATA) {
    return {
      ...state,
      ...action.payload,
    };
  }

  if (action.type === actions.LOGIN_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === actions.LOGIN_SUCCESS) {
    return {
      ...state,
      loading: false,
    };
  }

  if (action.type === actions.LOGIN_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload.message,
    };
  }

  return state;
}
