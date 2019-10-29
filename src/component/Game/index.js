import React from 'react'
import './game.css'

const h = 500
const w = 500

export default class Game extends React.Component{

    constructor(){
        super()

        this.state = {
            snake:[{top:10,left:10}],
            food:{top:10,left:10},
            score:0,
            pos:"down"

        }
    }

    componentDidMount(){
        document.onkeydown = this.onkeydown.bind(this)
    }

    onkeydown(e){
        e = e || window.event
        e.preventDefault()

        let snake = this.state.snake

        let head = snake[0]

        let food = this.state.food

        for (let s of snake){
            if(food.top===s.top-10 && food.left===s.left){
                this.higher()
            }
        }
        

        switch(e.keyCode){
            case 38:
                //haut
                head.top-=10
                if (head.top<0){head.top+=10}

                this.setState({
                    snake:snake,
                    pos:"up_walk"
                })
                break;
            case 40:
                    //bas
                    head.top+=10
                    if (head.top>h-10){head.top-=10}
                    this.setState({
                        snake:snake,
                        pos:"down_walk"
                    })
                break;
            case 37:
                //gauche
                head.left-=10
                if (head.left<0){head.left+=10}
                this.setState({
                    snake:snake,
                    pos:"left_walk"
                })
                break;
            case 39:
                //droite
                head.left+=10
                if (head.left>w-10){head.left-=10}
                this.setState({
                    snake:snake,
                    pos:"right_walk"
                })
                break;
        }

        
    }

    renderSnake(){
        let snake = this.state.snake
        let food = this.state.food
        

        let res = snake.map((block)=>{
            return(<div className={this.state.pos} key={Math.random()} style={{top:block.top,left:block.left}}></div>)
        })

        return(<div>{res}</div>)
    }

    higher(){
        console.log("cling")

        let snake = this.state.snake

        //snake.push(snake[0])

        let x = Math.floor(Math.random()*10)*50
        let y = Math.floor(Math.random()*10)*50

        let score = this.state.score+1


        this.setState({
            food:{top:y,left:x},
            // snake:snake,
            score:score
        })
    }


    render(){
        return(<div >
            <div>score:{this.state.score}</div>
            <div className="board" style={{height: `${h}px`,width:`${w}px`}}>
            
            <div className="snake" >
                {this.renderSnake()}
            </div>
            <div className="food" style={{marginTop:this.state.food.top,marginLeft:this.state.food.left}} ></div>
        </div>
        </div>)
    }

}