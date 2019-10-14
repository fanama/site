import React from 'react'
import {  Converter } from 'react-showdown';


var Latex = require('react-latex')
var data = require('../assets/test.md')

let converter = new Converter({tables:'true',tasklists:true});


class Perceptron extends React.Component{
    constructor(){
        super()
        this.state = {
            content:undefined
        }
        
    }

    async componentDidMount(){
        await fetch(data).then(res=>{
            return res.text()
        }).then(res=>{
            this.setState({
                content:converter.convert(res)
            })
        })
    }

    render(){
        return(<div className="block">
            <h1>Perceptron</h1>
            <div className="render render-rounded">{this.state.content}</div>         
        </div>)
    }
}

export default Perceptron