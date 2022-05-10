import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { setColor } from './actions/ColorAction';
import {useSelector, useDispatch} from 'react-redux';

function App() {
  const [favorite, setFavorite] = useState("")
  const color = useSelector(state => state);
  const dispatch =useDispatch();


  const RadioButton = ({ label, value, onChange }) => {
    return (
      <label>
        <input type="radio" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };

  const handleRedChange = () => {
    setFavorite("Red")
    dispatch(setColor("Red"));
  };

  const handleBlueChange = () => {
    setFavorite("Blue")
    dispatch(setColor("Blue"));
  };

  const handleOrangeChange = () => {
    setFavorite('Orange')
    dispatch(setColor("Orange"));
  };

  const handleGreenChange = () => {
    setFavorite('Green')
    dispatch(setColor("green"));
  };
  return (
    <div className="App" style={{backgroundColor:"green"}}>
        <p>Your favorite Color: {color}</p>
        <p>Choose your favorite Color:</p>
        
        
        <RadioButton
        label="Red"
        value={favorite === 'Red'}
        onChange={handleRedChange}
      />
      <RadioButton
        label="Blue"
        value={favorite === 'Blue'}
        onChange={handleBlueChange}
      />

      <RadioButton
        label="Orange"
        value={favorite === 'Orange'}
        onChange={handleOrangeChange}
      />
      <RadioButton
        label="Green"
        value={favorite === 'Green'}
        onChange={handleGreenChange}
      />
        
    </div>
  );
}

export default App;
