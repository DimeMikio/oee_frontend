import './style.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ProductRegister } from './FormProductRegister';

export const Product = () => {
  const [searchProd, setSearchProd] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [prodSelected, setProdSelected] = useState(null);
  const [infoProd, setInfoProd] = useState(null);

  const products = [
    {id: '1', product: '111.111.111', description: 'Polia', client: 'CNH'},
    {id: '2', product: '222.222.222', description: 'Carcaça', client: 'CNH'},
    {id: '3', product: '333.333.333', description: 'Pillow', client: 'CNH'},
    {id: '4', product: '444.444.444', description: 'Suporte', client: 'CNH'},
    {id: '5', product: '555.555.555', description: 'Calço', client: 'CNH'},
  ]

  // filter the user searching and return
  const listProduct = () => {
    const filteredProduct = searchProd ?
    products.filter(product => {
      return product.product.toLowerCase().includes(searchProd.toLowerCase());
    }) : products;

    return filteredProduct.map((prod) => {
      return (
        <tr key={prod.id} className={prodSelected === prod.id ? 'item-list-selected' : ''} onClick={() => handleSelectedUser({action:'select', id: prod.id})} onDoubleClick={() => handleSelectedUser({action: 'edit', id: prod.id, product: prod.product, description: prod.description, client: prod.client})}>
          <td>{prod.product}</td>
          <td>{prod.description}</td>
          <td>{prod.client}</td>
        </tr>
    )
    })
  }

  // set the searched user
  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchProd(value);
  }

  const handleSelectedUser = ({action, id, product, description, client}) => {
    if(action === 'edit') {
      setInfoProd({action, id, product, description, client});
      setShowForm(true);
    }else if(action === 'select') {
      setProdSelected(id);
      setInfoProd(null);
    }else if(action === 'new') {
      setInfoProd({action: 'new', id: '', product: '', description: '', client: ''});
      setShowForm(true);
    }
  }

  return (
    <div className='container-list'>
      
      <div className='header-list'>
        <div className='text-header-list'>
          <p>Produtos</p>
        </div>

        <div className='search-header-list'>
          <div className='search-component'>
            <input className='search-input' type='search' placeholder='Digite o produto' onChange={(e) => handleSearch(e)} />
            <span><FontAwesomeIcon icon={faSearch} /></span>
          </div>
        </div>

        <div className='buttons-header-list'>
          <button className='btn btn-green' onClick={() => handleSelectedUser({action: 'new'})}>Novo</button>
          {prodSelected && <button className='btn btn-red'>Excluir</button>}
        </div>
      </div>

      <div className='body-list'>
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Descrição</th>
              <th>Cliente</th>
            </tr>
          </thead>

          <tbody>
            {listProduct()}
          </tbody>
        </table>
      </div>

      <div className='footer-list'></div>

      {showForm && <ProductRegister closeForm={() => setShowForm(false)} infoProd={infoProd} />}
    </div>
  )
}