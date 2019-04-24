import React, { Component } from 'react'

    export class Leet extends Component {

    render() {
        return (
        <div>
            {this._toLeetSpeek()}
        </div>
        )
    }
    _toLeetSpeek = ()=>{
        let {greetMe} = this.props
        let leet = {
            "L":"1",
            "E":"3",
            "T":"7",
            "S":"5",
            "A":"4",
            "O":"0",
            "G":"6",
            "B":"8",
            "Z":"2" 
        }
        let result = ''
        let keys = Object.keys(leet)
        for (let i = 0; i < greetMe.length;i++ ){
            let eachLetter = greetMe[i]
            if (keys.includes(eachLetter.toUpperCase())){
                result+= leet[eachLetter.toUpperCase()]
            }else{
                result += eachLetter
            }
        }
        return result
    }
}


export default Leet

