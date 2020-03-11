import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, TabsContainer, TabItem, TabText} from './styles';

export default function Tabs({nav}) {
  return (
    <Container>
      <TabsContainer>
        <TabItem
          onPress={() => {
            nav.navigate('Spending');
          }}>
          <Icon name="attach-money" size={24} color="#FFF" />
          <TabText>Gastos por categoria</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
