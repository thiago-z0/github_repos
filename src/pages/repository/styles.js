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
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 15px;
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

export const IssueFilter = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
  button {
    transition: opacity 0.25s ease-out;
    background-color: #fff;
    color: #7159c1
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;
    margin: 0 0.55rem;
    box-shadow: 0 0 10px rgba(113, 89, 193, 0.9);
    transition: all 0.2s linear;
    &:hover {
      background-color: #7159c1;
      color: #fff;
      transition: all 0.2s linear;
      -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
    }
    &:nth-child(${props => props.active + 1}) {
      background-color: #7159c1;
      color: white;
      -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
    }
  }
`;

export const PageActions = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  button {
    transition: opacity 0.25s ease-out;
    background-color: #fff;
    color: #7159c1
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;
    box-shadow: 0 0 10px rgba(113, 89, 193, 0.9);
    transition: all 0.2s linear;

    &:hover {
      background-color: #7159c1;
      color: #fff;
      transition: all 0.2s linear;
    }
    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
`;
