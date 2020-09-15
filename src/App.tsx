import React from 'react';
import Button ,{ButtonType,ButtonSize} from './components/Button/button'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button> hello</Button>
        <Button onClick={e=>{console.log('jj')}} btnType={ButtonType.Primary} size={ButtonSize.Large}>hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>hello</Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Small} disabled>hello</Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Small}>hello</Button>
        <Button btnType={ButtonType.Link} href="https://baidu.com" disabled >hello</Button>
        <Button btnType={ButtonType.Link} href="https://baidu.com"  >hello</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <code>
          const a = "dd"
        </code>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
