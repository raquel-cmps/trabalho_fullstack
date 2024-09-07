import './App.css'
import CardPessoa from './components/CardPessoa'

function App() {

  return (
    <div className='flex flex-col justify-center items-center m-10 p-10 bg-gray-100 rounded-2xl'>
      <h1 className='font-bold text-5xl'>Gerenciar Pessoas</h1>
      <div className='py-4'>
        <CardPessoa />
      </div>
    </div>

  )
}

export default App
