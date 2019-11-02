import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 0.8s linear infinite;
      }
    `}
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
    padding: 10px;
    border-radius: 4px;

    &:hover {
      opacity: 1;
      background: #7159c1;
      color: #fff;

      box-shadow: 0 0 10px rgba(113, 89, 193, 0.9);
      transition: 0.3s all ease-in-out;
    }
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-height: 400px;
  }

  div {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;
          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const AllButton = styled.button.attrs(props => ({
  disabled: props.all,
}))`
  width: 90px;
  background: #fff;
  color: #7159c1;
  border: 0;
  padding: 8px 15px;
  margin: 0 15px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(113, 89, 193, 0.9);
  transition: 0.3s all ease-in-out;

  &[disabled] {
    background: #7159c1;
    color: #fff;
    box-shadow: 0 0 10px rgba(113, 89, 193, 0.9);
    width: 110px;
  }
  &:hover {
    opacity: 1;
    background: #7159c1;
    color: #fff;
    transition: 0.3s all ease-in-out;
    width: 110px;
  }
`;
export const ClosedButton = styled.button.attrs(props => ({
  disabled: props.closed,
}))`
  width: 90px;
  background: #fff;
  color: #7159c1;
  border: 0;
  padding: 8px 15px;
  margin: 0 15px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(113, 89, 193, 0.9);
  transition: 0.3s all ease-in-out;

  &[disabled] {
    background: #7159c1;
    color: #fff;
    box-shadow: 0 0 10px rgba(113, 89, 193, 0.9);
    width: 110px;
  }
  &:hover {
    opacity: 1;
    background: #7159c1;
    color: #fff;
    transition: 0.3s all ease-in-out;
    width: 110px;
  }
`;
export const OpenButton = styled.button.attrs(props => ({
  disabled: props.open,
}))`
  width: 90px;
  background: #fff;
  color: #7159c1;
  border: 0;
  padding: 8px 15px;
  margin: 0 15px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(113, 89, 193, 0.9);
  transition: 0.3s all ease-in-out;

  &[disabled] {
    background: #7159c1;
    color: #fff;
    box-shadow: 0 0 10px rgba(113, 89, 193, 0.9);
    width: 110px;
  }
  &:hover {
    opacity: 1;
    background: #7159c1;
    color: #fff;
    transition: 0.3s all ease-in-out;
    width: 110px;
  }
`;
