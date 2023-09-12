import './style.css';

import React from 'react';

export const PainelOEE = () => {
  return (
    <div className='painel-oee'>
      <div className='painel-oee-container'>

        <div className='oee-header-container'>
          <h1>HMC 01</h1>
          <p>Heller</p>
        </div>

        <div className='oee-index-container'>
          <div className='oee-index-single'>
            <span className='oee-index-sub'>Disponibilidade</span>
            <span>80%</span>
          </div>
          <div className='oee-index-single'>
            <span className='oee-index-sub'>Eficiência</span>
            <span>80%</span>
          </div>
          <div className='oee-index-single'>
            <span className='oee-index-sub'>Qualidade</span>
            <span>80%</span>
          </div>
          <div className='oee-index-single'>
            <span className='oee-index-sub'>OEE</span>
            <span>80%</span>
          </div>
        </div>

        <div className='oee-infos-container'>
          <div>Operador</div>
          <div>Turno</div>

          <div>
            <div><span>Meta Produção</span><span>110</span></div>
            <div><span>Real Produção</span><span>98</span></div>
          </div>
        </div>

        <div className='oee-parts-container'>
          <div>
            <span>Peça1</span>
            <span>Operação 10</span>
            <span>Tempo Usinagem</span>
            <span>Tempo Troca</span>
          </div>
          <div>
            <span>Peça2</span>
            <span>Operação 30</span>
            <span>Tempo Usinagem</span>
            <span>Tempo Troca</span>
          </div>
        </div>
        <div>Tempo Ciclo</div>

      </div>
    </div>
  )
}