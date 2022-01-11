import { useInput } from '../Services/hooks/useInput'

export function Register(){
    
    const [email, handleEmail] = useInput("")
    const [password, handlePassword] = useInput("")

    const logIn = async ()=>{
        
    }
    
    const crearUsuario = async()=>{
    
    }

    return(
        <div>
            <button onClick={()=>{}}>Si</button>
            <input type="text" placeholder="escriba su email" value={email} onChange={handleEmail}></input>
            <input type="password" placeholder="escriba su email" value={password} onChange={handlePassword}></input>
            <button onClick={()=>logIn()}>logIn</button>
            <button onClick={()=>crearUsuario()}>CrearUsuario</button>
        </div>
    )

}