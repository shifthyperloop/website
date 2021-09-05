import Member from '../Member/Member';
import styles from './Group.module.css';

const Group = ({ members = [], title, centerImages = true }) => {
  return (
    <div className={styles.group}>
      <h1 className={styles.title}>{title}</h1>
      <hr className={styles.divider} />
      <div className={styles.members}>
        {members
          .sort((a, b) => {
            const priority = {
              // bigger number gets sorted first
              'Group Leader': 10,
              CEO: 10,
              CFO: 9,
              CMO: 8,
              CCO: 7,
              undefined: -1,
              null: -1,
            };

            if (priority[a.title] !== priority[b.title]) {
              return (priority[b.title] ?? 0) - (priority[a.title] ?? 0);
            }

            if (a.title === b.title) {
              return 0;
            }

            return a.title.localeCompare(b.title);
          })
          .map((member) => (
            <Member key={member.name} {...member} center={centerImages} />
          ))}
      </div>
    </div>
  );
};

export default Group;
