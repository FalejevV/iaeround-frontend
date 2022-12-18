import { addTag, removeTag } from "../../store/features/routeFiltering";
import { useAppDispatch } from "../../store/hooks";
import { TagCloseIcon, TagContainer, TagTitle } from "./Tag.styled";


function Tag(props:{
    closeable?: boolean,
    selectable?: boolean,
    title: string,
}){
    const dispatch = useAppDispatch();
    function tagAction(){
        if(props.selectable){
            
            dispatch(addTag(props.title));
        }

        if(props.closeable){
            dispatch(removeTag(props.title));
        }

    }

    return(
        <TagContainer onClick={tagAction}>
            <TagTitle>{props.title}</TagTitle>
            {props.closeable && 
                <TagCloseIcon viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
                </TagCloseIcon>
            }
        </TagContainer>
    )
}

export default Tag;