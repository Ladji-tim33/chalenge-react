

const Input = ({ type, name, onChange, value }) => {
    
    return (
            
        <input
          type={type}
          value={value}
          onChange={onChange}
          id={name}
          name={name}
          placeholder='Enter text...'
          className="form-control "
        />
      
    );
  }

export default Input;