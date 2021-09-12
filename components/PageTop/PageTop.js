import styles from './PageTop.module.css';

const PageTop = ({
  title,
  description
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      { description &&
        <p className={styles.description}>{description}</p>
      }
    </div>
  )
}

export default PageTop;