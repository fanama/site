import React from "react";

import {  Converter } from 'react-showdown';

let converter = new Converter({tables:'true',tasklists:true});

var data = require('../assets/dessins.md')

class Draw extends React.Component{
    constructor(){
        super()
        this.state={
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
        return(<div className="block ">
            <h2>mes dessins:</h2>
            <div className="box"><div className="drawings">{this.state.content}</div></div>
        </div>)
    }
}

export default Draw