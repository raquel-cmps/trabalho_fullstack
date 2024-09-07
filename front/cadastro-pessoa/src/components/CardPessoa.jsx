import { useState } from "react";

function CardPessoa({ pessoa, deletarPessoa, editarPessoa }) {

    const [nome, setNome] = useState(pessoa.nome);
    const [cpf, setCpf] = useState(pessoa.cpf);
    const [telefone, setTelefone] = useState(pessoa.telefone);

    const [isEditing, setIsEditing] = useState(true);

    const handleCancel = () => {
        setNome(pessoa.nome);
        setCpf(pessoa.cpf);
        setTelefone(pessoa.telefone);
        setIsEditing(!isEditing);
    }
    const handleEdit = () => {
        setIsEditing(!isEditing);

    }

    const handleConfirmDelete = async () => {
        if (window.confirm('Deseja realmente excluir esta pessoa?')) {
            await deletarPessoa({ id: pessoa.id });
        }
    }
    const handleSaveChange = async () => {
        if (window.confirm('Deseja realmente editar esta pessoa?')) {
            await editarPessoa({ id: pessoa.id, nome, cpf, telefone });
            setIsEditing(!isEditing);
        } else {
            handleCancel();
        }
    }

    return (
        <section key={pessoa.id} className="bg-white justify-center items-center rounded-2xl p-5 shadow-lg">
            <div className="flex justify-center items-center gap-3 w-full py-3">
                <div className="flex flex-col">
                    <p className="text-lg font-medium">Nome</p>
                    <input className="border-2 border-gray-300 p-2 rounded-lg"
                        onChange={(e) => setNome(e.target.value)}
                        value={nome}
                        disabled={isEditing}
                        type="text"
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-lg font-medium">CPF</p>
                    <input className="border-2 border-gray-300 p-2 rounded-lg"
                        onChange={(e) => setCpf(e.target.value)}
                        value={cpf}
                        disabled={isEditing}
                        type="text"
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-lg font-medium">Telefone</p>
                    <input className="border-2 border-gray-300 p-2 rounded-lg"
                        onChange={(e) => setTelefone(e.target.value)}
                        value={telefone}
                        disabled={isEditing}
                        type="text"
                    />
                </div>
            </div>
            <div className="flex pt-4 justify-center gap-5">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-2xl w-24"
                    onClick={isEditing ? handleConfirmDelete : handleCancel}>
                    {isEditing ? "Excluir" : "Cancelar"}
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-2xl w-24"
                    onClick={isEditing ? handleEdit : handleSaveChange}>
                    {isEditing ? "Editar" : "Salvar"}
                </button>
            </div>
        </section>
    );
}

export default CardPessoa;