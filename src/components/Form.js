import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form id="name">
        <label htmlFor="name">Nome da carta</label>
        <input type="text" id="name" data-testid="name-input" />
        <label htmlFor="descrição">Descrição</label>
        <input type="textarea" id="descrição" data-testid="description-input" />
        <label htmlFor="attr1">Attr1</label>
        <input type="number" id="attr1" data-testid="attr1-input" />
        <label htmlFor="attr2">Attr2</label>
        <input type="number" id="attr2" data-testid="attr2-input" />
        <label htmlFor="attr3">Attr3</label>
        <input type="number" id="attr3" data-testid="attr3-input" />
        <label htmlFor="image">Imagem</label>
        <input type="text" id="image" data-testid="image-input" />
        <label htmlFor="raridade">Raridade</label>
        <select type="select" id="raridade" data-testid="rare-input">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muitoraro">Muito raro</option>
        </select>
        <label htmlFor="input">Super Trybe Triunfo</label>
        <input type="checkbox" data-testid="trunfo-input" />
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}
export default Form;
