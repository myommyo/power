import styled from 'styled-components';
import GlobalStyle from 'styled-components';
import './App.css';
import InputText from './components/Inputs';
import Button from './components/Buttons';

function App() {
  return (
    <div>
    <GlobalStyle />
    <InputText />
    <Button>asdf</Button>
    <Button primary>primary</Button>
        </div>
      );
}

export default App;
