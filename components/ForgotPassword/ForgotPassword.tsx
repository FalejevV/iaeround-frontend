import { FormEvent, useState } from "react";
import { FPButton, FPContainer, FPForm, FPMessage, FPSubmit } from "./ForgotPassword.styled";
import TextField from "../TextField/TextField";
import { SignInButton } from "../Styles.styled";
import { AuthButton } from "../../styles/auth.styled";
import Fetching from "../../Fetching";



function ForgotPassword() {

    const [toggleForm, setToggleForm] = useState(false);
    const [buttonToggle, setButtonToggle] = useState(false);
    const [message,setMessage] = useState("");

    function formSubmit(e:FormEvent){
        e.preventDefault();
        if(buttonToggle){
            return;
        }
        setButtonToggle(true);
        setMessage("");
        let target = e.target as HTMLFormElement;
        let eloginInput = target[0] as HTMLInputElement;
        if(eloginInput && eloginInput.value.trim() !== ""){
            setMessage("Processing...");
            Fetching.recoverPassword(eloginInput.value).then(res => res.json()).then(data => {
                setMessage(data.status);
                setButtonToggle(false);
            });
        }else{
            setButtonToggle(false);
        }
    }

    return(
        <FPContainer toggle={toggleForm}>
            <FPButton onClick={() => setToggleForm(prev => !prev)}>Forgot password?</FPButton>
            <FPForm onSubmit={(e) => formSubmit(e)}>
                <TextField title="Please enter username/email" name="ELogin"  />
                <FPSubmit disabled={buttonToggle}>Recover password</FPSubmit>
                {message.trim() !== "" && <FPMessage>{message}</FPMessage>}
            </FPForm>
        </FPContainer>
    )
}

export default ForgotPassword;