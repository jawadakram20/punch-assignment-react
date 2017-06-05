/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectJsQuestions = () => createSelector(
  selectHome,
  (homeState) => homeState.get('jsQuestions')
);

const makeSelectCQuestions = () => createSelector(
  selectHome,
  (homeState) => homeState.get('cQuestions')
);

const makeSelectKannadaQuestions = () => createSelector(
  selectHome,
  (homeState) => homeState.get('kannadaQuestions')
);

const makeSelectError = () => createSelector(
  selectHome,
  (homeState) => homeState.get('error')
);

export {
  selectHome,
  makeSelectCQuestions,
  makeSelectJsQuestions,
  makeSelectKannadaQuestions,
  makeSelectError
};
