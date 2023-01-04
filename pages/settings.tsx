import { FormEvent, useEffect, useState } from "react";
import Auth from "../Auth";
import TextField from "../components/TextField/TextField";
import { SettingsForm, SettingsLoginAlert } from "../styles/settings.styled";
import { IFullProfile, IProfile } from "../interface";
import Fetching from "../Fetching";
import EmailField from "../components/EmailField/EmailField";
import TextAreaField from "../components/TextAreaField/TextAreaField";
import { SignInButton } from "../components/Styles.styled";


function Settings(){
    const [profileInfo, setProfileInfo] = useState<IFullProfile>();
    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        Fetching.getMyProfile().then(res => res.json()).then(data => {
            if(data.id !== undefined){
                setProfileInfo(data);
            }
            setFetched(true);
        });
    }, []);

    function submitForm(e:FormEvent){
        e.preventDefault();
    }

    return(
        <>
            {fetched && profileInfo === undefined && <SettingsLoginAlert>You need to log in </SettingsLoginAlert>}
            {fetched && profileInfo !== undefined &&
                <SettingsForm onSubmit={(e) => submitForm(e)}>
                    <TextField title="Name" name="name" preValue={profileInfo.name} />
                    <EmailField title="Email" name="email" preValue={profileInfo.email} />
                    <TextAreaField title="About" name="about" preValue={profileInfo.about} />
                    <SignInButton>Save Profile</SignInButton>
                </SettingsForm>
            }
        </>
    )
}

export default Settings;