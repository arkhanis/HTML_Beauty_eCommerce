import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justifify-center items-center flex-col'>
        <nav className='flex justify-between items-center flex-col'>
            <img src={logo} alt="sumz_logo" className='w-28 object-contain'/>
            <button
                type="button"
                onClick={() => window.open('https://github.com/arkhanis/React_Summarize')}
                className='black_btn'
            >
                GitHub
            </button>
        </nav>
    </header>
  )
}

export default Hero