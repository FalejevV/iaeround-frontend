import { useState } from "react";
import { CEContainer, CEForm, CETitleButtonContainer, ChangeEmailText, EmailTitle } from "./ChangeEmail.styled";



function ChangeEmail(props:{
    email:string
}){

    const [toggleForm,setToggleForm] = useState(false);

    return(
        <>
            {props.email && 
                <CEContainer>
                    <CETitleButtonContainer>
                        <EmailTitle>Email: {props.email}</EmailTitle>
                        <ChangeEmailText onClick={() => setToggleForm(prev => !prev)}>Change</ChangeEmailText>
                    </CETitleButtonContainer>
                    <CEForm toggle={toggleForm}>
                        under construction
                    </CEForm>
                </CEContainer>
            }
        </>
    )
}

export default ChangeEmail;