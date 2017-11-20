import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import * as selectors from '../selectors';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import Container from '../styledComponents/Container';

export class Home extends Component {
  render() {
    return (
      <Container>
        <Header></Header>
        <MainContent {...this.props} />
        <Footer></Footer>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  results: selectors.selectResults(),
  error: selectors.selectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    search: (payload) => dispatch(actions.search(payload)),
  };
}

Home.propTypes = {
  loadData: PropTypes.func,
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
