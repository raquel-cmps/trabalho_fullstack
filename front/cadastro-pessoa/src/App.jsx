import { useEffect, useState } from 'react';
import './App.css'
import CardPessoa from './components/CardPessoa'
import { baseUrl } from './service/baseUrl';
import ModalPessoa from './components/ModalPessoa';

function App() {
  const [pessoa, setPessoa] = useState(null);
  const [mostrarAdd, setMostrarAdd] = useState(false);

  useEffect(() => {
    getPessoa();
  }, [mostrarAdd]);

  const getPessoa = async () => {
    try {
      const response = await fetch(baseUrl + 'pessoa');
      const data = await response.json();
      console.log(data);

      setPessoa(data);

    } catch (error) {
      console.log(error);
    }
  }
  const createPessoa = async (nome, cpf, telefone) => {
    try {
      const requestData = {
        nome,
        cpf,
        telefone
      }
      console.log('Request data:', requestData);
      const response = await fetch(baseUrl + 'pessoa/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      });

      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        alert('Pessoa criada com sucesso!');
        setMostrarAdd(false)
      } else {
        alert('Erro ao criar pessoa!');
      }
    } catch (error) {
      console.error('Erro ao criar pessoa:', error);
      alert('Erro ao criar pessoa!');
    }
  }

  const deletePessoa = async (id) => {
    try {
      const response = await fetch(baseUrl + 'pessoa/' + id, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Pessoa excluída com sucesso!');
        getPessoa();
      } else {
        alert('Erro ao excluir pessoa!');
      }
    } catch (error) {
      alert('Erro ao excluir pessoa!');
    }
  }

  const editPessoa = async (pessoaEditada) => {
    try {
      const requestData = {
        nome: pessoaEditada.nome,
        cpf: pessoaEditada.cpf,
        telefone: pessoaEditada.telefone
      };
      console.log('Request data:', requestData);
      const response = await fetch(baseUrl + 'pessoa/' + pessoaEditada.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      });

      if (response.ok) {
        alert('Pessoa editada com sucesso!');
      } else {
        alert('Erro ao editar pessoa!');
      }
    } catch (error) {
      alert('Erro ao editar pessoa!');
    }
  }

  return (
    <div className='flex flex-col justify-center items-center m-10 p-10 bg-gray-100 rounded-2xl'>
      <h1 className='font-bold text-5xl'>Gerenciar Pessoas</h1>
      <div className='py-5'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-2xl w-24"
          onClick={() => setMostrarAdd(!mostrarAdd)}>
          Adicionar
        </button>
      </div>

      <div className='flex flex-col gap-3'>
        {pessoa ? (
          pessoa.sort((a, b) => a.id - b.id) // Ordena por id
            .map((pessoa) => (
              <CardPessoa key={pessoa.id} pessoa={pessoa} deletarPessoa={() => deletePessoa(pessoa.id)} editarPessoa={editPessoa} />
            ))
        ) : (
          <p>Sem pessoa</p>
        )}
      </div>
      {mostrarAdd &&
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-opacity-50 bg-gray-400 z-50">
          <ModalPessoa handleClose={() => setMostrarAdd(false)} createPessoa={createPessoa} />
        </div>
      }

    </div>

  )
}

export default App
