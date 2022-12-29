import { addTag, removeTag } from "../../store/features/routeFiltering";
import { useAppDispatch } from "../../store/hooks";
import { TagCloseIcon, TagContainer, TagTitle } from "./Tag.styled";


function Tag(props:{
    closeable?: boolean,
    selectable?: boolean,
    title: string,
    onClick?:Function,
    selected?: boolean,
}){
    const dispatch = useAppDispatch();
    function tagAction(){
        if(props.selectable && props.onClick === undefined){
            dispatch(addTag(props.title));
        }

        if(props.closeable && props.onClick === undefined){
            dispatch(removeTag(props.title));
        }

        if(props.onClick !== undefined){
            props.onClick(props.title);
        }
    }

    return(
        <TagContainer selected={props.selected || false} toggle={props.closeable || props.selectable} onClick={tagAction}>
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