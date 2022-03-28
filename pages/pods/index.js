import Layout from '../../components/Layout/Layout';
import React, { useState } from 'react';
import styles from './pods.module.css';
import Button from '../../components/Button/Button';
import { Stack } from '@mui/material';

const pods = () => {
  const[pod_number, setpod_number] = useState(0);


  const meili_text = (< ><img className={styles.image} src="/images/homePage/PodTop.jpg"></img>
  <p>
  insert info om Meili  
  
  </p> </>)

  const pod2_text = (< ><img className={styles.image} src="/images/homePage/comingsoon.jpg"></img>
  <p>
  insert info om Valkyrje  
  </p> </>)

  return (
    <Layout
      url="https://www.shifthyperloop.com/pods"
      title="Shift Hyperloop | The pods"
    >
      <div className={styles.buttom}>
        <div className={styles.title}>
          <h1>The pods</h1>
        </div>
        <Stack direction = "row" spacing={2} sx={{mb:3}}>
          <Button onClick={ () => setpod_number(0)}> Meili 2021 </Button>
          <Button onClick={ () => setpod_number(1)}> Valkyrje 2022</Button>
        </Stack>
{pod_number == 0 && meili_text}
{pod_number == 1 && pod2_text}
     
      </div>
    </Layout>
  );
};

export default pods;
