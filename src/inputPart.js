

import React, { Component } from 'react'



export default class InputSet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message1: false,
            message: false
        }
    }
    handleChangeCorrect = (e) => {
        if (e.target.value.length >= 0) {

            this.setState({ message: true })
        }
        if (e.target.value.length === 0) {

            this.setState({ message: false })
        }

    }
    handleChangeInCoorect = (e) => {
        if (e.target.value.length >= 0) {

            this.setState({ message1: true })
        }
        if (e.target.value.length === 0) {

            this.setState({ message1: false })
        }
        console.log("warning", e.target.value)
    }
    render() {

        return (
            <>
                <div className="allGroup">
                <div className="">
                        <input type="text" name="name" className="disable " disabled placeholder='متن خواسته شده' />

                    </div>
                    <div className="">
                        <input type="text" name="name" className="InState " placeholder='متن خواسته شده' />

                    </div>
                 
                    <div className=" message">
                        <input type="text" onChange={this.handleChangeCorrect} name="name" className={`Correct2 ${this.state.message ? "Correuct" : ""}`} placeholder='متن خواسته شده' />
                    <p className={` ${this.state.message ? "Correuct" : ""}`}>{this.state.message ? "پیغام" : ""}</p>
                    </div>                            
                    <div className=" message">
                        <input type="text" onChange={this.handleChangeInCoorect} name="name" className={`InCorrect3 ${this.state.message1 ? "inCorreuct" : ""}`} placeholder='متن خواسته شده' />
                    
                        <p className={` ${this.state.message1 ? "inCorreuct" : ""}`}>{this.state.message1 ? "پیغام" : ""}</p>
                    </div>

                </div>
                <textarea className="TextArea" placeholder='متن خواسته شده'>

                </textarea>
            </>
        )
    }


}
