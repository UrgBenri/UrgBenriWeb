import { TOGGLE_SIDEBAR } from '../constants/ActionTypes';

const sidebar = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return !state
    default:
      return state
  }
}

export default sidebar