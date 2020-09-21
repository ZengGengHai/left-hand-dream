import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMemu';
function App() {
  return (
    <div className="App">
     
      <header className="App-header">
        <Menu defaultIndex={'0'} onSelect={(index) => { console.log(index) }} mode={'vertical'} defaultOpenSubMenus={['2']}>
          <MenuItem >link1</MenuItem>
          <MenuItem >link2</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem >dropdown 1</MenuItem>
            <MenuItem >dropdown 2</MenuItem>
          </SubMenu>
          <MenuItem >link3</MenuItem>
        </Menu>
        <Menu defaultIndex={'0'} onSelect={(index) => { console.log(index) }}>
          <MenuItem >link1</MenuItem>
          <MenuItem >link2</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem >dropdown 1</MenuItem>
            <MenuItem >dropdown 2</MenuItem>
          </SubMenu>
          <MenuItem >link3</MenuItem>
        </Menu>
<br/>
<br/>
<br/>
        <Menu defaultIndex={'0'} onSelect={(index) => { console.log(index) }} >
          <MenuItem >link1</MenuItem>
          <MenuItem >link2</MenuItem>
          <MenuItem >link3</MenuItem>
        </Menu>
        <Button> hello</Button>
        <Button onClick={e => { console.log('jj') }} btnType={ButtonType.Primary} size={ButtonSize.Large}>hello</Button>
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
