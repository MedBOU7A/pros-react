import React from 'react';
import Profile from './profile/Profile';
import './App.css';
import img from './profile/2.jpg';

function App() {
  const input ={
    FullName:"Mohamed Amine Bouhari",
    Bio:"Born in 26/10/1992",
    Profession:"Web developper"
  }
  const HandelName = () => {
    alert(`This is my name :${input.FullName}`)
  }
 return (
    <div className="App">
      <Profile data ={input}  message ={HandelName } >
        <img scr ={img} alt = 'image' />
      </Profile>
    </div>
  );
}

export default App;
