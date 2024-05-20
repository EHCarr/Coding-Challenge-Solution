import { useState } from 'react';

const GameColumn = ( { column, index, onClick } ) => {
    return (
        <div className='column' key={`column-${index}`} onClick={onClick}>
            {column.map((cell, x) => {
                return <span className='cell' key={`cell${index}-${x}`}>{cell}</span>
            })}
        <style jsx>{`
        .column {
            display: flex;
            flex-direction: column-reverse;
            flex-grow: 1;
            border: 1px solid blue;
            padding: 10px; 
        }
        .cell {
            flex-grow: 1;
            display: flex;
            justify-content: center; 
            align-items: center;
            height: 30px;
        }     
        `} </style>
        </div>
    )
}

const playerOne = "🟡"
const playerTwo = "🔴"


const WeekFour = () => {
    let start = {};
    for (let col = 0;  col < 7; col++) {
        start[col] = [null, null, null, null, null, null];
    }

    const [gameState, setGameState] = useState(start);
    const [winner, setWinner] = useState(null);
    const [currentPlayer, setCurrentPlayer] = useState(playerOne);

    const gameOver = (currentPlayer) => {
        let column; 

        for(let x = 0; x < 7; x++) {
            for(let y = 0; y < 6 - 3; y++){
                if(gameState[x][y] != null &&
                gameState[x][y] == gameState[x][y+1] && 
                gameState[x][y+1] == gameState[x][y+2] &&
                gameState[x][y+2]== gameState[x][y+3]
                )
                return true 
            }

        }

        for(let x = 0; x < 7 -3; x++) {
            for(let y = 0; y < 6; y++){
                if(gameState[x][y] != null &&
                gameState[x][y] == gameState[x][y+1] && 
                gameState[x][y+1] == gameState[x][y+2] &&
                gameState[x][y+1]== gameState[x][y+3]
                ) {
                    return true 
                }
            }
        }

        for(let x = 0; x < 7; x++) {
            for(let y = 0; y < 6; y++){
                if(gameState[x][y] != null &&
                gameState[x][y] == gameState[x+1][y+1] && 
                gameState[x+1][y] == gameState[x+2][y+2] &&
                gameState[x+2][y]== gameState[x+3][y+3]
                ) {
                return true
                }
            }
        }

        for(let x = 0; x < 7; x++) {
            for(let y = 5; y >= 3; y--){
                if(gameState[x][y] != null &&
                gameState[x][y] == gameState[x+1][y-1] && 
                gameState[x+1][y-1] == gameState[x+2][y-2] &&
                gameState[x+2][y-2]== gameState[x+3][y-3]
                ) {
                    return true        
                }
            }  
        }
        return false
    };

    const addPiece = (columnIndex) => {
        const column = gameState[columnIndex];
        const pos = column.indexOf(null);
        column[pos] = currentPlayer;
        setGameState({
            ...gameState,
            [columnIndex]: column
        });

        if(gameOver(currentPlayer)) {
            setWinner(currentPlayer)
        }
        setCurrentPlayer(currentPlayer === playerOne ? playerTwo : playerOne)
    }

        
    return (
            <div className="board">
                <div>{winner && <h1>{winner} is the winner</h1>}</div>
                Current player is {currentPlayer}.
                {Object.entries(gameState).map(([k,column], x) => {
                    return <GameColumn column={column} index={x} onClick={() => addPiece(x)} />;
                })}
                <style jsx>{`
                    .board {
                        display: flex;
                        flex: 1;
                    }
               `}</style>
            </div>      
        );
    }



export default WeekFour;