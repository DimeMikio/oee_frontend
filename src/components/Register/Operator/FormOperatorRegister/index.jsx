import { useState } from "react";

export const OperatorRegister = ({closeForm, infoOperator}) => {
  const { action, id, name, position } = infoOperator;
  const [operator, setOperator] = useState({id, name, position, password: ''});

  const handleInput = (e, field) => {
    switch(field) {
      case 'name':
        setOperator({...operator, name: e.target.value})
        break;
      case 'position':
        setOperator({...operator, position: e.target.value})
        break;
      default:
        setOperator({...operator});
    }

  }

  return (
    <div className="bkg-form">
      <div className="container-form">

        <div className="header-form">
          <div className="header-form-text">
            <p>Gerenciar Operador</p>
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
                <input type="text" required='required' value={operator.name} onChange={(e) => handleInput(e, 'name')} />
                <span>Nome</span>
                <i></i>
              </div>

              <div className="inputBox">
                <input type="text" required='required' value={operator.position} onChange={(e) => handleInput(e, 'position')} />
                <span>Nível</span>
                <i></i>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}