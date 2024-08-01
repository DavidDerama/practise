import { useState } from "react";
import Header from "./components/Header.jsx";
import Badge from "./components/badges/index.jsx";
import Banner from "./components/banners/index.jsx";
import Card from "./components/cards/index.jsx";
import Testimonial from "./components/testimonial/index.jsx";
import "./App.css";

function App() {
  const colors = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];

  const results = ["success", "warning", "error", "neutral"];
  return (
    <main className="app">
      <Header />
      <section className="badges">
        <h2>Badges</h2>
        <div className="squareBox">
          {colors.map((color) => {
            return (
              <Badge shape="square" background={`${color}`} className={color}>
                <Badge.Text>Badge</Badge.Text>
              </Badge>
            );
          })}
        </div>
        <div className="squareBox">
          {colors.map((color) => {
            return (
              <Badge shape="pill" background={`${color}`} className={color}>
                <Badge.Text>Badge</Badge.Text>
              </Badge>
            );
          })}
        </div>
      </section>
      <section className="banners">
        <h2>Banners</h2>
        <div className="multi-line">
          {results.map((result) => {
            return (
              <Banner result={result}>
                <Banner.Desc>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid pariatur, ipsum similique veniam.
                </Banner.Desc>
              </Banner>
            );
          })}
        </div>
        <div className="single-line">
          {results.map((result) => {
            return <Banner result={result}></Banner>;
          })}
        </div>
      </section>
      <section className="cards">
        <h2>Cards</h2>
        <Card>
          <Card.Header>Easy Deployment</Card.Header>
          <Card.Desc>
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
            magna sit morbi lobortis.
          </Card.Desc>
        </Card>
        <Card>
          <Card.Header>Easy Deployment</Card.Header>
          <Card.Desc>
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
            magna sit morbi lobortis.
          </Card.Desc>
        </Card>
      </section>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <Testimonial>
          <Testimonial.Img src="360.jpg"></Testimonial.Img>
          <Testimonial.Quote>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
            nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
            adipiscing nunc urna, sit.{" "}
          </Testimonial.Quote>
          <Testimonial.Author>May Andersons</Testimonial.Author>
          <Testimonial.Location>Workcation, CTO</Testimonial.Location>
        </Testimonial>
      </section>
    </main>
  );
}

export default App;

// <Badge shape="square" background="red">
//   <Badge.Text>Badge</Badge.Text>
// </Badge>
// <Badge shape="square" background="red">
//   <Badge.Text>Badge</Badge.Text>
// </Badge>
