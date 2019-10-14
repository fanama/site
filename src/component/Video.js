import React from "react";

class Video extends React.Component{
    constructor(){
        super()
        this.state={
            urls:[
                "https://www.youtube.com/watch?v=pFnWPTq3458",
                "https://www.youtube.com/watch?v=32fXJ_rnz9E"
            ]
        }
    }

    render_url(){
        var frame = this.state.urls.map((url)=>{
            return(<div>
                <iframe src={url}></iframe>
            </div>
            )
        })

        return frame
    }

    render(){
        return(<div>
            <h2>mes vidéos:</h2>
            {this.render_url()}
        </div>)
    }
}

export default Video