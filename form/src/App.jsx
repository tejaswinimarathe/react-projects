
import { useState } from 'react'
import './App.css'

function App() {
const [formData,setFormData]=useState(
  {
    fname:"",
    lname:"",
    email:"",
    address:"",
    isVisible:true,
    mode:""
  }
);
const handleChange=(event)=>{
  const {name,value,checked,type}=event.target;
  setFormData((prev)=>({
    ...prev,
    [name]:type==='checkbox' ? checked :value
  }))
  
}
function handleSubmit(e){
  e.preventDefault();
  console.log(formData);
  setFormData({
    fname: "",
    lname: "",
    email: "",
    address: "",
    isVisible: false,  // optional: false if you want checkbox unchecked
    mode: "",
  });
}
  return (
    <>
      <div className='container'>
        <div className='box'>
        <form onSubmit={handleSubmit}>
        <div className='inps'>
          <input type="text" placeholder='Enter firstname' name='fname' value={formData.fname}  onChange={handleChange}/>
        </div>
        <div className='inps'>
          <input type="text" name='lname' value={formData.lname}  onChange={handleChange}/>
        </div>
        <div className='inps'>
         <input type="text" name='email' value={formData.email}  onChange={handleChange}/>
        </div>
        <div className='inps'>
          <input type="text" name='address' value={formData.address}  onChange={handleChange}/>
        </div>
        <div className=''>
        <input type="checkbox" name='isVisible'  checked={formData.isVisible} id='isVisible'  onChange={handleChange}/>
        <label htmlFor="isVisible">Is It Visible?</label>
        </div>
    
        <div>
          <input
        type="radio"
        name="mode"
        value="online"
        checked={formData.mode === "online"}
        id="onlineMode"
        onChange={handleChange}
      />
      <label htmlFor="onlineMode">Online Mode</label>
        </div>

        <div>
          <input
        type="radio"
        name="mode"
        value="offline"
        checked={formData.mode === "offline"}
        id="offlineMode"
        onChange={handleChange}
      />
      <label htmlFor="offlineMode">Offline Mode</label>
        </div>
        <br /><br />
        <button>Submit</button>
      </form>
      </div>
      </div>
    </>
  )
}

export default App
