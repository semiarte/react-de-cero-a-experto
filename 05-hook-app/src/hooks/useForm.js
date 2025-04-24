import { useState } from 'react';


export const useForm = ( initialForm = {} ) => {
    const [formState, setFormState] = useState(initialForm);

    // const onInputChange = (event) => {
       // console.log(event.target.value);
       // console.log(event.target.name);
    // }

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name] : value // propiedad computada del objeto
        })
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }

    return {
        formState,
        onInputChange,
        onResetForm,
    }
}
