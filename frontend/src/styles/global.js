import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 14px Roboto, sans-serif;
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font: 400 18px Roboto, sans-serif;
  }

  button {
    cursor: pointer
  }

  form input {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdcd6;
    border-radius: 8px;
    padding: 0 24px;
  }

  form textarea {
    width: 100%;
    height: 60px;
    min-height: 140px;
    color: #333;
    resize: vertical;
    border: 1px solid #dcdcd6;
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 24px;
  }

  .button {
    width: 100%;
    height: 60px;
    background: #e02041;
    color: #fff;
    border: 0;
    border-radius: 8px;
    font-weight: 700;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2;

    &:hover {
      filter: brightness(90%);
    }
  }

  .back-link {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #41414d;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }

    svg {
      margin-right: 8px;
    }
  }
`;
