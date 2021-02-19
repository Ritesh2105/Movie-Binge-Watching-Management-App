import {useContext} from 'react'
import ModalContext from "../context/ModalContext";

const Header = () => {
    const {toogleAddForm} = useContext(ModalContext);
    return (
        <header className="grid grid-col-1-200px">
                <h1>Movie Managment System</h1>
                <button onClick={()=>{
                    toogleAddForm();
                }} className="btn btn-primary grid-x-right"  type="button" > Add movie</button>
        </header>
    )
}

export default Header
