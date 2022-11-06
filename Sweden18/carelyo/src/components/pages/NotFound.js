import React from 'react'
import {useHistory} from "react-router-dom";
import '../../styles/notfound.css'
import notfound from '../../image/erro-page.png'

const NotFound = () => {
  const history = useHistory();
  return (
    <>
    <div className='remove '>
    <img src={notfound}  alt="notfound "/>
    <button  className="btn btn-secondary"  type='button' onClick={() => history.goBack()}>Go Back</button>
    </div>
    </>
  )
}

export default NotFound