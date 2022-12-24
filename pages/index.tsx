import CardGrid from "../components/CardGrid/CardGrid";
import SortTagsBar from "../components/SortTagsBar/SortTagsBar";
import { IRoute } from "../interface";
import Fetching from "../Fetching";
import { useState } from "react";

export default function Home(props:{
  routes:IRoute[]
}) {
  const [routesFetch, setRoutesFetch] = useState<IRoute[]>([]);
  return (
    <>
      <SortTagsBar/>
      <CardGrid filterable={true} data={props.routes} displayAmount={6} incrementDisplayAmountBy={3}/>
    </>
  )
}


export async function getServerSideProps() {
  let fetch = await Fetching.getAllRoutes().then(res => res.json());
  return {
    props: {
      routes: fetch.data,
    },
  }
}
