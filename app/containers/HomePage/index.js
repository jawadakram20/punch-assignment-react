import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { loadJsQuestions, loadCQuestions, loadRubyQuestions } from './actions';
import { makeSelectError, makeSelectJsQuestions, makeSelectCQuestions, makeSelectRubyQuestions } from './selectors';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentWillMount() {
    this.props.loadJsQuestionsCount()
    this.props.loadRubyQuestionsCount()
    this.props.loadCQuestionsCount()
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };
    console.log(this.props)

    return (
      <div>
      asdadas
      </div>
    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    loadJsQuestionsCount: () => dispatch(loadJsQuestions()),
    loadRubyQuestionsCount: () => dispatch(loadRubyQuestions()),
    loadCQuestionsCount: () => dispatch(loadCQuestions())
  };
}

const mapStateToProps = createStructuredSelector({
  jsQuestionsCount: makeSelectJsQuestions(),
  rubyQuestionsCount: makeSelectRubyQuestions(),
  cQuestionsCount: makeSelectCQuestions(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
