import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import Auth from "../Auth";
import TextField from "../components/TextField/TextField";
import { AvatarFFBotText, AvatarFFInput, AvatarFFLabel, AvatarFFPreview, AvatarFFTextContainer, AvatarFFTopText, AvatarFileField, SettingsChangeSuccessText, SettingsForm, SettingsLoginAlert } from "../styles/settings.styled";
import { IFullProfile, IProfile } from "../interface";
import Fetching, { cloudAvatarLink } from "../Fetching";
import EmailField from "../components/EmailField/EmailField";
import TextAreaField from "../components/TextAreaField/TextAreaField";
import { SignInButton } from "../components/Styles.styled";
import { AlertText } from "../components/FileField/FileField.styled";
import { getURL } from "next/dist/shared/lib/utils";
import Cookies from "js-cookie";


function Settings(){
    const fileSizeMB = 2;
    const [profileInfo, setProfileInfo] = useState<IFullProfile>();
    const [fetched, setFetched] = useState(false);
    const [textAlert, setTextAlert] = useState("");
    const [success, setSuccess] = useState("");
    const [fileSizeToggle, setFileSizeToggle] = useState(false);
    const imageRef = useRef(null);

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
        let target = e.target as HTMLFormElement;
        let avatarInput = target.avatar as HTMLInputElement;
        let nameInput = target.profileNname as HTMLInputElement;
        let emailInput = target.email as HTMLInputElement;
        let aboutInput = target.about as HTMLInputElement;
        if(avatarInput !== undefined && nameInput !== undefined && aboutInput !== undefined && emailInput !== undefined){
            let avatarFile = avatarInput.files && avatarInput.files[0];
            if(avatarFile && avatarFile !== undefined){
                if (avatarFile.size > fileSizeMB * 1000000){
                    setTextAlert(`Avatar image size is too big. Max ${fileSizeMB}MB`);
                    return;
                }else{
                    setTextAlert("");
                }
            }
            let name = nameInput.value;
            let email = emailInput.value;
            let about = aboutInput.value;
            if(name.trim() !== "" && email.trim() !== "" && about.trim() !== ""){
                let formData = new FormData();
                formData.append('name' , name);
                formData.append('email', email);
                formData.append('about', about);
                if(avatarFile && avatarFile !== undefined){
                    formData.append('avatar', avatarFile);
                }
                setSuccess("Saving...");
                setTextAlert("");
                Fetching.updateMyProfile(formData).then(res => res.json()).then(data => {
                    if(data.status === "OK"){
                        Cookies.set("IAEAuth", "", { expires: 0.0006});
                        setSuccess("Your profile has been changed! Please relogin!");
                        setTimeout(() => {
                            window.location.href = '/';
                        },1500);
                    }else{
                        setSuccess("");
                        setTextAlert(data.status);
                    }
                });
            }
        }else{
            setTextAlert("Input fields could not found. Try refreshing page")
        }
    }

    function updateAvatar(e:ChangeEvent){
        let target = e.target as HTMLInputElement;
        let file = target.files && target.files[0] as File;
        if(file){
            if(file.size > fileSizeMB * 1000000){
                setFileSizeToggle(true);
            }else{
                setFileSizeToggle(false);
            }
            if(imageRef.current){
                let imgRef = imageRef.current as HTMLImageElement;
                imgRef.src = URL.createObjectURL(file);
            }
        }
    }

    return(
        <>
            {fetched && profileInfo === undefined && <SettingsLoginAlert>You need to log in </SettingsLoginAlert>}
            {fetched && profileInfo !== undefined &&
                <SettingsForm onSubmit={(e) => submitForm(e)}>
                    <AvatarFileField>
                        <AvatarFFLabel htmlFor="avatar">
                            <AvatarFFPreview ref={imageRef} src={`${cloudAvatarLink}/${profileInfo.id}/${profileInfo.avatar}`} />
                            <AvatarFFInput onChange={(e) => updateAvatar(e)} name="avatar" id="avatar" type="file" />
                            <AvatarFFTextContainer>
                                <AvatarFFTopText>Click to chage image</AvatarFFTopText>
                                <AvatarFFBotText toggle={fileSizeToggle}>Max image size: {fileSizeMB}MB</AvatarFFBotText>
                            </AvatarFFTextContainer>
                        </AvatarFFLabel>
                    </AvatarFileField>
                    <TextField title="Name" name="profileNname" preValue={profileInfo.name} />
                    <EmailField title="Email" name="email" preValue={profileInfo.email} />
                    <TextAreaField title="About" name="about" preValue={profileInfo.about} />
                    {textAlert.trim() !== "" && <AlertText>{textAlert}</AlertText>}
                    {success.trim() !== "" && <SettingsChangeSuccessText>{success}</SettingsChangeSuccessText>}
                    <SignInButton>Save Profile (You will be logged out)</SignInButton>
                </SettingsForm>
            }
        </>
    )
}

export default Settings;