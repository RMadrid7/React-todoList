import React from 'react';
import Square from './Square';
class Board extends React.Component{
    renderSquares(i){
        return(
            <Square 
                onClick = {()=>this.props.onClick(i)}
                value = {this.props.squares[i]}
            />
        )
    }
    render(){
        return(
            <div>
                <div className="board-row">
                    {this.renderSquares(0)}
                    {this.renderSquares(1)}
                    {this.renderSquares(2)}
                </div>
                <div className="board-row">
                    {this.renderSquares(3)}
                    {this.renderSquares(4)}
                    {this.renderSquares(5)}
                </div>
                <div className="board-row">
                    {this.renderSquares(6)}
                    {this.renderSquares(7)}
                    {this.renderSquares(8)}
                </div>
            </div>
        )
    }

}

export default Board;