import React from 'react';

function Table() {
    return (
        <table id="lista-de-contatos" className="table table-striped table-hover">
            <thead>
                <div className='d-flex justify-content-lg-center'>
                    <h1>Lista de Contatos</h1>
                </div>
                <tr>
                    <th>Nome</th>
                    <th>Fone</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    );
}

export default Table;