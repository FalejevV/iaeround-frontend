import styled from "styled-components";
import { Container, SignInButton } from "../components/Styles.styled";

export const RSContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 601px;
`

export const LoginErrorText = styled.p`
    color: #cb0101;
    font-size: 25px;
    padding-top:40px;
`

export const DistanceTimeContainer = styled.div`
    width:100%;
    max-width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: space-between;
    gap:30px;
`

export const RouteEditForm = styled.form`
    width:100%;
    padding-top:40px;
    display: flex;
    flex-direction: column;
    gap:20px;
`

export const TitleTagsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap:5px;

`

export const RemoveRouteButton = styled(SignInButton)`
    @media(max-width:600px){
       width:100%;
    }   
    text-align: center;
    background: rgb(255,88,88);
    background: linear-gradient(45deg, rgba(255,88,88,1) 0%, rgba(125,12,12,1) 100%); 
`

export const SaveRouteButton = styled(SignInButton)`
    width:100%;
    text-align: center;
`

export const RSButtonsContainer = styled.div`
    padding-top:40px;
    display: flex;
    width:100%;
    align-items: center;
    justify-content: space-between;
    gap:20px;

    @media(max-width:600px){
        flex-direction: column;
    }
`