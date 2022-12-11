import { LogoLink, LogoPicture } from "./Logo.styled";
import fullSizeLogo from "../../public/img/Logo.svg"
import smallSizeLogo from "../../public/img/LogoSmall.svg"

function Logo(){
    return(
        <LogoLink href="/">
            <LogoPicture>
                <source media="(min-width: 900px)" srcSet={fullSizeLogo.src} />
                <img src={smallSizeLogo.src} alt="Logo"></img>
            </LogoPicture>
        </LogoLink>
    )
}

export default Logo;