    import React, { Component } from 'react'

    export class BounceCounter extends Component {
        constructor(props){
            super(props)
                this.state = {
                    number:1,
                    counter:props.countBy
                };
        }
    componentDidMount(){
        setInterval(()=>{
            this._checkState()
            this.setState({number: this.state.number + this.state.counter})
        }, 100)
    }

    render() {
        return (
        <div>
            {this.state.number}
        </div>
        )
    }
    _checkState = ()=>{
        console.log(this.state.number)
        if(this.state.number >= this.props.upperLimit ){
            this.setState({
                counter:-this.state.counter
            })
        }else if (this.state.number <= this.props.lowerLimit){
            this.setState({
                counter:-this.state.counter
            })
        }
    }
}

    export default BounceCounter
