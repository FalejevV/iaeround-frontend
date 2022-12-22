import SortingButtons from "../SortingButtons/SortingButtons";
import SortingTags from "../SortingTags/SortingTags";
import { STContainer, STWrapper } from "./SortTagsBar.styled";


function SortTagsBar(){
    return(
        <STWrapper>
            <STContainer>
                <SortingButtons />
                <SortingTags />
            </STContainer>
        </STWrapper>
    )
}

export default SortTagsBar;