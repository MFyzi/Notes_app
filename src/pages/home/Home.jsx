import Files from '../../components/files';
import SearchBar from '../../components/searchBar';
import '../../scss/boilerplate.css';
import './home.css'

function Home() {
  return (
    <div className="home_container">
        <div className="search">
          <SearchBar />
        </div>
        <div className="home_container_files_grid">
          <Files />
          <Files />
          <Files />
          <Files />
          <Files />
        </div>
    </div>
  )
}

export default Home