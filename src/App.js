import './App.css';
import StarWars from './StarWars';
import React, {useState, useEffect} from 'react';
import useSound from 'use-sound';
import swordSfx from './SwordEffects.mp3';
import buttonSfx from './buttonclick.mp3';
import { gsap, random } from "gsap";
/*
const colorArray = ["White", "White", "Yellow", "Yellow" ,"White" , "Yellow", "Yellow", "Yellow","Yellow","Yellow","Yellow","Yellow","Yellow","Yellow"]
function Animate(){
    colorArray[0] = colorArray[13];
    for(let i = 13;i >= 1;i--){
      colorArray[i] = colorArray[i - 1];
      //console.log(i);
      //console.log(colorArray);
    }
    document.getElementById("textT").style.color = colorArray[0];
    document.getElementById("texth").style.color = colorArray[1];
    document.getElementById("texti").style.color = colorArray[2];
    document.getElementById("texts").style.color = colorArray[3];
    document.getElementById("texti2").style.color = colorArray[4];
    document.getElementById("texts2").style.color = colorArray[5];
    document.getElementById("textS3").style.color = colorArray[6];
    document.getElementById("textt2").style.color = colorArray[7];
    document.getElementById("texta").style.color = colorArray[8];
    document.getElementById("textr").style.color = colorArray[9];
    document.getElementById("textw").style.color = colorArray[10];
    document.getElementById("texta2").style.color = colorArray[11];
    document.getElementById("textr2").style.color = colorArray[12];
    document.getElementById("texts4").style.color = colorArray[13];
  }
*/
function AnimateFight2Saber(){
  gsap.to(".saber-blue", {
    duration: 2,
    rotation: 200,

    y: 35,
    x:50,
    ease: "power4"
 });
 
 gsap.to(".saber-green", {
    duration: 2,
    rotation: -20,
    y: -10,
    x: -100,
    scale: 1,
    ease: "power4",
 });
 
 gsap.to(".saber-red", {
    duration: 2,
    rotation: 20,
    y: -10,
    x: -100,
    ease: "power4",
 });
 
 //gsap.to(window, {duration: 2, scrollTo: ".align"});
 
}
function App() {

  const [isHover, setIsHover] = useState(
    false
  );
  const [isHovering, setIsHovering] = useState(
    false
  );
  const [totalCount, setTotalCount] = useState(
    10
  );
  /*
  useEffect(() => {

    if (totalCount >= 0){
    const intervalId = setInterval(function(){
        Animate();
        setTotalCount(totalCount - 1);
        if (isHover & totalCount === 0){
          setTotalCount(50);
        }
        //console.log(totalCount)
        
    }, 90)
    return () => clearInterval(intervalId);
    }
  }, [isHover,totalCount])
  */
  const [play, { stop }] = useSound(
    swordSfx,
    { volume: 0.5 }
  );
  const [buttonPlay] = useSound(
    buttonSfx,
    { volume: 0.5 }
  );
  const triggerbuttonin = () => {
    buttonPlay();
    setTotalCount(50);
  };
  const logoclickin = () => {
    play();
    AnimateFight2Saber()
  };

  const logotriggerout = () => {
    stop();
  };

  const triggerin = () => {
    setIsHover(true);
    setTotalCount(50);
  };

  const triggerout = () => {
    setIsHover(false);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <StarWars hoverin={triggerin} hoverout={triggerout} logoclick={logoclickin} logohoverout={logotriggerout} buttonclick={triggerbuttonin}/>
      </header>
    </div>
  );
}

export default App;
