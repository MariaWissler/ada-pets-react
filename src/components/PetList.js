import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


const PetList = (props) => {

   let petList = props.mascotas.map((item,index)=>{
    return (<PetCard id={item.id}
       name={item.name}
       species={item.species} 
       about={item.about} 
       location={item.location} 
       key={index}
       selectPetCallback={props.selectPetCallback} 
       deletePetCallback={props.deletePetCallback}/>
    )
  });
  
  return (
    <div className="card-group">
       {petList} 
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;
