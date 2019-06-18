import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import pets from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
    };
  }

  onSelectPet = (petId)=>{
    var selectedPet = this.state.petList.find((pet)=>{
      return pet.id===petId
    });
    if(selectedPet){
      this.setState({
        currentPet:selectedPet
      });
    }
  }

  onDeletePet = (petId)=>{
    var deletedPet = this.state.petList.splice((petId-1),1);
     if(deletedPet){
      this.setState({
        petList:this.state.petList
      });
     }
  }

  onNewPet = (pet)=>{
    var id = this.state.petList.length+1;
    pet.id=id;
    var newPetList = this.state.petList;
    newPetList.push(pet);
    this.setState({
      PetList:newPetList
    });
  }


  render() {
    const { currentPet } = this.state;
    const detail =currentPet?<PetDetails currentPet={currentPet} />:"";
    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */ }
          <SearchBar />
        </section>
          {detail}
        <section className="pet-list-wrapper">
          { <PetList mascotas={this.state.petList}
          selectPetCallback={this.onSelectPet}
          deletePetCallback={this.onDeletePet} /> }
        </section>
        <section className="new-pet-form-wrapper">
          { <NewPetForm newPetForm={this.onNewPet}/> }
        </section>
      </main>
    );
  }
}

export default App;
