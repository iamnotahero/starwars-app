import React from 'react';

class Item extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            clicks: 0,
            maxClick: 50,
        }
    }
    ClickMe(){
        if (this.state.clicks < this.state.maxClick)
        this.setState({
            clicks: this.state.clicks + 1,
            maxClick: this.state.maxClick + this.state.clicks/this.state.maxClick* Math.random(2),
        })
    }
    render(){
      return(
        <div>
            <h1 onClick={() => this.ClickMe()}>
                Hello from {this.props.name}
            </h1>
            <span>Clicks: {this.state.clicks}</span>
            <span>MaxClick: {Math.floor(this.state.maxClick)}</span>
        </div>
      )
    }
  }

  export default Item;