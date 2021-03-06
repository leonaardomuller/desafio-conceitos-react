import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./styles.css";

function App() {

  const [repositories, setRepositories] = useState([]);

  // Dispara função assim que o componente é exibido em tela.
  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data)
      console.log(response.data)
    })
  }, []);

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      title: 'Front-end',
      url: 'https://github.com/leonaardomuller/desafio-conceitos-react',
      techs: ['ReactJS', 'NodeJS'],
    })
    setRepositories([...repositories, response.data])
  }

  async function handleRemoveRepository(id) {
    await api.delete(`repositories/${id}`)
    
    setRepositories(repositories.filter(
      repository => repository.id !== id
    ))

  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repository => (
                <li key={repository.id}>
                  <ul>
                    <li><a href={repository.url} target="_blank">{repository.title}</a></li>
                    <li>Likes: {repository.likes}</li>
                  </ul>

                  <button onClick={() => handleRemoveRepository(repository.id)}>
                    Remover
                  </button>
                </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
