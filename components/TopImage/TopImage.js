import { FaAngleDown } from 'react-icons/fa';
import { LinkButton } from '../Button';
import ApplyButton from '../JoinButton/JoinButton';
import styles from './TopImage.module.css'

export default function TopImage({
  image = '',
  title = '',
  text = '',
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
      }}
    >
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{text}</p>
      {joinButton ? (
        <div className={styles.joinButtons}>
          <ApplyButton />
          <LinkButton href="/joinus">Available positions</LinkButton>
        </div>
      ) : null}
      {hasArrow ? (
        <a className={styles.arrow} href="#scroll-target">
          <FaAngleDown size={35} />
        </a>
      ) : null}
      <div id="scroll-target" />
    </div>
  );
}
