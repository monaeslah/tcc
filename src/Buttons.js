import React, { Component } from 'react'


export default class Buttons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    
    render() {

        return (
            <>
            <div className="btnFeilds">
            <p>primary</p>
              <button className="purple">
                  hover
              </button>
              <button className="black">
                 hover
              </button>
              <button className="red">
                 hover
              </button>
              <button className="green">
                 hover
              </button>
              <button className="orange">
                 hover
              </button>
              <button disabled className="disable">
               
              </button>
            </div>
            <div className="btnFeilds">
            <p>Secondary</p>
           
              <button className="SEpurple">
                  hover
              </button>
           
              <button className="SEgreen">
                 hover
              </button>
              <button className="SEorange">
                 hover
              </button>
              
              <p>Tertiary</p>
              <button className="TERpurple">
                  hover
              </button>
              <button className="TERgreen">
                 hover
              </button>
              <button className="TERorange">
                 hover
              </button>
            </div>
            <div className="widthBtn">
              <button className="one"></button>
              <button className="two"></button>
              <button className="three"></button>
              <button className="four"></button>
              <button className="five"></button>
          </div>
          <div className="sendGroup">
              <button className="send">ارسال</button>
              <button className="sendOne">ارسال</button>
              <button className="sendTwo">ارسال</button>
          </div>
            </>
        )
    }


}


