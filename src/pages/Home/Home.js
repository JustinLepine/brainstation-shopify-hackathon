import React from 'react'
import './Home.scss'
import HeroLogo from '../../assets/images/shopify-world.png'

function Home() {
  return (
    <section className='home'>
        <div>
            <img className='home__img' src={HeroLogo}/>
        </div>
        <div>
            <h1>Shop the world.</h1>
            <p>Welcome to Plaza. A new way to shop for anything from camping gear to cat clothes at businesses you'll love.</p>
            <div>
                <img src='SearchIcon' alt='icon'/>
                <input placeholder='Search for anthing'></input>
            </div>
            <button>Search</button>
        </div>
    </section>
  )
}

export default Home