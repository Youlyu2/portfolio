import { useEffect, useRef } from 'react'
import LogoS from '../../../assets/images/home_pic.JPG'
import './index.scss'

const Logo = () => {

  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        src={LogoS}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo
