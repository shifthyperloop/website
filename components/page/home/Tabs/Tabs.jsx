import { useState } from 'react';
import styles from './Tabs.module.css';

const Tabs = (props) => {
  const { tabs } = props;
  const [selected, setSelected] = useState(tabs[0]);

  const showSeconds = 10;

  const selectNext = () => {
    const index = tabs.indexOf(selected);
    const next = tabs[(index+1)%tabs.length];
    setSelected(next);
  }

  return (
    <>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            className={`${styles.tab} ${tab === selected && styles.selected}`}
            onClick={() => setSelected(tab)}
          >
            <h2>{tab.title}</h2>
            <p>{tab.description}</p>
            <div className={styles.timer} style={{animationDuration: showSeconds+"s"}} />
          </button>
        ))}
      </div>
      {selected.content}
    </>
  );
};

export default Tabs;
