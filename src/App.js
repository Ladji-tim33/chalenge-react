import React, { useState, useEffect } from 'react';
import Myinput from './Form/MyInput';
import Mylist from './Affichage/Mylist';
import ClearAll from './Affichage/ClairAll';
import Notes from './Affichage/Note';
import ButtonAdd from './Form/Buttonadd';
// import Header from './Header/Header';
import Header from "./Header/Header";


// import './App.css';

const App = () => {
  const [inputs, setInputs] = useState({
    text: "",
    utilisateurs: [],
    modifUtilisateurs: false,
    count: 0,

  });

  // const [list, setList] = useState(() => {
  //   // Initialisez avec les données du localStorage ou un tableau vide par défaut
  //   const localStorageUsers = localStorage.getItem('list');
  //   return localStorageUsers ? JSON.parse(localStorageUsers) : [];
  // });
  useEffect(() => {
    document.title = 'Note Hack';
    const bg = document.querySelector('.App');
    bg.classList.add(localStorage.getItem('background'));
  }, []);

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (inputs.text.trim() === "") {
      alert("veuillez entrez une tache");

    } else {
      const { modifUtilisateurs, utilisateurs, ...userUtilisateurs } = inputs;
      if (modifUtilisateurs !== false) {
        const utilisateurModifier = utilisateurs.map((utilisateur) =>
          utilisateur.id === modifUtilisateurs
            ? {
              id: modifUtilisateurs,
              ...userUtilisateurs,
              dateTime: new Date().toLocaleString()
            }
            : utilisateur
        );
        setInputs({
          ...inputs,
          utilisateurs: utilisateurModifier,
          modifUtilisateurs: false,
          text: "",

        })
      } else {
        const newTodo = {

          id: Math.floor(Math.random() * 10000),
          ...inputs,
          dateTime: new Date().toLocaleString()
        };

        setInputs(prevState => ({
          //mettra à jour l'état du composant
          ...prevState,

          text: '',
          utilisateurs: [...prevState.utilisateurs, newTodo],
          count: inputs.count + 1

        }));
      }
    }

  }
  // console.log(notes);
  const handleDelete = (id) => {
    setInputs(prevState => ({
      ...inputs,
      utilisateurs: prevState.utilisateurs.filter(taches => taches.id !== id),
      count: inputs.count - 1
    }));

  }

  const handleEdite = (id) => {
    const modifiaction = inputs.utilisateurs.find(
      (utilisateur) => utilisateur.id === id);
    // console.log(this.state.utilisateurs);
    setInputs({
      ...inputs,
      modifUtilisateurs: id,
      text: modifiaction.text,
    });
  }

  const changebg = (color) => {
    localStorage.setItem('background', color);
    const bg = document.querySelector('.App');
    let classesActuelles = bg.classList;
    if (classesActuelles.length > 2) {
      let derniereClasse = classesActuelles[classesActuelles.length - 1];
      bg.classList.remove(derniereClasse);
    }
    bg.classList.add(localStorage.getItem('background'));
  }

  const deleteAll = () => {
    setInputs({
      utilisateurs: [],
      count: 0,
    });
  };

  return (
    <div className=" App pt-5">
      <div className="container ">
        <Header changebg={changebg} />
        <form className='input-group mt-5'>
          <Myinput name="text" value={inputs.text} onChange={handleChange}></Myinput>
          <ButtonAdd children={
            inputs.modifUtilisateurs === false ? "Add" : "Update"
          }
            className={"btn btn-success text-white fs-4 me-1"}
            onClick={handleClick}  >
          </ButtonAdd>
        </form>
        <div className="mt-3 bg-white p-3 rounded">
          <div className="d-flex justify-content-between ">
            <Notes count={inputs.count} />
            <ClearAll deleteAll={deleteAll} />
          </div>
          <hr />
          <Mylist utilisateurs={inputs.utilisateurs} handleDelete={handleDelete} handleEdite={handleEdite} />

        </div>
      </div>
    </div>

  );
}

export default App;

