import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import BgObjects from '../components/BgObjects';
import Frame from '../components/utils/Frame';

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/icon.png" />
        <meta charSet='utf-8'/>
        <meta content="width=device-width, initial-scale=1.0" name='viewport' />
        <meta name="theme-color" content="#0F1625"/>
        <meta name="description" content="Hello! 😎 Welcome to my NextJS base Portfolio Site."/>
        <meta name={title} content={description} />
      </Head>
      <BgObjects/>
      <Navbar />
      <Frame>{children}</Frame>
    </>
  );
};

export default Layout;