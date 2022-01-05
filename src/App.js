import './App.css';
//import {TweeterList} from './Components/TweeterList'
// import {Tweeter} from './Components/Twitter/Tweeter'
// import {Register} from './Components/Register'
// import SignIn from './Components/SingIn'
// import Signout from './Components/SingOut'
import { userContext } from './context/userProvider'
import React from 'react';
import Presentacion from './Components/Presentacion/Presentacion';
import YourName from './Components/ColorPresen/YourName';
import { Route, Routes } from 'react-router-dom'
import Mostrar from './Components/Mostrar'


function App() {
  const {user} = React.useContext(userContext)
  //console.log(!!user)
  return (
    <>
    <Routes>
        <Route exact path="/" element={<Presentacion/>}/>
        <Route path="present" element={<YourName/>}/>
        <Route path="viewtwitter" element={<Mostrar/>}/>
      </Routes>           
           {/* <Signout/>
           <h1>Beinvenido al Twitter DEV</h1>
           <Register />
           <Tweeter />
           <TweeterList />
           <SignIn/> */}
    </>
  );
}

export default App;


// function App() {
//   //const user = userContext(userContext)
//   return (
//     <div>
//       {user?(<>
//       <Signout/>
//       <h1>Beinvenido al Twitter DEV</h1>
//       <Register />
//       <Tweeter />
//       <TweeterList />
//       </>): <SignIn/>}
//     </div>
//   );
// }
