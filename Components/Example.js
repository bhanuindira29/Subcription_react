import React, { Component } from 'react'
import Bellicon from "./Bellicon.jpg"
import Bellicona from "./Bellicona.png"

class Example extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Subscribe to my Channel",
         sub:"subscribe",
         imageURL:Bellicon
      }
    }
    styles={
      fontStyle:"italic",
      color:"purple"

    }
  buttonchange=()=>{
    this.setState({
      message:"hit the bell icon",
      sub:"subscribed"
    })
  }
  imagechange=()=>{
    this.setState({
      imageURL:Bellicona,
      message:"Thank you"
    })
  }  
  render() {
    return (
      <div className='App'>
        <h1 style={this.styles}>{this.state.message}</h1>
        <button onClick={this.buttonchange}>{this.state.sub}</button>
        <p>
          <img  style={{width:"30px",height:"30px"}} src={this.state.imageURL} onClick={this.imagechange} alt='' />
        </p>
      </div>
    )
  }
}

export default Example
