import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import ChatWidget from '../ChatWidget'
import Logo from './Picture'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ', 'Y', 'o', 'u', ' ', 'L', 'y', 'u']
  const jobArray = [
    's',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'e',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
           
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={18}
            />
          </h1>
          <h2>B.S. in Statistics and Computer Science <br />at the University of Illinois at Urbana Champaign</h2>
          <a href="https://drive.google.com/file/d/1-aiKPTV7Yy6hTqPUGDdWAeJojXl10UeN/view?usp=sharing" className="flat-button"> 
            My Resume
          </a>
          {/* <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link> */}
        </div>
        <Logo />
        <ChatWidget />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
