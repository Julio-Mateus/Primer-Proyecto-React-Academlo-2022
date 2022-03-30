import React, { useState } from 'react';
import quotes from '../quotes.json';


const getNote = () => Math.floor(Math.random() * quotes.quotes.length)

const colors = ['#845EC2', '#2C73D2', '#0081CF', '#0089BA', '#008E9B', '#008F7A'];

const Card = () => {
    const [ note, setNote ] = useState(quotes.quotes[getNote()]);
   // const nota = quotes.quotes[0];
   // console.log(quotes)

    const changeNote = () => {
        setNote(quotes.quotes[getNote()]);
    }

    const color = colors[Math.floor(Math.random() * 5)];
    document.body.style = `background: ${color}`

    return (
        <div className='card' style={{color: color}}>
           
            <h1><i className="fa-solid fa-alien-8bit"></i> {note.quote}</h1>
            <p>{note.author}</p>
            <button  onClick={changeNote} style={{color: color}}>+</button>
        </div>
    );
};



export default Card;

