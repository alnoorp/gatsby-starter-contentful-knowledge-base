import * as React from 'react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import Header from '../components/header';
import Footer from '../components/footer';
import Wrap from '../components/wrap';
import useSiteSettings from '../hooks/useSiteSettings';
import SearchForm from '../components/search-form';

const UpperContainer = styled.div`
  margin-bottom: 24px;
`;

const SearchContainer = styled(Wrap)`
  border-bottom: 1px solid #d3dce0;
`;

const SearchWrap = styled.div`
  width: 625px;
  margin: 0 auto;

  margin-bottom: 12px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default function Layout(props) {
  const settings = useSiteSettings();

  return (
    <>
      <UpperContainer>
        <Header
          links={settings.headerLinks}
          logoUrl={settings.logo.fixed.src}
          logoDescription={settings.logo.title}
        />

        {props.withSearch && (
          <SearchContainer>
            <SearchWrap>
              <SearchForm />
            </SearchWrap>
          </SearchContainer>
        )}
      </UpperContainer>

      <Wrap>{props.children}</Wrap>

      <Footer
        links={settings.headerLinks}
        logoUrl={settings.logo.fixed.src}
        logoDescription={settings.logo.title}
      />

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
