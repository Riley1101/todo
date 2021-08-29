
import './App.css';
import dateFormat from 'dateformat';
function App() {


  return (
    <div className="App">
      <div className="todo">

        <div className="todo__date">
          <h1>21/12/2021</h1>
          <p>Aug 4</p>
        </div>

        <form className="todo__form" >
          <input type="text" required className='todo__form__input' placeholder="Add a new todo" />
          <button type='submit' className='todo__form__submit'>
            <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M21.2421 0.875C9.72094 0.875 0.380722 10.1094 0.380722 21.5C0.380722 32.8906 9.72094 42.125 21.2421 42.125C32.7633 42.125 42.1035 32.8906 42.1035 21.5C42.1035 10.1094 32.7633 0.875 21.2421 0.875ZM23.1386 29C23.1386 29.4973 22.9388 29.9742 22.5831 30.3258C22.2275 30.6775 21.7451 30.875 21.2421 30.875C20.7391 30.875 20.2568 30.6775 19.9011 30.3258C19.5454 29.9742 19.3456 29.4973 19.3456 29V23.375H13.6562C13.1532 23.375 12.6708 23.1775 12.3151 22.8258C11.9595 22.4742 11.7597 21.9973 11.7597 21.5C11.7597 21.0027 11.9595 20.5258 12.3151 20.1742C12.6708 19.8225 13.1532 19.625 13.6562 19.625H19.3456V14C19.3456 13.5027 19.5454 13.0258 19.9011 12.6742C20.2568 12.3225 20.7391 12.125 21.2421 12.125C21.7451 12.125 22.2275 12.3225 22.5831 12.6742C22.9388 13.0258 23.1386 13.5027 23.1386 14V19.625H28.8281C29.3311 19.625 29.8134 19.8225 30.1691 20.1742C30.5248 20.5258 30.7246 21.0027 30.7246 21.5C30.7246 21.9973 30.5248 22.4742 30.1691 22.8258C29.8134 23.1775 29.3311 23.375 28.8281 23.375H23.1386V29Z" fill="#247BA0" />
            </svg>
          </button>
        </form>

        <div className='todo__list'>

          <div className='todo__list__item__container'>
            <div className='todo__list__item'>
              <span className={`todo__list__item__box todo__list__item__box--active`}></span>
              <input type="checkbox" />
              <label>Name</label>
            </div>
            <span className='created_date'>Yesterday</span>
          </div>


        </div>

        <div className='todo__remove'>
          <p className="todo__remove__btn" >REMOVE DONE</p>
        </div>

      </div>
    </div>
  );
}

export default App;
