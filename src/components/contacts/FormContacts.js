import React, { Component } from 'react';
  //ставим npm i shortid
  import shortid from 'shortid';

class FormContacts extends Component {
  state = {
    name: '',
    number: ''
  };
//генерим там лежит уникалый индефикатор
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();
   
    //общий метод для инпутов патерн для форм по внешнему виду контролируемый елемент
    hendelChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    };
    //сабмит формы
    hendelSubmit = e => { 
        e.preventDefault();
      // console.log(this.state)
      //перекидываем данные в апп
      this.props.onSubmit( this.state.name, this.state.number)
      
        this.reset();
    };
    //сброс формы очистить стейт
  reset = () => {
    this.setState({
      name: '',
      number: ''
    })
  };


    render() {
      return (
        <form onSubmit={this.hendelSubmit}>
          <label htmlFor={this.nameInputId}>
            Name <input
              type="text"
              value={this.state.name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              id={this.nameInputId}
              onChange={this.hendelChange}
            />
          </label>
          <label htmlFor={this.numberInputId}>
            Number <input
              type="tel"
              value={this.state.number}
              name="number"
             //  pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              id={this.numberInputId}
              onChange={this.hendelChange}
              required
            />
          </label>
            
                
          <button type='submit'>Add contacts</button>
      
        </form>
            
           
      );
    }
}
export default FormContacts;