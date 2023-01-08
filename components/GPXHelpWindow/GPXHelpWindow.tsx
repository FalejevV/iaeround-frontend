import { GPXHWindowWrapper } from "./GPXHelpWindow.styled";



function GPXHelpWindow(props:{
    setToggle:Function,
}){

    function clickHandler(e:React.MouseEvent){
        let target = e.target as HTMLElement;
        if(target.className.includes("Wrapper")){
            props.setToggle(false);
        }
    }
    return(
        <GPXHWindowWrapper onClick={(e) => clickHandler(e)}>
            
        </GPXHWindowWrapper>
    )
}

export default GPXHelpWindow;