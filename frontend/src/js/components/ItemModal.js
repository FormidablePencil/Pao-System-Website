import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addItem } from '../../actions/itemAction';
class ItemModal extends Component {
  state = {
    modal:false,
    number: '',
    person: '',
    action: '',
    object: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      number: this.state.number,
      person: this.state.person,
      action: this.state.action,
      object: this.state.object
    }
    //~ this takes the this.state.name and passes it to the function we've imported addItem. There from there it shoves it into a post request and the backend decides what to do with it.
    this.props.addItem(newItem);


    this.toggle();
  }
  
  render() {
    return (
      <div className="relative">
       <button className="bg-red-700" onClick={this.toggle}>
          Show modal
        </button> 
        <div className={this.state.modal ? "" : "hidden"}>
          <div className="w-screen h-screen bg-black-transparent2 absolute inset-0"></div>
          <div className="h-64 w-64 bg-white p-4 absolute right-0 left-0 text-gray-900">
            <div className="bg-red-500 w-6 h-6 rounded-full text-center text-white" onClick={this.toggle}>&times;</div>
            <span>test123 appear and disappear.</span>
            <input className="text-gray-900 border bg-gray-200" type="text" name="person" placeholder="add some goody" onChange={this.onChange} />
            <button className="bg-green-600 px-3" onClick={this.onSubmit}>Submit</button>
          </div>
        </div>        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal);