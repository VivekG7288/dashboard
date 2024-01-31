// Sidebar.jsx
import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #333;
  color: white;
  margin: 15px;
  border-radius: 10px;
`;

const SidebarButton = styled.button`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #555;
  color: white;
  border: none;
  cursor: pointer;
`;

const Sidebar = ({ handleItemClick }) => {
  return (
    <SidebarWrapper>
      <SidebarButton onClick={() => handleItemClick('todo')}>Todo</SidebarButton>
      <SidebarButton onClick={() => handleItemClick('notepad')}>Notepad</SidebarButton>
    </SidebarWrapper>
  );
};

export default Sidebar;
