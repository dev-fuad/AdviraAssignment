import { FETCH_DATA, FETCH_MORE, SET_LOADING } from '../types';

const InitialState = {
  page: {
    index: 1,
    total: 1,
  },
  data: [],
  isLoading: false,
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      if (!Array.isArray(action.data)) return { ...state, isLoading: false };
      return {
        page: {
          index: action.current_page,
          total: action.last_page,
        },
        data: action.data,
        isLoading: false,
      };
    case FETCH_MORE:
      if (!Array.isArray(action.data)) return { ...state, isLoading: false };
      return {
        page: {
          index: action.current_page,
          total: action.last_page,
        },
        data: [...state.data, ...action.data],
        isLoading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};
