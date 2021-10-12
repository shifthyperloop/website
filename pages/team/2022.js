import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import { CMS_BASE_URL } from '../../common/constants';
import TeamPage from '../../components/page/team/TeamPage/TeamPage';

const Page = ({ members = [] }) => {
  const router = useRouter();

  const groups = {
    Structural: {
        title: 'Structural',
        description: '...',
        members: [],
      },
    Casing: {
        title: 'Casing & Housing',
        description: '...',
        members: [],
    },
    Concept: {
        title: 'Concept',
        description: '...',
        members: [],
      },
    Management: {
      title: 'Management',
      description: '...',
      members: [],
    },
    Electronics: {
      title: 'Embedded Electronics',
      description: '...',
      members: [],
    },
    Powertrain: {
      title: 'Powertrain',
      description: '...',
      members: [],
    },
    Levitation: {
      title: 'Levitation R&D',
      description: '...',
      members: [],
    },
    Software: {
      title: 'Software',
      description: '...',
      members: [],
    },
    Relations: {
      title: 'Relations',
      description: '...',
      members: [],
    },
    Mentors: {
      title: 'Mentors',
      description: '...',
      members: [],
    },
  }

  return (
    <TeamPage
      members={members}
      teamGroups={groups}
      topImage={'/images/team/2022.jpg'}
      title={'Team 2022'}
      path={'/team/2022'}
    />
  );
};

Page.getInitialProps = async function () {
  const res = await fetch(CMS_BASE_URL + '/team-2022-s');
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
