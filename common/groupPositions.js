const groupPositions = [
  {
    name: 'Group Leaders',
    image: 'admin.jpg',
    positions: [
      {
        name: 'Embedded',
        description:
          "As the head of embedded you will be responsible for overseeing the teams technical progress towards designing and implementing the embedded electronics which make up the pods control, safety and communication systems. You will get a unique opportunity to contribute to the development of Shift's cutting edge custom PCBs and embedded software while growing as a leader and engineer.\n",
      },
      {
        name: 'Software',
        description:
          "The software group leader will manage the group's progress and accomplishments. As a full-stack lead-developer, s·he will be more involved in the development than the other group leaders. Moreover, s·he will also be responsible for designing the architecture, administering the server, planning the development, and supervising testing. This position is a unique opportunity to gain invaluable experience in project management as well as software engineering.\n",
      },
      {
        name: 'Powertrain',
        description:
          "The Powertrain lead will manage the group's progress and accomplishments. It is a unique opportunity to manage a group responsible for one of the most defining principles for the hyperloop concept; magnetic propulsion. The group will create a unique electrical motor and a high voltage system to feed it with power, using batteries and inverters. Lastly, in order for these individual parts to combine into an optimal autonomous propulsion system, the group will need to design and implement a cutting-edge control system. These tasks involve an assortment of engineering fields, so the group leader gets a unique opportunity to gain invaluable experience in project management and simultaneously widen their horizons in the engineering world.\n",
      },
      {
        name: 'Levitation',
        description:
          'As the Levitation lead, you will also work on electromagnetic simulation and develop the levitation system. The relevant electromagnetic forces should be simulated and a test-rig is used to evaluate the simulations using load cells for measuring both the levitation force and the drag fore lift \n' +
          '\n',
      },
      {
        name: 'Casing and Housing',
        description:
          "The Casing and Housing lead will manage the group's progress and accomplishments. The group is responsible for design, simulation, testing and production of the following subgroups: Aeroshell, Battery Casing and Inverter Casing. Their main functionality is to protect the components enclosed, and regarding the aeroshell, also to create the face of Shift's pod.\n" +
          '\n' +
          'The production phase for this group is quit extensive, thus the group leader will get hands on experience with composites and general production techniques. The Casing and Housing lead will also ensure good communication within the group, as well as with other related groups.\n' +
          '\n',
      },
      {
        name: 'Structural',
        description:
          'The Structural lead will manage the groups progress and accomplishments. The lead will ensure good communication between the structural group and other closely related groups. As the structural lead you will have a strong overview of the Pod as a whole.\n',
      },
      {
        name: 'Group leader in Marketing',
        description:
          'The Marketing lead will manage the day to day operations of the marketing group. They will be responsible for making sure that the group is working efficiently, and that they are able to properly communicate with the rest of the team.\n' +
          '\n' +
          'This role is closely related to the CMO, and will work frequently with them.\n' +
          '\n',
      },
      {
        name: 'Group leader in Concept',
        description:
          'As the head of the Concept group you are responsible to lead the R&D on large scale – Hyperloop. Your main tasks will be to make a project plan for the team, lead the workshops and follow the progress of the team. The group will produce a research document about the findings of this years team, this document will be submitted to the Full-scale award of the EHW-competition. as the group leader it is your responsibility to oversee the quality of the documentation.  The position is a great opportunity to learn more about project management, and you will also get an insight of some of the great problems about hyperloop that needs to be overcome.\n' +
          '\n',
      },
    ],
  },
  {
    name: 'Management',
    image: 'management.jpg',
    positions: [
      {
        name: 'Project Manager (Chief Executive Officer)',
        description:
          'The Project Manager & CEO is the overall leader of the organization, and is responsible for daily operations and planning both inside and outside the organization. It is thus a complex position, that entails a lot of different tasks.\n' +
          '\n' +
          'Some of the most important ones are administrative related, such as planning the general meetings each week, project planning, management tasks such as setting up a weekly management meeting and conducting it, and also delegate tasks around in the organization. \n' +
          '\n' +
          "Other key responsibilities for the Project Manager is related to managerial tasks such as maintaining a good work environment in the organization, facilitate for other members so they are capable of doing their work, and make sure everyone's voice is heard. \n" +
          '\n' +
          'The Project Manager is also an important face outside the organization, and has responsibility for communication with the other technical organizations at NTNU and with the organizations most important partners and sponsors, as well as with NTNU. \n' +
          '\n' +
          'This position will challenge you in many different ways, but will also provide you with a great opportunity to develop yourself as a leader. You will also learn valuable interpersonal skills and get a chance at improving you communication, planning, administrative and managerial skills ',
      },
      {
        name: 'Deputy Project Manager (Chief Financial Officer)',
        description:
          "The Deputy Project Manager & CFO is the main responsible for managing the organization's finances. This includes financial planning, management of financial risks, record-keeping, invoicing partners and general accounting. As the head responsible of the organization's finances you will get a lot of valuable experience on how to run an organizations financial operations.  \n" +
          '\n' +
          'The Deputy Project Manager also plays an important part of helping the Project Manager with daily operations and adminstrative tasks.\n' +
          '\n',
      },
      {
        name: 'Marketing Leader (Chief Marketing Officer)',
        description:
          'The Marketing Leader leads the overarching marketing related goals, and coordinating them with the rest of the organization.\n' +
          '\n' +
          'They have the responsibility of making sure that the different events are planned well ahead. The Marketing Leader has frequent communication with the whole organization. One of the primary tasks of the Marketing Leader is also to mantain a healthy communication with the outside organizations.\n' +
          '\n' +
          'This position will provide invaluable leadership and strategy experience, and will provide you with the ability to properly manage and work within a large interdiciplinary team.\n' +
          '\n',
      },
      {
        name: 'Technical Leader - Mechanical (Chief Technical Officer, Mechanical)',
        description:
          'The technical leader - Mechanical leads the mechanical division of the organization. Together with the technical Leader electrical and software, he/she has the general responsibility for delivering a final product before the yearly competition. The technical leaders are in regular contact with the management and the technical group leaders in order to ensure a good information flow within the organization. \n' +
          '\n' +
          'This position will provide invaluable leadership experience, and challenge your ability to turn technical expertise within a large variety of subjects into a final product.',
      },
      {
        name: 'Technical Leader - Electrical (Chief Technical Officer, Electrical)',
        description:
          'The technical leader - Electrical leads the electrical division of the organization. Together with the technical leader - mechanical and software, he/she has the general responsibility for delivering a final product before the yearly competition. The technical leaders are in regular contact with the management and the technical group leaders in order to ensure a good information flow within the organization. Key areas of responsibility include power systems, linear induction motor and embedded hardware.\n' +
          '\n' +
          'This position will provide invaluable leadership experience, and challenge your ability to turn technical expertise within a large variety of subjects into a final product.\n' +
          '\n',
      },
      {
        name: 'Technical Leader - Software (Chief Technical Officer, Software)',
        description:
          'The technical leader - Software leads the software-division of the organization. Together with the technical leader mechanical and electrical, he/she has the general responsibility for delivering a final product before the yearly competition. The technical leaders are in regular contact with the management and the technical group leaders in order to ensure a good information flow within the organization. Key areas of responsibility include both high- and low level software, and you will also work closely with embedded hardware due to the nature of your tasks.\n' +
          '\n' +
          'This position will provide invaluable leadership experience, and challenge your ability to turn technical expertise within a large variety of subjects into a final product.\n' +
          '\n',
      },
    ],
  },
];

export default groupPositions;
