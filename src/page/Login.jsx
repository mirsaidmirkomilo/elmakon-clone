import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Login = () => {

const [img, setImg] = useState("")
const [name, setName] = useState("")
const [number, setNumber] = useState("")

const navigate = useNavigate()

useEffect(() => {
  if (
    localStorage.getItem("userImg") && 
    localStorage.getItem("userName") && 
    localStorage.getItem("userNum")
  ) {
    navigate(-1)
  }
},[])



  return (
    <div>
      <form onSubmit={() => {
        localStorage.setItem("userImg", img)
        localStorage.setItem("userName", name)
        localStorage.setItem("userNum", number)

      }}>
        <input required type="text" placeholder='img' value={img} onChange={(e) => setImg(e.target.value)}/>
        <input required type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/>
        <input required type="text" placeholder='phone number' value={number} onChange={(e) => setNumber(e.target.value)}/>
        <button type='submit'>Saqlash</button>
      </form>
    </div>
  )
}

export default Login