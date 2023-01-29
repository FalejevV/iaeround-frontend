import styled, { css } from "styled-components";
import { IToggle } from "../../interface";
import { SettingsForm } from "../../styles/settings.styled";
import TextField from "../TextField/TextField";
import { AuthButton } from "../../styles/auth.styled";


export const CEContainer = styled.div`
    width:100%;
    max-width:510px;
    margin:0 auto;
    padding:0px 15px;
    padding-top:40px;
    display: flex;
    flex-direction: column;
    gap:15px;
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
    display:flex;
    flex-direction: column;
    gap:15px;
    transition: all 0.3s;
    margin-bottom:0px;
    ${({ toggle }) => toggle && css`
        height:300px;
        margin-bottom:30px;
    `}
`   

export const CECodeContainer = styled.div`
    width:100%;
    display:flex;
    align-items: flex-end;
    gap:15px;
    justify-content: space-between;
`

export const CECodeButton = styled(AuthButton)`
    
`


export const CESubmit = styled(AuthButton)`
        width:100%;
`

export const CEMessage = styled.p`
    font-size: 16px;
`