
import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { CreateModal } from './components/create-modal/create-modal';
import { useGatosData } from './hooks/useGatosData';

function App() {
  const { data } = useGatosData()
  const [isModalOpen, setIsOpenModal] = useState(false)

  const handleModal = () => {
    setIsOpenModal(prev => !prev)
  }

  return (
    <>
      <div className="container">
        <h1>Meus Gatos</h1>
        <div className="card-grid">
          {data?.map(GatoData =>
            <Card
              key={GatoData.id}
              foto={GatoData.foto}
              lugar={GatoData.lugar}
              nomeGato={GatoData.nomeGato}

            />)}
        </div>
        {isModalOpen && <CreateModal closeModal={handleModal} />}
        <button onClick={handleModal}>Criar</button>
      </div>
    </>
  )
}

export default App
