import './App.css';
import {TweeterList} from './Components/TweeterList'
import {Tweeter} from './Components/Tweeter'
import {Register} from './Components/Register'
import SignIn from './Components/SingIn'
import Signout from './Components/SingOut'
import { userContext } from './context/userProvider'
import React from 'react';


function App() {
  const {user} = React.useContext(userContext)
  console.log(!!user)
  return (
    <div>
           {user?(<>
           <Signout/>
           <h1>Beinvenido al Twitter DEV</h1>
           <Register />
           <Tweeter />
           <TweeterList />
           </>): <SignIn/>}
         </div>
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

