import { useState } from "react";

export const ProductRegister = ({closeForm, infoProd}) => {
  const { action, id, product, description, client } = infoProd;
  const [prod, setProd] = useState({id, product, description, client});

  const handleInput = (e, field) => {
    switch(field) {
      case 'equip':
        setProd({...prod, product: e.target.value})
        break;
      case 'description':
        setProd({...prod, description: e.target.value})
        break;
      case 'type':
        setProd({...prod, client: e.target.value})
        break;
      default:
        setProd({...prod});
    }

  }

  return (
    <div className="bkg-form">
      <div className="container-form">

        <div className="header-form">
          <div className="header-form-text">
            <p>Gerenciar Produtos</p>
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
                <input type="text" required='required' value={prod.product} onChange={(e) => handleInput(e, 'equip')} />
                <span>Produto</span>
                <i></i>
              </div>

              <div className="inputBox">
                <input type="text" required='required' value={prod.description} onChange={(e) => handleInput(e, 'description')} />
                <span>Descrição</span>
                <i></i>
              </div>
              
              <div className="inputBox">
                <input type="text" required='required' value={prod.client} onChange={(e) => handleInput(e, 'type')} />
                <span>Cliente</span>
                <i></i>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}