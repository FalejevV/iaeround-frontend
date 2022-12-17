import Tag from "../Tag/Tag";
import { SortingTagsContainer } from "./SortingTags.styled";


function SortingTags(){
    return(
        <SortingTagsContainer>
            <Tag title="test" closeable={true}/>
            <Tag title="test" closeable={true}/>
            <Tag title="test" closeable={true}/>
            <Tag title="test" closeable={true}/>
            <Tag title="test" closeable={true}/>
            <Tag title="test" closeable={true}/>
        </SortingTagsContainer>
    )
}

export default SortingTags;