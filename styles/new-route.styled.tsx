import styled from "styled-components";
import { Container } from "../components/Styles.styled";


export const NRContainer = styled(Container)`
    max-width: 650px;
    padding-top:100px;
    display: flex;
    flex-direction: column;
    gap:15px;
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
    gap:70px;
`

export const TopLeftContainer = styled.div`
    width:100%;
    display: flex;
    gap:15px;
    flex-direction: column;
`

export const TopRightContainer = styled.div`
    display: flex;
    gap:15px;
    flex-direction: column;
    align-items: flex-end;
`

export const TagsWrapper = styled.div`
    display: flex;
    gap:15px;
    flex-direction: column;
`