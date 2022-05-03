import Layout from '../../components/Layout/Layout';
import React, { useState } from 'react';
import styles from './pods.module.css';
import Button from '../../components/Button/Button';
import { Stack } from '@mui/material';

const Pods = () => {
  const [podNumber, setPodNumber] = useState(0);

  const meili_text = (
    <>
      <img
        className={styles.image}
        src="/images/homePage/PodTop.jpg"
        alt="Meili hyperloop pod"
      />
      <p>
        Say hello to Meili, our first attempt at making a Hyperloop pod. Meili
        consist of a inhouse co-developed linear induction motor (LIM). The
        scale of this beauty is 4,2m in length and 0,5m in both height and
        width. This makes it equal in size as a 4-man bobsled! Meili was our
        first pod which saw the production and assembly, as the previous project
        got cut short due to the pandemic. Meili is composed of many custom
        designed systems. This includes brake callipers, battery pack, chassis,
        aeroshell, LIM, PCBs and much more! Aeroshell, while being the exterior
        cover, is made out of fiberglass and casted with the resin infusion
        technique has a weight of only 2kg! The emergency brakes were custom
        designed to fit a 5 inch H-Beam and powered by 300 bar of hydraulic
        pressure, would give us a braking force of 7,2kN!
      </p>{' '}
    </>
  );

  const pod2_text = (
    <>
      <img
        className={styles.image}
        src="/images/homePage/valkyrje.png"
        alt="Valkyrje hyperloop pod"
      />
      <p>
        The 2022 pod is our second attempt at making a functioning hyperloop
        prototype. The pod has shrunk down to 2.2 meters legth, and has a weight
        of 160 kg. The pod is divided into 15 sub-systems that are all connected
        and work together in order for the pod to function properly. It&apos;s
        glass fiber aeroshell has a pointy design that we hope will draw
        attention to the hyperloop technology. The pod is built on a U-shaped
        chassis in carbon fiber. It has pneumatic caliper brakes, bell crank
        suspension both in the vertical and the lateral direction, and is
        supported by wheels. We make our own double sided, core-less linear
        induction motor (LIM) to provide thrust for our pod. This motor is
        driven by an inverter using a voltage/frequency control algorithm. The
        system is powered by Li-Ion cells, distributed between two battery
        packs. All control and data acquisition systems are implemented on
        custom designed circuit boards. The pod has radio communication with the
        operator, allowing monitoring and control of the vehicle.
      </p>{' '}
    </>
  );

  return (
    <Layout
      url="https://www.shifthyperloop.com/pods"
      title="Shift Hyperloop | The pods"
    >
      <div className={styles.buttom}>
        <div className={styles.title}>
          <h1>The Pods</h1>
        </div>
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <Button onClick={() => setPodNumber(0)}> Meili 2021 </Button>
          <Button onClick={() => setPodNumber(1)}> Valkyrje 2022</Button>
        </Stack>
        {podNumber === 0 && meili_text}
        {podNumber === 1 && pod2_text}
      </div>
    </Layout>
  );
};

export default Pods;
