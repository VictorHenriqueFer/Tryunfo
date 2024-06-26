import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled, onInputChange, onSaveButtonClick,
      hasTrunfo } = this.props;

    return (
      <form id="name">
        <label htmlFor="name">Nome da carta</label>
        <input
          type="text"
          id="name"
          name="cardName"
          data-testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />
        <label htmlFor="descrição">Descrição</label>
        <input
          type="textarea"
          id="descrição"
          name="cardDescription"
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <label htmlFor="attr1">Attr1</label>
        <input
          type="number"
          id="attr1"
          name="cardAttr1"
          data-testid="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }

        />
        <label htmlFor="attr2">Attr2</label>
        <input
          type="number"
          id="attr2"
          name="cardAttr2"
          data-testid="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <label htmlFor="attr3">Attr3</label>
        <input
          type="number"
          id="attr3"
          name="cardAttr3"
          data-testid="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <label htmlFor="image">Imagem</label>
        <input
          type="text"
          id="image"
          name="cardImage"
          data-testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <label htmlFor="raridade">Raridade</label>
        <select
          type="select"
          id="raridade"
          name="cardRare"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
        {hasTrunfo
          ? <p>Você já tem um Super Trunfo em seu baralho</p>
          : (
            <label htmlFor="input">
              Super Trybe Triunfo
              <input
                type="checkbox"
                name="cardTrunfo"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
                value={ cardTrunfo }
              />

            </label>
          )}
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          onChange={ onInputChange }
        >
          Salvar

        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default Form;
