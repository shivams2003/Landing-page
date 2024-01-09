import React,{useState,useEffect} from 'react'
import "./Home.css";
import { Link } from 'react-router-dom';
function Home() {
  const [showText, setShowText] = useState('');

  useEffect(() => {
    const text = 'ECES, where opportunity meets innovation';
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setShowText(text.substring(0, currentIndex));
        currentIndex += 1;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the interval time as needed

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className='home-container'>
      <img className = "society-logo" src="src\assets\eces.jpg" alt=""/>
      <h2 className='organization-name'>ECES</h2>
      <div className="animated-text">
        {showText}
      </div>
      {/* <Link to="/"> */}
        <button className="home-button">Go to Home </button>
      {/* </Link> */}
      {/* <p>Here to make your college life easier</p> */}
    </div>
  )
}

export default Home