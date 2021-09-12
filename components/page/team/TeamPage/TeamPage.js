import { useEffect, useState } from 'react';
import Layout from '../../../Layout/Layout';
import TopImage from '../../../TopImage/TopImage';
import Group from '../Group/Group';
import styles from './TeamPage.module.css';
import PageTop from '../../../PageTop/PageTop';

const TeamPage = ({
  members = [],
  teamGroups,
  topImage,
  title,
  path,
  centerImages = true,
}) => {
  const [groups, setGroups] = useState({});

  useEffect(() => {
    const newGroups = teamGroups;
    members.forEach((member) => {
      if (member.group in newGroups) {
        newGroups[member.group].members.push(member);
      }
    });
    setGroups(newGroups);
  }, [members]);

  return (
    <Layout
      url={'https://www.shifthyperloop.com' + path}
      title={'Shift Hyperloop | ' + title}
    >
      <TopImage
        image={topImage}
        brightness={0.8}
      >
        <PageTop
          title={title}
          description="Meet our amazing partners. Their support is what's making it possible to do what we love."
        />
      </TopImage>
      <div className={styles.container}>
        {Object.values(groups)
          .sort((a, b) => {
            const first = 'The Board';
            const last = 'Mentors';

            if (a.title === first || b.title === last) {
              return -1;
            }
            if (b.title === first || a.title === last) {
              return 1;
            }
            return a.title.localeCompare(b.title);
          })
          .map((group) => (
            <Group key={group.title} {...group} centerImages={centerImages} />
          ))}
      </div>
    </Layout>
  );
};

export default TeamPage;
