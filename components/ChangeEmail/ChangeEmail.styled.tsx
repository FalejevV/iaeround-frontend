import styled, { css } from "styled-components";
import { AuthContainer } from "../../styles/auth.styled";
import { IToggle } from "../../interface";


export const CEContainer = styled(AuthContainer)`
    width:100%;
    padding:0px;
`
    
export const CETitleButtonContainer = styled.div`
    display:flex;
    width:100%;
    gap:15px;
`

export const EmailTitle = styled.p`
    font-size: 16px;
`

export const ChangeEmailText = styled.p`
    font-size: 16px;
    color:${({ theme }) => theme.accentColor || "black"};
    cursor: pointer;
`

export const CEForm = styled.form<IToggle>`
    width:100%;
    height:0px;
    overflow:hidden;
    transition: all 0.3s;
    margin-bottom:0px;
    background-color: #c4ffba;
    ${({ toggle }) => toggle && css`
        height:100px;
        margin-bottom:30px;
    `}
    
`   