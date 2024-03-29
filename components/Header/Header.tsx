import Logo from "../Logo/Logo";
import SearchInput from "../SearchInput/SearchInput";
import { HeaderContainer, Wrapper } from "./Header.styled";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { useEffect, useState } from "react";
import { SignInButton, SignInLink, SignInSVGSmall } from "../Styles.styled";

import { IProfile } from "../../interface";
import Auth from "../../Auth";
import AddRouteButton from "../AddRouteButton/AddRouteButton";

function Header(){
    const [profile, setProfile] =  useState<IProfile>();
    const [loaded, setLoaded] = useState(false);

    
    useEffect(() => {
        let userData = Auth.getAuth();
        if(userData && userData.id){
            setProfile(userData);
        }
        setLoaded(true);
    }, []);
    return(
        <Wrapper>
            <HeaderContainer>
                <Logo/>
                <SearchInput />
                {loaded && <>
                    { profile ? 
                    <>
                        <AddRouteButton />
                        <ProfileMenu profile={profile} />
                    </>
                    
                    :

                    <>
                        <SignInLink toggle={false} href="/auth" aria-label="sign-in"> 
                            <SignInButton>Sign In</SignInButton>
                        </SignInLink>
                        <SignInLink toggle={true} href="/auth" aria-label="sign-in">
                            <SignInSVGSmall viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"/><path d="M17 14h-4.341a6 6 0 1 1 0-4H23v4h-2v4h-4v-4zM7 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                            </SignInSVGSmall>
                        </SignInLink>
                    </>}
                </>}
            </HeaderContainer>
        </Wrapper>
    )
}

export default Header;