import styled, { css } from "styled-components";
import { IToggle } from "../../interface";
import { Container } from "../Styles.styled";


export const Wrapper = styled.nav`
    width:100%;
    max-width: 100vw;
    border-bottom: 2px solid ${({ theme }) => theme.accentColor};
    height:90px;
    box-shadow: 0px 0px 20px 0px #0000004d;
    position: relative;
`

export const HeaderContainer = styled(Container)`
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    gap:30px;
    @media (max-width:800px){
        gap:40px;
    }

    @media (max-width:550px){
        gap:10px;
        padding:10px;
    }

`