import { LogoImage, LogoLink, LogoPicture } from "./Logo.styled";
import fullSizeLogo from "../../public/img/Logo.svg"
import smallSizeLogo from "../../public/img/LogoSmall.svg"
import { MouseEvent } from "react";

function Logo(){

    function refreshIfSamePage(e:MouseEvent){
        if(window.location.pathname === "/"){
            e.preventDefault();
            window.location.reload();
        }
    }

    return(
        <LogoLink href="/" onClick={(e) => refreshIfSamePage(e)}>
            <LogoPicture>
                <source media="(min-width: 900px)" srcSet={fullSizeLogo.src} />
                <LogoImage width="190" height="90" src={smallSizeLogo.src} alt="Logo"/>
            </LogoPicture>
        </LogoLink>
    )
}

export default Logo;