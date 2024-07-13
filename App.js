import './App.css';
import axios from 'axios';
// import chatgptLogo from './assets/chatgptLogo.svg';
import logo from './assets/logo.png'
import add from './assets/add-30.png'
import message from './assets/message.svg'
import home from './assets/home.svg'
import bookmark from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import send from './assets/send.svg'
// import usericon from './assets/user-icon.png'
import zoro from './assets/zoro.png'


function App() {
  
  return (
    <div className="App">
      <div className='sidebar'>
        <div className='upperSide'>
          <div className='upperSideTop'>
            <img src={logo} alt="logo" className='logo' /><span className='brand'>PkAi</span>
          </div>

          <button className='midbtn'><img src={add} alt="newchat" className='addbtn' />new chat</button>

          <div className='upperSideButton'>
            <button className='query'><img src={message} alt="query" className='addbtn' />what is life?</button>
            <button className='query'><img src={message} alt="query" className='addbtn' />who is the king</button>

          </div>
        </div>

        <div className='lowerSide'>
          <div className='listitems'> <img src={home} alt="Home" className='listitemsimg' /><b>Home</b></div>
          <div className='listitems'> <img src={bookmark} alt="saved" className='listitemsimg' />Saved</div>
          <div className='listitems'> <img src={rocket} alt="rocket" className='listitemsimg' />Upgrad</div>

        </div>
      </div>
      <div className='main'>
          <div className='chats'>
              <div className='chat'>
              <img src={zoro} alt="" className='userimg' /> <p className='text'>loremloremloremloremloremloremloremloremloremloremloremlorem
              loremloremloremloremloremloremloremloremloremloremloremloremlorem
              </p>
              </div>
              <div className='chat bot'>
              <img src={logo} alt="" className='userimg' /> <p className='text'>loremloremloremloremloremloremloremloremloremloremloremloremloremlorem
              loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
              loremloremloremloremloremloremloremloremloremloremloremloremlorem
              loremloremloremloremloremloremloremloremloremloremloremloremlorem
              loremloremloremloremloremloremloremloremloremloremloremloremlorem
              loremloremloremloremloremloremloremloremloremloremloremloremlorem
              loremloremloremloremloremloremloremloremloremloremloremloremlorem
              </p>
              </div>
          </div>
          <div className='chatFooter'>
             <div className='inp'>
              <input type="text" className='send' placeholder='send a message'  /><button className='send1' ><img src={send} alt="send" className='listitemsimg' /></button>
             </div>
             <p className='para'>Pkai may produce incorrect answers, so be aware don't trust </p>
          </div>
      </div>
    </div>
  );
}

export default App;
