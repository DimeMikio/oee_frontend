import './style.css';

import React, { useState } from 'react';

export const CapacityEquipment = () => {
  const [items1, setItems1] = useState([
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" }
  ]);
  const [items2, setItems2] = useState([]);

  const handleDragStart = (event, item) => {
    event.dataTransfer.setData("text/plain", JSON.stringify(item));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, targetDiv) => {
    event.preventDefault();
    const draggedItem = JSON.parse(event.dataTransfer.getData("text/plain"));

    if (targetDiv === "div1") {
      // Move o item para a Div 1
      const updatedItems1 = items1.filter((item) => item.id !== draggedItem.id);
      setItems1(updatedItems1);
    } else if (targetDiv === "div2") {
      // Move o item para a Div 2
      const updatedItems2 = [...items2, draggedItem];
      setItems2(updatedItems2);
    }
  };

  return (
    <div>
      <div
        className="div1"
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, "div1")}
      >
        <h2>Div 1</h2>
        {items1.map((item) => (
          <div
            key={item.id}
            draggable
            onDragStart={(event) => handleDragStart(event, item)}
          >
            {item.text}
          </div>
        ))}
      </div>

      <div
        className="div2"
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, "div2")}
      >
        <h2>Div 2</h2>
        {items2.map((item) => (
          <div key={item.id} draggable onDragStart={(event) => handleDragStart(event, item)}>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );


  /* return (
    <div className='dashboard-container'>
      <div className='header-dashboard'>
        <p>Programação de Produção</p>
      </div>

      <div className='body-dashboard'>
         List of itens that need to be produced
        <div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Descrição</th>
                  <th>Operação</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>111.111.111</td>
                  <td>Polia</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>222.222.222</td>
                  <td>Suporte</td>
                  <td>10/20</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <button>Adicionar</button>
          </div>
        </div>

         List of equipments with products in sequence 
        <div>
          <div>

          </div>
        </div>
      </div>
    </div>
  ); */
}