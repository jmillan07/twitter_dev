//import logo from 'Utilites/logo.svg'
//import { ReactComponent as BigLogo } from '../Utilites/logo.svg';
import { ReactComponent as BigLogo } from '../../Utilites/logo.svg'
import SignIn from '../SingIn';
import './Presen.css';

export default function Presentacion (){
    return (
        <div className='contedenorPre'>
            <div className="logo">
                <BigLogo />
            </div>
            <div className='sigIn'>
                <h1>LOREN IPSUN DOLOR</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <SignIn/>
            </div>
        </div>
    )
}