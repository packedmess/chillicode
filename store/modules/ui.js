// Action names
export const CASES = '@ui/CASES';
export const SET_LANGUAGE = '@ui/SET_LANGUAGE';
export const SAVE_LAYOUT_SCROLL_POSTITION = '@ui/SAVE_LAYOUT_SCROLL_POSTITION';

// Action creators
export const setCases = data => {
  return {
    type: CASES,
    payload: data,
  };
};

export const setLanguage = locale => {
  return {
    type: SET_LANGUAGE,
    payload: locale,
  };
};

export const saveLayoutScrollPosition = position => {
  return {
    type: SAVE_LAYOUT_SCROLL_POSTITION,
    payload: position,
  };
};

// Reducer
const initialState = {
  cases: [],
  language: 'en',
  layoutScrollPosition: 0,
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case CASES:
      return {
        ...state,
        cases: action.payload,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case SAVE_LAYOUT_SCROLL_POSTITION:
      return {
        ...state,
        layoutScrollPosition: action.payload,
      };
    default:
      return state;
  }
}
