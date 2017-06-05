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
  LOAD_KANNADA_QUESTIONS,
  LOAD_KANNADA_QUESTIONS_SUCCESS,
  LOAD_C_QUESTIONS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  jsQuestions: {},
  kannadaQuestions: {},
  cQuestions: {}
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_JS_QUESTIONS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['jsQuestions'], {});
    case LOAD_JS_QUESTIONS_SUCCESS:
      return state
        .setIn(['jsQuestions'], action.questions)
    case LOAD_C_QUESTIONS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['cQuestions'], {});
    case LOAD_C_QUESTIONS_SUCCESS:
      return state
        .setIn(['cQuestions'], action.questions)
    case LOAD_KANNADA_QUESTIONS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['kannadaQuestions'], {});
    case LOAD_KANNADA_QUESTIONS_SUCCESS:
      return state
        .setIn(['kannadaQuestions'], action.questions)
    case LOAD_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default homeReducer;
