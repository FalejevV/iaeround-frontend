import styled from "styled-components";
import { Container } from "../components/Styles.styled";


export const NRContainer = styled(Container)`
    max-width: 650px;
    padding-top:100px;
    display: flex;
    flex-direction: column;
    gap:15px;
    padding-bottom: 200px;
    @media(max-width:600px){
        padding-top:40px;
    }
`

export const NRForm = styled.form`
    width:100%;
    display: flex;
    flex-direction: column;
    gap:15px;
`

export const TopInputContainer = styled.div`
    width:100%;
    display: flex;
    gap:30px;
    flex-direction: column;
    padding-bottom: 20px;
`

export const TextFieldsContainer = styled.div`
    width:100%;
    display: flex;
    gap:15px;
    flex-direction: column;
`

export const FileFieldsContainer = styled.div`
    display: flex;
    gap:15px;
    justify-content: space-between;
    align-items: center;

    @media(max-width:600px){
        flex-direction: column;
        width:100%;
        justify-content: center;
        align-items: center;
        padding-bottom: 40px;
        gap:40px;
    }
`

export const TagsWrapper = styled.div`
    display: flex;
    gap:15px;
    flex-direction: column;
`

export const NRAlert = styled.p`
    width:100%;
    text-align: center;
    color: #8c0000;
    font-size: 18px;
`

export const RulesCheckboxContainer = styled.div`
    display: flex;
    width:100%;
    align-items: center;
    justify-content: flex-start;
    cursor:pointer;
`

export const RulesButton = styled.button`
    background-color: transparent;
    padding:0px 10px;
    font-weight: 600;
    font-size:18px;
    color:${({ theme }) => theme.accentColor || "black"};
    cursor:pointer;
    transition: all 0.3s;
    text-decoration: underline;
    &:hover{
        transform: scale(1.1);
    }
`

export const RulesContainer = styled.div`
    position:absolute;
`