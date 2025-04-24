import { useEffect } from "react";
import { useForm } from "../hooks/UseForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {

  const { formState, onInputChange, onResetForm } = useForm({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formState;

  useEffect(() => {
    console.log('useEffect callback');
  }, []);// solo se montará una vez
  
  useEffect(() => {
    console.log('formState change');
  }, [formState]);// se volverá a montar cuando cambie formState

  useEffect(() => {
    console.log('email change');
  }, [email]);// se volverá a montar cuando cambie email

  return (
    <>
        <h1>FormWithCustomHook</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
        />

        <input 
            type="email" 
            name="email" 
            className="form-control mt-2"
            placeholder="Email"
            value={email}
            onChange={onInputChange}
        />

        <input 
            type="password"
            name="password"
            className="form-control mt-2"
            value={password}
            onChange={onInputChange}
        />

        <button 
            className="btn btn-primary mt-2"
            onClick={onResetForm}
        >
            Reset
        </button>
        {
          username === 'strider2' && <Message />
        }
    </>
  )
}
