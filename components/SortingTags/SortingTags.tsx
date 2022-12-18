import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import Tag from "../Tag/Tag";
import { SortingTagsContainer } from "./SortingTags.styled";


function SortingTags(){
    const routeTagsSelector = useAppSelector((state:RootState) => state.routeFiltering.tags);
    
    return(
        <>
            {routeTagsSelector.length > 0 && <>
                <SortingTagsContainer>
                    {routeTagsSelector.map((tag, index) => <Tag title={tag} key={index} closeable={true} />)}
                </SortingTagsContainer>    
            </>}
        </>
    )
}

export default SortingTags;