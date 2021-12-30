import { useState } from "react";

export const useInput = () =>{ 
    const [input, setInput] = useState("")

    const handleChange = e => setInput(e.target.value)
    const clearInput = () => {
        setInput("")
     }

    return [input, handleChange, clearInput]

}

// const useInput = (initialvaluer = “”) => {
//     const [input, setInput] = useState(initialvaluer);
//     const handleChange = (e) => {
//       setInput(e.target.value);
//     };
//     const clearInput = () => {
//       setInput (initialvaluer)
//     }
//     return [input, handleChange, clearInput];
//    };
//   export default useInput;