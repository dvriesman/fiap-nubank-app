import React from 'react';
import Header from '../../components/Header';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
  SafeAreaView,
} from './styles';
import Tabs from '../../components/Tabs';

class Spending extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Container>
          <Description
            onPress={() => {
              this.props.navigation.navigate('Main');
            }}>
            Teste
          </Description>
        </Container>
      </SafeAreaView>
    );
  }
}

export default Spending;
