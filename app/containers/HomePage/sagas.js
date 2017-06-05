/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_JS_QUESTIONS, LOAD_C_QUESTIONS, LOAD_RUBY_QUESTIONS } from './constants';
import { jsQuestionsLoaded, QuestionsLoadingError, CQuestionsLoaded, rubyQuestionsLoaded } from './actions';

import request from 'utils/request';
/**
 * Github repos request/response handler
 */
export function* getJSQuestions() {
  // Select username from store
  const requestURL = 'https://api.stackexchange.com/2.2/search/advanced?fromdate=1496448000&order=desc&sort=activity&tagged=javascript&site=stackoverflow';

  try {
    // Call our request helper (see 'utils/request')
    const jsQuestions = yield call(request, requestURL);
    yield put(jsQuestionsLoaded(jsQuestions.items.length));
  } catch (err) {
    yield put(QuestionsLoadingError(err));
  }
}

export function* getRubyQuestions() {
  // Select username from store
  const requestURL = 'https://api.stackexchange.com/2.2/search/advanced?fromdate=1496448000&order=desc&sort=activity&tagged=kannada&site=stackoverflow';

  try {
    // Call our request helper (see 'utils/request')
    const rubyQuestions = yield call(request, requestURL);
    console.log("pppppppppppppppp")
    console.log(rubyQuestions.items.length)
    console.log("pppppppppppppppp")
    yield put(rubyQuestionsLoaded(rubyQuestions.items.length));
  } catch (err) {
    yield put(QuestionsLoadingError(err));
  }
}

export function* getCQuestions() {
  // Select username from store
  const requestURL = 'https://api.stackexchange.com/2.2/search/advanced?fromdate=1496448000&order=desc&sort=activity&tagged=c%2B%2B&site=stackoverflow';

  try {
    // Call our request helper (see 'utils/request')
    const cQuestions = yield call(request, requestURL);
    yield put(CQuestionsLoaded(cQuestions.items.length));
  } catch (err) {
    yield put(QuestionsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubData() {
  const watcher = yield takeLatest(LOAD_JS_QUESTIONS, getJSQuestions);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* cData() {
  const c_watcher = yield takeLatest(LOAD_C_QUESTIONS, getCQuestions);

  yield take(LOCATION_CHANGE);
  yield cancel(c_watcher);
}

export function* rubyData() {
  const watcher = yield takeLatest(LOAD_RUBY_QUESTIONS, getRubyQuestions);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


// Bootstrap sagas
export default [
  githubData,
  cData,
  rubyData
];
