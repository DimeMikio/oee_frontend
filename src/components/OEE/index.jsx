import './style.css';

import React, { useState } from 'react';
import { GaugeOEE } from './GaugeOEE';
import { PainelOEE } from './PainelOEE';

import { oeeValues } from '../../utils/db';

export const DashboardOEE = () => {
  const [showPainelOEE, setShowPainelOEE] = useState(false);
  const [oeeSelected, setOeeSelected] = useState({ equip_name: '', equip_desc: '', oee: null, avail: null, eff: null, qual: null, status: '', operator: '', products: [] })

  const handleSelectOee = (oeeValue) => {
    setOeeSelected({oeeValue});
    setShowPainelOEE(true);
  }

  return (
    <div className='dashboard-container'>
      <div className='header-dashboard'>
        <p>Dashboard - O.E.E</p>
      </div>

      <div className='body-dashboard'>
          {oeeValues.map((oeeValue) => {
            var colorBkg;
            switch (oeeValue.status) {
              case 'produzindo':
                colorBkg = 'color-bkg-green'
                break;
              case 'manutenção':
                colorBkg = 'color-bkg-gray'
                break;
              case 'parado':
                colorBkg = 'color-bkg-red'
                break;
              default:
                colorBkg = 'color-bkg-green';
            }

            return (
              <div key={oeeValue.id} className='oee-single' onDoubleClick={() => handleSelectOee(oeeValue)}>
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
                            <p key={product.id}>{product.number}</p>
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

      {showPainelOEE && <PainelOEE oeeSelected={oeeSelected} setShowPainelOEE={setShowPainelOEE}/>}
    </div>
  )
}