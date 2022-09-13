import { useState } from 'react';
import '../../assets/styles/css/parts/search.css';

function Search(props) {
  const [inputValue, setInputText] = useState('')
  
  function find(event) {
    console.log(inputValue)
  }

  return (
    <div className='page-search'>
      <input 
        value={inputValue}
        onChange={event => setInputText(event.target.value)}
        placeholder={props.placeholder} 
        type='text' />

      <div className='clear'>
        <span
          onClick={() => setInputText('')}
          className={inputValue ? 'active' : ''}>
          &times;
        </span>
      </div>

      <button onClick={find}>find</button>
    </div>
  )
}

export default Search;