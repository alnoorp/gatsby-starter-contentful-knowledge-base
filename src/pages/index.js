import React from 'react';
import is from 'prop-types';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../templates/layout';
import PageUrlCard from '../components/page-url-card';
import NewContainer from '../components/new-container';
import useSiteSettings from '../hooks/useSiteSettings';
import SEO from '../components/seo';

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

export default function Home(props) {
  const settings = useSiteSettings();
  const pageUrls = props.data.pageUrls.nodes;

  return (
    <Layout>
      <SEO title={settings.heading} description={settings.description} />

      <Container>
        <NewContainer>
          {pageUrls.map((pageUrl, index) => (
            <PageUrlCard url={pageUrl.url} key={index} />
          ))}
        </NewContainer>
      </Container>
    </Layout>
  );
}

Home.propTypes = {
  data: is.shape({
    pageUrls: is.shape({
      nodes: is.arrayOf(
        is.shape({
          url: is.string.isRequired,
        })
      ),
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query {
    pageUrls: allContentfulPageUrl {
      nodes {
        url
      }
    }
  }
`;
