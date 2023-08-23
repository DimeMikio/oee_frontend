import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

//component user options and account logout
const PanelUser = () => {
  return (
    <div className='panel-user'>
      <ul className='panel-user-list'>
        <li>Configurações</li>
        <li>Sair</li>
      </ul>
    </div>
  )
}

export const Header = () => {
  const [infoUser, setInfoUser] = useState(false);

  //function show and hide the user options
  const handleShowInfoUser = () => {
    setInfoUser(!infoUser);
  }

  return (
    <div className="container-header">

      <div className='container-logo'>
        <div className='logo'>LOGO</div>
      </div>

      <div className='container-user-info'>
        <span className='photo-user'></span>
        <span>Brad Frost Hosok</span>
        <span onClick={handleShowInfoUser}>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
        {infoUser && <PanelUser />}
      </div>

    </div>
  )
}