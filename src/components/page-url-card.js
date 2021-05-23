import React from 'react';
import is from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 32px 32px 32px 64px;

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
  & img {
    margin-right: 10px;
    position: relative;
    vertical-align: middle;
    top: -2px;
    width: 32px;
  }
`;

export default function PageUrlCard(props) {
  return (
    <Container>
      <Title>
        <a
          href={props.url}
          onClick={(e) => {
            window.location.href = props.url;
            // if (e.metaKey) {
            //   chrome.tabs.create({ url: props.url, active: false });
            // } else {
            //   window.location.assign(props.url);
            // }
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <img
            src={`https://www.google.com/s2/favicons?domain=${props.url}`}
            className="favicon"
            alt=""
          />
          {props.url}
        </a>
      </Title>
    </Container>
  );
}

PageUrlCard.propTypes = {
  url: is.string.isRequired,
};
