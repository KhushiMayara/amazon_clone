import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home_container">
          <img className="home_image" src="./images/slider2.jpg " alt="" />
          <div className="home_row">
            {/* product*/}

            <Product
              id="12311"
              title="Redmi Note 11 (Space Black)"
              price={12000}
              image="./images/home1.jpg "
              rating={4}
            />
            <Product
              image="./images/home2.jpg "
              id="1231"
              title="PTron 4D Dual Driver, earphone"
              price={600}
              rating={3}
            />

            <Product
              image="./images/home3.jpg "
              id="1232"
              title="ASUS TUF Gaming F15 (2021), 15.6"
              price={32000}
              rating={4}
            />
            <Product
              image="./images/home4.jpg "
              id="1232"
              title="Curated furniture picks for your home"
              price={10000}
              rating={5}
            />
          </div>

          <div className="home_row">
            <Product
              image="./images/home5.jpg "
              id="1233"
              title=" Women's Graphic Cotton shirt"
              price={300}
              rating={4}
            />

            <Product
              image="./images/home6.jpg "
              id="1234"
              title=" Women's Cotton jacket "
              price={500}
              rating={4}
            />

            <Product
              image="./images/home9.jpg "
              id="1232"
              title="boAt Newly Launched Wave watch"
              price={2000}
              rating={5}
            />

            <Product
              image="./images/home_10.jpg "
              id="1235"
              title="HP 15s,11th 8GB  Micro-Edge"
              price={30000}
              rating={5}
            />
          </div>

          <div className="home_row">
            <Product
              image="https://m.media-amazon.com/images/I/61BdkFbjFXL._UX679_.jpg"
              id="1236"
              title="V-Girl Quilted Stylish Regular Fit Winter Jacket"
              price={500}
              rating={5}
            />
            <Product
              image="./images/home_11.jpg "
              id="1236"
              title="ZAPATOZ womens Sneaker Sneaker"
              price={800}
              rating={5}
            />
            <Product
              id="12311"
              title="HyperX  Headpon Gaming Headset PC"
              price={500}
              image="./images/home_12.jpg "
              rating={4}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
