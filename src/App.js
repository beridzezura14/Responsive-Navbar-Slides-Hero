import { useState } from "react";
import AnimatedCursor from "react-animated-cursor"

import Metro from './assets/img/bg-1.jpg'
import CallOfDuty from './assets/img/bg-2.jpg'
import Assasin from './assets/img/mainbg.jpg'


function App() {
  return(
    <>
      <Cursor />
      <Header />
      <Hero />
    </>

  )
}

function Header(){
  const [active, setActive] = useState('nav__menu');
  const [icon, setIcon] = useState('nav__toggler');

  const navToggle = () => {
    // menu
    active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');

    // icon
    icon === 'nav__toggler' ? setIcon('nav__toggler toggle') : setIcon('nav__toggler');

  } 
  return(
    <div className="navbar">
      <div className="nav">
        <a className="logo" href="App.js">gamecenter</a>

        <ul className={active}>
          <li className="nav__item">
            <a className="nav__link color" href="App.js">Home</a>
          </li>
          <li className="nav__item">
            <a className="nav__link color" href="index.js">About</a>
          </li>
          <li className="nav__item">
            <a className="nav__link color" href="App.js">Contact</a>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </div>
  )

}

function Hero(){
  const gameList = [
    {
      id: 1,
      name: "Metro 2033",
      genre: "Fantastic, Adventure, Action",
      describe: "Metro 2033 is a 2010 first-person shooter survival horror video game developed by 4A Games and published by THQ. The story is based on Dmitry Glukhovsky's novel of the same name, where survivors of a nuclear war have taken refuge in the Metro tunnels of Moscow.",
      photo: Metro,
    },
    {
      id: 2,
      name: "Call Of Duty",
      genre: "Fantastic, Adventure, Action",
      describe: "Call of Duty is a military video game series and media franchise published by Activision, starting in 2003. The games were first developed by Infinity Ward, then by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers.",
      photo: CallOfDuty,
    },
    {
      id: 3,
      name: "Assasins Creed",
      genre: "Fantastic, Adventure, Action",
      describe: "Assassin's Creed is a historical action-adventure video game series and media franchise published by Ubisoft and developed mainly by its studio Ubisoft Montreal using the game engine Anvil and its more advanced derivatives.",
      photo: Assasin,
    },
  
  ]

  const [step, setStep] = useState(1)

  function prev(){
    // setStep( step < 2 ? step : step - 1 )
    if (step > 1) setStep( step - 1 )
  }
  function next(){    // setStep( step < 2 ? step : step - 1 )
    if (step < gameList.length) setStep( step + 1 )
  }

  return (
      <div className="hero-section">
        {
          gameList.map((item) => (
            <div className={item.id === step ? 'hero show' : 'hide'} key={item.id}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.10), black), url(${item.photo})`,
                }}
            >
                <div className="text-section">
                  <h1>{item.name}</h1>
                  <span>{item.genre}</span>
                  <p>{item.describe}</p>

                  <div className="btn-row">
                    <button className="btn-buy">Buy</button>
                    <button className="btn-re">Review</button>
                  </div>

                  <div className="steps">
                    <div onClick={prev}><ion-icon name="chevron-back-outline"></ion-icon></div>
                    <div onClick={next}><ion-icon name="chevron-forward-outline"></ion-icon></div>
                  </div>
                </div>
            </div>
          ))
        }
      </div>
  )
}

function Cursor() {
  return (
      <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color='255, 69, 1'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link',
              {
                target: '.custom',
                options: {
                  innerSize: 12,
                  outerSize: 12,
                  color: '255, 255, 255',
                  outerAlpha: 0.3,
                  innerScale: 0.7,
                  outerScale: 5
                }
              }
            ]}
      />
  )
}

export default App;
