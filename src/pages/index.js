import React from 'react';
import is from 'prop-types';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../templates/layout';
import PageUrlCard from '../components/page-url-card';
import NewContainer from '../components/new-container';
import AppContainer from '../components/app-container';
import AppIcon from '../components/app-icon';
import useSiteSettings from '../hooks/useSiteSettings';
import SEO from '../components/seo';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  & ul {
    margin-top: 32px;
    margin-bottom: 32px;
    text-align: center;
    padding-left: 0px;
  }
`;

export default function Home(props) {
  const settings = useSiteSettings();
  const pageUrls = props.data.pageUrls.nodes;
  const applications = props.data.applications.nodes;

  return (
    <Layout>
      <SEO title={settings.heading} description={settings.description} />

      <Container>
        <AppContainer>
          <ul>
            {applications.map((application, index) => (
              <AppIcon
                url={application.url}
                label={application.label}
                icon={application.icon.file.url}
                key={index}
              />
            ))}
          </ul>
        </AppContainer>
        <NewContainer>
          {pageUrls.map((pageUrl, index) => (
            <PageUrlCard url={pageUrl.url} title={pageUrl.title} key={index} />
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
          title: is.string,
        })
      ),
    }).isRequired,
    applications: is.shape({
      nodes: is.arrayOf(
        is.shape({
          url: is.string.isRequired,
          label: is.string,
          icon: is.shape({
            file: is.shape({
              url: is.string,
            }),
          }),
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
        title
      }
    }
    applications: allContentfulApplication {
      nodes {
        icon {
          file {
            url
          }
        }
        url
        label
      }
    }
  }
`;
