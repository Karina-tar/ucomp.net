import '../../assets/styles/css/parts/search.css';

function Search() {
  return (
    <div className='search'>
      <input />

      <div className='clear'>
        <span>
          &times;
        </span>
      </div>

      <button>Find</button>
    </div>
  )
}

export default Search;