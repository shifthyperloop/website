import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import { CMS_BASE_URL } from '../common/constants';
import TeamPage from '../components/teamPage/TeamPage';

const Page = ({ members = [] }) => {
  const router = useRouter();

  const groups = {
    Board: {
      title: 'The Board',
      description: '...',
      members: [],
    },
    Electronics: {
      title: 'Electronics Group',
      description: '...',
      members: [],
    },
    Battery: {
      title: 'Battery Group',
      description: '...',
      members: [],
    },
    Powertrain: {
      title: 'Powertrain Group',
      description: '...',
      members: [],
    },
    Mechanical: {
      title: 'Mechanical Group',
      description: '...',
      members: [],
    },
    Levitation: {
      title: 'Levitation Group',
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
    Concept: {
      title: 'Concept Group',
      description: '...',
      members: [],
    },
    Mentor: {
      title: 'Mentors',
      description: '...',
      members: [],
    }
  };

  return (
    <TeamPage
      members={members}
      teamGroups={groups}
      topImage={"/everyone.jpg"}
      title={"Team 2021"}
      path={"/team2021"}
    />
  );
};

Page.getInitialProps = async function() {
  const res = await fetch(CMS_BASE_URL + '/team-2021-s');
  const data = await res.json();

  return {
    members: data.map(member => {
      let picture = {
        url: '/uploads/d7bbb8af6b1947629542010bb38942fb.jpg',
      };
      if (member.Picture !== null) {
        picture = member.Picture.url;
      }
      return {
        name: member.Name,
        url: picture,
        group: member.Group,
        title: member.Title,
        email: member.Email,
      };
    }),
  };
};

export default Page;
