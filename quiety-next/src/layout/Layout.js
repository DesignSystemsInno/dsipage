import React from 'react';
import Head from 'next/head';

const Layout = ({ children, title, desc, hasClass }) => {
  return (
    <div className={`main-wrapper ${hasClass ? 'overflow-hidden' : null}`}>
      <Head>
        <title>
          {title
            ? `Quiety | ${title}`
            : 'Design Systems'}
        </title>
        {desc && <meta name="description" content={desc} />}
        <link rel="icon" href="" />
      </Head>

      {children}
    </div>
  );
};

export default Layout;
