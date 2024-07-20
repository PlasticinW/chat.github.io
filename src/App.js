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
            <ul className="main-chat__messages">
              <li className="main-chat__messages-element">Lorem, ipsum.</li>
              <li className="main-chat__messages-element">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, voluptatem!</li>
              <li className="main-chat__messages-element">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime deleniti illum a architecto. Cupiditate temporibus laudantium officia accusantium magni debitis ut, dignissimos ratione minima maiores.</li>
              <li className="main-chat__messages-element">Lorem ipsum dolor sit.</li>
              <li className="main-chat__messages-element">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, aperiam!</li>
              <li className="main-chat__messages-element">Lorem, ipsum dolor.</li>
              <li className="main-chat__messages-element">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolor tenetur libero reiciendis, debitis doloremque?</li>
              <li className="main-chat__messages-element">Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              <li className="main-chat__messages-element">Lorem ipsum dolor sit amet.</li>
              <li className="main-chat__messages-element">Lorem ipsum dolor sit amet consectetur.</li>
              <li className="main-chat__messages-element">Lorem ipsum dolor sit.</li>
              <li className="main-chat__messages-element">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium autem expedita soluta.</li>
              <li className="main-chat__messages-element">Lorem.</li>
              <li className="main-chat__messages-element">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium culpa quisquam fugit ad.</li>
              <li className="main-chat__messages-element">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugiat enim quibusdam.</li>
              <li className="main-chat__messages-element">Lorem, ipsum.</li>
              <li className="main-chat__messages-element">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit harum est maiores earum iure ipsum.</li>
              <li className="main-chat__messages-element">Lorem ipsum dolor sit.</li>
              <li className="main-chat__messages-element">Lorem.</li>
              <li className="main-chat__messages-element">Lorem.</li>
            </ul>
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
