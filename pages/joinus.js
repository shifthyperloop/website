import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { IoMdClose } from 'react-icons/io';
import { APPLY_URL } from "../common/constants";
import { ButtonTitle, LinkButton, SmallButton } from '../components/Button';

const Page = () => {
  const router = useRouter();
  const [modal, setModal] = useState({ title: '' });

  const PositionsButton = (props) => {
    return <div className="button-container">
      <SmallButton
        onClick={() =>
          setModal({
            title: props.modalTitle,
          })
        }
      >
        View available positions
      </SmallButton>
      <style jsx>
        {`
        .button-container {
          display: flex;
          justify-content: center;
        }
      `}
      </style>
    </div>
  }

  const ApplyButton = () => {
    return(
      <>
        <div className="apply-button">
          <LinkButton>
            <ButtonTitle>Apply!</ButtonTitle>
            Application form coming soon
          </LinkButton>
        </div>
        <style jsx>
          {`
            .apply-button {
              display: flex;
              justify-content: center;
            }
          `}
        </style>
      </>
    )
  };

  return (
    <Layout
      url="https://www.shifthyperloop.com/joinus"
      title="Shift Hyperloop | Join us"
    >
      <h1 className="join">Join Us</h1>
      <hr />
      <h3 className="join-description">
        On this page you will find our application from and a more detailed
        description of the positions we are offering this year. We are
        recruiting students from all fields of study regardless of year and
        prior knowledge. Working with Shift will give you experience that makes
        you attractive for your future employers. You will get a large network
        of new friends in the technical community at NTNU. A year at Shift will
        be educational and fun! Admission for the team 2021 is open and you
        should check if something is for you! Don’t hesitate to contact us if
        you have questions.
        {/* Primarily Shift enrolls new members to the team two
        times a year. In May the team leader and board positions are filled. The
        rest of the team positions are filled in august/september at the start
        of the semester. However, any student feeling they have something to
        contribute to the team should not hesitate to contact us any time of the
       year. */}
      </h3>
      <ApplyButton />
      <br />
      <div className="join-container">
        <div className="general-information"></div>
        <div className="groups">
          <div className="board group left">
            <div className="imagetest">
              <img className="board image" src="/stock/boss.jpg" />
            </div>
            <div className="group-info">
              <h3>Management</h3>
              <p>
                {' '}
                Management carries responsibility for the progress and makes
                sure that the organization follows the guidelines set by the
                board. They also do the administrative work for the
                organization. The most important task of the leaders is to
                encourage and support Shifts members when needed. As a top
                leader you will also be a part of the board.
              </p>
              <PositionsButton modalTitle="Management positions" />
            </div>
          </div>
          <div className="relations group right">
            <div className="group-info">
              <h3>Relations</h3>
              <p>
                {' '}
                Shift Hyperloop is not only about building a pod, it is also
                about communicating with the outside world! The relations group
                is responsible for all things that are non-technical. This
                includes posting on social media, designing our website, editing
                videos, contacting partners and even organizing social events!
              </p>
              <PositionsButton modalTitle="Relations" />
            </div>
            <div className="imagetest">
              <img className="relations image" src="/stock/designer.jpg"></img>
            </div>
          </div>
          <div className="software group left">
            <div className="imagetest">
              <img className="software image" src="/stock/software.jpg"></img>
            </div>
            <div className="group-info">
              <h3>Software</h3>
              <p>
                {' '}
                The software group will create a new analysis tool and pod
                control interface. This will be a computer program that can be
                used in competition as well as during testing. The program is
                our way of controlling the pod, although further development
                would be beneficial for real time data visualization of
                telemetry and sensor data.
              </p>
              <PositionsButton modalTitle="Software" />
            </div>
          </div>
          <div className="electronics group right">
            <div className="group-info">
              <h3>Electronics</h3>
              <p>
                {' '}
                The electronics group is responsible for developing several of
                the embedded systems on the pod, this includes data acquisition,
                communication and control systems. Members of the group will
                work a lot with PCB design and software development.
              </p>
              <PositionsButton modalTitle="Electronics" />
            </div>
            <div className="imagetest">
              <img
                className="electronics image"
                src="/stock/electronics.jpg"
              ></img>
            </div>
          </div>
          <div className="battery group left">
            <div className="imagetest">
              <img className="battery image" src="/stock/battery.jpg"></img>
            </div>
            <div className="group-info">
              <h3>Battery</h3>
              <p>
                {' '}
                The battery group designs and assembles the battery pack and all
                its components, as well as the entire high voltage net. The
                group will also design the electronics required to monitor and
                control the battery pack, to ensure safe and efficient
                operation. Additionally, the group is responsible for making a
                low voltage system to supply the pod’s electronics.
              </p>
              <PositionsButton modalTitle="Battery" />
            </div>
          </div>
          <div className="powertrain group right">
            <div className="group-info">
              <h3>Powertrain</h3>
              <p>
                {' '}
                The powertrain group consists of the systems necessary for the
                pod to move. This group works closely with the battery group to
                maximize propulsive power. You will collaborate with members
                from various studies and backgrounds in order to complete the
                task.
              </p>
              <PositionsButton modalTitle="Powertrain" />
            </div>
            <div className="imagetest">
              <img
                className="powertrain image"
                src="/stock/powertrain.jpg"
              ></img>
            </div>
          </div>
          <div className="levitation group left">
            <div className="imagetest">
              <img
                className="levitation image"
                src="/stock/levitation.jpg"
              ></img>
            </div>
            <div className="group-info">
              <h3>Levitation</h3>
              <p>
                {' '}
                The levitation group is responsible for the pod levitation and
                suspension systems. As a member of the levitation group you will
                work together with the mechanical group to stabilise the main
                frame, and thus the engines. Levitation is a key aspect of the
                hyperloop concept, and we are therefore eager to see this group
                exceed.
              </p>
              <PositionsButton modalTitle="Levitation" />
            </div>
          </div>
          <div className="mechanical group right">
            <div className="group-info">
              <h3>Mechanical</h3>
              <p>
                {' '}
                The mechanical group is responsible for some of the fundamental
                mechanical structures of the pod. This group will build a frame,
                the brakes and an aeroshell. They will also be responsible for
                integrating systems designed by other groups to a finished pod.
                The group will work closely with the mechanical engineers in the
                other groups to assemble all the systems into a finished pod.
              </p>
              <PositionsButton modalTitle="Mechanical" />
            </div>
            <div className="imagetest">
              <img className="mechanical image" src="/stock/aero.jpg"></img>
            </div>
          </div>
          <div className="concept group left">
            <div className="imagetest">
              <img className="board image" src="/stock/concept.jpg" />
            </div>
            <div className="group-info">
              <h3>Concept</h3>
              <p>
                {' '}
                What about Hyperloop in the real world? How will it work, and
                how will the passengers get onboard? Concept is the group that
                is focused more about the Hyperloop as a concept rather than the
                prototype pod. In the Concept group you will work with the
                future problems and solutions for the Hyperloop system, and as a
                member you will have the freedom to experiment with different
                ideas and sketches, far beyond imagination! The main tasks are:
                Station Design, Architecture, User interface, Interior design,
                Route Planning, Geology and City planning! Working in a concept
                group will give you an unique experience no other technical
                organization can offer, join us in visualizing what a greener,
                safer and faster future can look like!
              </p>
              <PositionsButton modalTitle="Concept" />
            </div>
          </div>
          <div className="research group right">
            <div className="group-info">
              <h3>Research & Development</h3>
              <p>
                {' '}
                Working with R&D, you will be able to research and develop
                solutions too ambitious for this year's pod. The goal for any
                R&D members is to give Shift valuable research that can be
                implemented at a later stage, most likely the following year.
                You will be allowed to research any subject relevant for the
                project, so the possibilities are endless!
              </p>
              <PositionsButton modalTitle="Research & Development" />
            </div>
            <div className="imagetest">
              <img className="research image" src="\stock\research.jpg"></img>
            </div>
          </div>
        </div>
        <p></p>
        <div className="modal-container">
          <div id="modal-content">
            <a
              className="close-button"
              onClick={() => setModal({ title: '', description: '' })}
            >
              <IoMdClose />
            </a>
            <h1 className="group-title">{modal.title}</h1>
            <hr id="blue-line-thick" />
            {modal.title == 'Management positions' ? (
              <>
                <h2 id="undergroup-title">Project Manager (CEO)</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As project manager you are the head of the organization’s
                  administration, supported by four board members and a large
                  group of mentors. Your main objective is to inspire the
                  organization and lead us to the SpaceX competition in
                  California.
                </p>
                <h2 id="undergroup-title">System Engineer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  Studying to become a systems engineer? Get some experience at
                  Shift!
                </p>
              </>
            ) : null}
            {modal.title == 'Research & Development' ? (
              <>
                <h2 id="undergroup-title">Some possible areas of research</h2>
                <hr id="blue-line-thin" />
                <div className="bullet-container">
                  <p className="bullet-point">•Levitation </p>
                  <p className="bullet-point">•Linear induction motor </p>
                  <p className="bullet-point">•Embedded systems</p>
                  <p className="bullet-point">•FPGA </p>
                  <p className="bullet-point">•Master thesis</p>
                  <p className="bullet-point">•Bachelor thesis </p>
                  <p className="bullet-point">•Do you have any other ideas?</p>
                </div>
                <p>Contact us for more information</p>
              </>
            ) : null}

            {modal.title == 'Relations' ? (
              <>
                <h2 id="undergroup-title">Marketing Coordinator</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  Marketing coordinator is the heart of the relations group. As
                  a marketing coordinator you will get to experience how the
                  world of marketing works. Working with people, changing
                  tactics and strategy are three key points for this position.
                  You will be working with our partners and inform them about
                  the progress within our organisation. Apply for marketing
                  coordinator and you will get an experience of a lifetime!
                </p>
                <h2 id="undergroup-title">Graphic designer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As a graphic designer you will work with shapes, colours,
                  layouts and fonts to present Shift to the world. You will be
                  in charge of producing our newsletter by using Adobe Indesign.
                  You will be working alongside a photo and video editor. You
                  can create a portfolio of all the projects you have done in
                  Shift throughout the year. This will be a great advantage for
                  your future job interview in order to prove your competence!
                </p>
                <h2 id="undergroup-title">Web developer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  Are you into coding? As a web developer you will get to
                  improve Shift’s website. You will get a chance to work with
                  developing and designing our most important web platform.
                  Hands-on experience will be useful for your practice and for
                  your future job interview.
                </p>
                <h2 id="undergroup-title">PR coordinator</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  Do you like social media? If the answer is yes then you will
                  be a perfect for this position! As a PR coordinator you will
                  be responsible for Shift’s social media such as Facebook and
                  Instagram. Share interesting stories from our workplace and
                  post it on our platforms! Let your creativity flow and get to
                  know new people with different backgrounds!
                </p>
                <h2 id="undergroup-title">Photo and video editor</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As photo and video editor your main task will be producing and
                  editing photos and videos. This creative position allows you
                  to experiment with different filming and editing skills in
                  computer programs such as Photoshop and Adobe Premiere. You
                  will get a chance to create and tell stories from Shift
                  through visual media! You should also apply even if you are
                  solely interested in photo or video editing. You can create a
                  portfolio of all the projects you have done in Shift
                  throughout the year. This will give you a great advantage for
                  your future job interview in order to prove your competence.{' '}
                </p>
              </>
            ) : null}
            {modal.title == 'Mechanical' ? (
              <>
                <h2 id="undergroup-title">Mechanical Lead</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  The mechanical lead will manage the groups progress and
                  accomplishments. It is an unique opportunity to guide your
                  members through the most crucial challenges. Relevant
                  experience with for example CAD, simulations or with
                  production is an advantage.
                </p>
                <h2 id="undergroup-title">Brake Engineer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As a brake engineer you will work on the brake system for the
                  pod. To ensure maximum speed, we brake as late and efficiently
                  as possible. This means you will design and simulate a brake
                  system to stop the pod as close as possible to instantaneous,
                  with forces close to 20G!
                </p>
                <h2 id="undergroup-title">Structural Engineer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As structural engineer you are responsible for designing and
                  producing the main frame of the pod. This is where everything
                  is connected, and it is therefore important that it is
                  structurally sound, keeping weight in mind.
                </p>
                <h2 id="undergroup-title">Structural Simulation Engineer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As structural simulation engineer you are responsible for
                  simulating and verifying the structural soundness of the
                  frame. This is key to be able to document that the pod simply
                  won’t collapse under the forces produced when running in the
                  tube.
                </p>
                <h2 id="undergroup-title">Aeroshell Engineer </h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As an aeroshell engineer you are responsible for designing,
                  simulating and producing the capsule (aeroshell) that encloses
                  the pod. Due to the reduced air pressure inside the hyperloop
                  tube, you will be allowed to focus a bit more towards the
                  esthetics, making our pod the best looking pod ever made!
                </p>
              </>
            ) : null}
            {modal.title == 'Concept' ? (
              <>
                <h2 id="undergroup-title">Station design</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  Would you like to design the station of the future? How would
                  a station for Hyperloop look like? Are there going to be
                  timetables for people to see departures or maybe another
                  innovative solution you will come up with? Working with the
                  station design you will work together on a case that will lead
                  you to designing of a hyperloop station. This fits especially
                  if you are studying: Architect students, Civil engineering
                  students (bygg), Industrial designer or others!
                </p>
                <h2 id="undergroup-title">Pod Design</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  What will the future pod look like? What interior will it be?
                  Is it going to be black, white or any other colour? You will
                  get a chance to answer these questions if you will decide to
                  work with pod design. What kind of material a pod should be
                  made of is also a task you can work with. This fits especially
                  if you are studying: Industrial design, mechanical
                  engineering, material technology or other.
                </p>
                <h2 id="undergroup-title">
                  Route planning / Wide sense implementation
                </h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  Would you like to analyse possible routes for Hyperloop? You
                  should join route planning! Will it be Stockholm-Oslo or maybe
                  Trondheim-Bergen? It is all up to you! Your task will be to
                  inspect possible routes relative to geographical position,
                  geological possibilities, economical evaluation and
                  popularity. This fits especially if you are studying:
                  Logistics, Geology, Geography, Urban ecological planning /
                  Real Estate and Facilities Management, Economy Analysis /
                  Industrial economy or others!
                </p>
              </>
            ) : null}
            {modal.title == 'Software' ? (
              <>
                <h2 id="undergroup-title">Software Lead </h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  The software lead will manage the groups progress and
                  accomplishments, however the software lead is much more
                  involved in the day to day development work compared to the
                  other groups.
                </p>
                <h2 id="undergroup-title">Software Engineer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As a software engineer you will work together with other
                  software developers to create our new tool. This includes
                  design/data visualization, data processing and programming.{' '}
                </p>
              </>
            ) : null}
            {modal.title == 'Battery' ? (
              <>
                <h2 id="undergroup-title">Battery Lead</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  The battery lead will manage the groups progress and
                  accomplishments. The position is a unique opportunity to work
                  with multiple systems and guide your members through the most
                  crucial challenges.
                </p>
                <h2 id="undergroup-title">Battery Module Engineer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As a battery module engineer you will design the high voltage
                  cell stackup, as well as acquiring the materials and
                  components required for production. In short, you will be
                  responsible for the energy storage.
                </p>
                <h2 id="undergroup-title">Battery CAD Engineer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  The battery CAD engineer is responsible for designing and
                  producing the mechanical aspects of the battery pack. This is
                  a great opportunity to get some experience with CAD software,
                  production and safety. You will also learn about EMI and other
                  challenges electrical systems add to mechanical design.
                </p>
                <h2 id="undergroup-title">
                  Powertrain Circuit Protection Engineer
                </h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As a powertrain circuit protection engineer you are
                  responsible for analog circuits critical to safe and reliable
                  operation of the battery. This includes some high voltage
                  sensors and fault-prevention circuits designed to protect both
                  the battery and the inverters.
                </p>
                <h2 id="undergroup-title">BMS Engineer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As a BMS engineer you will be responsible for developing a
                  battery management system. Lithium-ion batteries are extremely
                  volatile. This advanced control system is critical for
                  preventing the battery pack from acting outside its safe
                  operating area, drastically reducing the hazard presented by
                  the high density energy storage system.
                </p>
                <h2 id="undergroup-title">Low Voltage Engineer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As a low voltage battery engineer you are responsible for all
                  the systems required to supply safe, stable and reliable power
                  for the sensors and other low voltage electronics.
                </p>
                <h2 id="undergroup-title">Charging Module Engineer </h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As a charging module engineer you are responsible for
                  designing and assembling a high power, extremely reliable
                  charger for the battery pack. This includes PCB-design, a
                  sophisticated control system as well as some mechanical
                  constructions.
                </p>
              </>
            ) : null}
            {modal.title == 'Powertrain' ? (
              <>
                <h2 id="undergroup-title">Powertrain Lead</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  The powertrain lead will manage the groups progress and
                  accomplishments. It is a unique opportunity to manage a group
                  responsible for one of the most defining principles for the
                  hyperloop concept; magnetic propulsion.
                </p>
                <h2 id="undergroup-title">Motor CAD Engineer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As a motor CAD engineer you will be responsible for
                  3D-modelling the motor and all its components, including the
                  frame mount.
                </p>
                <h2 id="undergroup-title">Motor Simulation Engineer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As a motor simulation engineer you will simulate and iterate
                  the linear induction motor design for maximum thrust. If you
                  are a fan of Prof. Eric “father of magnetic levitation”
                  Laithwaite, this is a position for you.
                </p>
                <h2 id="undergroup-title">Verification Engineer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As a verification engineer you will be responsible for
                  constructing and operating a large-scale experimental test
                  setup for the linear induction motor. You will work mostly
                  with the motor engineers, but also with the rest of the
                  powertrain team.
                </p>
                <h2 id="undergroup-title">Inverter CAD Engineer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As an inverter CAD engineer you are responsible for
                  3D-modeling the inverter and relevant components. This
                  includes design of a cooling system, bus bars, EMI reduction
                  and potentially a vacuum-proof casing.
                </p>
                <h2 id="undergroup-title">Inverter Simulation Engineer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As an inverter simulation engineer you will model 3-phase
                  inverter output with a custom control algorithm and
                  complicated inductive and resistive load. You will work
                  closely with the inverter software engineer to help improve
                  the control algorithm.
                </p>
                <h2 id="undergroup-title">Inverter Hardware Engineer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As an inverter hardware engineer you will be responsible for
                  design of all inverter hardware. This includes designing the
                  PCB monitoring the inverter and controlling the gate drivers.
                  Verification of the inverter design is also a key element to
                  the position.
                </p>
                <h2 id="undergroup-title">Inverter Software Engineer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As an inverter software engineer you will work together with
                  the inverter simulation engineers to design and implement the
                  control algorithm for the inverter.
                </p>
              </>
            ) : null}
            {modal.title == 'Levitation' ? (
              <>
                <h2 id="undergroup-title">Levitation Lead</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  The levitation lead will manage the groups progress and
                  accomplishments. The levitation system involves magnets and is
                  the reason why Hyperloop is unique. The position offers a
                  unique opportunity to learn about maglev and how it can be
                  used for hyperloop applications.
                </p>
                <h2 id="undergroup-title">Maglev engineer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As a maglev engineer you will work on magnetic levitation for
                  the pod. This is an exciting and important task involving
                  theory, simulations and testing. If you are a fan of Prof.
                  Eric “father of levitation” Laitwaite, this is a position for
                  you.
                </p>
                <h2 id="undergroup-title">Low Speed Engineer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As a low speed engineer you will work with the rest of the
                  group to ensure the pod is not damaged at low speeds. You
                  don’t need to reinvent the wheel, however a light and solid
                  implementation is important.
                </p>
                <h2 id="undergroup-title">Suspension Engineer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As suspension engineer you will be responsible for developing,
                  simulating, designing and producing a suspension system for
                  the pod. Ensuring the pod stays stable while moving is
                  important not to damage other parts of the pod, or even worse:
                  the SpaceX tube.{' '}
                </p>
              </>
            ) : null}
            {modal.title == 'Electronics' ? (
              <>
                <h2 id="undergroup-title">Electronics Lead</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  The electronics lead will manage the groups progress and
                  accomplishments. It is a unique opportunity to work with
                  multiple systems and guide your members through the most
                  crucial challenges. Relevant experience with software
                  development and PCB design is valued, but not a requirement.
                </p>
                <h2 id="undergroup-title">Sensors Engineer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As a sensors engineer you will be responsible for developing
                  all sensor systems needed to acquire the data used to operate
                  the pod. Reliable and accurate data is important for maximum
                  performance. One challenge you will work with is how to
                  precisely determine the position of the pod inside the
                  hyperloop tube.
                </p>
                <h2 id="undergroup-title">Telemetry Engineer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As a telemetry engineer you will work on reliable wireless
                  communication for the pod, a challenging task inside a metal
                  tube. Working closely with the software group, you will
                  develop a communication link between the pod and engineers
                  outside the hyperloop tube.
                </p>
                <h2 id="undergroup-title">Interface Engineer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  Although the pod is controlled wirelessly from outside the
                  tube, it still has an interface panel. This is important to
                  ensure the safety of the crew working on the pod. As interface
                  engineer you will be responsible for the electrical and
                  mechanical aspects of the system.
                </p>
                <h2 id="undergroup-title">Control engineer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As a control engineer you will be responsible for developing
                  the control unit, which through sensor data and telemetry
                  communication controls the pods actions.{' '}
                </p>
                <h2 id="undergroup-title">Embedded Hardware Engineer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As an embedded hardware engineer you will be responsible for a
                  framework to help other electrical engineers design PCBs.
                  There are several circuits used by multiple systems included
                  in the framework, including CAN, power supplies and more.
                  Assisting other engineers in developing their systems is also
                  a part of the position, giving you a unique opportunity to get
                  familiar with several electrical systems.
                </p>
                <h2 id="undergroup-title">Embedded Software Engineer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As an embedded software engineer you will work closely with
                  the different embedded systems to develop the software needed
                  for the systems, giving you the opportunity to work with
                  software for multiple systems. It is an advantage to be
                  familiar with the C-programming language.
                </p>
              </>
            ) : null}
            {modal.title !== 'Research & Development' ? (
              <ApplyButton />
            ) : null}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          body {
            text-align: center;
            width: 100%;
          }
          .group-title {
            color: #fff9;
            text-align: center;
          }
          .group-description {
            color: black;
          }
          .join {
            text-align: center;
          }
          .imagetest {
            max-width: 600px;
            text-align: center;
          }
          .imagetest > img {
            max-height: 200px;
            object-fit: cover;
          }
          .modal-container {
            display: ${modal.title !== '' ? 'block' : 'none'};
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0, 0, 0); /* Fallback color */
            background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */
          }

          .mirror {
            transform: scaleX(-1);
          }

          #blue-line-thick {
            width: 80%;
            border-width: 2px;
            border-style: solid;
            border-radius: 2.5px;
            border-color: #0080c9;
            margin-bottom: 75px;
          }
          #blue-line-thin {
            width: 100%;
            border-width: 0.3px;
            border-style: solid;
            border-radius: 2.5px;
            border-color: #0080c9;
            margin-bottom: 10px;
          }
          
          #undergroup-title {
            margin-top: 40px;
          }

          #undergroup-title,
          #undergroup-description {
            color: #fff9;
          }

          #undergroup-description {
            display: flex;
            flex-flow: row wrap;
            margin-bottom: 20px;
          }

          /* Modal Content/Box */
          #modal-content {
            background-color: #161616;
            margin: 100px auto; /* 100px from the top and centered */
            padding: 20px;
            border: 1px solid #888;
            width: 80%; /* Could be more or less, depending on screen size */
          }

          .bullet-point {
            margin: 10px 10px;
          }

          hr {
            width: 80%;
            border-width: 1px;
            border-style: solid;
            border-radius: 2.8px;
            border-color: #fff5;
            margin-top: -10px;
            margin-bottom: 40px;
          }
          button {
            cursor: pointer;
            position: relative;
            padding: 0.25rem 0.25rem;
            line-height: 1rem;
            font-size: 15px;
            font-weight: 600;

            border: 1px solid #012880;
            background-image: linear-gradient(
              -180deg,
              #0092d9 0%,
              #005e95 100%
            );
          }
          .join-description {
            padding: 10px;
          }
          .modal {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0, 0, 0); /* Fallback color */
            background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
          }

          /* Modal Content/Box */
          .modal-content {
            background-color: #fefefe;
            text-align: center;
            margin: 15% auto; /* 15% from the top and centered */
            padding: 20px;
            border: 1px solid #888;
            width: 60%; /* Could be more or less, depending on screen size */
          }

          /* The Close Button */
          .close-button {
            color: #FFFFFF;
            float: right;
            font-size: 28px;
          }

          .close-button:hover,
          .close:focus {
            color: #aaa;
            text-decoration: none;
            cursor: pointer;
          }

          button span {
            color: transparent;
            background-image: linear-gradient(0deg, #fff 0%, #fefafd 100%);
            -webkit-background-clip: text;
            background-clip: text;
            filter: drop-shadow(0 2px 2px hsla(290, 100%, 20%, 1));
          }

          button::before {
            content: '';
            display: block;
            height: 0.25rem;
            position: absolute;
            top: 0.5rem;
            left: 50%;
            transform: translateX(-50%);
            width: calc(100% - 7.5rem);

            border-radius: 100%;

            opacity: 0.7;
          }

          button::after {
            content: '';
            display: block;
            height: 0.25rem;
            position: absolute;
            bottom: 0.75rem;
            left: 50%;
            transform: translateX(-50%);
            width: calc(100% - 7.5rem);

            border-radius: 100%;
            margin: 0 50px;
            filter: blur(1px);
            opacity: 0.05;
          }
          h3 {
            text-align: center;
            max-width: 1200px;
            margin: auto;
          }
          .image {
            width: 80%;
            border-radius: 5.5px;
          }
          .left {
            padding: 20px 0px 20px;
            background-color: #202020;
            box-shadow: 1px 0.3px 10px #000;
            padding-right: 40px;
          }
          .right {
            padding: 20px 0px 20px;
            background-color: #fff2;
            box-shadow: 1px 0.3px 10px #000;
            padding-left: 40px;
          }
          .join-container {
            max-width: 1200px;
            margin: auto;
          }
          .Join-us {
            margin-top: -18px;
            height: 800px;
            background-color: red;
            align-content: center;
          }
          .group {
            display: flex;
            flex-direction: row;
          }
          .groups {
            margin: auto;
          }
          .imagetest,
          .group-info {
            width: 50%;
            text-align: center;
            margin: auto;
          }
        `}
      </style>
    </Layout>
  );
};

export default Page;
