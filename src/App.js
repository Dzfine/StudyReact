import React from 'react';
import './App.css';
import intl from 'react-intl-universal';

const locales = {
  "en-US":require('./resources/en-US.json'),
  "zh-CN":require('./resources/zh-CN.json'),
};

class App extends React.Component {

  state = {initDone: false}

  componentDidMount() {
    this.loadLocales();
  }

  loadLocales() {
    // react-intl-universal 是单例模式, 只应该实例化一次
    intl.init({
      currentLocale: 'zh-CN',
      locales,
    })
        .then(() => {
          this.setState({initDone: true});
        });
  }

  render() {
    return (
        this.state.initDone &&
        <div>
          {intl.get('SIMPLE')}
        </div>
    );
  }

}
export default App;


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

export default App;*/
