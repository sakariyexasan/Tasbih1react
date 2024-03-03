import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
const root = document.getElementById("root");
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Menu from "./components/Menu";
import Light from "./components/Light";
import Tasbih from "./components/Tasbih";

createRoot(root).render(
  <div>
    <Header />
    {/* <Light /> */}
    {/* <div className="grid grid-cols-[400px_400px] justify-around gap-3 mt-10">
      <Menu
        image="https://img.freepik.com/free-photo/baked-chicken-wings-with-teriyaki-sauce_2829-19754.jpg?t=st=1708949912~exp=1708953512~hmac=a61343157e4085c50a6da838442c86730ce7b0dfabeec25bef1685d69ff147e5&w=1060 "
        name="Somalian Food"
        price="20"
        desc="Free Delivery"
      />
      <Menu
        image="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?t=st=1708963699~exp=1708967299~hmac=03228fa30097317b7003b5b796297458c8792773f594a03c5e5a8ceb2192aba3&w=1060 "
        name="American Food"
        price="10"
        desc="Paid Delivery"
      />
      <Menu
        image="https://img.freepik.com/free-photo/fresh-homemade-chicken-tacos-recipe-idea_53876-105982.jpg?t=st=1708963777~exp=1708967377~hmac=3f4859048c0152bb3d758717b5fd11020ef4275b7f026f368170927498dc0a2e&w=740 "
        name="Asian Food"
        price="15"
        desc="Free Delivery"
      />
      <Menu
        image="https://img.freepik.com/free-photo/vertical-view-vegan-tofu-pancakes-with-fruits-white-plate_181624-17934.jpg?t=st=1708963822~exp=1708967422~hmac=0faaff779226234a1ba297a9292aa5400a50f76eefabf7aae6be87db5413322c&w=360 "
        name="British Food"
        price="12"
        desc="Paid Delivery"
      />
      <Menu
        image="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141349.jpg?t=st=1708963894~exp=1708967494~hmac=0180aa70dfa0f5f8bec1b991ee55956e65108cc6cb38d465632d053c3aecb865&w=1060"
        name="Australian Food"
        price="8"
        desc="Paid Delivery"
      />
      <Menu
        image="https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?t=st=1708963939~exp=1708967539~hmac=16379d600f04333df9bd6875b72492922eb1021ac2cf5baff7464141edf3abcc&w=1060"
        name="African Food"
        price="18"
        desc="Free Delivery"
      />
    </div> */}
    <Tasbih />
    <Footer />
  </div>
);
