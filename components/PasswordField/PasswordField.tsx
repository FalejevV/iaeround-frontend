import { InputFieldContainer, InputFieldInput, InputFieldTitle } from "../Styles.styled";



function PasswordField(props:{
    title:string,
    name:string,
    placeholder?:string
}){
    return(
        <InputFieldContainer>
            <InputFieldTitle>{props.title}</InputFieldTitle>
            <InputFieldInput name={props.name} placeholder={props.placeholder || ""} type="password" />
        </InputFieldContainer>
    )
}


export default PasswordField;