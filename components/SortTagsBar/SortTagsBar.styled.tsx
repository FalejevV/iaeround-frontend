import styled from "styled-components";
import { Wrapper } from "../Header/Header.styled";
import { Container } from "../Styles.styled";

export const STWrapper = styled.div`
    width:100%;
    max-width:100vw;
    height:fit-content;
    min-height: 50px;
    box-shadow: unset;
    background-color: white;
    border-bottom: 2px solid ${({ theme }) => theme.accentColor};
    box-shadow: 0px 5px 5px 0px #00000027;
    position: relative;
    margin-top: -1px;
`

export const STContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap:50px;
    width:100%;
    height:100%;
    padding-top:0px;
    padding-bottom:0px;

    @media(max-width:880px){
        flex-direction: column;
        gap:5px;
    }
`
