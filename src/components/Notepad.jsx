// Notepad.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const NotepadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

const NotepadContainer = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const QuillWrapper = styled.div`
  .ql-editor {
    min-height: 200px;
    font-size: 16px;
  }
`;

const NoteList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
  max-height: 150px;
  overflow-y: auto;
`;

const NoteItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e2e6ea;
  }

  strong {
    margin-right: 10px;
  }

  button {
    background-color: #e74c3c;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #c0392b;
    }
  }
`;

const Notepad = ({ isVisible }) => {
  const [notes, setNotes] = useState('');
  const [savedNotes, setSavedNotes] = useState([]);

  // Load saved notes from local storage on component mount
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('savedNotes')) || [];
    setSavedNotes(savedNotes);
  }, []);

  // Save note when the user clicks a button or performs another event
  const handleSaveNote = () => {
    if (notes.trim() !== '') {
      const timestamp = new Date().toLocaleString();
      const heading = prompt('Enter a heading for this note:'); // User input for heading
      const newNote = { id: Date.now(), timestamp, heading, content: notes };

      // Update state with new note
      setSavedNotes([...savedNotes, newNote]);

      // Save notes to local storage
      localStorage.setItem('savedNotes', JSON.stringify([...savedNotes, newNote]));

      // Clear the current note
      setNotes('');
    }
  };

  // Delete a saved note
  const handleDeleteNote = (id) => {
    const updatedNotes = savedNotes.filter((note) => note.id !== id);
    setSavedNotes(updatedNotes);
    localStorage.setItem('savedNotes', JSON.stringify(updatedNotes));
  };

  // Load and display the selected note in the Notepad
  const handleLoadNote = (note) => {
    setNotes(note.content);
  };

  return (
    <NotepadWrapper style={{ display: isVisible ? 'block' : 'none' }}>
      <h2>Notepad</h2>
      <NotepadContainer>
        <QuillWrapper>
          <ReactQuill
            value={notes}
            onChange={(value) => setNotes(value)}
            placeholder="Start typing..."
          />
        </QuillWrapper>
        <button onClick={handleSaveNote}>Save Note</button>
      </NotepadContainer>

      {/* Display saved notes */}
      <NoteList>
        {savedNotes.map((note) => (
          <NoteItem key={note.id} onClick={() => handleLoadNote(note)}>
            <strong>{note.heading}</strong> - {note.timestamp}
            <button onClick={(e) => { e.stopPropagation(); handleDeleteNote(note.id); }}>
              Delete
            </button>
          </NoteItem>
        ))}
      </NoteList>
    </NotepadWrapper>
  );
};

export default Notepad;
