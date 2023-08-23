import { useState } from "react";

export const UserRegister = ({closeForm, infoUser}) => {
  const { action, id, name, email, position, access } = infoUser;
  const [user, setUser] = useState({id, name, email, position, access, password: ''});

  const handleInput = (e, field) => {
    switch(field) {
      case 'name':
        setUser({...user, name: e.target.value})
        break;
      case 'email':
        setUser({...user, email: e.target.value})
        break;
      case 'position':
        setUser({...user, position: e.target.value})
        break;
      case 'access':
        setUser({...user, access: e.target.value})
        break;
      case 'password':
        setUser({...user, password: e.target.value})
        break;
      default:
        setUser({...user});
    }

  }

  return (
    <div className="bkg-form">
      <div className="container-form">

        <div className="header-form">
          <div className="header-form-text">
            <p>Gerenciar Usuário</p>
          </div>

          <div className="header-form-btn">
            {action === 'edit' ? <button className="btn btn-blue">Salvar</button> : <button className="btn btn-green">Salvar</button>}
            <button className="btn btn-gray" onClick={() => closeForm()}>Cancelar</button>
          </div>
        </div>

        <div className="body-form">
          <div className="body-form-input">
            <form>
              <div className="inputBox">
                <input type="text" required='required' value={user.name} onChange={(e) => handleInput(e, 'name')} />
                <span>Nome</span>
                <i></i>
              </div>

              <div className="inputBox">
                <input type="text" required='required' value={user.email} onChange={(e) => handleInput(e, 'email')} />
                <span>E-mail</span>
                <i></i>
              </div>

              <div className="inputBox">
                <input type="text" required='required' value={user.position} onChange={(e) => handleInput(e, 'position')} />
                <span>Cargo</span>
                <i></i>
              </div>

              <div className="inputBox">
                <input type="password" required='required' onChange={(e) => handleInput(e, 'password')} />
                <span>Senha Provisória</span>
                <i></i>
              </div>

              <div className="inputBox">
                <select name="access" value={user.access} onChange={(e) => handleInput(e, 'access')}>
                  <option value="">Tipo de Acesso</option>
                  <option value="0">Master</option>
                  <option value="1">Administrador</option>
                  <option value="2">Restrito</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}