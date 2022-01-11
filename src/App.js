import './App.css';
import { userContext } from './context/userProvider'
import React from 'react';
import Presentacion from './Components/Presentacion/Presentacion';
import YourName from './Components/ColorPresen/YourName';
import { Route, Routes } from 'react-router-dom'
import Mostrar from './Components/Mostrar'


function App() {
  // const {user} = React.useContext(userContext)
  
  return (
    <>
    <Routes>
        <Route exact path="/" element={<Presentacion/>}/>
        <Route path="present" element={<YourName/>}/>
        <Route path="viewtwitter" element={<Mostrar/>}/>
        <Route path="*" element={<Presentacion />} />
      </Routes>           
    </>
  );
}

export default App;
