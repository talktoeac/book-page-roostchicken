import { ILocal } from "../components/Locals/Local";
import {
  chairWheelBathLinkIcon,
  chairWheelLinkIcon,
  childMenuNewLinkIcon,
  deliveryBlackLinkIcon,
  eatHereNewLinkIcon,
  halalGrayLinkIcon,
  petFriendlyLinkIcon,
  takeAwayLinkIcon,
  wifiLinkIcon,
} from "./icons/links";

const chairWheelData = {
  title: "Accesible para silla de ruedas",
  src: chairWheelLinkIcon,
};
const chairWheelBathData = {
  title: "Aseo accesible para silla de ruedas",
  src: chairWheelBathLinkIcon,
};
const childMenuData = {
  title: "Menú infantil",
  src: childMenuNewLinkIcon,
};
const halalData = {
  title: "Comida Halal",
  src: halalGrayLinkIcon,
};
const deliveryData = {
  title: "Delivery",
  src: deliveryBlackLinkIcon,
};
const takeAwayData = {
  title: "Takeaway",
  src: takeAwayLinkIcon,
};
const eatHereData = {
  title: "Comer aquí",
  src: eatHereNewLinkIcon,
};
const petFriendlyData = {
  title: "Pet Friendly",
  src: petFriendlyLinkIcon,
};
const wifiData = {
  title: "WIFI gratis",
  src: wifiLinkIcon,
};

const paseoPradoIcons = [
  wifiData,
  petFriendlyData,
  halalData,
  childMenuData,
  eatHereData,
  takeAwayData,
  deliveryData,
  chairWheelData,
  chairWheelBathData,
];

const sanAndresIcons = [
  wifiData,
  petFriendlyData,
  halalData,
  childMenuData,
  eatHereData,
  takeAwayData,
  deliveryData,
];

export const paseoPrado: Omit<
  ILocal,
  "reservationData" | "hours" | "valueCalendar" | "people" | "redirectCalendar"
> = {
  title: 'Paseo del Prado, 46, "Atocha"',
  img: "https://roostchickenspain.com/funodeec/2022/11/Roost-Chicken-Grid-Paseo-del-Prado-1.jpg",
  address: "Paseo del Prado, 46, Madrid, 28014",
  urlMap: "https://goo.gl/maps/nRQ4Ueuqerkygkpt5",
  phone: "+(34) 919 33 72 08",
  icons: paseoPradoIcons,
};

export const sanAndres: Omit<
  ILocal,
  "reservationData" | "hours" | "valueCalendar" | "people" | "redirectCalendar"
> = {
  title: 'San Andrés, 26, "Malasaña"',
  img: "https://roostchickenspain.com/funodeec/2022/11/Roost-Chicken-Grid-Malasana.jpg",
  address: "Calle de San Andrés, 26, Madrid, 28004",
  urlMap: "https://goo.gl/maps/YPhXHy7KQb8MiR3z7",
  phone: "+(34) 910 41 28 98",
  icons: sanAndresIcons,
};
