import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    saveCards: [],
    nameSearch: '',
    rareSearch: 'todas',
  };

  verificaValores = () => {
    const { cardAttr1, cardAttr2, cardAttr3, cardName, cardDescription,
      cardImage, cardRare } = this.state;
    const valorMax = 90;
    const numberMax = 210;
    const nomeValido = cardName.length > 0;
    const descriptionValida = cardDescription.length > 0;
    const rareValida = cardRare.length > 0;
    const imageValida = cardImage.length > 0;
    const numberOneValido = Number(cardAttr1) >= 0 && Number(cardAttr1) <= valorMax;
    const numberTwoValido = Number(cardAttr2) >= 0 && Number(cardAttr2) <= valorMax;
    const numberThreeValido = Number(cardAttr3) >= 0 && Number(cardAttr3) <= valorMax;
    const numberSoma = +(cardAttr1) + +(cardAttr2) + +(cardAttr3) <= numberMax;
    if (
      nomeValido
       && descriptionValida
       && rareValida
       && imageValida
       && numberOneValido
       && numberTwoValido
       && numberThreeValido
       && numberSoma
    ) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  onInputChange = ({ target }) => {
    console.log(target.value);
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.verificaValores());
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();

    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, saveCards } = this.state;

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      saveCards: [
        ...saveCards,
        {
          cardImage,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardName,
          cardRare,
          cardTrunfo,
          cardDescription,
          hasTrunfo,
        },

      ],
    });
  };

  handleDeleteCard = (index) => {
    const { saveCards } = this.state;
    const newCards = saveCards
      .filter((_saveCard, i) => index !== i);

    this.setState({
      saveCards: newCards,
    });
  };

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled, saveCards,
      nameSearch, rareSearch } = this.state;

    const hasTrunfoCard = saveCards.some((saveCard) => saveCard.cardTrunfo === true);
    const filtro = saveCards.filter((card) => card.cardName.toLowerCase()
      .includes(nameSearch.toLowerCase()))
      .filter((card) => card.cardRare === rareSearch || rareSearch === 'todas');

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfoCard }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }

        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <input
          data-testid="name-filter"
          type="text"
          name="nameSearch"
          value={ nameSearch }
          onChange={ this.onInputChange }
        />
        <select
          data-testid="rare-filter"
          onChange={ this.onInputChange }
          name="rareSearch"
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>

        </select>
        {
          filtro.map((saveCard, index) => (
            <li key={ index }>
              <Card
                cardName={ saveCard.cardName }
                cardDescription={ saveCard.cardDescription }
                cardAttr1={ saveCard.cardAttr1 }
                cardAttr2={ saveCard.cardAttr2 }
                cardAttr3={ saveCard.cardAttr3 }
                cardImage={ saveCard.cardImage }
                cardRare={ saveCard.cardRare }
                cardTrunfo={ saveCard.cardTrunfo }
              />

              <button
                onClick={ () => this.handleDeleteCard(index) }
                data-testid="delete-button"
              >
                Excluir

              </button>
            </li>
          ))
        }
      </div>
    );
  }
}
export default App;
