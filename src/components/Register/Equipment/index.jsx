import './style.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { EquipmentRegister } from './FormEquipmentRegister';

export const Equipment = () => {
  const [searchEquip, setSearchEquip] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [equipSelected, setEquipSelected] = useState(null);
  const [infoEquip, setInfoEquip] = useState(null);

  const equipments = [
    {id: '1', equipment: 'TCNC 01', description: 'Operador CNC 1', type: 'Torno CNC'},
    {id: '2', equipment: 'VMC 01', description: 'Operador CNC 1', type: 'Centro Vertical'},
    {id: '3', equipment: 'PR 01', description: 'Operador CNC 1', type: 'Prensa'},
    {id: '4', equipment: 'HMC 01', description: 'Operador CNC 1', type: 'Centro Horizontal'},
    {id: '5', equipment: 'FR 01', description: 'Operador CNC 1', type: 'Furadeira'},
  ]

  // filter the user searching and return
  const listEquipment = () => {
    const filteredEquipment = searchEquip ?
    equipments.filter(equipment => {
      return equipment.equipment.toLowerCase().includes(searchEquip.toLowerCase());
    }) : equipments;

    return filteredEquipment.map((equip) => {
      return (
        <tr key={equip.id} className={equipSelected === equip.id ? 'item-list-selected' : ''} onClick={() => handleSelectedUser({action:'select', id: equip.id})} onDoubleClick={() => handleSelectedUser({action: 'edit', id: equip.id, equipment: equip.equipment, description: equip.description, type: equip.type})}>
          <td>{equip.equipment}</td>
          <td>{equip.description}</td>
          <td>{equip.type}</td>
        </tr>
    )
    })
  }

  // set the searched user
  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchEquip(value);
  }

  const handleSelectedUser = ({action, id, equipment, description, type}) => {
    if(action === 'edit') {
      setInfoEquip({action, id, equipment, description, type});
      setShowForm(true);
    }else if(action === 'select') {
      setEquipSelected(id);
      setInfoEquip(null);
    }else if(action === 'new') {
      setInfoEquip({action: 'new', id: '', equipment: '', description: '', type: ''});
      setShowForm(true);
    }
  }

  return (
    <div className='container-list'>
      
      <div className='header-list'>
        <div className='text-header-list'>
          <p>Equipamento</p>
        </div>

        <div className='search-header-list'>
          <div className='search-component'>
            <input className='search-input' type='search' placeholder='Digite o equipamento' onChange={(e) => handleSearch(e)} />
            <span><FontAwesomeIcon icon={faSearch} /></span>
          </div>
        </div>

        <div className='buttons-header-list'>
          <button className='btn btn-green' onClick={() => handleSelectedUser({action: 'new'})}>Novo</button>
          {equipSelected && <button className='btn btn-red'>Excluir</button>}
        </div>
      </div>

      <div className='body-list'>
        <table>
          <thead>
            <tr>
              <th>Equipamento</th>
              <th>Descrição</th>
              <th>Tipo</th>
            </tr>
          </thead>

          <tbody>
            {listEquipment()}
          </tbody>
        </table>
      </div>

      <div className='footer-list'></div>

      {showForm && <EquipmentRegister closeForm={() => setShowForm(false)} infoEquip={infoEquip} />}
    </div>
  )
}