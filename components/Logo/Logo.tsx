import { LogoLink, LogoPicture } from "./Logo.styled";
import fullSizeLogo from "../../public/img/Logo.svg"
import smallSizeLogo from "../../public/img/LogoSmall.svg"
import { MouseEvent } from "react";

function Logo(props:{
    toggle?:boolean,
}){

    function refreshIfSamePage(e:MouseEvent){
        if(window.location.pathname === "/"){
            e.preventDefault();
            window.location.reload();
        }
    }

    return(
        <LogoLink toggle={props.toggle} href="/" onClick={(e) => refreshIfSamePage(e)}>
            <LogoPicture>
                <source media="(min-width: 900px)" srcSet={fullSizeLogo.src} />
                <img src={smallSizeLogo.src} alt="Logo"></img>
            </LogoPicture>
        </LogoLink>
    )
}

export default Logo;