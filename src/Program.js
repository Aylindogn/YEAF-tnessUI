import React, { useState } from 'react'

const MOVES=[{moveName:'Mekik',moveCount:30},{moveName:'Şınav',moveCount:30}]

const Program = (props) => {


    return(
        <div className='programWrapper'>
            <h2>Program Detayları</h2>
    <div className='programContent'>
    {MOVES.map(move=>{
        return <h4>{move.moveName}:<span>{move.moveCount}</span></h4>
     })}
    </div>
        </div>
    )
}

export default Program;