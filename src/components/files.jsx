import './files.css';
import { MdOutlinePushPin } from "react-icons/md";
import { FaRegFileExcel } from "react-icons/fa";
function Files() {
  return (
    <div className="file_container">
        <MdOutlinePushPin className='file_pin_icon'/>
        <h4 className="file_container_heading">
            Lorem, ipsum.
        </h4>
        <button className="file_remove_button">
            <FaRegFileExcel className='file_remove_icon'/>
        </button>
    </div>
  )
}

export default Files