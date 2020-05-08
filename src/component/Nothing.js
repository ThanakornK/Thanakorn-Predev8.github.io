import React from 'react';
import { Image } from 'react-bootstrap';
import './../App.css';

function Nothing() {
  return (
    <div className="App">
      <Image src={require("./../assets/images/-YOU-SAW-NOTHING.jpg")} style={{paddingTop:"25px"}}/>
    </div>
  );
}

export default Nothing;