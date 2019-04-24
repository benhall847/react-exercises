import React, { Component } from 'react'

    export class Cipher extends Component {
        
    render() {
        return (
        <div>
            {this._cipher()}
        </div>
        )
    }
    _cipher = ()=>{
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWYXZ abcdefghijklmnopqrstuvwyxz "
        const {theText} = this.props
        let results = ''
        for (let i = 0; i < theText.length; i++){
            let eachLetter = theText[i]
            if (alphabet.includes(eachLetter)){
                let alphabetIndex = alphabet.indexOf(eachLetter)
                results += alphabet[alphabetIndex + 2]
            }else{
                results += eachLetter
            }
        }
        return results
    }



    }


export default Cipher