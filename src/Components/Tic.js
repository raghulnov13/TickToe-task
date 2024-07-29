import React, { useState } from "react";
import "./Tic.css";

export default function TicTac() {
  const [board, setboard] = useState(Array(9).fill(null));
  const [isXturn, setXturn] = useState(true);
  const [winner, setWinner] = useState(null);

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleclick(index)}>
        {board[index]}
      </button>
    );
  };
  const handleclick = (index) => {
    if (board[index] != null) {
      return
    }
    console.log(index, "click");
    const newBoard = [...board];
    newBoard[index] = isXturn ? "X" : "O";
    setboard(newBoard);
    setXturn(!isXturn);
    const winnerCombination = checkWinner(newBoard);
    if (winnerCombination) {
      setWinner(newBoard[winnerCombination[0]]);
    }
  };
  const checkWinner = (newBoard) => {
    const combination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < combination.length; i++) {
      const [a, b, c] = combination[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return combination[i];
      }  
    }
    return null;
  };
  return (
    <>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(4)}
          {renderSquare(5)}
          {renderSquare(6)}
        </div>
        <div className="board-row">
          {renderSquare(7)}
          {renderSquare(8)}
          {renderSquare(9)}
        </div>
      </div>
      <button></button>
      {winner && <div>{winner} is the winner of this game</div>}
    </>
  );
}
