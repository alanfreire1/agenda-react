import './App.css';
import Form from '../Form';
import Table from '../Table';
import { useState } from 'react';
import IContato from '../../types/contato';

function App() {
 
 const [contatos, setContatos] = useState<IContato[]>([]);
 
  return (
    <div className='row'>
      <div className="col-4">
        <Form setContatos={setContatos} />
      </div>
      <div className="col-8">
        <Table />
      </div>
    </div>
  );
}

export default App;
