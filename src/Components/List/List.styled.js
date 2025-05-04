import styled from "styled-components";

export const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 380px;
    padding: 50px;
    background-color: #38598b; 
    margin: 20px auto;

    @media (min-width:768px) and (max-width: 1199px) {
        max-width: 668px;
    }
    @media (min-width: 1200px) {
        max-width: 1100px;
    }
`;

export const Item = styled.li`
    list-style: none;
    font-size: 24px;
    color:white; 
    font-weight: 800;
    background-color: #a2a8d3; 
    padding: 20px;
    width: 280px;
    border-radius: 10px;

    @media (min-width:768px) and (max-width: 1199px) {
        width: 500px;
    }
    @media (min-width: 1200px) {
        width: 800px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    margin-bottom: 20px;

    & span {
        font-weight: 900;
        color: #113f67;
    }

    & button {
        cursor: pointer;
        padding: 10px 20px;
        border-radius: 40px;
        border: none;
        background-color: #f95959; 
        color: #e7eaf6; 

        &:hover {
            background-color: #e7eaf6;
            color: #f95959;
        }
    }
`;