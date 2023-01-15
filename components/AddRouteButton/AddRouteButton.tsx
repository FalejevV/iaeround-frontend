import { AddRouteLink, AddRouteSVG, AddRouteText } from "./AddRouteButton.styled";


function AddRouteButton(){
    return(
        <AddRouteLink href="/new-route">
            <AddRouteSVG viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/>
            </AddRouteSVG>
            <AddRouteText>New Route</AddRouteText>
        </AddRouteLink>
    )
}

export default AddRouteButton;