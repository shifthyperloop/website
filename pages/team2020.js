import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import { CMS_BASE_URL } from '../common/constants';
import TeamPage from '../components/teamPage/TeamPage';

const Page = ({ members = [] }) => {
  const router = useRouter();

  let groups = {
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

  return (
    <TeamPage
      members={members}
      teamGroups={groups}
      topImage={'/images/team/2020.jpg'}
      title={'Team 2020'}
      path={'/team2020'}
      centerImages={false}
    />
  );
};

Page.getInitialProps = async function () {
  const res = await fetch(CMS_BASE_URL + '/team-2020-s');
  const data = await res.json();

  return {
    members: data.map((member) => {
      let picture = {
        url: undefined,
      };
      if (member.picture !== null) {
        picture = member.picture;
      }
      return {
        name: member.Name,
        picture,
        group: member.Group,
        title: member.Title,
        email: member.Email,
        url: member.Picture.url,
      };
    }),
  };
};

export default Page;
