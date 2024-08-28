import React from 'react'
// import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import './Blog.css'

function Blog() {
    const navigate= useNavigate()
  return (
    <div className='text'>Blog Page
           <div className='blogContainer'>
           <h1>
          Wranker Famous Blog
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, neque accusamus saepe rerum nobis numquam aut sint modi, praesentium consequatur a, dolorem in explicabo optio! Eaque ea, animi sit tempora amet quas?
        </p>
           </div>
    {/* <Button
       variant="contained"
       type="submit"
       onClick={() => navigate("/login")}>
        Login/singup
    </Button> */}
    </div>
  )
}

export default Blog