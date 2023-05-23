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
    cards: [],
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
      cardTrunfo, hasTrunfo, cards } = this.state;

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
      cards: [
        ...cards,
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

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled } = this.state;
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
          hasTrunfo={ hasTrunfo }
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
      </div>
    );
  }
}
export default App;
