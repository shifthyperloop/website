import { useEffect, useState } from 'react';
import Layout from '../Layout';
import TopImage from '../TopImage';
import Group from './Group';

const TeamPage = ({ members = [], teamGroups, topImage, title, path, centerImages = true }) => {
  const [groups, setGroups] = useState({});

  useEffect(() => {
    const newGroups = teamGroups;
    members.forEach(member => {
      if (member.group in newGroups) {
        newGroups[member.group].members.push(member);
      }
    });
    setGroups(newGroups);
  }, [members]);

  return (
    <Layout
      url={'https://www.shifthyperloop.com'+path}
      title={'Shift Hyperloop | '+title}
    >
      <TopImage
        image={topImage}
        title={title}
        brightness={0.8}
      />
      <div className="page-container">
        {Object.values(groups)
          .sort((a, b) => {
            const first = "The Board";
            const last = "Mentors";

            if (a.title === first || b.title === last) {
              return -1;
            } if (b.title === first || a.title === last) {
              return 1;
            }
            return a.title.localeCompare(b.title);
          })
          .map(group => (
            <Group key={group.title} {...group} centerImages={centerImages} />
          ))
        }
      </div>
      <style jsx global>{`
        body {
          background-image: linear-gradient(45deg, #01020b, #020610);
          background-repeat: no-repeat;
          background-size: cover;
          background-size: 9px 48px;
        }
        h1 {
          font-size: 50px;
        }

        div {
          position: center;
        }
        .team-photo {
          max-width: 100%;
        }
        .image-container {
          position: relative;
          text-align: center;
          color: white;
          display: inline-flex;
        }
        .arrow {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translate(-50%, -50%);
          background-attachment: fixed;
        }

        .title {
          position: absolute;
          bottom: 40%
          left: 50%;
          transform: translate(-50%, -50%);
          text-shadow: 2px 2px #000;
          overflow: hidden;
          white-space: nowrap;
        }

        .group-titles {
          text-align: center;
        }
        @media (max-width: 640px) {
          .title {
            font-size: 2rem;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          
          }
        }
      `}</style>
    </Layout>
  );
};

export default TeamPage;
