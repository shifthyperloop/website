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
    Tech: {
      title: 'Electrical Group',
      description: '...',
      members: [],
    },
    Relations: {
      title: 'Relations Group',
      description: '...',
      members: [],
    },
  };

  return <TeamPage
    members={members}
    teamGroups={groups}
    topImage={"/images/team/2019.jpg"}
    title={"Team 2019"}
    path={"/team2019"}
    centerImages={false}
  />
};

Page.getInitialProps = async function() {
  const res = await fetch(CMS_BASE_URL + '/team-2019-s');
  const data = await res.json();

  return {
    members: data.map(member => {
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
        url: member.Picture.url
      };
    }),
  };
};

export default Page;
