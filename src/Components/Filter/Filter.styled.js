import styled from "styled-components";

export const FilterStyled = styled.label`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 24px;
    color: white;

    & input {
        width: 280px;
        height: 50px;
        margin: 30px auto 0 auto;

        @media (min-width:768px) and (max-width:1199px) {
            width: 500px;
        }

        @media (min-width:1200px) {
            width: 800px;
        }
    }
`;