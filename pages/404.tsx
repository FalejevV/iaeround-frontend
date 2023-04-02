import CardGrid from "../components/CardGrid/CardGrid";
import SortTagsBar from "../components/SortTagsBar/SortTagsBar";
import { IRoute } from "../interface";
import FloatingHeader from "../components/FloatingHeader/FloatingHeader";
import { ErrorContainer, ErrorText } from "../styles/profile.styled";

export default function FourOhFour(props:{
  routes:IRoute[]
}) {

  return (
    <ErrorContainer>
      <ErrorText>Page not found :/</ErrorText>
    </ErrorContainer>
  )
}