import { InputFieldContainer, InputFieldInput, InputFieldTitle } from "../Styles.styled";



function EmailField(props:{
    title:string,
    name:string,
    placeholder?:string
}){
    return(
        <InputFieldContainer>
            <InputFieldTitle>{props.title}</InputFieldTitle>
            <InputFieldInput name={props.name} placeholder={props.placeholder || ""} type="email" />
        </InputFieldContainer>
    )
}

export default EmailField;