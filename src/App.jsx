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
  flex-direction: column;
  align-items: center;
  padding: 50px 15px 30px 15px;

  @media screen and (min-width: 730px) {
    flex-direction: row;
    padding: 5% 10%;
  }
`

export default App;
