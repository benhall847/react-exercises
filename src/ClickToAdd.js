    import React, { Component } from 'react'
import ClickyCounter from './ClickyCounter';

    export class ClickToAdd extends Component {
        constructor(props){
            super(props)
                this.state = {
                    buttons :[]
                }
        }
    render() {
        return (
            <div>

                <div>
                    {[...this.state.buttons]}
                </div>
                <button onClick={this._createClickyButton}>
                CLICK ME
                </button>
            </div>
        )
    }
    _createClickyButton = ()=>{
        this.setState({
            buttons: this.state.buttons.concat(<ClickyCounter></ClickyCounter>)
        })
        
    }
    }

    export default ClickToAdd
