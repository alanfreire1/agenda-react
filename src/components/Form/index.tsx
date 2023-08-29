import React, { useState } from 'react';
import IContato from '../../types/contato';
import Botao from '../Botao';

interface IFormularioProps{
    setContatos: React.Dispatch<React.SetStateAction<IContato[]>>;
}

function Form({setContatos}: IFormularioProps) {

    const [nome, setNome] = useState("");
    const [fone, setFone] = useState("");

    function adicioarContato(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        setContatos((contatos) => [...contatos, { nome, fone}]);    
        
        setNome("");
        setFone("");
        const formulario = event.target as HTMLFormElement;
        formulario.reset();
    }


    // função que será executada quando o formulário for submetido
    function salvar(event: React.FormEvent<HTMLFormElement>) {
        // previne o comportamento padrão do formulário
        event.preventDefault();
        // converte o evento para um elemento do DOM
        const formulario = event.target as HTMLFormElement;
        // cria um objeto FormData a partir do formulário
        const dados = new FormData(formulario);
        // cria um contato com os dados do formulário
        const contato: IContato = {
            nome: dados.get('nome') as string,
            fone: dados.get('fone') as string
        };
        // imprime o contato no console
        console.log(contato);
    }

    function teste() {
        console.log('teste');
    }

    return (
            
        <form id="formulario-de-cadastro" onSubmit={salvar}>
            <div className='d-flex justify-content-lg-center'>
                <h1>Casdastro de contatos</h1>
            </div>
            <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome:</label>
                <div className="input-group">
                    <span className="input-group-text">
                        <i className="fas fa-user"></i>
                    </span>
                    <input type="text" className="form-control" name="nome" id="nome" />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="fone" className="form-label">Fone:</label>
                <div className="input-group">
                    <span className="input-group-text">
                        <i className="fas fa-phone"></i>
                    </span>
                    <input type="tel" className="form-control" name="fone" id="fone" />
                </div>
            </div>
            <div className="mb-3 d-flex justify-content-center">
                
                <Botao className='btn btn-primary btn-lg btn-outline-light'>
                <i className="fas fa-floppy-disk"></i> Salvar
                </Botao>
        
                <Botao className='btn btn-danger btn-lg btn-outline-light me-4'>
                    <i className="fas fa-broom"></i> Limpar
                </Botao>
            </div>
        </form>
    );
}

export default Form;