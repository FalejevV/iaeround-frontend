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
    about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia iaculis tortor, at interdum metus fringilla vel. Morbi enim mi, malesuada quis mattis nec, dictum eget sapien. Maecenas diam enim, iaculis vitae eros sed, vestibulum consectetur purus. Nullam eu orci congue, scelerisque elit id, interdum massa. Proin accumsan quam turpis, posuere dictum augue luctus tincidunt. Nullam ut laoreet purus, vitae placerat est. Cras ac orci nisl. ",
    likes: ["1", "1", "2"],
    images: ["https://randomwordgenerator.com/img/picture-generator/55e3d1464356a514f1dc8460962e33791c3ad6e04e507441722973d59745c5_640.jpg", "https://randomwordgenerator.com/img/picture-generator/55e6d04a4f56a414f1dc8460962e33791c3ad6e04e507440722d72d19548c1_640.jpg", "https://randomwordgenerator.com/img/picture-generator/54e9d4444e55ae14f1dc8460962e33791c3ad6e04e5074417d2e72d2914ec3_640.jpg","https://randomwordgenerator.com/img/picture-generator/55e6d4434956a414f1dc8460962e33791c3ad6e04e50744077297bd5914bc6_640.jpg"],
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
  about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia iaculis tortor, at interdum metus fringilla vel. Morbi enim mi, malesuada quis mattis nec, dictum eget sapien. Maecenas diam enim, iaculis vitae eros sed, vestibulum consectetur purus. Nullam eu orci congue, scelerisque elit id, interdum massa. Proin accumsan quam turpis, posuere dictum augue luctus tincidunt. Nullam ut laoreet purus, vitae placerat est. Cras ac orci nisl. ",
  likes: ["1","1", "1", "2","1", "1", "2"],
  images: ["https://randomwordgenerator.com/img/picture-generator/53e2d24a4b50ab14f1dc8460962e33791c3ad6e04e507440762e79d7944ac0_640.jpg", "https://randomwordgenerator.com/img/picture-generator/57e4d5404853b10ff3d8992cc12c30771037dbf852547940752978d5964e_640.jpg", "https://randomwordgenerator.com/img/picture-generator/55e1d6444e5aae14f1dc8460962e33791c3ad6e04e50744172297bd4944fcc_640.jpg"],
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
  about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia iaculis tortor, at interdum metus fringilla vel. Morbi enim mi, malesuada quis mattis nec, dictum eget sapien. Maecenas diam enim, iaculis vitae eros sed, vestibulum consectetur purus. Nullam eu orci congue, scelerisque elit id, interdum massa. Proin accumsan quam turpis, posuere dictum augue luctus tincidunt. Nullam ut laoreet purus, vitae placerat est. Cras ac orci nisl. ",
  likes: ["1","1"],
  images: ["https://randomwordgenerator.com/img/picture-generator/57e8d0404f5bae14f1dc8460962e33791c3ad6e04e5074417d2e72dc914cc3_640.jpg", "https://randomwordgenerator.com/img/picture-generator/g2ebc46d651de9da6b29d2194b428cb741ebe008e6f87e5e93bef0c089a2a652b1ba76f5fb0d2af1b25d9df34f0adab86_640.jpg", "https://randomwordgenerator.com/img/picture-generator/dandelion-3094349_640.jpg", "https://randomwordgenerator.com/img/picture-generator/54e1d444424faa0df7c5d57bc32f3e7b1d3ac3e45551754c7c267bd697_640.jpg", "https://randomwordgenerator.com/img/picture-generator/57e9d64b4256ae14f1dc8460962e33791c3ad6e04e5074417d2e7ed6914cc5_640.jpg"],
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
  about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia iaculis tortor, at interdum metus fringilla vel. Morbi enim mi, malesuada quis mattis nec, dictum eget sapien. Maecenas diam enim, iaculis vitae eros sed, vestibulum consectetur purus. Nullam eu orci congue, scelerisque elit id, interdum massa. Proin accumsan quam turpis, posuere dictum augue luctus tincidunt. Nullam ut laoreet purus, vitae placerat est. Cras ac orci nisl. ",
  likes: ["1"],
  images: ["https://randomwordgenerator.com/img/picture-generator/52e5d74a4356b10ff3d8992cc12c30771037dbf852547941742679d59044_640.jpg", "https://randomwordgenerator.com/img/picture-generator/57e6dd434c54aa14f1dc8460962e33791c3ad6e04e507440752f73dd924cc4_640.jpg"],
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
  about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia iaculis tortor, at interdum metus fringilla vel. Morbi enim mi, malesuada quis mattis nec, dictum eget sapien. Maecenas diam enim, iaculis vitae eros sed, vestibulum consectetur purus. Nullam eu orci congue, scelerisque elit id, interdum massa. Proin accumsan quam turpis, posuere dictum augue luctus tincidunt. Nullam ut laoreet purus, vitae placerat est. Cras ac orci nisl. ",
  likes: [],
  images: ["https://randomwordgenerator.com/img/picture-generator/55e4d4414a50ab14f1dc8460962e33791c3ad6e04e507441722a72dc9044cc_640.jpg", "https://randomwordgenerator.com/img/picture-generator/54e3d54b4d5ba514f1dc8460962e33791c3ad6e04e50744172277fd79f4acc_640.jpg", "https://randomwordgenerator.com/img/picture-generator/55e3d0474a54ae14f1dc8460962e33791c3ad6e04e5074417c2f7dd59445c7_640.jpg", "https://randomwordgenerator.com/img/picture-generator/54e4dd444b57b10ff3d8992cc12c30771037dbf85254784b772872dc9144_640.jpg"],
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
  about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia iaculis tortor, at interdum metus fringilla vel. Morbi enim mi, malesuada quis mattis nec, dictum eget sapien. Maecenas diam enim, iaculis vitae eros sed, vestibulum consectetur purus. Nullam eu orci congue, scelerisque elit id, interdum massa. Proin accumsan quam turpis, posuere dictum augue luctus tincidunt. Nullam ut laoreet purus, vitae placerat est. Cras ac orci nisl. ",
  likes: ["1","1", "1", "2","1", "1", "2","1", "1", "2","1", "1", "2"],
  images: ["https://randomwordgenerator.com/img/picture-generator/54e0dd4a4357a514f1dc8460962e33791c3ad6e04e5074417c2d78d1914fc0_640.jpg", "https://randomwordgenerator.com/img/picture-generator/52e0d2414b56b10ff3d8992cc12c30771037dbf85254784a70287fdc9144_640.jpg", "https://randomwordgenerator.com/img/picture-generator/5fe2d646424faa0df7c5d57bc32f3e7b1d3ac3e45658704c742a7dd594_640.jpg", "https://randomwordgenerator.com/img/picture-generator/52e6d3454b55ac14f1dc8460962e33791c3ad6e04e507749772f78d69f4acc_640.jpg"],
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
  about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia iaculis tortor, at interdum metus fringilla vel. Morbi enim mi, malesuada quis mattis nec, dictum eget sapien. Maecenas diam enim, iaculis vitae eros sed, vestibulum consectetur purus. Nullam eu orci congue, scelerisque elit id, interdum massa. Proin accumsan quam turpis, posuere dictum augue luctus tincidunt. Nullam ut laoreet purus, vitae placerat est. Cras ac orci nisl. ",
  likes: ["1","1", "1"],
  images: ["https://randomwordgenerator.com/img/picture-generator/53e9d1454a54b10ff3d8992cc12c30771037dbf85254784a70287ed39345_640.jpg","https://randomwordgenerator.com/img/picture-generator/55e8d24b4d5ba414f1dc8460962e33791c3ad6e04e507440762e7adc974ec2_640.jpg"],
  date: "2022-06-24",
  owner_id: "1"
}

const routes = [oneRoute, twoRoute, threeRoute, fourRoute, fiveRoute,sixRoute,sevenRoute];

export default routes;