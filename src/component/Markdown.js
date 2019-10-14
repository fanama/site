import React from 'react'
import { Converter } from 'react-showdown';
// import './full.css'
import html2canvas from 'html2canvas'
import * as jsPDF from "jspdf"


window.html2canvas = html2canvas

let converter = new Converter({tables:'true',tasklists:true});

var sheet = require('../assets/cheatsheet/Markdown.md')

class Markdown extends React.Component{
    constructor(){
        super();

        this.state = {
            markdown:"come and write **here**!!!",
            cheatsheet:undefined,
            pdf:"vous n'avez rien ecri"
        }
    }

    async componentDidMount(){
        await fetch(sheet).then(res=>{
            return res.text()
        }).then(res=>{
            this.setState({
                cheatsheet:converter.convert(res)
            })
        })
    }

    handleFile(event) {
            // The file's text will be printed here

            this.setState({
                markdown:event.target.result
            })

    }

    async upload(event){
        
        var file = event.target.files[0];
        var reader = new FileReader();

        reader.onload = this.handleFile.bind(this)

        reader.readAsText(file);

    }

    async downloadPDF(){

        const div = document.getElementById("pdf")
        let pdf = div.innerHTML

        console.log(pdf)

        var doc = new jsPDF()

        let pdf1 = pdf.split("<p>")
        let pdf2 = []
        for (var e of pdf1){
            pdf2.push(e.split("</p>"))
        }

        console.log(pdf2)

    }

    download(e) {


        const text = this.state.markdown
        const filename = "markdown.md"

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
        
        var html =converter.convert(this.state.markdown);

        return (<div className="block">

                <h2>Edit your Markdown!!!</h2>

                <textarea 
                    className="form-control"
                    id="markdown" 
                    name="story"
                    rows="5" cols="33" 
                    value={this.state.markdown}
                    onChange={this.change.bind(this)}
                />
                <input type="file" onChange={this.upload.bind(this)} accept=".md" />
                <button onClick={this.download.bind(this)}>download Markdown</button>
                {/* <button onClick={this.downloadPDF.bind(this)}>download PDF</button> */}

                <br /> <br />
                <div className ="cheatsheet">
                    <h2>rendu:</h2>
                    <div id="pdf" className="render rounded left pre-scrollable">
                    {html}
                    </div>

                    
                <div className="right render rounded cheatsheet">
                    <h2>cheatsheet</h2>
                    <div className="render rounded pre-scrollable">{this.state.cheatsheet}</div>
                </div>
            </div>

        </div>)

    }

    
}

export default Markdown;