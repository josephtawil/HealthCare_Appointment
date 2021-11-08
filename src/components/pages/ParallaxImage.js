import React,{ useState} from "react";
import { Parallax, Background } from "react-parallax";
import Button from "../button/Button";
import Form from "../form/form";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  color: 'black',
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const image1 = require("../../appointment.jpg")
const image2 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";



const ParallaxImage = () => {

    const [state, setForm] = useState(false);

    return(
    
    <div style={styles}>
        <h2>| | |</h2>
    <Parallax bgImage={require("../../appointment.jpg").default} strength={400}>
      <div style={{ height: 500, justifyContent: "center", alignItems: "center", display: "flex" }}>
        {console.log(state)}
        {/* <Button onClick={()=>{
            setForm(true);
        }}/> */}
        <Form/>
         {console.log(state)}

        {/* {<Form/> ? form === true : (<></>) } */}

      </div>
    </Parallax>
    <h2>| | |</h2>
    <Parallax bgImage={require("../../contact.jpg").default} blur={{ min: -1, max: 3 }}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}><h1 style={insideStyles}>Contact</h1></div>
      </div>
    </Parallax>
    <h2>| | |</h2>
    <Parallax bgImage={require("../../learnmore.jpg").default} strength={-100}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}><h1 style={insideStyles}>Learn More</h1></div>
      </div>
    </Parallax>
    <h2>| | |</h2>
    <Parallax
      bgImage={require("../../services.jpg").default}
      strength={200}
      renderLayer={(percentage) => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(255, 125, 0, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              borderRadius: "50%",
              transform: "translate(-50%,-50%)",
              width: percentage * 500,
              height: percentage * 500
            }}
          />
        </div>
      )}
    >
      <div style={{ height: 500 }}>
        <div style={insideStyles}><h1 style={insideStyles}>Services</h1></div>
      </div>
    </Parallax>
    <h2>| | |</h2>
    <Parallax strength={500}>
      <Background className="custom-bg">
        <div
          style={{
            height: 2000,
            width: 2000,
            backgroundImage: "url('https://i.imgur.com/8CV5WAB.png')"
          }}
        />
      </Background>
      <div>
      </div>
    </Parallax>
    <div style={{ height: 500 }} />
    <h2>{"\u2728"}</h2>
  </div>
    )
};
    
export default ParallaxImage