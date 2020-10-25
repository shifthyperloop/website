import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import TopImage from '../components/TopImage';
import fetch from 'isomorphic-unfetch';
import { CMS_BASE_URL } from '../common/constants';
import { FiMail } from 'react-icons/fi';

const Member = ({ name, picture: { url = '' }, title, email, group }) => {
  return (
    <div>
      <div className="image-container">
        <img src={CMS_BASE_URL + url} />
        <a
          href={''}
          className="email"
          onMouseOver={e => (e.target.href = 'mailto:' + email)}
        >
          <FiMail size={35} className="mail-symbol" />
        </a>
      </div>

      <h3>{name}</h3>
      <h4>{title}</h4>
      <style jsx>
        {`
          div {
            flex: 0 1 300px;
            text-align: center;
          }
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: top;
          }
          .image-container {
            position: relative;
            border-radius: 50%;
            height: 200px;
            width: 200px;
            overflow: hidden;
          }
          .email {
            position: absolute;
            background-color: #0080c980;
            border-radius: 50%;
            --r: 25%;
            bottom: calc(0% - var(--r));
            left: calc(50% - var(--r));
            right: calc(50% - var(--r));
            top: calc(100% - var(--r));
            transition: all 1s;
            text-align: center;
          }
          .image-container:hover .email {
            --r: 100%;
          }
          :global(.mail-symbol) {
            position: absolute;
            top: 25%;
            transform: translate(-50%, -50%);
          }

          img,
          h3 {
            margin-bottom: -10px;
          }
          h4 {
            color: #0080c9;
            margin-bottom: 30px;
          }
        `}
      </style>
    </div>
  );
};

const Group = ({ members = [], title }) => {
  return (
    <div className="group">
      <h1 className="group-titles">{title}</h1>
      <hr />
      <div className="group-members">
        {members.map(member => (
          <Member key={member.name} {...member} />
        ))}
      </div>
      <style jsx>
        {`
          hr {
            width: 80%;
            border-width: 2px;
            border-style: solid;
            border-radius: 2.5px;
            border-color: #0080c9;
            margin-bottom: 75px;
          }
          .group-titles {
            margin-bottom: 2px;
            margin-top: 10px;
          }
          .group {
            margin: 100px auto;
            display: flex;
            flex-flow: column nowrap;
            max-width: 1200px;
          }
          .group-members {
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
          }
          h1 {
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};

const Page = ({ members = [] }) => {
  const router = useRouter();
  const [groups, setGroups] = useState({});

  useEffect(() => {
    const newGroups = {
      Board: {
        title: 'The Board',
        description: '...',
        members: [],
      },
      Electrical: {
        title: 'Electrical Group',
        description: '...',
        members: [],
      },
      Mechanical: {
        title: 'Mechanical Group',
        description: '...',
        members: [],
      },
      Magnetics: {
        title: 'Magnetics Group',
        description: '...',
        members: [],
      },
      Software: {
        title: 'Software Group',
        description: '...',
        members: [],
      },
      Relations: {
        title: 'Relations Group',
        description: '...',
        members: [],
      },
      Mentor: {
        title: 'Mentors',
        description: '...',
        members: [],
      },
    };
    members.forEach(member => {
      if (member.group in newGroups) {
        newGroups[member.group].members.push(member);
      }
    });
    setGroups(newGroups);
  }, [members]);

  return (
    <Layout
      url="https://www.shifthyperloop.com/team"
      title="Shift Hyperloop | Team"
    >
      <TopImage
        image="/Shift-team-2020.jpg"
        title="Team 2020"
        brightness={0.8}
      />
      <div className="page-container">
        {Object.values(groups).map(group => (
          <Group key={group.title} {...group} />
        ))}
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

Page.getInitialProps = async function() {
  const res = await fetch(CMS_BASE_URL + '/teammember2020s');
  const data = await res.json();

  return {
    members: data.map(member => {
      let picture = {
        url: '/uploads/8ac2288649f74d3b88a87126ebb489dc.jpg',
      };
      if (member.picture !== null) {
        picture = member.picture;
      }
      return {
        name: member.name,
        picture,
        group: member.group,
        title: member.title,
        email: member.email,
      };
    }),
  };
};

export default Page;
