import { FaSearch } from 'react-icons/fa'
import { VscNewFile } from "react-icons/vsc";
import './searchBar.css'
// import '../scss/boilerplate.css'

function SearchBar() {
  return (
    <div className="search_container">
        <input type="text" placeholder="search..." />
        <FaSearch className='search_container_lens' />
        <button className="search_container_newFile">
            <VscNewFile className='icon'/>
        </button>
    </div>
  )
}

export default SearchBar