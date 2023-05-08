import React, { useState } from "react";
import "./App.css";
import "animate.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { endianness } from "os";

const Colors = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"];

interface CircleData {
  Speed: number;
  Radius: number;
  Left: number;
  Top: number;
  Color: number;
}

function Circle(props: { offset: number }) {
  const [data] = useState<CircleData>({
    Speed: Math.random() * 2,
    Radius: Math.random() * 25,
    Left: Math.random() * window.innerWidth,
    Top: Math.random() * window.innerHeight,
    Color: Math.floor(Math.random() * 4),
  });
  return (
    <ParallaxLayer offset={0.75} speed={data.Speed}>
      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          left: data.Left,
          top: data.Top,
          width: data.Radius,
          height: data.Radius,
          backgroundColor: Colors[data.Color],
        }}
      ></div>
    </ParallaxLayer>
  );
}

function App() {
  return (
    <div className="App">
      <Parallax pages={2.3} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={1.5}>
          <header className="App-header">
            <img
              className="App-logo"
              alt="flaccid pancake logo"
              src="./assets/no-text.png"
            ></img>
            <p>Hosting a kiddy-pool this summer...</p>
          </header>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.75}
          speed={1}
          sticky={{ start: 0.75, end: 1.5 }}
        >
          <div style={{ margin: 5 }} className="sticky">
            <h3>Flaccid Pancake</h3>
          </div>
        </ParallaxLayer>

        {new Array(16).fill(undefined).map(() => {
          return <Circle offset={0.5} />;
        })}

        <ParallaxLayer offset={1} speed={2}>
          <div>
            is an aspiring team of
            <h3>talented game developers</h3> set to create games that will live
            rent free in your head for as long as you'll live
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.35} speed={0.99}>
          <h3>
            Flaccid Pancake's development team currently consists of three
            talented game developers set out to make a name for themselves in
            the industry
          </h3>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1}>
          <h1>Yaman Alhalabi</h1>
          <p>yalhalabi@flaccidpancake.dev</p>
          <p>
            A man so good at coding you would think he was born with a keyboard
            in hand, oh sh** he was. anyways he's natural-born overachiever and
            a great leader.
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={1.75} speed={1.2}>
          <h1>Majd Kiddeh</h1>
          <p>mgdkdh@flaccidpancake.dev</p>
          <p>the main writer, director and head of advertising.</p>
        </ParallaxLayer>
        <ParallaxLayer offset={1.99} speed={1.3}>
          <h1>Mohammad Kuziz</h1>
          <p>mkzez@flaccidpancake.dev</p>
          <p>
            3d artist, social media manager and head of art direction. Despite
            having a common name this man is a one in a billion, able to handle
            any given task with immense care and dedication.
          </p>
        </ParallaxLayer>

        <ParallaxLayer offset={0.9} speed={0.5}>
          <p>
            The FlaccidPancake team is currently working on its next project, we
            can't wait to show you what we are cooking!
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={1.99999} speed={1}></ParallaxLayer>
      <p>subreddit: r/flaccidpancake</p>
      </Parallax>
    </div>
  );
}

export default App;
