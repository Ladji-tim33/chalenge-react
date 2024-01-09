import Titre from "./Titre";
import ButtonColor from "./ButtonsColors";


const Header = () => {
    return (
        <div className="mt-3 bg-white p-3 rounded d-flex justify-content-between  ">
          <Titre/> 
          <ButtonColor/>
        </div>
    )
}

export default Header;
