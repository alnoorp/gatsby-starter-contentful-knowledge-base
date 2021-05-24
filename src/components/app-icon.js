import React from 'react';
import is from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.li`
  padding: 4px 4px 4px 4px;
  display: inline;

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

export default function AppIcon(props) {
  return (
    <Container>
      <a href={props.url} target="_top">
        <img
          // src={`https://www.google.com/s2/favicons?domain=${props.url}`}
          src={`https:${props.icon}`}
          className="favicon"
          alt=""
        />
      </a>
    </Container>
  );
}

AppIcon.propTypes = {
  url: is.string.isRequired,
  icon: is.string,
};
