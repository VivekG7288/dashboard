// Home.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Todo from './Todo';
import Notepad from './Notepad';
import QuickLinks from './QuickLinks'; // Import the QuickLinks component
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f2f2f2;
  }
`;

const HomeWrapper = styled.div`
  display: flex;
  height: 100vh;
  border-radius: 20px;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  padding-right: 160px;
  margin: 20px; /* Adjust the margin to your desired gap on all four sides */
  border-radius: 20px;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3));
  background-size: cover;
  position: relative; /* Added to position QuickLinks properly */
`;

const Home = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <HomeWrapper>
        <Sidebar handleItemClick={handleItemClick} />
        <ContentWrapper>
          <h1 style={{ color: '#fff' }}>WEBERON</h1>
          <Todo isVisible={activeItem === 'todo'} />
          <Notepad isVisible={activeItem === 'notepad'} />
          <QuickLinks /> {/* Add the QuickLinks component here */}
        </ContentWrapper>
      </HomeWrapper>
    </React.Fragment>
  );
};

export default Home;
