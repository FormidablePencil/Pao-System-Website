import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class RegisterModal extends Component {
  state = {
    modal:false,
    name: '',
    email: '',
    password: '',
    msg: null
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
    
  }

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;    //* we have access to error from this.props cause we brough it in to this component via mapStateToProps
    if(error !== prevProps.error) {
      if(error.id === 'REGISTER_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    if(this.state.modal) {
      if(isAuthenticated) {
        this.toggle();
      }
    }
  }
  
  toggle = () => {
    this.props.clearErrors(); //* clears errors everytime toggle is fires     
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();

    const { username, email, password } = this.state;
    
    const newUser = {
      username, email, password
    };

    //attempt to register
    this.props.register(newUser);

  }
  
  render() {
    return (
      <div className="relative">
       <button className="bg-green-600 py-2 px-5 rounded-lg text-white" onClick={this.toggle}>
          Show register modal
        </button> 
        <div className={this.state.modal ? "" : "hidden"}>
          <div className="w-screen h-screen bg-black-transparent2 absolute inset-0"></div>
          <div className="h-64 w-64 bg-white p-4 absolute right-0 left-0 text-gray-900">
            <div className="bg-red-500 w-6 h-6 rounded-full text-center text-white" onClick={this.toggle}>&times;</div>
          { this.state.msg ? <div className="bg-red-400">{ this.state.msg }</div> : null }
            <span>Register:</span>
            <input className="text-gray-900 border bg-gray-200" type="text" name="username" placeholder="set username" onChange={this.onChange} />
            <input className="text-gray-900 border bg-gray-200" type="email" name="email" placeholder="set email" onChange={this.onChange} />
            <input className="text-gray-900 border bg-gray-200" type="password" name="password" placeholder="set password" onChange={this.onChange} />
            <button className="bg-green-600 px-3" onClick={this.onSubmit}>Register</button>
          </div>
        </div>        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error //~ where we are getting these things are from reducer/index
});

export default connect(mapStateToProps, { register, clearErrors })(RegisterModal);