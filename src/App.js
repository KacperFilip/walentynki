import './App.css';
import { ReactComponent as HeartIcon} from './heart.svg';
import timelineElements from "./timelineElements.js";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Link } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

function App() {
  let iconStyles = {
    background: "#fff"
  }

  return (
    <div>
      <h1 className='title'>Nasze wspomnienia</h1>
      <VerticalTimeline>
        {
          timelineElements.map(element => {
              return(
                  <VerticalTimelineElement
                    key={element.key}
                    date={element.date}
                    dateClassName="date"
                    iconStyle={iconStyles}
                    icon={<HeartIcon className='heart-icon'/>}
                  >
                    <h3 className='vertical-timeline-element-title'>{element.title}</h3>
                    <h5 className='vertical-timeline-element-subtitle'>{element.location}</h5>
                    <p id='description'></p>
                    <Link className='button' key={element.id} to={`/wspomnienia/${element.id}`}>
                      {element.buttonText}
                    </Link>
                  </VerticalTimelineElement>
              )
          })
        }
      </VerticalTimeline>
      <div className='button-wrapper'>
        <button className='heart-button'>
          <Link className='special-button' key={18} to={'/zdjecia/'}>
            <HeartIcon/>
          </Link>
        </button>
      </div>
      <Analytics/>
    </div>
  );
}

export default App;
