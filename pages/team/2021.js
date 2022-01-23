import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import { CMS_BASE_URL } from '../../common/constants';
import TeamPage from '../../components/page/team/TeamPage/TeamPage';

const Page = ({ members = [] }) => {
  const router = useRouter();

  const groups = {
    Board: {
      title: 'The Board',
      members: [],
    },
    Electronics: {
      title: 'Electronics Group',
      members: [],
    },
    Battery: {
      title: 'Battery Group',
      members: [],
    },
    Powertrain: {
      title: 'Powertrain Group',
      members: [],
    },
    Mechanical: {
      title: 'Mechanical Group',
      members: [],
    },
    Levitation: {
      title: 'Levitation Group',
      members: [],
    },
    Software: {
      title: 'Software Group',
      members: [],
    },
    Relations: {
      title: 'Relations Group',
      members: [],
    },
    Concept: {
      title: 'Concept Group',
      members: [],
    },
    Mentor: {
      title: 'Mentors',
      members: [],
    },
  };

  return (
    <TeamPage
      members={members}
      teamGroups={groups}
      topImage={'/images/team/2021.jpg'}
      title={'Team 2021'}
      path={'/team2021'}
    />
  );
};

Page.getInitialProps = async function () {
  const res = await fetch(CMS_BASE_URL + '/team-2021-s');
  const data = await res.json();

  return {
    members: data.map((member) => {
      let picture = {
        url: undefined,
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
