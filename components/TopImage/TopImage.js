import { FaAngleDown } from 'react-icons/fa';
import Button from '../Button/Button';
import ApplyButton from '../JoinButton/JoinButton';
import styles from './TopImage.module.css';
import { animateScroll } from 'react-scroll';

export default function TopImage({
  children,
  image = '',
  brightness = 0.3,
  hasArrow = true,
  joinButton = false,
}) {
  return (
    <div
      className={styles.container}
      style={{
        '--top-image-src': `url(${image})`,
        '--top-image-brightness': 1 - brightness,
        '--top-text-color': '#FFF',
      }}
    >
      {children}
      {joinButton ? (
        <div className={styles.joinButtons}>
          <ApplyButton />
          <Button href="/joinus">Available positions</Button>
        </div>
      ) : null}
      {hasArrow ? (
        <a className={styles.arrow} onClick={() => animateScroll.scrollTo(window.innerHeight - 100, { duration: 500})}>
          <FaAngleDown size={35} />
        </a>
      ) : null}
    </div>
  );
}
