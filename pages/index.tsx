import CardGrid from "../components/CardGrid/CardGrid";
import SortTagsBar from "../components/SortTagsBar/SortTagsBar";
import { IRoute } from "../interface";
import Fetching from "../Fetching";
import { useState } from "react";
import FloatingHeader from "../components/FloatingHeader/FloatingHeader";

export default function Home(props:{
  routes:IRoute[]
}) {
  return (
    <>
      <FloatingHeader/>
      <SortTagsBar/>
      <CardGrid filterable={true} data={props.routes} displayAmount={6} incrementDisplayAmountBy={6}/>
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
