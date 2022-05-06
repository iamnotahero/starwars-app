import React from 'react';
import logo from './giphy.gif';
import './App.css';
class StarWars extends React.Component{
    constructor(){
        super()
        this.state = {
            loadedCharacter: false,
            name: null,
            height: null,
            homeworld: null,
            films: [],
        }
    }
    componentDidMount(){
        window.addEventListener('load', this.props.hoverin());
    }
    getNewCharacter(){
        this.props.buttonclick();
        const randomNumber = Math.round(Math.random() * 82 )
        const url = `https://swapi.dev/api/people/${randomNumber}/`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    name: data.name,
                    height: data.height,
                    homeworld: data.homeworld,
                    films: data.films,
                    loadedCharacter: true,
                })
            })

    }
    render() {
      return(
          <div> 
                <div>
                    <h1 onMouseOver={this.props.hoverin} onMouseOut={this.props.hoverout}>
                        <div onMouseEnter={this.props.logohoverin} onMouseLeave={this.props.logohoverout} className='logoimg'></div>
                        <div className='starwars'>
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
                        </div>
                    </h1>
                </div>
                <div className='starwars-data'>
                    {
                        this.state.loadedCharacter && 
                        <div>
                            <h1>{this.state.name}</h1>
                            <p>{this.state.height} cm</p>
                            <p className='homeworld-link'><a href={this.state.homeworld}>Homeworld</a></p>
                            <ul>
                                <li>{this.state.films}</li>
                            </ul>
                        </div>
                    }
                    <button 
                        class="pushable" 
                        onClick={() => this.getNewCharacter()}>
                        <span class="front">
                            Randomize Character
                        </span>
                    </button>
                </div>
        </div>
      )
    }
    
  }

  export default StarWars;