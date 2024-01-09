import React, { useState } from 'react';
import Myinput from './Form/MyInput';
import Mylist from './Affichage/Mylist';
import ClearAll from './Affichage/ClairAll';
import Notes from './Affichage/Note';
import ButtonAdd from './Form/Buttonadd';
import Header from './Header/Header';

// import './App.css';

const App = () => {
  const [inputs, setInputs] = useState({
    text: "",
    utilisateurs: [],
    count: 0
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const newTodo = {

      id: Math.floor(Math.random() * 10000),
      ...inputs
    };

    setInputs(prevState => ({
      //mettra à jour l'état du composant
      ...prevState,

      text: '',
      utilisateurs: [...prevState.utilisateurs, newTodo],
      count: inputs.count + 1

    }));


  }
  // console.log(notes);
  const handleDelete = (id) => {
    setInputs(prevState => ({
      ...inputs,
      utilisateurs: prevState.utilisateurs.filter(taches => taches.id !== id),
      count: inputs.count - 1
    }));

  }
  return (
    <div className="container">
      <Header />
      <form className='input-group mt-5'>
        <Myinput name="text" value={inputs.text} onChange={handleChange}></Myinput>
        <ButtonAdd className="btn btn-primary text-white fs-4" onClick={handleClick} >Add </ButtonAdd>
      </form>
      <div className="mt-3 bg-white p-3 rounded">
        <div className="d-flex justify-content-between ">
        <Notes count={inputs.count} />
          <ClearAll />
        </div>
        <hr />
        <Mylist utilisateurs={inputs.utilisateurs} handleDelete={handleDelete} />

      </div>
    </div>

  );
}

export default App;

