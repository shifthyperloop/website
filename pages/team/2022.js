import fetch from 'isomorphic-unfetch';
import { CMS_BASE_URL } from '../../common/constants';
import TeamPage from '/components/page/team/TeamPage/TeamPage';

const Page = ({ members = [] }) => {
  const groups = {
    Structural: {
        title: 'Structural',
        description: 'The Structural group handles most of the mechanical system within the pod. This means systems like the brakes, suspension and chassis. Making sure that the mechanical parts are working properly is essential for any vehicle.',
        members: [],
      },
    Casing: {
        title: 'Casing & Housing',
        description: 'The Casing & Housing group makes all of the containers for the pod. This includes components like the aeroshell, which is the container for the whole pod, battery casings and inverter casing.',
        members: [],
    },
    Concept: {
        title: 'Concept',
        description: 'The Concept group works on how we can realise the Hyperloop concept in Norway. They work on designing a Hyperloop station, designing a pod for public use and a possible route between Oslo and Bergen.',
        members: [],
      },
    Management: {
      title: 'Management',
      description: 'The Management group is responsible for managing the organization and maintaining continous progress of the project. The daily tasks include coordinating the group leaders and ensuring that the project is within its budgetary limits. Management is an interdisciplinary team with varied talents and abilities.',
      members: [],
    },
    Electronics: {
      title: 'Embedded Electronics',
      description: 'The Embedded Electronics group are responsible for the electronic components within the pod. This includes the following subsystems: Vehicle Control unit, Propulsion Control Unit, Telemetry, Sensors and Battery Management System.',
      members: [],
    },
    Powertrain: {
      title: 'Powertrain',
      description: 'The Powertrain group designs the electromagnetic propulsion system of the pod. This includes design and production of the linear induction motor, choosing the appropriate battery, as well as designing the power converting system which feeds the motor with AC-power. Making a cooling system for the motor is also crucial to produce as much thrust as possible without overheating.',
      members: [],
    },
    Levitation: {
      title: 'Levitation R&D',
      description: 'The Levitation R&D group are, as the title suggests, researching and developing different methods of levitation for the pod. This involves a lot of simulation and testing, and even more simulation and again more testing.',
      members: [],
    },
    Software: {
      title: 'Software',
      description: 'The Software group develops the application which the operator uses to control and monitor the pod, in addition to performing post-run analysis allowing further improvements for the pod.',
      members: [],
    },
    Relations: {
      title: 'Relations',
      description: 'The Relations group handles all things related to marketing and business within Shift. That includes tasks like making social media posts, contacting partners, writing the newsletter and developing the website.',
      members: [],
    },
    Board: {
      title: 'The Board',
      description:'The board\'s responsibility is to oversee the long-term goals of the organization as well as hosting the general assembly. The board meets at least a few times each semester and makes sure to have a running dialogue with the management.',
      members: [],
    },
    Mentors: {
      title: 'Mentors',
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
      groupPriorities={{'Management': 1, 'The Board': -1, 'Mentors': -2}}
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
