import React from 'react';
import Styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import '../utils/reset.css';

const Wrapper = Styled.div`
  background: #F4F3F5;
  color: #1C1724;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"
`;

const Inner = Styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const Header = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`

const Footer = Styled.div`
  background: #DECDED;
  font-size: 14px;
  padding: 15px 10%;
  display: flex;
  justify-content: center;
`

const Layout = ({children}) => (
  <>
    <Wrapper>
      <Header><a href="/"><StaticImage width={50} placeholder="none" src="../images/ice.png" alt="Melting ice cubes"/></a></Header>
      <Inner>{children}</Inner>
      <Footer>Made with 💜 at <span style={{fontWeight: 'bold', marginLeft: 5}}>Gatsby</span>.</Footer>      
    </Wrapper>
  </>
);

export default Layout;