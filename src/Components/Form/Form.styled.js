import styled from "styled-components";

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #38598b;

    & label, input {
        display: block;
        text-align: center;
        margin: 20px 0;
    }

    & button {
            display: block;
            cursor: pointer;
            padding: 10px 20px;
            border-radius: 40px;
            border: none;
            background-color: #42b883; 
            color: white;
            margin: 20px 0 40px 0;

            &:hover {
                background-color: #347474; 
            }
        }

    & input {
        max-width: 90%;
        margin: 0 auto;
        height: 50px;
        border-radius: 10px;
        border: none;
        color: white;
        font-size: 20px;
        background-color: #a2a8d3;

        @media (min-width: 768px) and (max-width: 1199px) {
            width: 600px
        }

        @media (min-width:1200px) {
            width: 800px
        }
    } 
`;