import React from 'react'

export default class Alertbox extends React.Component{
    state={
        message: this.props.initialmessage
}

render(){
    return(
        <React.Fragment>
            <div style={{border: this.props.border}}><h1>{this.state.message}</h1></div>
            <button onClick={this.change}>Change message</button>
        </React.Fragment>
    )
}

change = () =>{
    
    this.setState({
        'message': 'Warning'
    })
}
}