import './style.css';

import { faCircleXmark, faGaugeHigh, faGears, faList, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [itenSelect, setItenSelect] = useState(sessionStorage.getItem('itemMenu') ? parseInt(sessionStorage.getItem('itemMenu')) : 1);
  const menuSide = useRef(null);
  const domPhotoUser = useRef(null);


  const handleShowMenu = () => {

    function showHideMenu() {
      return new Promise((res, err) => {
        setShowMenu(!showMenu);
        res(!showMenu);
      })
    }
    
    showHideMenu().then((res) => {
      console.log(res);
      if(res === false) {
        menuSide.current.className = 'container-menu hide-menu';
        domPhotoUser.current.className = 'photo-user-menu photo-user-small';
      } else {
        menuSide.current.className = 'container-menu';
        domPhotoUser.current.className = 'photo-user-menu';
      }
    })
  }

  const handleSelectMenu = (id) => {
    setItenSelect(id);
    sessionStorage.setItem('itemMenu', id);
  }

  return (
    <div className='container-menu hide-menu' ref={menuSide}>
      
      <div className='container-icon-menu'>
        <div className='icon-menu' onClick={handleShowMenu}>
          <FontAwesomeIcon icon={showMenu ? faCircleXmark : faList} />
        </div>
      </div>

      <div className='container-infoUser-menu'>
        <span className='photo-user-menu photo-user-small' ref={domPhotoUser}></span>

        <div className='user-menu'>
          <span className='name-user-menu'>Brad Frost Hosokawa</span>
          <span className='access-user-menu'>Administrador</span>
        </div>
      </div>

      <div className='container-list-menu'>
        <ul>
          <Link to='/' style={{textDecoration:'none', color:'rgb(200,200,200)'}}><li className={itenSelect === 1 ? 'li-active' : 'li-disabled'} onClick={() => handleSelectMenu(1)}><span><FontAwesomeIcon icon={faGaugeHigh} /></span><p>Dashboard</p></li></Link>

          <Link to='/register' style={{textDecoration:'none', color:'rgb(200,200,200)'}}><li className={itenSelect === 2 ? 'li-active' : 'li-disabled'} onClick={() => handleSelectMenu(2)}><span><FontAwesomeIcon icon={faPenToSquare} /></span><p>Cadastro</p></li></Link>

          <Link to='/config' style={{textDecoration:'none', color:'rgb(200,200,200)'}}><li className={itenSelect === 3 ? 'li-active' : 'li-disabled'} onClick={() => handleSelectMenu(3)}><span style={{marginRight: '12px'}}><FontAwesomeIcon icon={faGears} /></span><p>Configurações</p></li></Link>
        </ul>
      </div>

      <div className='container-footer-menu'>
        <p>DMX</p>
      </div>
      
    </div>
  )
}