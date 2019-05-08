import React from 'react';
import PropTypes from 'prop-types';
import RouterComponent from '../router';

const LayoutsContainer = props => <RouterComponent history={props.history} />;
LayoutsContainer.propTypes = {
  history: PropTypes.shape({}),
};
export default LayoutsContainer;
