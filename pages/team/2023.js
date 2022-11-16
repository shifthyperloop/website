import fetch from 'isomorphic-unfetch';
import { CMS_BASE_URL } from '../../common/constants';
import TeamPage from '/components/page/team/TeamPage/TeamPage';

const Page = ({ members = [] }) => {
  const groups = {
    Mechanical: {
      title: 'Mechanical',
      description:
        'The mechanical group handles all the mechanical systems within the pod. This icnludes systems like the brakes, suspension and aeroshell. The mechanical group is also responsible for the battery casing and inverter casing.',
      members: [],
      },
    Concept: {
      title: 'Concept',
      description:
        'The Concept group works on how we can realise the Hyperloop concept in Norway. They work on designing a Hyperloop station, designing a pod for public use and a possible route between Oslo and Bergen.',
      members: [],
    },
    Management: {
      title: 'Management',
      description:
        'The Management group is responsible for managing the organization and maintaining continous progress of the project. The daily tasks include coordinating the group leaders and ensuring that the project is within its budgetary limits. Management is an interdisciplinary team with varied talents and abilities.',
      members: [],
    },
    Electronics: {
      title: 'Embedded Electronics',
      description:
        'The Embedded Electronics group are responsible for the electronic components within the pod as well as the software the operator uses to control, monitor and analyse the performance of the pod. This includes the following subsystems: Vehicle Control unit, Propulsion Control Unit, Telemetry, Sensors, Battery Management System, Front-End, Back-End and CANEF',
      members: [],
    },
    Powertrain: {
      title: 'Powertrain',
      description:
        'The Powertrain group designs the electromagnetic propulsion system of the pod. This includes design and production of the linear induction motor, choosing the appropriate battery, as well as designing the power converting system which feeds the motor with AC-power. Making a cooling system for the motor is also crucial to produce as much thrust as possible without overheating.',
      members: [],
    },
    Marketing: {
      title: 'Marketing',
      description:
        'The Marketing group handles all things related to marketing and business within Shift. That includes tasks like making social media posts, contacting partners, writing the newsletter and developing the website.',
      members: [],
    }
  };

  return (
    <TeamPage
      members={members}
      teamGroups={groups}
      topImage={'/images/team/2023.jpg'}
      title={'Team 2023'}
      path={'/team/2023'}
      groupPriorities={{ Management: 1, 'The Board': -1, Mentors: -2 }}
    />
  );
};

Page.getInitialProps = async function () {
  const res = await fetch(CMS_BASE_URL + '/team-2023-s');
  const data = await res.json();

  return {
    members: data.map((member) => {
      let picture = {
        url: undefined,
      };
      if (member.Picture.lenght !== 0) {
        picture = member.Picture[0]?.url;
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
