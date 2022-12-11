import styled from "styled-components";
import { Container } from "../Styles.styled";


export const Wrapper = styled.div`
    width:100%;
    max-width: 100vw;
    border-bottom: 2px solid ${({ theme }) => theme.accentColor};
    height:90px;
    box-shadow: 0px 0px 20px 0px #0000004d;
`

export const HeaderContainer = styled(Container)`
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    gap:80px;
`