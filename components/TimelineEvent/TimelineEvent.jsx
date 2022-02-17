import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import Image from 'next/image';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import styles from './TimelineEvent.module.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const TimelineEventElement = ({ event, defaultExpanded }) => {
  const [open, setOpen] = useState(false);

  return (
    <VerticalTimelineElement
      key={event.title}
      className="vertical-timeline-element--work"
      contentStyle={{
        borderTop: '3px solid var(--shift-blue)',
        borderRadius: 0,
        background: '#FFFFFF',
        padding: 5,
      }}
      onTimelineElementClick={() => setOpen(!open)}
      contentArrowStyle={{ borderRight: '7px solid #FFFFFF' }}
      date={event.date}
      iconStyle={{ background: 'var(--shift-blue)' }}
      /*icon={
        <Image
          src={}
          className={styles.timelineIcon}
          alt=""
          height="100px"
          width="100px"
        />
      }*/
    >
      <Accordion
        defaultExpanded={defaultExpanded}
        className={styles.accordion}
        style={{ margin: 0 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className={styles.accordionSummary}
        >
          <h3 className="vertical-timeline-element-title">{event.title}</h3>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          {event.description}
        </AccordionDetails>
      </Accordion>
    </VerticalTimelineElement>
  );
};

export default TimelineEventElement;
