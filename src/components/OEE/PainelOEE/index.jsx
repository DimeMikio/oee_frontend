import './style.css';

import React, { useRef, useEffect, useMemo } from 'react';
import Chart from 'chart.js/auto';

export const PainelOEE = ({ oeeSelected, setShowPainelOEE }) => {
  const oee = oeeSelected.oeeValue;

  // here are index components 
  const IndexOEE = ({ index, percent }) => {
    const canvasRef = useRef(null);

    let chartAvail;
    let chartEff;
    let chartQual;
    let chartOEE;
    let colorIndex;

    if (percent < 65) {
      colorIndex = 'rgb(250, 69, 63)';
    } else if(percent >= 65 && percent < 85) {
      colorIndex = 'rgb(250, 206, 63)';
    } else if(percent >= 85) {
      colorIndex = 'rgb(132, 247, 132)';
    }    
    
    // canva configuration
    const type = 'doughnut';

    const data = {
      datasets: [
        {
          data: [percent, 100 - percent],
          backgroundColor: [colorIndex, 'transparent'],
          borderWidth: 0,
          hoverOffset: 1,
        },
      ],
    };

    const options = {
      cutout: index === 'oee' ? 20 :12,
      rotation: -125,
      circumference: 250,
      tooltips: { enabled: true },
      hover: { mode: null },
    }
    
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      ctx.clearRect(0,0,canvas.width, canvas.height);

      if (index === 'oee') {
        chartOEE && chartOEE.destroy();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        chartOEE = new Chart(ctx, { type, data, options });
      } else if (index === 'avail') {
        chartAvail && chartAvail.destroy();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        chartAvail = new Chart(ctx, { type, data, options });
      } else if (index === 'eff') {
        chartEff && chartEff.destroy();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        chartEff = new Chart(ctx, { type, data, options });
      } else if (index === 'qual') {
        chartQual && chartQual.destroy();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        chartQual = new Chart(ctx, { type, data, options });
      };

    }, [index, percent, colorIndex, chartOEE]);

    return <canvas ref={canvasRef} />;
  }

  // functions
  // check if the goal are OK or NOK
  function checkGoal(product) {
    if (product.status) {
      if (product.goal > product.prod_real) { 
        return 'color-red'
      } else {
        return 'color-green'
      }
    } else {
      return ''
    }
    
  }

  // check if the equipment are producing, maintenance or stopped
  function checkEquip() {
    if (oee.status === 'produzindo') {
      return 'status-production color-green';
    } else if (oee.status === 'manutenção') {
      return 'status-production color-gray';
    } else {
      return 'status-production color-red';
    }
  }

  // here are the components that depend on the equipment status
  // producing
  const EquipProducing = () => {
    return (
      <div>
        <div className='operator-id'>
          <p>Operador: <span>{oee.operator}</span></p>
        </div>

        <div className='list-product'>
          <table>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Descrição</th>
                  <th>Op</th>
                  <th>Meta</th>
                  <th>Real</th>
                </tr>
              </thead>

            <tbody>
              {oee.products.map((product) => {
                return (
                  <tr key={product.id} className={ checkGoal(product) }>
                    <td>{product.number}</td>
                    <td>{product.descrip}</td>
                    <td>{product.operation}</td>
                    <td>{product.goal}</td>
                    <td>{product.prod_real}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  // maintenance
  const EquipMaintenance = () => {
    return (
      <div>
        <div>
          <p>Técnico: <span>{'João Paulo'}</span></p>
          <p>Hora Início: <span>{'09:03 hrs'}</span></p>
          <p>Tempo Manutenção: <span>{'02:12 hrs'}</span></p>
        </div>
      </div>
    )
  }

  // stoped
  const EquipStoped = () => {
    return (
      <div>

      </div>
    )
  }

  return (
    <div className='painel-oee'>

      <div className='painel-oee-bkg'>

        <div className='painel-oee-container'>

          <div className='oee-header-container'>
            <h1>{oee.equip_name}</h1>
            <p>{oee.equip_desc}</p>
          </div>

          <div className='oee-index-container'>

            <div className='oee-mainindex'>
              <div className='oee-index-70'>
                <IndexOEE index={'oee'} percent={oee.oee} />
              </div>
              <div className='oee-index-text'>
                <div>{oee.oee}%</div>
                <div>OEE</div>
              </div>
            </div>

            <div className='oee-subindex'>
              <div className='oee-subindex-container'>
                <div className='oee-index-50'>
                  <IndexOEE index={'avail'} percent={oee.avail} />
                </div>
                <div>{oee.avail}%</div>
                <div>Disponibilidade</div>
              </div>

              <div className='oee-subindex-container'>
                <div className='oee-index-50'>
                  <IndexOEE index={'eff'} percent={oee.eff} />
                </div>
                <div>{oee.eff}%</div>
                <div>Eficiência</div>
              </div>

              <div className='oee-subindex-container'>
                  <div className='oee-index-50'>
                    <IndexOEE index={'qual'} percent={oee.qual} />
                  </div>
                  <div>{oee.qual}%</div>
                  <div>Qualidade</div>
              </div>
            </div>

          </div>

          <div className='oee-info-container'>
            <div className={checkEquip()}>
              {oee.status}
            </div>

            {oee.status === 'produzindo' && <EquipProducing />}
            {oee.status === 'manutenção' && <EquipMaintenance />}
            {/*oee.status === 'parado' && <EquipStoped />} */}
          </div>

          <div className='oee-buttons'>
            <button className='btn btn-gray' onClick={() => setShowPainelOEE(false)}>Fechar</button>
          </div>
        </div>

      </div>
    </div>
  );
}