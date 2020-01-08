import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import PropTypes from 'prop-types';

export class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  }
  
  render() {
    return (
      <div>
        <div className="bg-gray-700 w-24 rounded" onClick={this.props.logout}>Logout</div>
      </div>
    )
  }
}

export default connect(null, { logout })(Logout);