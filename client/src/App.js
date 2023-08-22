import './App.css'

export default function App(){

  return(
    <div>
      <nav><h1>This is email sender</h1> </nav>
      <input type="email" placeholder="Enter your email Id"/>
      <input type='text' placeholder='Enter subject' />
      <input type='text' placeholder='message' />
      <button>Send</button>
    </div>
  )
}