import React, { useState } from 'react';
import { Container, Buttons, ButtonContainer, List } from './styles';

import {    
  View,
  Text,
  StatusBar,
  Button,  
  ScrollView
} from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [size, setSize] = useState(15);
  const [counters, setCounters] = useState([]);

  const handleRestartCounter = () => {
    setCounter(0);
    setSize(15);
    setCounters([]);
  }

  const handleSaveCounter = () => {
    setCounters([...counters, counter]);        
  }
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <Text style={{ fontSize: size, marginBottom: 10 }}>Contador: {counter}</Text>    

        <Buttons>
          <ButtonContainer>
            <Button title="-" onPress={() => setCounter(counter - 1)}/> 
          </ButtonContainer>
          <ButtonContainer>
            <Button title="zerar" onPress={handleRestartCounter}/> 
          </ButtonContainer>
          <ButtonContainer>
            <Button title="+" onPress={() => setCounter(counter + 1)}/> 
          </ButtonContainer>                             
        </Buttons>

        <View>
          <ButtonContainer>
            <Button title="Aumentar fonte" onPress={() => setSize(size + 5)}/> 
          </ButtonContainer> 
          <ButtonContainer>
            <Button title="Salvar" onPress={handleSaveCounter}/> 
          </ButtonContainer> 
        </View>

        <ScrollView>
          <List>
            <Text>Lista com os dados salvos</Text>
            { counters.map(item => (
              <Text key={item}>{item}</Text>
            )) }
          </List>
        </ScrollView>
      </Container>
      
    </>
  );
};

export default App;
