import React, { useEffect } from "react";
import api from "./services/api";

import "./styles.css";

function App() {
  async function handleAddRepository() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
      api.get('projects').then(response => {
        console.log(response)
      })
    })
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        <li>
          Repositório 1

          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
