import { useState } from "react";

function ModalPessoa({ handleClose, createPessoa }) {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleSalvar = async () => {
        await createPessoa(nome, cpf, telefone);
        handleClose();
    }

    return (
        <section className="relative">
            <div className="bg-gray-100 justify-center items-center rounded-2xl p-5 shadow-lg">
                <h1 className="font-bold text-3xl">Adicionar Pessoa</h1>
                <div className="flex justify-center items-center gap-3 w-full py-3">
                    <div className="flex flex-col">
                        <p className="text-lg font-medium">Nome</p>
                        <input className="border-2 border-gray-300 p-2 rounded-lg"
                            onChange={(e) => setNome(e.target.value)}
                            value={nome}
                            type="text"
                        />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-medium">CPF</p>
                        <input className="border-2 border-gray-300 p-2 rounded-lg"
                            onChange={(e) => setCpf(e.target.value)}
                            value={cpf}
                            type="text"
                        />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-medium">Telefone</p>
                        <input className="border-2 border-gray-300 p-2 rounded-lg"
                            onChange={(e) => setTelefone(e.target.value)}
                            value={telefone}
                            type="text"
                        />
                    </div>
                </div>
                <div className="flex pt-4 justify-center gap-5">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-2xl w-24"
                        onClick={handleClose}>
                        Cancelar
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-2xl w-24"
                        onClick={handleSalvar}>
                        Salvar
                    </button>
                </div>
            </div>

        </section>
    );
}

export default ModalPessoa;