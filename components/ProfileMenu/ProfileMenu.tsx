import { useState } from "react";
import { DropdownArrowSVG, ProfileMenuAvatar, ProfileMenuContainer, ProfileMenuDropdown, ProfileMenuLink, ProfileMenuUsername } from "./ProfileMenu.styled";


function ProfileMenu(){

    const [dropdownVisible, setDropdownVisible] = useState(false);

    function toggleDropdown(){
        setDropdownVisible(prevDropdownVisible => !prevDropdownVisible);
    }
    
    return(
        <ProfileMenuContainer onClick={toggleDropdown}>
            <ProfileMenuUsername>
                Username
                <DropdownArrowSVG viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"/>
                </DropdownArrowSVG>
            </ProfileMenuUsername>
            <ProfileMenuAvatar src={""} />
            
            <ProfileMenuDropdown toggle={dropdownVisible}>
                <ProfileMenuLink href={""}>Profile</ProfileMenuLink>
                <ProfileMenuLink href={""}>Settings</ProfileMenuLink>
                <ProfileMenuLink href={""}>Sign Out</ProfileMenuLink>
            </ProfileMenuDropdown>
        </ProfileMenuContainer>
    )
}

export default ProfileMenu;