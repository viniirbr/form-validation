import './App.css';
import Header from './components/Header/Header';
import UserInterface from './components/UserInterface/UserInterface';
import styled from 'styled-components';

function App() {
  return (
    <AppWrapper className="App">
      <Header />
      <UserInterface />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
`

export default App;
