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
            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="containerss">indeterminate
            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="containerss">disabled
            <input type="checkbox" disabled />
                            <span className="checkmark disabled"></span>
                        </label>


                    </div>
                    <div className="column">
                    <p>Checkboxes</p>
                        <label class="containerRadio">active
                        <input type="radio" checked="checked" name="radio" />
                            <span class="checkmarkRadio"></span>
                        </label>
                     
                        <label class="containerRadio">disabled
                            <input type="radio" name="radio" />
                            <span class="checkmarkRadio disabled"></span>
                        </label>
                     
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


