import styled, { css } from "styled-components";
import { Container } from "../components/Styles.styled";
import { IToggle } from "../interface";


export const SettingsLoginAlert = styled.p`
    color:#830101;
    font-size: 25px;
    padding-top:60px;
    width:100%;
    text-align: center;
`

export const SettingsForm = styled.form`
    margin: 0 auto;
    max-width: 510px;
    width:100%;
    display: flex;
    flex-direction: column;
    gap:15px;
    padding:15px;
    padding-top:50px;
`


export const AvatarFileField = styled.div`
    display: flex;
    max-width: 400px;
    align-items: center;
    justify-content: center;
`

export const AvatarFFPreview = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
`

export const AvatarFFLabel = styled.label`
    width:100%;
    height:fit-content;
    display:flex;
    justify-content: center;
    cursor: pointer;
    gap:40px;
`

export const AvatarFFInput = styled.input`
    display: none;
    width:0px;
`

export const AvatarFFTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
    justify-content: center;
`

export const AvatarFFTopText = styled.p`
    
`

export const AvatarFFBotText = styled.p<IToggle>`
    color:#626262;
    font-size: 14px;

    transition: all 0.3s;
    ${({ toggle }) => toggle && css`
        color:#790300;
        font-size: 18px;
    `}
`

export const SettingsChangeSuccessText = styled.p`
    font-size: 16px;
    color:${({ theme }) => theme.accentColor};
    text-align: center;
`