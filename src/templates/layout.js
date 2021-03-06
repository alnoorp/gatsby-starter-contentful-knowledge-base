import React from 'react';
import is from 'prop-types';
// import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import Footer from '../components/footer';
import Wrap from '../components/wrap';
import useSiteSettings from '../hooks/useSiteSettings';
import CookieConsent from '../components/cookie-consent';

export default function Layout(props) {
  const settings = useSiteSettings();

  return (
    <>
      <Wrap>{props.children}</Wrap>

      <Footer links={settings.headerLinks} />

      <CookieConsent />

      <Helmet>
        {settings.googleAnalyticsId && (
          <script>
            {`
              window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
              
              ga('create', '${settings.googleAnalyticsId}', 'auto');
              ga('send', 'pageview');
          `}
          </script>
        )}
        {settings.googleAnalyticsId && (
          <script
            async
            src="https://www.google-analytics.com/analytics.js"
          ></script>
        )}
      </Helmet>
    </>
  );
}

Layout.propTypes = {
  withSearch: is.bool,
  children: is.node.isRequired,
};
