import { useState } from 'react';
import Square from './Square.js';
import './Grid.css'

var rows = 5;
var cols = 5;

// var matrix = [];
function Grid() {
    var mines = 4;
    const [matrix, setMatrix] = useState(Array(rows).fill(Array(cols).fill(null)));
    // console.log(matrix);
    const moves = matrix.map((row, i) => {
        row.map((cell, j) => {
            let square_value = mines > 0 ? (Math.random() < 0.5 ? '*' : rows * i + j) : rows * i + j;
            if (square_value === '*') {
                --mines;
            }
            
            op_grid[i].push(square_value === '*' ? 1 : 0);
            
            return (
                <Square key={rows * i + j} value={square_value} onLeftClick={() => onLeftClick(i, j)} onRightClick={() => onRightClick(i, j)}/>
            );
        });
        return row;
    });
    console.log("=======================================")
    var op_grid = [];
    if (!op_grid.length){
        // generateGrid(matrix, mines);
    }
    // for(let i=0; i<rows;i++){
    //     matrix.push([]);
    //     op_grid.push([]);
    //     for(let j=0; j<cols;j++){
    //         let square_value = mines > 0 ? (Math.random() < 0.5 ? '*' : rows * i + j) : rows * i + j;
    //         if (square_value === '*') {
    //             --mines;
    //         }
    //         op_grid[i].push(square_value === '*' ? 1 : 0);
    //         matrix[i].push(<Square key={rows * i + j} value={square_value} onLeftClick={() => onLeftClick(i, j)} onRightClick={() => onRightClick(i, j)}/>);
    //     }
    // }
    function onLeftClick(x, y){
        console.log(x, y);
    }
    
    function onRightClick(x, y){
        console.log(x, y);
        op_grid[x][y] = 'X';
        matrix[x][y] = 'X';
        setMatrix(matrix);
    }
    // console.log(matrix);
    return (
        <div className='grid'>
            {moves}
        </div>            
        
    )
    function generateGrid(matrix, mines){

        // var op_grid = [];
        for(let i=0; i<rows;i++){
            // matrix.push([]);
            op_grid.push([]);
            
            for(let j=0; j<cols;j++){
                let square_value = mines > 0 ? (Math.random() < 0.5 ? '*' : rows * i + j) : rows * i + j;
                if (square_value === '*') {
                    --mines;
                }
                
                op_grid[i].push(square_value === '*' ? 1 : 0);
                
                matrix[i].push(<Square key={rows * i + j} value={square_value} onLeftClick={() => onLeftClick(i, j)} onRightClick={() => onRightClick(i, j)}/>);
            }
        }
    }
}




export default Grid;

// value={j} onSquareClick={someFunc}