import { useState } from 'react';
import '../../assets/styles/css/parts/search.css';

function Search(props) {
  const [inputValue, setInputText] = useState('')
  
  function onClickEvent (event) {
    props.onClickHandler(inputValue)
  }

  function onClearEvent (event) {
    setInputText('')
    props.onClickHandler('')
  }

  function onChangeEvent (event) {
    let text = event.target.value
    setInputText(text)
    props.onChangeHandler(text)
  }

  return (
    <div className='page-search'>
      <input 
        value={inputValue}
        onChange={onChangeEvent}
        placeholder={props.placeholder} 
        type='text' />

      <div className='clear'>
        <span
          onClick={onClearEvent}
          className={inputValue ? 'active' : ''}>
          &times;
        </span>
      </div>

      <button onClick={onClickEvent}>Find</button>
    </div>
  )
}

export default Search;