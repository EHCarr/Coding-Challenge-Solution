import { useState } from 'react';
import { Button, Text } from '@mantine/core';

const GameColumn = ({ column, index, onClick }: any) => {
    return (
        <div className='column' onClick={onClick}>
            {column.map((cell: any, x: any) => (
                <span className='cell' key={`cell${index}-${x}`}>{cell}</span>
            ))}
            <style>{`
                .column {
                    display: flex;
                    flex-direction: column-reverse;
                    flex-grow: 1;
                    padding: 5px;
                    cursor: pointer;
                }
                .cell {
                    flex-grow: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 60px;
                    height: 60px;
                    border: 2px solid #333;
                    background-color: #fff;
                    font-size: 30px;
                    margin: 2px;
                    border-radius: 10px;
                }     
            `}</style>
        </div>
    );
};

const playerOne = "🟡";
const playerTwo = "🔴";

const WeekFour = () => {
    let start: { [key: number]: (null | any)[] } = {};
    for (let col: number = 0; col < 7; col++) {
        start[col] = [null, null, null, null, null, null];
    }

    const [gameState, setGameState] = useState(start);
    const [winner, setWinner] = useState<any>(null);
    const [currentPlayer, setCurrentPlayer] = useState(playerOne);

    const gameOver = (currentPlayer: string) => {
        // Horizontal, vertical, and diagonal checks
        for (let x = 0; x < 7; x++) {
            for (let y = 0; y < 6 - 3; y++) {
                if (gameState[x][y] && gameState[x][y] === gameState[x][y+1] && gameState[x][y+1] === gameState[x][y+2] && gameState[x][y+2] === gameState[x][y+3]) {
                    return true;
                }
            }
        }

        for (let x = 0; x < 7 - 3; x++) {
            for (let y = 0; y < 6; y++) {
                if (gameState[x][y] && gameState[x][y] === gameState[x+1][y] && gameState[x+1][y] === gameState[x+2][y] && gameState[x+2][y] === gameState[x+3][y]) {
                    return true;
                }
            }
        }

        for (let x = 0; x < 7 - 3; x++) {
            for (let y = 0; y < 6 - 3; y++) {
                if (gameState[x][y] && gameState[x][y] === gameState[x+1][y+1] && gameState[x+1][y+1] === gameState[x+2][y+2] && gameState[x+2][y+2] === gameState[x+3][y+3]) {
                    return true;
                }
            }
        }

        for (let x = 0; x < 7 - 3; x++) {
            for (let y = 3; y < 6; y++) {
                if (gameState[x][y] && gameState[x][y] === gameState[x+1][y-1] && gameState[x+1][y-1] === gameState[x+2][y-2] && gameState[x+2][y-2] === gameState[x+3][y-3]) {
                    return true;
                }
            }
        }

        return false;
    };

    const addPiece = (columnIndex: number) => {
        const column = gameState[columnIndex];
        const pos = column.indexOf(null);
        if (pos === -1 || winner) return;
        column[pos] = currentPlayer;
        setGameState({
            ...gameState,
            [columnIndex]: column
        });

        if (gameOver(currentPlayer)) {
            setWinner(currentPlayer);
        } else {
            setCurrentPlayer(currentPlayer === playerOne ? playerTwo : playerOne);
        }
    };

    return (
        <>
            <Text  ta="center" size="xl" fw={700}>Current player is {currentPlayer}</Text>
       
        <div className="board">
            
        
            {Object.entries(gameState).map(([k, column], x) => (
                <GameColumn key={`column-${x}`} column={column} index={x} onClick={() => addPiece(x)} />
            ))}
            <style>{`
                .board {
                    display: flex;
                    justify-content: center;
                    margin: 20px;
                    background-color: #f0f0f0;
                    padding: 10px;
                    border-radius: 10px;
                }
            `}</style>
            
        </div>
        <div>
        <Text ta="center" size="xl" fw={700}>{winner && <h1>{winner} is the winner</h1>}</Text>
        <Button  onClick={() => window.location.reload()}>Reset</Button>
        </div>
        </>
    );
};

export default WeekFour;
