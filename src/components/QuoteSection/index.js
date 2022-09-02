import React from 'react'
import './QuoteElements.css';

export default function Quote({id}) {
  return (
    <div className='quoteContainer' id={id}>
      <h1 className='quote'>"Sometimes it is the people no one can imagine anything </h1>
      <h1 className='quote'>of who do the things no one can imagine." </h1> 
      <h1 className='Alan'>- Alan Turing</h1>
    </div>
  )
}

