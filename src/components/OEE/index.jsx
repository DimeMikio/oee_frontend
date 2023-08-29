import './style.css';

import React from 'react';
import { GaugeOEE } from './GaugeOEE';

export const DashboardOEE = () => {
  const oeeValues = [
    {id:1, equip_name: 'HMC 01', equip_desc: 'Heller', oee:90, status: 'Produzindo', operator: 'Dime M', products:[[1, '000.000.000'], [2, '111.222.333']]},
    {id:2, equip_name: 'HMC 02', equip_desc: 'Mori Seiki', oee:78, status: 'Manutenção', operator: 'João', products:[[]]},
    {id:3, equip_name: 'HMC 03', equip_desc: 'Grob 550', oee:85, status: 'Produzindo', operator: 'Maria', products:[[3, '000.000.000'], [4, '111.222.333'], [5, '555.555.555']]},
    {id:4, equip_name: 'TCNC 01', equip_desc: 'Index 800', oee:92, status: 'Parado', operator: 'Joaquin', products:[[6, '000.000.000']]},
    {id:5, equip_name: 'TCNC 02', equip_desc: 'Index 600', oee:62, status: 'Produzindo', operator: 'Marcos', products:[[7, '000.000.000']]},
    {id:6, equip_name: 'TCNC 03', equip_desc: 'SKT 250LC', oee:75, status: 'Produzindo', operator: 'Felipe', products:[[8, '000.000.000']]},
  ]

  return (
    <div className='dashboard-container'>
      <div className='header-dashboard'>
        <p>Dashboard - O.E.E</p>
      </div>

      <div className='body-dashboard'>
          {oeeValues.map((oeeValue) => {
            var colorBkg;
            switch (oeeValue.status) {
              case 'Produzindo':
                colorBkg = 'color-bkg-green'
                break;
              case 'Manutenção':
                colorBkg = 'color-bkg-gray'
                break;
              case 'Parado':
                colorBkg = 'color-bkg-red'
                break;
              default:
                colorBkg = 'color-bkg-green';
            }

            return (
              <div key={oeeValue.id} className='oee-single'>
                <div className='equipment-name'>
                  <h2>{oeeValue.equip_name}</h2>
                  <p>{oeeValue.equip_desc}</p>
                </div>
                
                <div className='oee-single-body'>
                  <div className='gauge-background'>
                    <GaugeOEE oee={oeeValue.oee} />
                  </div>

                  <div className={`infos-oee-background ${colorBkg}`}>
                    <div className='infos-oee'>
                      <div className='equipment-status'><p>{oeeValue.status}</p></div>
                      <div className='equipment-operator'><p>{oeeValue.operator}</p></div>
                      <div className='equipment-product'>
                        {oeeValue.products.map((product) => {
                          return (
                            <p key={product[0]}>{product[1]}</p>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}