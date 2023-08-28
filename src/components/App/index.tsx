import './App.css';
import Form from '../Form';
import Table from '../Table';

function App() {
  return (
    <div className='row'>
      <div className="col-4">
        <Form />
      </div>
      <div className="col-8">
        <Table />
      </div>
    </div>
  );
}

export default App;
