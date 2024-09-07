function CardPessoa() {
    return (
        <section className="bg-white justify-center items-center rounded-2xl p-5 shadow-lg">
            <div className="flex flex-row gap-8 items-center text-center">
                <h1 className="text-xl font-semibold">Raquel Campos</h1>
                <p className="font-medium">103.569.239-24</p>
                <p className="font-medium">(43) 99820-0933</p>
            </div>
            <div className="flex pt-4 justify-center gap-5">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-2xl">
                    Excluir
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-2xl">
                    Editar
                </button>
            </div>
        </section>
    );
}

export default CardPessoa;