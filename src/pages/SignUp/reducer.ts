import actions from "./actions";

export interface SignUpReducerUserType {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export type SignUpReducerStateType = {
  user: SignUpReducerUserType;
  loading: boolean;
  error: null | string;
};

export const SignUpReducerInitialState: SignUpReducerStateType = {
  user: {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  },
  loading: false,
  error: null,
};

export function SignUpReducer(
  state = SignUpReducerInitialState,
  action,
): SignUpReducerStateType {
  if (action.type === actions.SET_USER_DATA) {
    const userData = action.payload;

    return {
      ...state,
      user: {
        ...state.user,
        ...userData,
      },
    };
  }

  if (action.type === actions.SIGNUP_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === actions.SIGNUP_SUCCESS) {
    return {
      ...state,
      loading: false,
    };
  }

  if (action.type === actions.SIGNUP_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload.message,
    };
  }

  return state;
}
