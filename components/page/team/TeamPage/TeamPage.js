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
  groupPriorities,
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
      <TopImage image={topImage} brightness={0.8}>
        <PageTop title={title} />
      </TopImage>
      <div className={styles.container}>
        {Object.values(groups)
          .sort((a, b) => {
            const priority = groupPriorities ?? {
              // bigger number gets sorted first
              Management: 1,
              'The Board': 1,
              Mentors: -1,
            };

            if (priority[a.title] !== priority[b.title]) {
              return (priority[b.title] ?? 0) - (priority[a.title] ?? 0);
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
