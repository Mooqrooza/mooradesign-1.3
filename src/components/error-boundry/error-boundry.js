import React, {Component} from 'react';
import ErrorLogoHurt from '../error-logo-hurt'
import { connect } from 'react-redux';
/* Import modules for Redux */
class ErrorBoundry extends Component {
  render() {
    const {projsLoadingErr} = this.props;
    if (projsLoadingErr) return <ErrorLogoHurt />;
    return this.props.children;
  }
};

/* Redux store and dispatch to props */
const mapStateToProps = ({ main: {projsLoadingErr} }) => {
  return { projsLoadingErr }
};

/* Export ErrorBoundry with connect-redux */
export default connect(mapStateToProps)(ErrorBoundry);
