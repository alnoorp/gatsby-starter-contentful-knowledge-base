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

import WhiteContainer from '../components/white-container'; // Experiment
import { withArticles } from '../utils/filters'; // Experiment
import CategoryCard from '../components/category-card'; // Experiment

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

  const categories = props.data.categories.nodes.filter(withArticles); // Experiment

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
        <WhiteContainer>
          {categories.map((category, index) => (
            <CategoryCard
              title={category.name}
              url={`/${category.slug}/`}
              description={category.description}
              key={index}
            />
          ))}
        </WhiteContainer>
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
    categories: is.shape({
      nodes: is.arrayOf(
        is.shape({
          name: is.string.isRequired,
          slug: is.string.isRequired,
          description: is.string.isRequired,
          articles: is.arrayOf(
            is.shape({
              id: is.string.isRequired,
            })
          ),
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
    categories: allContentfulKbAppCategory {
      nodes {
        name
        description: previewDescription
        slug
        articles: kbapparticle {
          id
        }
      }
    }
  }
`;

// Backup
// Home.propTypes = {
//   data: is.shape({
//     pageUrls: is.shape({
//       nodes: is.arrayOf(
//         is.shape({
//           url: is.string.isRequired,
//           title: is.string,
//         })
//       ),
//     }).isRequired,
//     applications: is.shape({
//       nodes: is.arrayOf(
//         is.shape({
//           url: is.string.isRequired,
//           label: is.string,
//           icon: is.shape({
//             file: is.shape({
//               url: is.string,
//             }),
//           }),
//         })
//       ),
//     }).isRequired,
//   }).isRequired,
// };

// export const query = graphql`
//   query {
//     pageUrls: allContentfulPageUrl {
//       nodes {
//         url
//         title
//       }
//     }
//     applications: allContentfulApplication {
//       nodes {
//         icon {
//           file {
//             url
//           }
//         }
//         url
//         label
//       }
//     }
//   }
// `;
