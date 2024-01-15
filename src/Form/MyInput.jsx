

const Input = ({ type, name, onChange, value }) => {
    
    return (
            
        <input
          type={type}
          value={value}
          onChange={onChange}
          id={name}
          name={name}
          placeholder='Add note...'
          className="form-control "
        />
      
    );
  }

export default Input;