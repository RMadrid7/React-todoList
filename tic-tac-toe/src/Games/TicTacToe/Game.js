import React from 'react';
import Board from "./Board";

class TicTacToe extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            history:[
                {
                    squares:Array(9).fill(null),
                }
            ],
            stepNumber:0,
            xIsNext:true,
        }
    }

    handleClick(i){
        const history = this.state.history.slice(0,this.state.stepNumber + 1);
        const current = history[history.length-1];
        const squares = current.squares.slice();
        if(squares[i] || calculateWinnder(squares)){
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history:history.concat([
                {
                    squares:squares,
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        })
    }

    jumpTo(move){
        this.setState({
            history:this.state.history.slice(0,move + 1),
            stepNumber:move,
            xIsNext: (move%2) === 0,
        })
    }
    
    render(){
        const history = this.state.history.slice(0,this.state.stepNumber + 1);
        const current = history[history.length-1];
        const squares = current.squares;
        const winner = calculateWinnder(squares);
        const tip = winner ? "The Winner is: " + winner : "The Next Player is:" + (this.state.xIsNext ? "X" : "O"); 
        const moves = history.map((step,move)=>{
            const message = move ? "Move To Step " + move : "Move to Start";
            return (
                <li key={move}>
                    <button onClick={()=>this.jumpTo(move)}>
                        {message}
                    </button>
                </li>
            )
        })
        return(
            <div className="game">
                <div className="game-board">
                    <Board 
                        squares = {squares}
                        onClick = {(i)=>this.handleClick(i)}
                    />
                </div>
                <div className ="game-info">
                    <div className="game-tip">
                        {tip}
                    </div>
                    <div className="game-history">
                        {moves}
                    </div>
                </div>
            </div>
        )
    }
}

export default TicTacToe;


function calculateWinnder(squares){
    const line = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i=0; i<line.length;i++){
        const [a,b,c] = line[i];
        if(squares[a] && squares[a]===squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
}