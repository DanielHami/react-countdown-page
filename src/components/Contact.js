import { useState } from "react"


function Contact() {
  const [username, setName] = useState('')
  const [email, setMail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [buttonchange, setButtonchange] = useState(false)
  const [viewPara, setViewPara] = useState(false)



  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { username, email, subject, message };

    setButtonchange(true)

    fetch('http://localhost:8000/datas', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(() => {
      console.log("Done!  ")
      setButtonchange(false)
    },[setViewPara(true)])
  }

  return (
    <form className="mailForm" onSubmit={handleSubmit} >
      <input type="text" value={username} placeholder="Your Name" onChange={(e) => setName(e.target.value)} required />
      <input type="text" value={email} placeholder="Your Email" onChange={(e) => setMail(e.target.value)} required />
      <input type="text" value={subject} placeholder="Subject" onChange={(e) => setSubject(e.target.value)} required />
      <textarea placeholder="Message" value={message} required onChange={(e) => setMessage(e.target.value)} />
      {!buttonchange && <button type="submit" className="sendButton">Send</button>}
      {buttonchange && <button type="submit" className="sendButton" disabled>Sending</button>}
      {viewPara && <p>The data is updated</p>}
    </form>
  )
}

export default Contact;