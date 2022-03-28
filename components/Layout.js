import React from 'react';
import Footer from './Footer/Footer';
import Head from 'next/head';
import { Box, Stack } from '@mui/material';
import NavBar from './NavBar';
import favicon from '../public/shift_icon.png';

const Layout = ({
  children,
  title = 'Shift Hyperloop',
  description = 'Shift is an independent non-profit organization founded in Trondheim by students from the Norwegian University of Science and Technology. Our goal is to drive the hyperloop technology forward and be in the forefront of developing the transportation technologies of tomorrow. To achieve our goal we design and build our own pods to compete in The Hyperloop Pod Competition hosted by SpaceX.',
  url = 'https://www.shifthyperloop.com',
  image = 'https://www.shifthyperloop.com/img/Logo(White_RightText).png',
  noBottomPadding = false,
  contentBehindNavBar = false,
}) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" type="image/png" href={favicon} />
        <title>{title}</title>
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
      </Head>
      <Stack>
        <NavBar allowContentBehind={contentBehindNavBar} />
        <Box flex={1}>
          {children}
          <>{noBottomPadding || <Box height="40px" />}</>
        </Box>
        <Footer />
      </Stack>
    </>
  );
};

export default Layout;
