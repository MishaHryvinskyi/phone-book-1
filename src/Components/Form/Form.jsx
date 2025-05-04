import { FormStyled } from "./Form.styled";

import { useState } from "react"

const Form = ({ handleSubmit }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

const handleChange = e => {
    const { name, value } = e.target;
    switch(name) {
        case "name":
            setName(value);
            break;
        case "number":
            setNumber(value);
            break;
        default:
            return;
    }
}

const formHandleSubmit = e => {
    e.preventDefault();

    handleSubmit({ name, number });
    setName('');
    setNumber('');
}

    return(
        <FormStyled onSubmit={formHandleSubmit}>
            <label>Введіть імя
                <input 
                    type="text" 
                    name="name" 
                    value={name}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>Введіть телефон
                <input 
                    type="tel" 
                    name="number" 
                    value={number}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit">
                створити контакт
            </button>
        </FormStyled>
    )
}

export default Form;