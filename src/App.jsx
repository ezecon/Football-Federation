
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { HeroSection } from './Components/HeroSection';
import Players from './Components/Players';
import { useState } from 'react';

export default function App() {
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
              <a className="text-[#585858] hover:underline hover:underline-offset-4 hover:decoration-[#585858]" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="text-[#585858] hover:underline hover:underline-offset-4 hover:decoration-[#585858]" href="#skill">
                Player
              </a>
            </li>
            <li>
              <a className="text-[#585858] hover:underline hover:underline-offset-4 hover:decoration-[#585858]" href="#projects">
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
            About
          </a>
          <a className="text-[#585858] hover:underline hover:underline-offset-4 hover:decoration-[#585858]" href="#skill" onClick={toggleMenu}>
            Players
          </a>
          <a className="text-[#585858] hover:underline hover:underline-offset-4 hover:decoration-[#585858]" href="#projects" onClick={toggleMenu}>
            Events
          </a>
        </div>
      )}
        <div id="home" className="h-2/3">
          <HeroSection />
        </div>
        <div id="home" className="">
           <Players home='home' />
      </div>
    </div>
  );
}
