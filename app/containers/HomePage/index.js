import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Table } from 'react-bootstrap';

import { loadJsQuestions, loadCQuestions, loadKannadaQuestions } from './actions';
import { makeSelectError, makeSelectJsQuestions, makeSelectCQuestions, makeSelectKannadaQuestions } from './selectors';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentWillMount() {
    this.props.loadJsQuestions()
    this.props.loadKannadaQuestions()
    this.props.loadCQuestions()
  }

  render() {
    const { loading, error, repos, cQuestions, jsQuestions, kannadaQuestions } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Tag</th>
              <th>Questions Posted</th>
              <th>Questions Answered</th>
              <th>Answers Accepted</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>javascript</td>
              <td>{jsQuestions.count}</td>
              <td>{jsQuestions.answeredQuestions}</td>
              <td>{jsQuestions.acceptedAnswers}</td>
            </tr>
            <tr>
              <td>C++</td>
              <td>{cQuestions.count}</td>
              <td>{cQuestions.answeredQuestions}</td>
              <td>{cQuestions.acceptedAnswers}</td>
            </tr>
            <tr>
              <td>kannada</td>
              <td>{kannadaQuestions.count}</td>
              <td>{kannadaQuestions.answeredQuestions}</td>
              <td>{kannadaQuestions.acceptedAnswers}</td>
            </tr>
          </tbody>
        </Table>    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    loadJsQuestions: () => dispatch(loadJsQuestions()),
    loadKannadaQuestions: () => dispatch(loadKannadaQuestions()),
    loadCQuestions: () => dispatch(loadCQuestions())
  };
}

const mapStateToProps = createStructuredSelector({
  jsQuestions: makeSelectJsQuestions(),
  kannadaQuestions: makeSelectKannadaQuestions(),
  cQuestions: makeSelectCQuestions(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
