import './style.css';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { ClientRegister } from './FormClientRegister';

export const Client = () => {
  const [searchClient, setSearchClient] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [clientSelected, setClientSelected] = useState(null);
  const [infoClient, setInfoClient] = useState(null);

  const clients = [
    {id: '1', client: '111.111.111'},
    {id: '2', client: '222.222.222'},
    {id: '3', client: '333.333.333'},
    {id: '4', client: '444.444.444'},
    {id: '5', client: '555.555.555'},
  ]

  // filter the user searching and return
  const listClient = () => {
    const filteredclient = searchClient ?
    clients.filter(client => {
      return client.client.toLowerCase().includes(searchClient.toLowerCase());
    }) : clients;

    return filteredclient.map((cli) => {
      return (
        <tr key={cli.id} className={clientSelected === cli.id ? 'item-list-selected' : ''} onClick={() => handleSelectedUser({action:'select', id: cli.id})} onDoubleClick={() => handleSelectedUser({action: 'edit', id: cli.id, client: cli.client})}>
          <td>{cli.client}</td>
        </tr>
    )
    })
  }

  // set the searched user
  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchClient(value);
  }

  const handleSelectedUser = ({action, id, client}) => {
    if(action === 'edit') {
      setInfoClient({action, id, client});
      setShowForm(true);
    }else if(action === 'select') {
      setClientSelected(id);
      setInfoClient(null);
    }else if(action === 'new') {
      setInfoClient({action: 'new', id: '', client: ''});
      setShowForm(true);
    }
  }

  return (
    <div className='container-list'>
      
      <div className='header-list'>
        <div className='text-header-list'>
          <p>Cliente</p>
        </div>

        <div className='search-header-list'>
          <div className='search-component'>
            <input className='search-input' type='search' placeholder='Digite o cliente' onChange={(e) => handleSearch(e)} />
            <span><FontAwesomeIcon icon={faSearch} /></span>
          </div>
        </div>

        <div className='buttons-header-list'>
          <button className='btn btn-green' onClick={() => handleSelectedUser({action: 'new'})}>Novo</button>
          {clientSelected && <button className='btn btn-red'>Excluir</button>}
        </div>
      </div>

      <div className='body-list'>
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
            </tr>
          </thead>

          <tbody>
            {listClient()}
          </tbody>
        </table>
      </div>

      <div className='footer-list'></div>

      {showForm && <ClientRegister closeForm={() => setShowForm(false)} infoClient={infoClient} />}
    </div>
  )
}