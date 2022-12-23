import { InputFieldContainer, InputFieldInput, InputFieldTitle } from "../Styles.styled";



function TextField(props:{
    title:string,
    name:string,
    placeholder?:string
}){
    return(
        <InputFieldContainer>
            <InputFieldTitle>{props.title}</InputFieldTitle>
            <InputFieldInput name={props.name} placeholder={props.placeholder || ""}  type="text"/>
        </InputFieldContainer>
    )
}


export default TextField;