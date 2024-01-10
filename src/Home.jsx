import React,{useState,useEffect} from 'react'
import "./styles/Home.css";
import UpcomingEvents from './UpcomingEvents';
import HorizontalScroller from './components/HorizaontalScroller';
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
      <div className="animated-text">
        {showText}
      </div>
      <UpcomingEvents
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <HorizontalScroller />
      <div className="empty"></div>
    </div>
    
  )
}

export default Home