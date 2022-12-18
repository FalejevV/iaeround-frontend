import styled from "styled-components";
import { Container } from "../Styles.styled";

export const GridWrapper = styled(Container)`
    padding:0px;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom:400px;
`

export const GridContainer = styled(Container)`
    height:100%;
    width:100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:10px;
    justify-items:space-between;
    justify-content:space-between;
    align-items: space-between;
    align-content:space-between;


    @media(max-width:1180px){
        grid-template-columns: 1fr 1fr;
    }

    @media(max-width:880px){
        grid-template-columns: 1fr;
        justify-items: center;
    }
`

export const LoadMoreButton = styled.button`
    font-size: 18px;
    border: 0px;
    padding: 10px 40px;
    border-radius: 5px;
    color:white;
    background-color: ${({ theme }) => theme.accentColor};

    transition: all 0.3s;
    cursor: pointer;
    &:hover{
        filter: brightness(1.3);
    }
`