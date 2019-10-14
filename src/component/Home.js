import  React from "react";
import { Markdown as Showdown , Converter } from 'react-showdown';

let converter = new Converter({tables:'true',tasklists:true});


var data = require('../assets/Home.md')
let logo0 = require('../assets/Mark.md')

class Home extends React.Component{
    constructor(){
        super()
        this.state={
            content:undefined,
            logo:undefined,
            latex:undefined

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


        await fetch(logo0).then(res=>{
            return res.text()
        }).then(res=>{
            this.setState({
                logo:converter.convert(res)
            })
        })
    }

    render(){
        return(<div className="block">
            <h1>Description</h1>
            <div className="render rounded body cheatsheet">{this.state.content}</div>
            <h2>Edition de document</h2>
            <div className="render rounded body cheatsheet">{this.state.logo}</div>
        </div>)
    }
}

export default Home