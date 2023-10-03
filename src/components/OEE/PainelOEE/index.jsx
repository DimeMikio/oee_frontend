import './style.css';

import React, { useRef, useEffect } from 'react';

import Chart from 'chart.js/auto';

export const PainelOEE = ({ oeeSelected, setShowPainelOEE }) => {
  const oee = oeeSelected.oeeValue;

  let chartOEE;
  let chartAvail;
  let chartEff;
  let chartQual;

  const IndexOEE = ({ percent }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      chartOEE && chartOEE.destroy();
      
      chartOEE = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [
            {
              data: [percent, 100 - percent],
              backgroundColor: ['rgba(132, 247, 132, 0.5)', 'transparent'],
              borderWidth: 0,
              hoverOffset: 1,
            },
          ],
        },
        options: {
          cutout: 20,
          rotation: -125,
          circumference: 250,
          tooltips: { enabled: true },
          hover: { mode: null },
        }
      });

    }, [percent]);


    return <canvas ref={canvasRef} />;
  }

  const IndexAvail = ({ percent }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      chartAvail && chartAvail.destroy();
      
      chartAvail = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [
            {
              data: [percent, 100 - percent],
              backgroundColor: ['rgba(132, 247, 132, 0.5)', 'transparent'],
              borderWidth: 0,
              hoverOffset: 1,
            },
          ],
        },
        options: {
          cutout: 12,
          rotation: -135,
          circumference: 270,
          tooltips: { enabled: true },
          hover: { mode: null },
        }
      });

    }, [percent]);


    return <canvas ref={canvasRef} />;
  }

  const IndexEff = ({ percent }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      chartEff && chartEff.destroy();
      
      chartEff = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [
            {
              data: [percent, 100 - percent],
              backgroundColor: ['rgba(132, 247, 132, 0.5)', 'transparent'],
              borderWidth: 0,
              hoverOffset: 1,
            },
          ],
        },
        options: {
          cutout: 12,
          rotation: -135,
          circumference: 270,
          tooltips: { enabled: true },
          hover: { mode: null },
        },
      });

    }, [percent]);


    return <canvas ref={canvasRef} />;
  }

  const IndexQual = ({ percent }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      chartQual && chartQual.destroy();
      
      chartQual = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [
            {
              data: [percent, 100 - percent],
              backgroundColor: ['rgba(132, 247, 132, 0.5)', 'transparent'],
              borderWidth: 0,
              hoverOffset: 1,
            },
          ],
        },
        options: {
          cutout: 12,
          rotation: -135,
          circumference: 270,
          tooltips: { enabled: true },
          hover: { mode: null },
        },
      });

    }, [percent]);


    return <canvas ref={canvasRef} />;
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
                <IndexOEE percent={oee.oee} />
              </div>
              <div className='oee-index-text'>
                <div>{oee.oee}%</div>
                <div>OEE</div>
              </div>
            </div>

            <div className='oee-subindex'>
              <div className='oee-subindex-container'>
                <div className='oee-index-50'>
                  <IndexAvail percent={oee.avail} />
                </div>
                <div>{oee.avail}%</div>
                <div>Disponibilidade</div>
              </div>

              <div className='oee-subindex-container'>
                <div className='oee-index-50'>
                  <IndexEff percent={oee.eff} />
                </div>
                <div>{oee.eff}%</div>
                <div>Eficiência</div>
              </div>

              <div className='oee-subindex-container'>
                  <div className='oee-index-50'>
                    <IndexQual percent={oee.qual} />
                  </div>
                  <div>{oee.qual}%</div>
                  <div>Qualidade</div>
              </div>
            </div>

          </div>

          <div className='oee-info-container'>

            <div className='status-production'>
              {oee.status}
            </div>

            <div className='operator-id'>
              <p>Operador: <span>{oee.operator}</span></p>
            </div>

            <div className='list-product'>
              <table>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Código</th>
                    <th>Descrição</th>
                    <th>Op</th>
                    <th>Meta</th>
                    <th>Real</th>
                  </tr>
                </thead>

                <tbody>
                  <tr style={{background: "rgb(82,184,72)"}}>
                    <td>OK</td>
                    <td>111.111.111</td>
                    <td>Polia</td>
                    <td>20</td>
                    <td>15</td>
                    <td>15</td>
                  </tr>
                  <tr style={{background: "rgb(82,184,72)"}}>
                    <td>OK</td>
                    <td>222.222.222</td>
                    <td>Polia</td>
                    <td>20</td>
                    <td>15</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td>P</td>
                    <td>123.456.789</td>
                    <td>Polia</td>
                    <td>20</td>
                    <td>15</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>P</td>
                    <td>123.456.789</td>
                    <td>Polia</td>
                    <td>20</td>
                    <td>15</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>P</td>
                    <td>123.456.789</td>
                    <td>Polia</td>
                    <td>20</td>
                    <td>15</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>P</td>
                    <td>123.456.789</td>
                    <td>Polia</td>
                    <td>20</td>
                    <td>15</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='oee-buttons'>
              <button className='btn btn-gray' onClick={() => setShowPainelOEE(false)}>Fechar</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );

}