import React from 'react'

export default class Form extends React.Component{
    state={
        'firstName':'',
        'lastName':'',
        'enquiries':'Support',
        'country': 'Singapore',
        'contact':[],
        'message':'',
        'message2':'',
        'message3':'',
        'message4':'',
        'message5':'',


    }


    render(){
        return(
            <React.Fragment>
                <div>
                <label>First Name</label>
                <input type='text' value={this.state.firstName} onChange={this.updatefirstName}></input>
                </div>

                <div>
                <label>Last Name</label>
                <input type='text' value={this.state.lastName} onChange={this.updatelastName}></input>
                </div>
                <div>
                    <label>Enquiries</label>
                    <input type="radio" name="enquiries" value="Support" onChange={this.updateEnquiries} checked={this.state.enquiries === 'support'}/><span>Support</span>
                    <input type="radio" name="enquiries" value="Sales" onChange={this.updateEnquiries} checked={this.state.enquiries === 'sales'}/><span>Sales</span>
                    <input type="radio" name="enquiries" value="Market" onChange={this.updateEnquiries} checked={this.state.enquiries === 'market'}/><span>Market</span>
                </div>
                <div >  
                <label>Country:</label>
                    <select onChange={this.updateCountry} value={this.state.country}>                     
                        <option value="Singapore">Singapore</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Thailand">Thailand</option>
                    </select>
                </div>
                
                <div>
                    <label>Contact:</label>
                    <input type="checkbox" name="contact" value="Email" onChange={this.updateContact} /><span>Email</span>
                    <input type="checkbox" name="contact" value="Phone Number" onChange={this.updateContact} /><span>Phone Number</span>
                    <input type="checkbox" name="contact" value="Slow Mail" onChange={this.updateContact} /><span>Slow Mail</span>
                    
                </div>

                <div>
                <input type="submit" value="Submit" onClick={this.alertbox}></input>
                </div>

                <div>
                    <h1 style={{
                        border: "1px solid black",
                        padding: "20px",
                        width: "500px",
                        height: "400px",
                        'margin-left':'300px',
                        }}>{this.state.message}<br />{this.state.message2}<br />{this.state.message3}<br />{this.state.message4}<br />{this.state.message5}</h1>
                </div>
                </React.Fragment>
        )
    }

    alertbox=()=>{
        this.setState({
            'message': 'First Name: '  + this.state.firstName,
            'message2': 'Last Name: ' +  this.state.lastName , 
            'message3': 'Enquiries: '+ this.state.enquiries,
            'message4': 'Country: '+ this.state.country,
            'message5': 'Contact: '+ this.state.contact
        })
        
    }

    updateContact = (evt) => {
        // if we want to mutuate (i.e modify) an array that is in the state,
        // we cannot modify it directly, so the following won't work:
        // this.state.fruits.push(evt.target.value);

        // CHECK if the value is already inside the array
        if (this.state.contact.includes(evt.target.value)) {
            // the value is already in the array

            // 1. make a copy of the original array
            let clone = this.state.contact.slice();

            // 2. remove the element from the array

            // 2a find the index of the value
            let index = this.state.contact.indexOf(evt.target.value)
            clone.splice(index, 1); 

            // 3. use setState to update the array in state
            this.setState({
                'contact': clone
            })

        } else {
            // 1. make a copy of the original array
            let clone = this.state.contact.slice();

            // 2. change the copy (clone) of the array
            clone.push(evt.target.value);

            // 3. use setState to update the array in the state
            this.setState({
                'contact': clone
            })
        }
    }
    updatefirstName=(evt)=>{
        this.setState({
            'firstName':evt.target.value
        })
    }

    updatelastName=(evt)=>{
        this.setState({
            'lastName':evt.target.value
        })
    }
    updateEnquiries = (evt) => {
        this.setState({
            'enquiries': evt.target.value
        })
    }

    updateCountry = (evt) => {
        this.setState({
            'country': evt.target.value
        });
    }

}
