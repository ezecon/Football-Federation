
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { HeroSection } from './HeroSection';
import Players from './Players';
import { useState } from 'react';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import About from './About';

export default function Main() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-none'>
      <div className="navbar flex flex-wrap justify-between items-center px-4 py-2">
        <div className="flex-1 water-text text-center relative md:left-[-28rem]">
          <h2 className="font-bold sm:text-lg md:text-2xl">IFF</h2>
          <h2 className="font-bold sm:text-lg md:text-2xl">IFF</h2>
        </div>
        <div className="flex-none hidden md:block">
          <ul className="menu menu-horizontal space-x-2">
            <li>
              <a className="text-[#585858] hover:underline hover:underline-offset-4 hover:decoration-[#585858]" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="text-[#585858] hover:underline hover:underline-offset-4 hover:decoration-[#585858]" href="/gallery">
                Gallery
              </a>
            </li>
            <li>
              <a className="text-[#585858] hover:underline hover:underline-offset-4 hover:decoration-[#585858]" href="/players">
                Player
              </a>
            </li>
            <li>
              <a className="text-[#585858] hover:underline hover:underline-offset-4 hover:decoration-[#585858]" href="/events">
                Events
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-none md:hidden">
          <button onClick={toggleMenu} className="text-[#585858] focus:outline-none">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-2 px-4 py-2">
          <a className="text-[#585858] hover:underline hover:underline-offset-4 hover:decoration-[#585858]" href="#home" onClick={toggleMenu}>
            Home
          </a>
          <a className="text-[#585858] hover:underline hover:underline-offset-4 hover:decoration-[#585858]" href="#about" onClick={toggleMenu}>
            Gallery
          </a>
          <a className="text-[#585858] hover:underline hover:underline-offset-4 hover:decoration-[#585858]" href="/players" onClick={toggleMenu}>
            Players
          </a>
          <a className="text-[#585858] hover:underline hover:underline-offset-4 hover:decoration-[#585858]" href="/events" onClick={toggleMenu}>
            Events
          </a>
        </div>
      )}
        <div id="home" className="h-2/3">
          <HeroSection />
        </div>
        <div>
          <About/>
        </div>
        <div id="home" className="flex flex-col items-center">
          <Players home='home' />
         <Link to="/players"><Button className='bg-black rounded-lg text-center mt-4'>See More</Button></Link> 
        </div>
        <div>
            <Footer/>
        </div>

    </div>
  );
}
