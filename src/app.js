import React, { useState, useEffect } from "react";
import './index.css'
import Cell from './Component/Cells'

function App(){

    const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])
    const [go, setGo] = useState('circle')
    const [winMsg, setWinMsg] = useState(null)

    const message = ''

    const checkScore = () => {
        const winningCombo = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [3,5,8],
            [0,4,8], [2,4,6]
        ]

        winningCombo.forEach(array => {
            let circleWins = array.every(cell => cells[cell] === 'circle')
            if (circleWins){
                setWinMsg('Circle Wins!')
                return
            }
        })

        winningCombo.forEach(array => {
            let crossWins = array.every(cell => cells[cell] === 'cross')
            if (crossWins){
                setWinMsg('Cross Wins!')
                return
            }
        })
    }

    useEffect(() => {
        checkScore()
    }, [cells])

    return(
        <div className="app">
            <h4 className="mt-4 pt-4 mb-2 pb-2 title">Play this Tic Tac Toe game for me</h4>
            <div className="container gameboard text-center mx-auto">
                {cells.map((cell, index) => 
                <Cell 
                    key={index} 
                    id={index} 
                    cell={cell} 
                    setCells={setCells}
                    go={go}
                    setGo={setGo}
                    cells={cells}
                    winMsg={winMsg}
                />)}
            </div>
            <p id="winMsg">{winMsg || message}</p>
        </div>
    );
}

export default App;