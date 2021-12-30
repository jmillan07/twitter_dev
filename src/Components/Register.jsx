import { useInput } from '../Services/hooks/useInput'

export function Register(){
    
    const [email, handleEmail] = useInput("")
    const [password, handlePassword] = useInput("")
    const [userState, setUserstate] = useInput(null)

    //console.log(email)
    //console.log(password)

    const logIn = async ()=>{
        //const user = await singIn(email,password)
        //setUserstate(user)
    }
    
    const crearUsuario = async()=>{
       // console.log("pase")
    //const user = await createUser(email, password)
    //console.log(user)
    //setUserstate(user)
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