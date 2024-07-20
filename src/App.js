import './styles/App.css';
import './styles/reset.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="name">Шапка</h1>
      </header>
      
      <section className="main">
        <div className="left">
          <div className="main-users__container">
            <ul className="main-users__extra">
              <li className="main-users__extra-element">First user</li>
              <li className="main-users__extra-element">Second user</li>
              <li className="main-users__extra-element">Third user</li>
              <li className="main-users__extra-element">Fourth user</li>
              <li className="main-users__extra-element">Fifth user</li>
              <li className="main-users__extra-element">Sixth user</li>
              <li className="main-users__extra-element">Seventh user</li>
              <li className="main-users__extra-element">Eighth user</li>
              <li className="main-users__extra-element">Ninth user</li>
              <li className="main-users__extra-element">Tenth user</li>
              <li className="main-users__extra-element">Eleventh user</li>
              <li className="main-users__extra-element">Twelfth user</li>
              <li className="main-users__extra-element">Thirteenth user</li>
              <li className="main-users__extra-element">Fourteenth user</li>
              <li className="main-users__extra-element">Fifteenth user</li>
              <li className="main-users__extra-element">Sixteenth user</li>
              <li className="main-users__extra-element">Seventeenth user</li>
              <li className="main-users__extra-element">Eighteenth user</li>
              <li className="main-users__extra-element">Nineteenth user</li>
              <li className="main-users__extra-element">Twentieth user</li>
            </ul>
          </div>
        </div>

        <div className="right">
          <div className="main-chat__container">
            <p className="main-chat__messages-element">Lorem, ipsum.</p>
            <p className="main-chat__messages-element">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, voluptatem!</p>
            <p className="main-chat__messages-element">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime deleniti illum a architecto. Cupiditate temporibus laudantium officia accusantium magni debitis ut, dignissimos ratione minima maiores.</p>
            <p className="main-chat__messages-element">Lorem ipsum dolor sit.</p>
            <p className="main-chat__messages-element">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, aperiam!</p>
            <p className="main-chat__messages-element">Lorem, ipsum dolor.</p>
            <p className="main-chat__messages-element">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolor tenetur libero reiciendis, debitis doloremque?</p>
            <p className="main-chat__messages-element">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p className="main-chat__messages-element">Lorem ipsum dolor sit amet.</p>
            <p className="main-chat__messages-element">Lorem ipsum dolor sit amet consectetur.</p>
            <p className="main-chat__messages-element">Lorem ipsum dolor sit.</p>
            <p className="main-chat__messages-element">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium autem expedita soluta.</p>
            <p className="main-chat__messages-element">Lorem.</p>
            <p className="main-chat__messages-element">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium culpa quisquam fugit ad.</p>
            <p className="main-chat__messages-element">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugiat enim quibusdam.</p>
            <p className="main-chat__messages-element">Lorem, ipsum.</p>
            <p className="main-chat__messages-element">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit harum est maiores earum iure ipsum.</p>
            <p className="main-chat__messages-element">Lorem ipsum dolor sit.</p>
            <p className="main-chat__messages-element">Lorem.</p>
            <p className="main-chat__messages-element">Lorem.</p>
          </div>
        </div>
      </section>

      <footer className="input-message">
        <div className="input-message__container">
          <textarea name="message-sender__textarea" id="message-sender__textarea" className="message-sender__textarea" placeholder="Message"></textarea>
          <button className="message-sender__button">Send message</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
