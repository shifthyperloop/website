import styles from './Button.module.css';

const Button = ({href, download, onClick, small, children}, ) => {
  return href ? (
    <a className={`${styles.container} ${small && styles.small}`} href={href} download={download}>
      {children}
    </a>
  ) : (
    <button className={`${styles.container} ${small && styles.small}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;