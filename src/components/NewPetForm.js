import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name:"",
      species:"",
      location:"",
      image:"",
      about:""
    };
  }

  onValueChanged=(event)=>{
    const field = event.target.name;
    const value = event.target.value;

    const updateState = this.state;
    updateState[field]=value;
    this.setState({updateState});
  }

  onSubmitForm=(event)=>{
    event.preventDefault();
    //Validacion de que son requeridos
    this.props.newPetForm(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmitForm} className="new-pet-form">
        <h3>Add a Pet</h3>
        <div>Name<input name="name" type="text" onChange={this.onValueChanged} value={this.state.name} /></div>
        <div>Species<input name="species" type="text"onChange={this.onValueChanged} value={this.state.species}/></div>
        <div>Location<input name="location" type="text" onChange={this.onValueChanged} value={this.state.location} /></div>
        <div>Image<input name="image" type="text"  onChange={this.onValueChanged} value={this.state.image}/></div>
        <div>About<textarea name="about" onChange={this.onValueChanged} value={this.state.about} /></div>
        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }
}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;