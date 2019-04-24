import React, {Component} from 'react';

class ClickyCounter extends Component{
    constructor(props){
        super(props)
            this.state = {number: props.count || 0}
    }


    render(){
        return (
            <div>
                <h3>
                    {this.state.number}
                </h3>
                <button 
                onClick={this._updateCounter}
                >
                +
                </button>

                <button
                onClick={this._decrementCounter}
                >
                -
                </button>
            </div>
        )
    }
    _decrementCounter = ()=>{
        this.setState({
            number: this.state.number - 1
        })
    }

    _updateCounter = ()=>{
        this.setState({
            number: this.state.number + 1
        })
    }
}



export default ClickyCounter;