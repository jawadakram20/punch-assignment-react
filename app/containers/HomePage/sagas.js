/**
 * Gets the repositories of the user from Github
 */
import _ from 'lodash';
import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_JS_QUESTIONS, LOAD_C_QUESTIONS, LOAD_KANNADA_QUESTIONS } from './constants';
import { jsQuestionsLoaded, QuestionsLoadingError, CQuestionsLoaded, kannadaQuestionsLoaded } from './actions';

import request from 'utils/request';
/**
 * Github repos request/response handler
 */

function getAnswersCount(quesArr, responseObject) {
  let answeredQuestions = _.filter(quesArr, 'is_answered')
  let acceptedAnswers = []
   _.map(quesArr, (question) => {
    if(question.hasOwnProperty('accepted_answer_id'))
    { 
      acceptedAnswers.push(question)
    }
  });
  responseObject["acceptedAnswers"] = acceptedAnswers.length
  responseObject["answeredQuestions"] = answeredQuestions.length
  return responseObject
}


export function* getJSQuestions() {
  // Select username from store
  const requestURL = 'https://api.stackexchange.com/2.2/search/advanced?fromdate=1496448000&order=desc&sort=activity&tagged=javascript&site=stackoverflow';
  try {
    // Call our request helper (see 'utils/request')
    const jsQuestions = yield call(request, requestURL);
    let responseObject = { count: jsQuestions.items.length}
    getAnswersCount(jsQuestions.items, responseObject)
    yield put(jsQuestionsLoaded(responseObject));
  } catch (err) {
    yield put(QuestionsLoadingError(err));
  }
}

export function* getKannadaQuestions() {
  // Select username from store
  const requestURL = 'https://api.stackexchange.com/2.2/search/advanced?fromdate=1496448000&order=desc&sort=activity&tagged=kannada&site=stackoverflow';

  try {
    // Call our request helper (see 'utils/request')
    const kannadaQuestions = yield call(request, requestURL);
    let responseObject = { count: kannadaQuestions.items.length}
    getAnswersCount(kannadaQuestions.items, responseObject)
    yield put(kannadaQuestionsLoaded(responseObject));
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
    let responseObject = { count: cQuestions.items.length}
    getAnswersCount(cQuestions.items, responseObject)
    yield put(CQuestionsLoaded(responseObject));
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

export function* kannadaData() {
  const watcher = yield takeLatest(LOAD_KANNADA_QUESTIONS, getKannadaQuestions);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


// Bootstrap sagas
export default [
  githubData,
  cData,
  kannadaData
];
