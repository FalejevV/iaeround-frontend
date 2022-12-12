import { useEffect, useState } from "react";
import { BackgroundDarkener, DropdownArrowSVG, ProfileDropdownUsername, ProfileMenuAvatar, ProfileMenuContainer, ProfileMenuDropdown, ProfileMenuLink, ProfileMenuUsername } from "./ProfileMenu.styled";


function ProfileMenu(){

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
    
    return(
        <>  
            <BackgroundDarkener onClick={hideDropdown} toggle={dropdownVisible}></BackgroundDarkener>
            <ProfileMenuContainer onClick={toggleDropdown} className="profilemenu">
                <ProfileMenuUsername>
                    Username
                    <DropdownArrowSVG viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"/><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"/>
                    </DropdownArrowSVG>
                </ProfileMenuUsername>
                <ProfileMenuAvatar src={""} />
                <ProfileMenuDropdown toggle={dropdownVisible}>
                    <ProfileDropdownUsername href={"/profile/" + 1}>#Username</ProfileDropdownUsername>
                    <ProfileMenuLink href={"/profile/" + 1}>Profile</ProfileMenuLink>
                    <ProfileMenuLink href={"/settings"}>Settings</ProfileMenuLink>
                    <ProfileMenuLink href={""}>Sign Out</ProfileMenuLink>
                </ProfileMenuDropdown>
            </ProfileMenuContainer>
        </>
    )
}

export default ProfileMenu;