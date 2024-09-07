const { Pessoa } = require('../models');

exports.createPessoa = async (req, res) => {
    try {
        const pessoa = await Pessoa.create(req.body);
        res.status(201).send(pessoa);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar pessoa', details: error.message });
    }
}

exports.getAllPessoas = async (req, res) => {
    try {
        const pessoas = await Pessoa.findAll();
        res.status(200).send(pessoas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao buscar pessoas', details: error.message });
    }
}

exports.editPessoa = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Pessoa.update(req.body, { where: { id } });
        if (updated) {
            const updatedPessoa = await Pessoa.findOne({ where: { id } });
            res.status(200).send(updatedPessoa);
        } else {
            res.status(404).json({ message: 'Pessoa não encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao atualizar pessoa', details: error.message });
    }
}

exports.getPessoaById = async (req, res) => {
    try {
        const { id } = req.params;
        const pessoa = await pessoa.findOne({ where: { id } });
        if (pessoa) {
            res.status(200).send(pessoa);
        } else {
            res.status(404).json({ message: 'Pessoa não encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao buscar pessoa', details: error.message });
    }
}

exports.deletePessoa = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Pessoa.destroy({ where: { id } });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Pessoa não encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao deletar pessoa', details: error.message });
    }
}
