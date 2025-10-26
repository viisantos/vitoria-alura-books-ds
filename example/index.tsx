import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AbBotao } from '../.';
import { Card } from "../src/componentes";

const App = () => {
  return (
    <div>
      <AbBotao/>
      <Card></Card>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
