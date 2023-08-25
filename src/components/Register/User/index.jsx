import './style.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { UserRegister } from './FormUserRegister';

export const User = () => {
  const [searchUser, setSearchUser] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [userSelected, setUserSelected] = useState(null);
  const [infoUser, setInfoUser] = useState(null);

  const users = [
    {id: '1', name: 'Dime', email: 'dime@dime.com', position: 'Desenvolvedor Web', access: '0'},
    {id: '2',name: 'Bruno', email: 'dime@dime.com', position: 'Desenvolvedor Web', access: '1'},
    {id: '3',name: 'Tiago', email: 'dime@dime.com', position: 'Desenvolvedor Web', access: '1'},
    {id: '4',name: 'Leandro', email: 'dime@dime.com', position: 'Desenvolvedor Web', access: '2'},
    {id: '5',name: 'Gustavo', email: 'dime@dime.com', position: 'Desenvolvedor Web', access: '2'},
  ]

  // filter the user searching and return
  const listUser = () => {
    const filteredUser = searchUser ?
    users.filter(user => {
      return user.name.toLowerCase().includes(searchUser.toLowerCase());
    }) : users;

    return filteredUser.map((user) => {
      return (
        <tr key={user.id} className={userSelected === user.id ? 'item-list-selected' : ''} onClick={() => handleSelectedUser({action:'select', id: user.id})} onDoubleClick={() => handleSelectedUser({action: 'edit', id: user.id, name: user.name, email: user.email, position: user.position, access: user.access})}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.position}</td>
          <td>{user.access}</td>
        </tr>
    )
    })
  }

  // set the searched user
  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchUser(value);
  }

  const handleSelectedUser = ({action, id, name, email, position, access}) => {
    if(action === 'edit') {
      setInfoUser({action, id, name, email, position, access});
      setShowForm(true);
    }else if(action === 'select') {
      setUserSelected(id);
      setInfoUser(null);
    }else if(action === 'new') {
      setInfoUser({action: 'new', id: '', name: '', email: '', position: '', access: ''});
      setShowForm(true);
    }
  }

  return (
    <div className='container-list'>
      
      <div className='header-list'>
        <div className='text-header-list'>
          <p>Usuário</p>
        </div>

        <div className='search-header-list'>
          <div className='search-component'>
            <input className='search-input' type='search' placeholder='Digite o nome' onChange={(e) => handleSearch(e)} />
            <span><FontAwesomeIcon icon={faSearch} /></span>
          </div>
        </div>

        <div className='buttons-header-list'>
          <button className='btn btn-green' onClick={() => handleSelectedUser({action: 'new'})}>Novo</button>
          {userSelected && <button className='btn btn-red'>Excluir</button>}
        </div>
      </div>

      <div className='body-list'>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Posição</th>
              <th>Acesso</th>
            </tr>
          </thead>

          <tbody>
            {listUser()}
          </tbody>
        </table>
      </div>

      <div className='footer-list'></div>

      {showForm && <UserRegister closeForm={() => setShowForm(false)} infoUser={infoUser} />}
    </div>
  )
}