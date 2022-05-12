import React from 'react';
import './App.css';
import { gsap, random } from "gsap";
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';


class TeamItemRow extends React.Component{
    render(){
        return(
            <li>
                <p>{this.props.loc}</p>
            </li>
        )
    }
}
class StarWars extends React.Component{
    constructor(){
        super()
        this.state = {
            loadedCharacter: false,
            name: null,
            image: null,
            height: null,
            homeworld: null,
            affiliations: [],
        }
    }

    AnimateBaseSaber(){
        gsap.to(".saber-blue", {
          duration: 2,
          rotation: 0,
          y: 3,
          x: 300,
          ease: "slowmo",
          scale: 0.5
       });
       
       gsap.to(".saber-green", {
          duration: 2,
          rotation: 0,

          y: -10,
          x: -300,
          ease: "slowmo",
          scale: 0.5, 
       });
       
       gsap.to(".saber-red", {
          duration: 2,
          rotation: 0,
   
          y: 3,
          x: -300,
          ease: "slowmo",
          scale: 0.5
       });   
       //gsap.to(window, {duration: 2, scrollTo: ".align"});
       
      }
    AnimateEntrySaber(){
        gsap.to(".saber-blue", {
          duration: 2,
          rotation: 90,
          y: 3,
          x:50,
          ease: "slowmo",
          scale: 1,
       });
       
       gsap.to(".saber-green", {
          duration: 2,
          rotation: 35,

          y: -50,
          x: -100,
          ease: "slowmo",
          scale: 0.5, 
       });
       
       gsap.to(".saber-red", {
          duration: 2,
          rotation: -90,
   
          y: 90,
          x: -100,
          ease: "slowmo",
          scale: 1,
       });   
       //gsap.to(window, {duration: 2, scrollTo: ".align"});
       
      }
      AnimateFightSaber(){
        gsap.to(".saber-blue", {
          duration: 2,
          rotation: 180,

          y: 3,
          x:50,
          ease: "power4"
       });
       
       gsap.to(".saber-green", {
          duration: 2,
          rotation: 35,
          y: -10,
          x: -100,
          scale: 1,
          ease: "circ",
       });
       
       gsap.to(".saber-red", {
          duration: 2,
          rotation: -20,
          y: -10,
          x: -100,
          ease: "circ",
       });
       //gsap.to(window, {duration: 2, scrollTo: ".align"});
       
      }
      
    componentDidMount(){
        window.addEventListener('load', this.props.hoverin());
        window.addEventListener('load', this.AnimateBaseSaber());
    }
    getNewCharacter(){
        this.props.buttonclick();
        this.AnimateEntrySaber();
        const randomNumber = Math.round(Math.random() * 82 )
        const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`
        console.log(randomNumber);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    name: data.name,
                    image: data.image,
                    height: data.height,
                    homeworld: data.homeworld,
                    affiliations: data.affiliations,
                    loadedCharacter: true,
                })
            })

    }
    render() {

        const team = this.state.affiliations.map((loc, i) => {
            return <TeamItemRow key={i} loc={loc} />
        })
      return(
          <div className='main'> 
                <div className='title'>
                <h1 onMouseOver={this.props.hoverin} onMouseLeave={this.props.hoverout}>
                        <div className='starwars-text'>
                            <img src='https://s3.amazonaws.com/csstarwars/starwars-logo.png' alt='' width={500}></img>
                            {/*
                            <span id='textT'>T</span>
                            <span id='texth'>h</span>
                            <span id='texti'>i</span>
                            <span id='texts'>s </span>
                            <span id='texti2'>i</span>
                            <span id='texts2'>s </span>
                            <span id='textS3'>S</span>
                            <span id='textt2'>t</span>
                            <span id='texta'>a</span>
                            <span id='textr'>r</span>
                            <span id='textw'>w</span>
                            <span id='texta2'>a</span>
                            <span id='textr2'>r</span>
                            <span id='texts4'>s</span>
                            */}
                        </div>
                    </h1>
                    <div class="align">
                            <div className="sabers">
                                <div className="saber-blue saber">
                                <div className="punho">
                                    <div className="button"></div>
                                </div>
                                </div>
                                <div className="saber-green saber">
                                <div className="punho">
                                    <div className="button"></div>
                                </div>
                                </div>
                                <div className="saber-red saber">
                                <div className="punho">
                                    <div className="button"></div>
                                </div>
                                </div>
                            </div>
                        </div>
                    <div onMouseDown={this.props.logoclick} className='card'>
                        {   this.state.image &&
                             <img className='card' src={this.state.image} alt="ImageUnavailable"  width={500}></img>
                        }
                    </div>

                </div>
                <div>
                    {
                        this.state.loadedCharacter && 
                        <div className='starwars-data'>
                            <h1>{this.state.name}</h1>
                            <p>{this.state.height} cm</p>
                            <p className='homeworld-link'><a href={this.state.homeworld}>Homeworld</a></p>
                            <ul className='affiliations-items'>
                                {team}
                            </ul>
                        </div>
                    }
                    <button 
                        className="pushable" 
                        onClick={() => this.getNewCharacter()}>
                        <span className="front">
                            Randomize Character
                        </span>
                    </button>
                </div>
        </div>
      )
    }
    
  }

  export default StarWars;