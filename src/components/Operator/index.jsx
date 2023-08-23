import './style.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { OperatorRegister } from './FormOperatorRegister';

export const Operator = () => {
  const [searchOperator, setSearchOperator] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [operatorSelected, setOperatorSelected] = useState(null);
  const [infoOperator, setInfoOperator] = useState(null);

  const operators = [
    {id: '1', name: 'Dime', position: 'Operador CNC 1'},
    {id: '2', name: 'Bruno', position: 'Operador CNC 1'},
    {id: '3', name: 'Tiago', position: 'Operador CNC 1'},
    {id: '4', name: 'Leandro', position: 'Operador CNC 1'},
    {id: '5', name: 'Sandro', position: 'Operador CNC 1'},
  ]

  // filter the Operator searching and return
  const listOperator = () => {
    const filteredOperator = searchOperator ?
    operators.filter(operator => {
      return operator.name.toLowerCase().includes(searchOperator.toLowerCase());
    }) : operators;

    return filteredOperator.map((operator) => {
      return (
        <tr key={operator.id} className={operatorSelected === operator.id ? 'item-list-selected' : ''} onClick={() => handleSelectedOperator({action:'select', id: operator.id})} onDoubleClick={() => handleSelectedOperator({action: 'edit', id: operator.id, name: operator.name, position: operator.position})}>
          <td>{operator.name}</td>
          <td>{operator.position}</td>
        </tr>
    )
    })
  }

  // set the searched Operator
  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchOperator(value);
  }

  const handleSelectedOperator = ({action, id, name, position}) => {
    if(action === 'edit') {
      setInfoOperator({action, id, name, position});
      setShowForm(true);
    }else if(action === 'select') {
      setOperatorSelected(id);
      setInfoOperator(null);
    }else if(action === 'new') {
      setInfoOperator({action: 'new', id: '', name: '', position: ''});
      setShowForm(true);
    }
  }

  return (
    <div className='container-list'>
      
      <div className='header-list'>
        <div className='text-header-list'>
          <p>Operador</p>
        </div>

        <div className='search-header-list'>
          <div className='search-component'>
            <input className='search-input' type='search' placeholder='Digite o produto' onChange={(e) => handleSearch(e)} />
            <span><FontAwesomeIcon icon={faSearch} /></span>
          </div>
        </div>

        <div className='buttons-header-list'>
          <button className='btn btn-green' onClick={() => handleSelectedOperator({action: 'new'})}>Novo</button>
          {operatorSelected && <button className='btn btn-red'>Excluir</button>}
        </div>
      </div>

      <div className='body-list'>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Cargo</th>
            </tr>
          </thead>

          <tbody>
            {listOperator()}
          </tbody>
        </table>
      </div>

      <div className='footer-list'></div>

      {showForm && <OperatorRegister closeForm={() => setShowForm(false)} infoOperator={infoOperator} />}
    </div>
  )
}