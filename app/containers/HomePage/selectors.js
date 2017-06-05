/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectJsQuestions = () => createSelector(
  selectHome,
  (homeState) => homeState.get('jsQuestionsCount')
);

const makeSelectCQuestions = () => createSelector(
  selectHome,
  (homeState) => homeState.get('cQuestionsCount')
);

const makeSelectRubyQuestions = () => createSelector(
  selectHome,
  (homeState) => homeState.get('rubyQuestionsCount')
);

const makeSelectError = () => createSelector(
  selectHome,
  (homeState) => homeState.get('error')
);

export {
  selectHome,
  makeSelectCQuestions,
  makeSelectJsQuestions,
  makeSelectRubyQuestions,
  makeSelectError
};
