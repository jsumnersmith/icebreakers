import * as React from "react"
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Styled from 'styled-components';

const Button = Styled.a`
  background: #1C1724;
  padding: 20px 40px;
  border-radius: 10px;
  font-size: 36px;
  color: #F4F3F5;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  transition: background .2s ease-in-out;
  &:hover {
    background: #33244B;
  }
`;

export default () => {
  
  return (
    <Layout>
      <Button href="/questions">Questions</Button>
    </Layout>
  )
}

