/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  LOAD_ERROR,
  LOAD_JS_QUESTIONS,
  LOAD_JS_QUESTIONS_SUCCESS,
  LOAD_C_QUESTIONS_SUCCESS,
  LOAD_RUBY_QUESTIONS,
  LOAD_RUBY_QUESTIONS_SUCCESS,
  LOAD_C_QUESTIONS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  jsQuestionsCount: '',
});

function homeReducer(state = initialState, action) {
  console.log(action.type)
  switch (action.type) {
    case LOAD_JS_QUESTIONS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['jsQuestionsCount'], 0);
    case LOAD_JS_QUESTIONS_SUCCESS:
      return state
        .setIn(['jsQuestionsCount'], action.quesCount)
    case LOAD_C_QUESTIONS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['cQuestionsCount'], 0);
    case LOAD_C_QUESTIONS_SUCCESS:
      return state
        .setIn(['cQuestionsCount'], action.quesCount)
    case LOAD_RUBY_QUESTIONS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['rubyQuestionsCount'], 0);
    case LOAD_RUBY_QUESTIONS_SUCCESS:
      return state
        .setIn(['rubyQuestionsCount'], action.quesCount)
    case LOAD_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default homeReducer;
