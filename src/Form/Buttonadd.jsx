const ButtonAdd = ({ className, onClick, children, handleClick }) => {
    return (
      <div className="  ">
        <span className={className} onClick={onClick} handleClick={handleClick}>{children}</span>
      </div>
    );
  }
  
  export default ButtonAdd;