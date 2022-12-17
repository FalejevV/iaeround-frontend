import styled from "styled-components";
import { Wrapper } from "../Header/Header.styled";
import { Container } from "../Styles.styled";

export const STWrapper = styled(Wrapper)`
    height:fit-content;
    min-height: 50px;
    box-shadow: unset;
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

    @media(max-width:850px){
        flex-direction: column;
        gap:5px;
        padding-bottom:15px;
    }
`
