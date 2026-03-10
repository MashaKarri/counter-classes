import { Component } from "react";

export class Counter extends Component {
  state = {
    counterData: 0,
  };

  addValue = () => {
    // this.state.counterData += 1; // Так змінювати стан НЕ можна
    // Для зміни стану використовують метод this.setState()
    // this.setState({ counterData: 5 }); // В цей метод передаємо новий об'єкт, якщо треба замінити значення на нове, не прив'язуючись до попереднього значення
    // Якщо потрібно отримати нове значення, використовуючи попереднє значення, то в setState передаємо callback
    this.setState((currentState) => {
      return {
        counterData: currentState.counterData + 1,
      };
    }); // зробили стрілку з явним поверненням об'єкта
  };

  decreaseValue = () => {
    // this.setState({ counterData: 0 });
    this.setState((currentState) => ({
      counterData: currentState.counterData - 1,
    })); // зробили стрілку з неявним поверненням об'єкта
  };

  render() {
    return (
      <div>
        <p>Counter Value: {this.state.counterData}</p>
        <button onClick={this.addValue}>Increase value</button>
        <button onClick={this.decreaseValue}>Decrease value</button>
      </div>
    );
  }
}
