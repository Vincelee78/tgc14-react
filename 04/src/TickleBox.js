import React from 'react'

export default class Ticklebox extends React.Component{
    state={
        'message':'abc'
}

render(){
    return(
        <React.Fragment>
            <div style={{border: this.props.border}}>:hover selector {this.state.message}</div>
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