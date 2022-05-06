import React from 'react';
import './TextBox.css'

class TextBox extends React.Component {
    render(){
      return(
        <div className='hat'>
        <label for='name'>Type your name</label>
        <input type="text" id="name" name="name" />
        <label for='age'>Type your age</label>
        <input type='text' id='age' name='age' />
        </div>
      )
    }
  }

  export default TextBox;