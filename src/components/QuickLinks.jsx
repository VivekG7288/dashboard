// QuickLinks.jsx
import React from 'react';
import styled from 'styled-components';

const links = [
  { url: 'https://cdi.weberon.net/', label: 'CDI' },
  { url: 'https://op.weberon.net/login', label: 'OP' },
  { url: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox', label: 'Gmail' },
  // Add more links as needed
];

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #333;
  color: white;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  margin: 20px; /* Adjust the margin to your desired gap on all four sides */
  border-radius: 20px;
  margin-bottom: 20px; /* Add a margin at the bottom */
  gap: 10px; /* Add some gap between buttons */
`;

const SidebarButton = styled.a`
  padding: 10px;
  background-color: #555;
  color: white;
  border: none;
  text-decoration: none;
  cursor: pointer;
  display: block;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #777;
  }
`;

const QuickLinks = () => {
  return (
    <SidebarWrapper>
      {links.map((link, index) => (
        <SidebarButton key={index} href={link.url} target="_blank">
          {link.label}
        </SidebarButton>
      ))}
    </SidebarWrapper>
  );
};

export default QuickLinks;
