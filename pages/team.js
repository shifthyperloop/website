import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import { CMS_BASE_URL } from '../common/constants';

const Member = ({ name, picture: { url = '' }, title, email, group }) => {
  return (
    <div>
      <img src={CMS_BASE_URL + url} />
      <h3>{name}</h3>
      <h4>{title}</h4>
      <style jsx>
        {`
          div {
            flex: 0 1 300px;
            text-align: center;
          }
          img {
            border-radius: 50%;
            height: 200px;
            width: 200px;
            object-fit: cover;
            object-position: top;
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
        title: 'Electrical Team',
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
      <div className="image-container">
        <img className="team-photo" src="/Shift-team-2020.jpg"></img>
        <h1 className="title">Meet our awesome team!</h1>
      </div>
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
        .image-container::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background: linear-gradient(63deg, #fff1 23%, transparent 23%) 1px 0,
            linear-gradient(63deg, transparent 74%, #fff1 78%),
            linear-gradient(
              63deg,
              transparent 34%,
              #fff1 38%,
              #fff1 58%,
              transparent 62%
            ),
            transparent;
          background-size: 10px 48px;
        }
        .title {
          position: absolute;
          bottom: calc(40% - 10px);
          left: 50%;
          transform: translate(-50%, -50%);
          text-shadow: 2px 2px #000;
          overflow: hidden;
          white-space: nowrap;
        }

        .group-titles {
          text-align: center;
        }
      `}</style>
    </Layout>
  );
};

Page.getInitialProps = async function() {
  const res = await fetch('https://cms.shifthyperloop.com/teammember2020s');
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
