import React from 'react';
import is from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 25px 25px 25px 38px;
  background-color: #fff;
  border-bottom: 1px solid #d3dce0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:last-child {
    border-bottom: 0;
  }

  @media screen and (max-width: 375px) {
    padding: 20px;

    background-image: none;
  }

  & a {
    text-decoration: none;
  }

  & img {
    margin-right: 10px;
    position: relative;
    vertical-align: middle;
    top: -2px;
    width: 32px;
  }

  & span {
    color: #0091ae;
  }
`;

export default function PageUrlCard(props) {
  return (
    <Container>
      <a href={props.url} target="_top">
        <img
          src={`https://www.google.com/s2/favicons?domain_url=${props.url}`}
          className="favicon"
          alt=""
        />
        <span>{props.title}</span>
      </a>
    </Container>
  );
}

PageUrlCard.propTypes = {
  url: is.string.isRequired,
  title: is.string.isRequired,
};
