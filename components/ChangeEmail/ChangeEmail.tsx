import { FormEvent, useEffect, useState } from "react";
import { CECodeContainer, CEContainer, CEForm, CEMessage, CETitleButtonContainer, ChangeEmailText, EmailTitle } from "./ChangeEmail.styled";
import EmailField from "../EmailField/EmailField";
import TextField from "../TextField/TextField";
import { AuthButton } from "../../styles/auth.styled";
import { SignInButton } from "../Styles.styled";
import Fetching from "../../Fetching";
import Cookies from "js-cookie";



function ChangeEmail(props:{
    email:string
}){

    const [toggleForm,setToggleForm] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [message,setMessage] = useState("");
    const [codeFetch, setCodeFetch] = useState(true);

    useEffect(() => {
        if(toggleForm){
            setTimeout(() => {
                window.scrollTo(0, window.scrollY + 220);
            }, 400);
        }
    }, [toggleForm]);
    
    function formSubmit(e:FormEvent){
        e.preventDefault();
        if(buttonDisabled){
            return;
        }
        setButtonDisabled(true);
        let target = e.target as HTMLFormElement;
        let emailField = target.newEmail;
        let codeField = target.code;
        if (emailField !== undefined && codeField !== undefined){
            if(emailField.value.trim() === ""){
                setMessage("New email field is empty");
                setButtonDisabled(false);
                return;
            }
            if(codeField.value.trim() === ""){
                setMessage("Code field is empty. Click 'Get Code' button to send it to your current email");
                setButtonDisabled(false);
                return;
            }

            Fetching.changeEmail(emailField.value, codeField.value).then(res => res.json()).then(data => {
                setButtonDisabled(false);
                if(data.status === "OK"){
                    setMessage(data.text);
                    Cookies.set("IAEAuth", "");
                    setTimeout(() => {
                        window.location.href = "/";
                    },2000);
                }else{
                    setMessage(data.status);
                }
                return;
            })
        }
    }

    function getCode(){
        if(codeFetch){
            setCodeFetch(false);
            setTimeout(() => {
                setCodeFetch(true);
            },60000);
            Fetching.getEmailChangeCode().then(res => res.json()).then(data => {
                console.log(data);
                setMessage(data.status);
            })
        }else{
            setMessage("Code has been already sent.");
        }
    }

    return(
        <>
            {props.email && 
                <CEContainer onSubmit={(e) => e.preventDefault()}>
                    <CETitleButtonContainer>
                        <EmailTitle>Email: {props.email}</EmailTitle>
                        <ChangeEmailText onClick={() => setToggleForm(prev => !prev)}>Change</ChangeEmailText>
                    </CETitleButtonContainer>
                    <CEForm onSubmit={(e) => formSubmit(e)} toggle={toggleForm}>
                        <EmailField title="Enter new email" name="newEmail" />
                        <CECodeContainer>
                            <TextField title="Confirmation code" name="code" />
                            <AuthButton disabled={!codeFetch} onClick={getCode}>Get Code</AuthButton>
                        </CECodeContainer>
                        <SignInButton disabled={buttonDisabled}>Change Email</SignInButton>
                        {message.trim() !== "" && <CEMessage>{message}</CEMessage>}
                    </CEForm>
                </CEContainer>
            }
        </>
    )
}

export default ChangeEmail;