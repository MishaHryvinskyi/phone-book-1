import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    padding: 0 20px;
    max-width: 480px;
    background-color: #38598b; 
    
    @media (min-width:768px) and (max-width:1199px) {
        max-width: 768px;
    }

    @media (min-width:1200px) {
        max-width: 1200px;
    }
`;

export const QuantityText = styled.p`
    text-align: center;
    font-size: 24px;
    font-weight: 800;
    color: wheat;
`;