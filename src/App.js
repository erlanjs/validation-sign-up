import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h4>Авторизация</h4>
      </div>
      <div className="forms">
        <input type="text" placeholder="Имя пользовотелья" />
        <input type="email" placeholder="Адрес электронный почты" />
        <input type="text" placeholder="Придумаете пароль" />
        <input type="text" placeholder="Повторите пароль" />
      </div>

      <button className="submit">Войти</button>
    </div>
  );
}

export default App;
