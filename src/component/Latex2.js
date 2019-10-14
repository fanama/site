import React from 'react'
import { Converter } from 'react-showdown';
// import './full.css'

var Latex = require('react-latex')

let converter = new Converter({tables:'true',tasklists:true});

var sheet = require('../assets/cheatsheet/latex.md')


class Latex2 extends React.Component{
    constructor(){
        super();

        this.state = {
            latex:"come and write here!!!",
            cheatsheet:undefined
        }
    }

    async componentDidMount(){
        await fetch(sheet).then(res=>{
            return res.text()
        }).then(res=>{
            this.setState({
                cheatsheet:res
            })
        })
    }


    handleFile(event) {
        // The file's text will be printed here

        this.setState({
            latex:event.target.result
        })

}

async upload(event){
    
    var files = event.target.files;
    var reader = new FileReader();

    reader.readAsText(files[0])

    reader.onload=this.handleFile.bind(this)

    

}

download(e) {


    const text = this.state.latex
    const filename = "latex.tex"

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

    change(e){

        //l' id doit être identique au nom de variable

        const target = e.target;

        if(target.value === "" || target.value === undefined) {
            this.setState({
                [target.id] :""
        });
        }else{
            this.setState({
                [target.id] :target.value //on récupère le contenu de l'id correspondant
            });

        }

    }


    render(){
        
        let html = converter.convert(this.state.latex)

        return (<div className="block">

            <h2>Edit your Latex!!!</h2>

            <textarea 
                className="form-control"
                id="latex" 
                name="story"
                rows="5" cols="33" 
                value={this.state.latex}
                onChange={this.change.bind(this)}
            />
            <input type="file" onChange={this.upload.bind(this)} accept=".tex" />
                <button onClick={this.download.bind(this)}>download latex</button>
            
            <div className ="cheatsheet">
                <h2>rendu:</h2>
                <div className="render rounded pre-scrollable">
                    <Latex>{this.state.latex}</Latex>

                </div>


                <div className="right render rounded cheatsheet">
                    <h2>cheatsheet</h2>
                    <div className="render rounded pre-scrollable"><Latex>{this.state.cheatsheet}</Latex></div>
                </div>

            </div>

        </div>)

    }

    
}

export default Latex2;