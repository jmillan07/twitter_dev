//import logo from 'Utilites/logo.svg'
import { ReactComponent as BigLogo } from '../Utilites/logo.svg';
import { Link } from 'react-router-dom'
export default function YourName (){
    return (
        <div>
            <input type='text' placeholder='Type your Name'></input>
            <BigLogo/>
            <h1>Welcome Name</h1>
            <p>Select your favorite color</p>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <button>Continue</button>
        </div>
    )
}