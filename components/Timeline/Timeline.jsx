import {
  VerticalTimeline,
} from 'react-vertical-timeline-component';
import React from 'react';
import TimelineEventElement from '../TimelineEvent/TimelineEvent';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = ({ events }) => {
  return (
    <VerticalTimeline lineColor="#444444">
      {events.map((event, index) => (
        <TimelineEventElement
          key={index}
          event={event}
          defaultExpanded={index === 0}
        />
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
