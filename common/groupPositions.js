const groupPositions = [
  {
    name: 'Structural',
    description: '',
    image: 'suspension.jpg',
    positions: [
      {
        name: 'Mechanical engineer, chassis',
        description:
          'The chassis engineers are responsible for designing a chassis, which will function as the back bone of the pod. He/she will also be responsible of assembling every sub-system onto the chassis to complete the pod, and will therefore naturally work closely with the engineers working on the related sub-systems.',
      },
    ],
  },
  {
    name: 'Electronics & Powertrain',
    description: '',
    image: 'electronics.jpg',
    positions: [
      {
        name: 'Electrical engineer, BMS & Power systems',
        description:
          'This position will take part in embedded design of the Battery Management System as well as working on power systems.\n' +
          '\n' +
          'Working on the Battery Management System, he/she will design a robust system monitoring the litium-ion battery pack together with two other members. The Li-Ion battery cells make up the most hazardous part of the pod. Some tasks include embedded circuit design and embedded software development.\n' +
          '\n' +
          'Working with power systems, he/she will do electrical design of both the high voltage and low voltage system of the pod. Power converters are needed to deliver power to the subsystems of the pod, and the high voltage system demands a high standard safety to reduce and elimininate safety hazards. Some of the tasks include design and implementation of converters, relays, fuses and cable management.',
      },
    ],
  },
  {
    name: 'Levitation',
    description:
      'The levitation group is responsible for the pod levitation and suspension systems. As a member of the levitation group you will work together with the mechanical group to stabilise the main frame, and thus the engines. Levitation is a key aspect of the hyperloop concept, and we are therefore eager to see this group exceed.',
    image: 'levitation.jpg',
    positions: [
      {
        name: 'Mechanical engineer, levitation test rig',
        description:
          'The Levitation mechanical engineers are responsible for designing the mechanical test rig used to test electromagnetic levitations system, used to further increase the organizations knowledge of electromagnetic technology.',
      },
    ],
  },
  {
    name: 'Relations',
    description:
      'Shift Hyperloop is not only about building a pod, it is also about communicating with the outside world! The relations group is responsible for all things that are non-technical. This includes posting on social media, designing our website, editing videos, contacting sponsors and even organizing social events!',
    image: 'relations.jpg',
    positions: [
      {
        name: 'Marketing Coordinator',
        description:
          'The marketing coordinator is the heart of the relations group.\n\nAs a marketing coordinator you will do what is necessary to support the technical groups. This means making sure Shift has enough money, making sure Shift get the proper exposure and arranging fun and exciting activities within the organization.  \n\nThis job will often involve contacting and maintaining contact with sponsors, as well as helping out other more general tasks that comes up throughout the year like arranging events etc.',
      },
      {
        name: 'Graphical designer',
        description:
          'As a graphic designer you will work to figure out how Shift should present itself to the world. As a graphical designer\n\nYou will also be in charge of how our monthly newsletter looks and will work with programs such as Adobe Indesign, Illustrator and Photoshop.',
      },
      {
        name: 'Web Developer',
        description:
          'Are you into coding? As a web developer you will get to improve Shift’s website. You will get a chance to work with developing and designing our most important web platform. Hands-on experience will be useful for your practice and for future job application.',
      },
    ],
  },
  {
    name: 'Software',
    description:
      'The software group will create a new analysis tool and pod control interface. This will be a computer program that can be used in competition as well as during testing. The program is our way of controlling the pod, although further development would be beneficial for real time data visualization of telemetry and sensor data.',
    image: 'software.jpeg',
    positions: [
      {
        name: 'Frontend developer',
        description:
          'The frontend developer works on the GUI of the software used to control the Hyperloop pod. The application displays critical information intuitively, and allows the operator to take action in case of an emergency. He/she works closely with the backend developers, ensuring a satisfying progress using agile software development.',
      },
      {
        name: 'Data scientist',
        description:
          'The data scientist processes data-points generated from the pod-runs in order to exploit any anomolies. This allows proper testing of the performance of spesific subsystems and the pod as a whole during a run. He/she works closely with engineers from several other technical groups in Shift in order to collectively create the best possible post-run analysis tool.',
      },
    ],
  },
];

export default groupPositions;
