import React, { useState } from 'react';
import styled from 'styled-components';

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const TodoListWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e2e6ea;
  }
`;

const TodoText = styled.p`
  margin: 0;
  flex-grow: 1;
  margin-right: 15px;
  font-size: 16px;
  word-wrap: break-word;
`;

const TodoButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
`;

const AddTodoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  input {
    flex-grow: 1;
    max-width: 250px; /* Set a maximum width for the input */
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 8px;
    margin-right: 15px;
    margin-bottom: 15px;
    font-size: 16px;
  }

  button {
    background-color: #28a745;
    color: #fff;
    border: none;
    padding: 12px 20px;
    margin-bottom: 15px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #218838;
    }
  }
`;

const TodoList = ({ todos, onDelete }) => {
  return (
    <TodoListWrapper>
      <h3>Todo List</h3>
      {todos.length === 0 ? (
        <p>No todos yet. Add one above!</p>
      ) : (
        todos.map((todo, index) => (
          <TodoItem key={index}>
            <TodoText>{todo.text}</TodoText>
            <TodoButton onClick={() => onDelete(index)}>Delete</TodoButton>
          </TodoItem>
        ))
      )}
    </TodoListWrapper>
  );
};

const Todo = ({ isVisible }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo }]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <TodoWrapper style={{ display: isVisible ? 'block' : 'none' }}>
      <h2>Todo List</h2>
      <AddTodoContainer>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={handleAddTodo}>Add</button>
      </AddTodoContainer>
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </TodoWrapper>
  );
};

export default Todo;
