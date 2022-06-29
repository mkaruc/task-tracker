import languages from './helper/data'
import Card from './components/card/Card';
import reactLogo from './assets/react.svg';
import './App.module.css';
const App = () => {
  return (
    <div>
      <header>
        <div className='reactLogo'>
          <img src={reactLogo} alt="" />
        </div>
      </header>
      <main className='mainPanel'>
      <h1>Languages</h1>
      <article>
        {languages.map((item, index) => {
          return (
            <Card data={item} key={index}/>
          )
        })}</article>
      </main>
    </div>
  )
}

export default App