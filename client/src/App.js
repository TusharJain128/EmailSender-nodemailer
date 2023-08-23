import {useState} from 'react';
import axios from 'axios';

export default function App() {

  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [result, setResult] = useState("")

  async function onSubmit(){
    await axios.post("http://localhost:3001/send",{email, subject, message})
    .then((res)=>{
      setEmail("")
      setSubject("")
      setMessage("")
      setResult(res.data.data)
    })
    .catch((err)=>{
      setResult(err.response.data.data)
    })
  }


  return (
    <div className="container my-3">
      <div className="container my-3 pt-3 d-flex flex-column align-items-center" style={{ maxWidth: "50%", borderRadius: "10px", background: "linear-gradient(135deg, #71b7e6, #9b59b6)", boxShadow: "5px 10px 18px black" }}>
        <input type="email" className="form-control my-2" placeholder="Enter your Email Id..." value={email} onChange={(e)=> setEmail(e.target.value)} />
        <input type='text' className="form-control my-2" placeholder='Enter Subject here...' value={subject} onChange={(e)=> setSubject(e.target.value)}/>
        <textarea type='text' className="form-control my-2" placeholder='Message'rows="13" value={message} onChange={(e)=> setMessage(e.target.value)}/>

        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-primary my-2" type="button" onClick={onSubmit}>Send</button>
        </div>
      </div>
      <h1 className='text-center'>{result}</h1>
    </div>
  )
}