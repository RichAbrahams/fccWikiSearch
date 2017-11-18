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
  componentWillMount() {
    this.props.loadData();
  }

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
  recipes: selectors.selectRecipes(),
  edit: selectors.selectEdit(),
  add: selectors.selectAdd(),
  delete: selectors.selectDelete(),
  recipeToEdit: selectors.selectRecipeToEdit(),
  recipeToDelete: selectors.selectRecipeToDelete(),
  expanded: selectors.selectExpanded(),
});

function mapDispatchToProps(dispatch) {
  return {
    sendAddRecipe: (payload) => dispatch(actions.sendAddRecipe(payload)),
    sendEditRecipe: (payload) => dispatch(actions.sendEditRecipe(payload)),
    sendDeleteRecipe: (payload) => dispatch(actions.sendDeleteRecipe(payload)),
    editRecipe: (payload) => dispatch(actions.editRecipe(payload)),
    deleteRecipe: (payload) => dispatch(actions.deleteRecipe(payload)),
    addRecipe: (payload) => dispatch(actions.addRecipe(payload)),
    modifyExpanded: (payload) => dispatch(actions.modifyExpanded(payload)),
    loadData: (payload) => dispatch(actions.loadData(payload)),
  };
}

Home.propTypes = {
  loadData: PropTypes.func,
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
