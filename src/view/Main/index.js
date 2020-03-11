import React from 'react';
import Header from '../../components/Header';

import {Container, SafeAreaView} from './styles';
import Tabs from '../../components/Tabs';

class Main extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Container>
          <Header />
          <Tabs nav={this.props.navigation} />
        </Container>
      </SafeAreaView>
    );
  }
}

export default Main;
