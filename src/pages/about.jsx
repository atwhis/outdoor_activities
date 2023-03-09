import React from 'react';
import Layout from 'src/components/Layout';
import useSiteMetadata from 'src/hooks/useSiteMetadata';

const NotFoundPage = () => {
  const { siteUrl } = useSiteMetadata();
  return (
    <Layout>
      {/* <h1 className="f-headline">404</h1>
      <p>This page doesn&#39;t exist.</p> */}
      {/* <img src="https://s2.loli.net/2023/03/09/OH9tn5VEFyzbe3r.jpg"></img> */}
      {/* <p className="moon-gray">
        If you wanna more message, you could visit{' '}
        <a className="moon-gray b" href={siteUrl}>
          {siteUrl}
        </a>
      </p> */}
      <p>我去过的一些地方，希望随着时间推移，地图点亮的地方越来越多.</p>
    </Layout>
  );
};

export default NotFoundPage;