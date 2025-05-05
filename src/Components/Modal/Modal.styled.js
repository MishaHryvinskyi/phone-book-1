import styled from "styled-components";

export const BackDrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(32, 35, 33, 0.60);

    & div {
        padding: 50px;
        background-color: wheat;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 20px;
    }

    & button {
        cursor: pointer;
        display: block;
        margin-top: 40px;
        padding: 10px 20px;
        border: none;
        border-radius: 10px;
        font-weight: 800;
    
        &:hover {
            background-color: red;
            color: white;
        }
    }
`;