import React from 'react';
import is from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Container = styled.div`
  padding: 32px 32px 32px 64px;

  background-image: url('/icons/icon-folder.svg');
  background-repeat: no-repeat;
  background-position: 24px 35px;
  background-color: #fff;
  border-bottom: 1px solid #d3dce0;

  &:last-child {
    border-bottom: 0;
  }

  @media screen and (max-width: 375px) {
    padding: 20px;

    background-image: none;
  }
`;

const Title = styled.h3`
  margin: 0;

  color: #3072be;
  font-size: 21px;
  line-height: 1.5;
  font-weight: 700;

  & > a {
    text-decoration: none;
    color: #3072be;
  }

  & > a:hover,
  & > a:focus {
    text-decoration: underline;
  }
`;

export default function CategoryCard(props) {
  return (
    <Container>
      <Title>
        <Link to={props.url}>{props.url}</Link>
      </Title>
    </Container>
  );
}

CategoryCard.propTypes = {
  url: is.string.isRequired,
};
