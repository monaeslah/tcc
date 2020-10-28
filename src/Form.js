import React, { Component } from 'react'


export default class Forms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    
    render() {

        return (
            <>
         <div className="row">
             <div className="column">
                 <p>Checkboxes</p>

                 <label className="containerss">checkboxes
            <input type="checkbox"  />
            <span className="checkmark"></span>
            </label>
            <label className="containerss">indeterminate
            <input type="checkbox" />
            <span className="checkmark"></span>
            </label>
            <label className="containerss">disabled
            <input type="checkbox"  disabled/>
            <span className="checkmark disabled"></span>
            </label>
     

             </div>
             <div className="column">
             <p>Radio button </p>                               
                <input type="radio"  value="male" name="gender" /> Male
                <input type="radio" value="female" name="gender" /> Female
             </div>
             <div className="column">
             <p>Switch</p>
                 <span></span>
                 <span></span>
                 <span></span>
                 <span></span>
                 <span></span>
             </div>
         </div>
            </>
        )
    }


}


