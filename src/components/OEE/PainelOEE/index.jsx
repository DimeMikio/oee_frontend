import './style.css';

import React from 'react';

export const PainelOEE = () => {
  return (
    <div className='painel-oee'>
      <div className='painel-oee-container'>
        <div className='oee-header-container'>
          <h1>HMC 01</h1>
        </div>

        <div className='oee-index-container'>
          <div>
            <span>Disponibilidade</span>
            <span>80%</span>
          </div>
        </div>

        <div className='oee-infos-container'>
          <div>Nome</div>
          <div>Turno</div>
        </div>

        <div className='oee-parts-container'>
          <div>
            <span>Peça1</span>
            <span>Operação 10</span>
            <span>Tempo Usinagem</span>
            <span>Tempo Troca</span>
            <span>Tempo Ciclo</span>
          </div>
        </div>
      </div>
    </div>
  )
}