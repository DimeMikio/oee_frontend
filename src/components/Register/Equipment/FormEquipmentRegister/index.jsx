import { useState } from "react";

export const EquipmentRegister = ({closeForm, infoEquip}) => {
  const { action, id, equipment, description, type } = infoEquip;
  const [equip, setEquip] = useState({id, equipment, description, type});

  const handleInput = (e, field) => {
    switch(field) {
      case 'equip':
        setEquip({...equip, equipment: e.target.value})
        break;
      case 'description':
        setEquip({...equip, description: e.target.value})
        break;
      case 'type':
        setEquip({...equip, type: e.target.value})
        break;
      default:
        setEquip({...equip});
    }

  }

  return (
    <div className="bkg-form">
      <div className="container-form">

        <div className="header-form">
          <div className="header-form-text">
            <p>Gerenciar Equipamento</p>
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
                <input type="text" required='required' value={equip.equipment} onChange={(e) => handleInput(e, 'equip')} />
                <span>Equipamento</span>
                <i></i>
              </div>

              <div className="inputBox">
                <input type="text" required='required' value={equip.description} onChange={(e) => handleInput(e, 'description')} />
                <span>Descrição</span>
                <i></i>
              </div>
              
              <div className="inputBox">
                <input type="text" required='required' value={equip.type} onChange={(e) => handleInput(e, 'type')} />
                <span>Tipo</span>
                <i></i>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}