import CardGrid from "../components/CardGrid/CardGrid";
import Header from "../components/Header/Header";
import SortTagsBar from "../components/SortTagsBar/SortTagsBar";
import { IRoute } from "../interface";

import routeData from "../routeData";
export default function Home() {
  return (
    <>
      <SortTagsBar/>
      <CardGrid filterable={true} data={routeData} displayAmount={6} incrementDisplayAmountBy={3}/>
    </>
  )
}
