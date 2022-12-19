import { IRoute } from "./interface";

const oneRoute:IRoute = {
    title: "Test route",
    id: "1",
    distance: "10",
    time:"15",
    tags: [
      "First",
      "Forest",
      "Lake",
      "Muddy",
    ],
    gpx: "",
    likes: ["1", "1", "2"],
    images: ["https://randomwordgenerator.com/img/picture-generator/55e3d1464356a514f1dc8460962e33791c3ad6e04e507441722973d59745c5_640.jpg"],
    date: "2022-12-19",
    owner_id: "1"
}

const twoRoute:IRoute = {
  title: "Shops route",
  id: "2",
  distance: "35",
  time:"120",
  tags: [
    "Second",
    "Shops",
    "City",
  ],
  gpx: "a",
  likes: ["1","1", "1", "2","1", "1", "2"],
  images: ["https://randomwordgenerator.com/img/picture-generator/53e2d24a4b50ab14f1dc8460962e33791c3ad6e04e507440762e79d7944ac0_640.jpg"],
  date: "2022-05-11",
  owner_id: "1"
}

const threeRoute:IRoute = {
  title: "Road route",
  id: "3",
  distance: "23",
  time:"54",
  tags: [
    "Third",
    "Forest",
    "Road",
    "Lake",
    "Asphalt"
  ],
  gpx: "a",
  likes: ["1","1"],
  images: ["https://randomwordgenerator.com/img/picture-generator/57e8d0404f5bae14f1dc8460962e33791c3ad6e04e5074417d2e72dc914cc3_640.jpg"],
  date: "2022-11-26",
  owner_id: "1"
}

const fourRoute:IRoute = {
  title: "Camping route",
  id: "4",
  distance: "7",
  time:"20",
  tags: [
    "Fourth",
    "Lake",
    "Shops",
    "Camping"
  ],
  gpx: "a",
  likes: ["1"],
  images: ["https://randomwordgenerator.com/img/picture-generator/52e5d74a4356b10ff3d8992cc12c30771037dbf852547941742679d59044_640.jpg"],
  date: "2022-08-07",
  owner_id: "1"
}

const fiveRoute:IRoute = {
  title: "Lake route",
  id: "5",
  distance: "17",
  time:"45",
  tags: [
    "Fifth",
    "Camping",
    "Lake",
    "Forest",
  ],
  gpx: "",
  likes: [],
  images: ["https://randomwordgenerator.com/img/picture-generator/55e4d4414a50ab14f1dc8460962e33791c3ad6e04e507441722a72dc9044cc_640.jpg"],
  date: "2022-11-18",
  owner_id: "1"
}

const sixRoute:IRoute = {
  title: "CampLake route",
  id: "6",
  distance: "21",
  time:"110",
  tags: [
    "Sixth",
    "Lake",
    "Camping",
  ],
  gpx: "",
  likes: ["1","1", "1", "2","1", "1", "2","1", "1", "2","1", "1", "2"],
  images: ["https://randomwordgenerator.com/img/picture-generator/54e0dd4a4357a514f1dc8460962e33791c3ad6e04e5074417c2d78d1914fc0_640.jpg"],
  date: "2022-01-12",
  owner_id: "1"
}

const sevenRoute:IRoute = {
  title: "Asphalt route",
  id: "7",
  distance: "23",
  time:"117",
  tags: [
    "Seventh",
    "City",
    "Asphalt",
    "Shops",
  ],
  gpx: "",
  likes: ["1","1", "1"],
  images: ["https://randomwordgenerator.com/img/picture-generator/53e9d1454a54b10ff3d8992cc12c30771037dbf85254784a70287ed39345_640.jpg"],
  date: "2022-06-24",
  owner_id: "1"
}

const routes = [oneRoute, twoRoute, threeRoute, fourRoute, fiveRoute,sixRoute,sevenRoute];

export default routes;