import { useState, useEffect } from 'react';
import './Square.css'


function Square({value, onLeftClick, onRightClick}) {
  useEffect(() => {
      const handleContextmenu = e => {
          e.preventDefault()
      }
      document.addEventListener('contextmenu', handleContextmenu)
      return function cleanup() {
          document.removeEventListener('contextmenu', handleContextmenu)
      }
  }, [ ])

  return (
    <button className="square" onContextMenu={onRightClick} onClick={onLeftClick}>
      {value}
    </button>
    
  );
}


export default Square;