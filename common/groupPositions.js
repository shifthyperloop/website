
const groups = [
  {
    name: "Administration/Management",
    description: "Management carries responsibility for the progress and makes sure that the organization follows the guidelines set by the board. They also do the administrative work for the organization. The most important task of the leaders is to encourage and support Shifts members when needed. As a top leader you will also be a part of the board.",
    image: "admin.jpg",
    positions: [
      {
        name: "Chief Technical Officer Mechanical",
        description: "The mechanical CTO is the leader of the mechanical division of the technical team. She/he works closely with the electrical CTO to form the technical administration, which develops the organization's technical vision and goals. They are also responsible for guiding the technical management and pod development.\n\nThis position will provide invaluable leadership experience, and challenge your ability to turn technical expertise within a large variety of subjects into professional engineering and innovation.",
      }
    ],
  },
  {
    name: "Misc. technical",
    description: "",
    image: "technical.jpg",
    positions: [
      {
        name: "Systems engineer",
        description: "The systems engineer understands the dependencies across different technical systems and ensures that systems are compatible with each other. One important aspect is to give feedback on the design of different subsystems, especially from a compatibility point of view. \n\nThe systems engineer is organized, has a broad technical understanding and has good communication skills. It is also important to be comfortable with working independently.",
      }
    ],
  },
  {
    name: "Levitation R&D",
    description: "The levitation group is responsible for the pod levitation and suspension systems. As a member of the levitation group you will work together with the mechanical group to stabilise the main frame, and thus the engines. Levitation is a key aspect of the hyperloop concept, and we are therefore eager to see this group exceed.",
    image: "levitation.jpg",
    positions: [
      {
        name: "Electromagnetic simulation engineer",
        description: "The electromagnetic simulation engineer understands the electromagnetic interaction between the levitation system and the track, and drives the development of new levitation system concepts for the group to evaluate. She/he will also evaluate system performance using FEM analysis and develop performance models.",
      },
      {
        name: "Sensor engineer",
        description: "The Levitation R&D sensor engineers are responsible for acquisition of sensor data when testing levitation designs. The main tasks will be choice of sensors, circuit design, integration with the test setup and data analysis.",
      },
      {
        name: "Mechanical engineer",
        description: "The Levitation R&D mechanical engineers are responsible for designing the mechanical test aspects to further develop the organizations levitation knowledge.",
      },
    ],
  },
  {
    name: "Powertrain",
    description: "The powertrain group consists of the systems necessary for the pod to move. This group works closely with the battery group to maximize propulsive power. You will collaborate with members from various studies and backgrounds in order to complete the task.",
    image: "powertrain.jpg",
    positions: [
      {
        name: "Group leader",
        description: "The powertrain lead will manage the group's progress and accomplishments. It is a unique opportunity to manage a group responsible for one of the most defining principles for the hyperloop concept; magnetic propulsion.",
      },
      {
        name: "Motor Design & Production",
        description: "The motor design engineer designs the Linear AC induction motor and experiments with different production methods. This position consists of mostly prototyping. ",
      },
      {
        name: "Power Electronics",
        description: "The power electronics engineer designs the high voltage power systems. Their goal is to optimize the power capabilities of the battery pack, inverter, and the rest of the high voltage electrical components.",
      },
      {
        name: "Motor Control System",
        description: "The motor control system engineer designs the control algorithm that is used by the inverter to control the linear induction motor. This algorithm processes and uses data from different sensors, and control inputs from the vehicle control unit, to calculate the necessary waveforms to apply to the inverter gate inputs for optimal thrust or speed control.",
      },
    ],
  },
  {
    name: "Embedded Electronics",
    description: "The electronics group is responsible for developing several of the embedded systems on the pod, this includes data acquisition, communication and control systems. Members of the group will work a lot with PCB design and software development.",
    image: "electronics.jpg",
    positions: [
      {
        name: "Sensors engineer",
        description: "The sensors engineers will be responsible for developing all sensor systems needed to acquire the data used to operate the pod. Reliable and accurate data is important for maximum performance. One challenge is how to precisely determine the position of the pod on the track.",
      },
      {
        name: "Telemetry engineer",
        description: "The telemetry engineers will work on reliable wireless communication for the pod. Working closely with the software group, the telemetry engineers will develop a communication link between the pod and the engineers operating the pod.",
      },
      {
        name: "Vehicle Control Engineer",
        description: "The Vehicle Control Engineers will be responsible for developing the Vehicle Control Unit (VCU), which through sensor data and telemetry communication controls the pods actions.",
      },
      {
        name: "Motor controller embedded engineer",
        description: "The motor controller engineers will work together with the motor control algorithm engineers to design and implement the control algorithm for the inverter.",
      },
      {
        name: "BMS engineer",
        description: "The BMS engineers will be responsible for developing a battery management system. Lithium-ion batteries are extremely volatile. This advanced control system is critical for preventing the battery pack from acting outside its safe operating area, drastically reducing the hazard presented by the high density energy storage system.",
      },
    ],
  },
  {
    name: "Software",
    description: "The software group will create a new analysis tool and pod control interface. This will be a computer program that can be used in competition as well as during testing. The program is our way of controlling the pod, although further development would be beneficial for real time data visualization of telemetry and sensor data.",
    image: "software.jpeg",
    positions: [
      {
        name: "Group leader",
        description: "The software lead will manage the groups progress and accomplishments, however the software lead is much more involved in the day to day development work compared to the other groups..",
      },
      {
        name: "CAN software engineer",
        description: "The CAN software engineers will develop a system for defining data structures in a common format across different data-architectures. You will work closely with the embedded electronics group as well as the software group.",
      },
      {
        name: "Software engineer",
        description: "The software engineers will work on further development of the base operator application. You will work closely with the sensors engineers and the BMS engineers among others, to display critical pod-values to the operator.",
      },
    ],
  },
  {
    name: "Structural",
    description: "",
    image: "suspension.jpg",
    positions: [
      {
        name: "Group leader",
        description: "The structural lead will manage the groups progress and accomplishments. The lead will ensure good communication between the structural group and other closely related groups. As the structural lead you will have a strong overview of the Pod as a whole.",
      },
      {
        name: "Suspension",
        description: "The suspensions engineers will design a dampening system to reduce vibrations and shock to ensure that the Pod can withstand a high speed run. You will work closely with chassis on placements, geometry and force distribution.",
      },
      {
        name: "Chassis",
        description: "The chassis engineers will be responsible for designing a chassis, which will function as the back bone of the pod. You will also be responsible of assembling every sub system onto the chassis to complete the pod. ",
      },
      {
        name: "Brakes",
        description: "The brake engineers will engineer a braking system which fits the track geometry with a goal to stop for high speeds as efficiently as possible. The braking force will be the largest sustained force to deal with, so you will be working closely with chassis to distribute them.",
      },
    ],
  },
  {
    name: "Casing and Housing",
    description: "",
    image: "casing.jpg",
    positions: [
      {
        name: "Aeroshell",
        description: "The Aeroshell designers will design a fiber composites structure which will be the outline and the aesthetic part of the Pod. ",
      },
      {
        name: "Power systems casing",
        description: "The casing engineers are responsible for designing the battery casing, inverter casing and to house electrical components.",
      },
    ]
  },
  {
    name: "Relations",
    description: "Shift Hyperloop is not only about building a pod, it is also about communicating with the outside world! The relations group is responsible for all things that are non-technical. This includes posting on social media, designing our website, editing videos, contacting partners and even organizing social events!",
    image: "relations.jpg",
    positions: [
      {
        name: "Group Leader Relations",
        description: "As the group leader of Relations, you will be in charge of the day-to-day operations of the group. You will make sure that everyone in the group is doing their best and that they have the tools they need to be their best.\n\nAs group leader Relations you will work closely with the CMO. You will focus on how to make the group work most efficiently and will oversee most all of the work being done by the Relations group, while the CMO will handle the marketing related tasks not directly related to the Relations group.",
      },
      {
        name: "Marketing Coordinator",
        description: "The marketing coordinator is the heart of the relations group.\n\nAs a marketing coordinator you will do what is necessary to support the technical groups. This means making sure Shift has enough money, making sure Shift get the proper exposure and arranging fun and exciting activities within the organization.  \n\nThis job will often involve contacting and maintaining contact with sponsors, as well as helping out other more general tasks that comes up throughout the year like arranging events etc.",
      },
      {
        name: "Graphical designer",
        description: "As a graphic designer you will work to figure out how Shift should present itself to the world. As a graphical designer\n\nYou will also be in charge of how our monthly newsletter looks and will work with programs such as Adobe Indesign, Illustrator and Photoshop.",
      },
      {
        name: "Web Developer",
        description: "Are you into coding? As a web developer you will get to improve Shift’s website. You will get a chance to work with developing and designing our most important web platform. Hands-on experience will be useful for your practice and for future job application.",
      },
      {
        name: "Writer/SoMe Responsible",
        description: "As the writer in Shift you will be responsible for writing the social media posts, as well as the newsletters. You will be working with the graphical designer to make sure Shift looks its best from the outside.\n\nThis is a very independent role, and you will have much freedom to figure out what you want to write about!  You will communicate a lot with the other groups in Shift in order to get an overview into what is currently happening in Shift.",
      },
      {
        name: "Video and/or photo Editor",
        description: "The main part of this job is filming and editing videos that is needed in Shift. We hope to produce a couple of cool videos throughout next year. One of the main things that we would like to produce is a proper hype video that will really get people excited for Shift Hyperloop!\n\nWe also need someone to edit and take pictures of the group! We need people to take profile pictures, group photos and photos of whatever things that come up throughout the year.",
      },
    ]
  },
]

export default groups;