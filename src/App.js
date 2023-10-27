import { useState } from 'react';
import './App.css';

function App() {
  const [inputs, setInputs] = useState({
    state: "",
    city : "",
    pincode: 0,
    college: "",
    branch:"",
    year:0,
    refferal:"",
    how:"",
    degree:"",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>State:
      <input 
        type="text" 
        name="state" 
        value={inputs.state || ""} 
        onChange={handleChange}
        required
      />
      </label>
      <br/>
      <br/>

      <label>city:
        <input 
          type="text" 
          name="city" 
          value={inputs.city || ""} 
          onChange={handleChange}
          required
        />
        </label>
        <br/>
        <br/>
        <label>Pincode:
      <input 
        type="number" 
        name="pincode" 
        value={inputs.pincode || ""} 
        onChange={handleChange}
        required
      />
      </label>
      <br/>
      <br/>

      <label>College:
      <input 
        type="text" 
        name="college" 
        value={inputs.college|| ""} 
        onChange={handleChange}
        required
      />
      </label>
      <br/>
      <br/>


      <label for="degree">degree:
      <select id="degree" name="degree" required>
          <option value="opn1">option1</option>
          <option value="opn2">option2</option>
        </select> 
      </label>
      <br/>
      <br/>

      <label>year of graduation:
      <input 
        type="number" 
        name="year" 
        value={inputs.year || ""} 
        onChange={handleChange}
        required
      />
      </label>
      <br/>
      <br/>

      <label>branch:
      <input 
        type="text" 
        name="branch" 
        value={inputs.branch || ""} 
        onChange={handleChange}
        required
      />
      </label>
      <br/>
      <br/>

      <label>Referral:
      <input 
        type="text" 
        name="refferal" 
        value={inputs.refferal || ""} 
        onChange={handleChange}
      />
      </label>
      <br/>
      <br/>

      <label for="how">How did you get to know about Cogni:
        <select id="how" name="how" required>
          <option value="optn1">option1</option>
          <option value="optn2">option2</option>
          
        </select> 
      </label>
      <br/>
      <br/>
        
        <input type="submit" />
    </form>
  )
}

export default App;
