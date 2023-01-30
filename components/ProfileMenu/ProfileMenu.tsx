import { useEffect, useState } from "react";
import { BackgroundDarkener, DropdownArrowSVG, ProfileDropdownUsername, ProfileMenuAvatar, ProfileMenuContainer, ProfileMenuDropdown, ProfileMenuLink, ProfileMenuUsername } from "./ProfileMenu.styled";
import { IProfile } from "../../interface";
import Fetching, { cloudAvatarLink } from "../../Fetching";
import Cookies from "js-cookie";
import AddRouteButton from "../AddRouteButton/AddRouteButton";

function ProfileMenu(props:{
    profile:IProfile
}){

    const [dropdownVisible, setDropdownVisible] = useState(false);

    function toggleDropdown(){
        setDropdownVisible(prevDropdownVisible => !prevDropdownVisible);
    }

    function hideDropdown(){
        setDropdownVisible(false);
    }

    //Click event listener to auto close menu dropdown, if clicked enywhere else.
    useEffect(() => {
        document.addEventListener("click", (e) => {
            if(e.target){
                let parent = (e.target as Element).parentNode as Element
                if(parent && parent.className){
                    try{
                        if(!parent.className.includes("profilemenu") && dropdownVisible){
                            setDropdownVisible(false);
                        }
                    }catch{

                    }
                }else{
                    setDropdownVisible(false);
                }
            }
        });

        return () => {
            document.removeEventListener("click", (e) => {
                if(e.target){
                    let parent = (e.target as Element).parentNode as Element
                    if(parent && parent.className){
                        try{
                            if(!parent.className.includes("profilemenu") && dropdownVisible){
                                setDropdownVisible(false);
                            }
                        }catch{
    
                        }
                    }else{
                        setDropdownVisible(false);
                    }
                }
            });
        }
    }, [])
    
    function signOut(){
        Cookies.set("IAEAuth", "");
        Fetching.logout().then(res => {
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        });
    }  
    return(
        <>  
            <BackgroundDarkener onClick={hideDropdown} toggle={dropdownVisible}></BackgroundDarkener>
            <ProfileMenuContainer onClick={toggleDropdown} className="profilemenu">
                <ProfileMenuUsername>
                    {props.profile.name}
                    <DropdownArrowSVG viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"/><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"/>
                    </DropdownArrowSVG>
                </ProfileMenuUsername>
                <ProfileMenuAvatar alt="avatar" width="70" height="70" src={props.profile.avatar.trim() !== "" && props.profile.avatar ? cloudAvatarLink + `/${props.profile.id}/${props.profile.avatar}` : "/img/profile.svg"} />
                <ProfileMenuDropdown toggle={dropdownVisible}>
                    <ProfileDropdownUsername href={"/profile/" + props.profile.id}>#{props.profile.name}</ProfileDropdownUsername>
                    <ProfileMenuLink href={"/profile/" + props.profile.id}>Profile</ProfileMenuLink>
                    <ProfileMenuLink href={"/settings"}>Settings</ProfileMenuLink>
                    <ProfileMenuLink onClick={signOut} href={""}>Sign Out</ProfileMenuLink>
                </ProfileMenuDropdown>
            </ProfileMenuContainer>
        </>
    )
}

export default ProfileMenu;