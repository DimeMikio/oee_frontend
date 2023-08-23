import './style.css';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { StopRegister } from './FormStopRegister';

export const Stop = () => {
  const [searchStop, setSearchStop] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [stopSelected, setStopSelected] = useState(null);
  const [infoStop, setInfoStop] = useState(null);

  const stops = [
    {id: '1', stop: 'Manutenção Preventiva'},
    {id: '2', stop: 'Troca de Ferramenta'},
    {id: '3', stop: 'Falta de Operador'},
    {id: '4', stop: 'Falta de Operador'},
    {id: '5', stop: 'Preparando Máquina'},
  ]

  // filter the user searching and return
  const listStop = () => {
    const filteredStop = searchStop ?
    stops.filter(stop => {
      return stop.stop.toLowerCase().includes(searchStop.toLowerCase());
    }) : stops;

    return filteredStop.map((stop) => {
      return (
        <tr key={stop.id} className={stopSelected === stop.id ? 'item-list-selected' : ''} onClick={() => handleSelectedUser({action:'select', id: stop.id})} onDoubleClick={() => handleSelectedUser({action: 'edit', id: stop.id, stop: stop.stop})}>
          <td>{stop.stop}</td>
        </tr>
    )
    })
  }

  // set the searched user
  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchStop(value);
  }

  const handleSelectedUser = ({action, id, stop}) => {
    if(action === 'edit') {
      setInfoStop({action, id, stop});
      setShowForm(true);
    }else if(action === 'select') {
      setStopSelected(id);
      setInfoStop(null);
    }else if(action === 'new') {
      setInfoStop({action: 'new', id: '', stop: ''});
      setShowForm(true);
    }
  }

  return (
    <div className='container-list'>
      
      <div className='header-list'>
        <div className='text-header-list'>
          <p>Paradas</p>
        </div>

        <div className='search-header-list'>
          <div className='search-component'>
            <input className='search-input' type='search' placeholder='Digite o parada' onChange={(e) => handleSearch(e)} />
            <span><FontAwesomeIcon icon={faSearch} /></span>
          </div>
        </div>

        <div className='buttons-header-list'>
          <button className='btn btn-green' onClick={() => handleSelectedUser({action: 'new'})}>Novo</button>
          {stopSelected && <button className='btn btn-red'>Excluir</button>}
        </div>
      </div>

      <div className='body-list'>
        <table>
          <thead>
            <tr>
              <th>Paradas</th>
            </tr>
          </thead>

          <tbody>
            {listStop()}
          </tbody>
        </table>
      </div>

      <div className='footer-list'></div>

      {showForm && <StopRegister closeForm={() => setShowForm(false)} infoStop={infoStop} />}
    </div>
  )
}