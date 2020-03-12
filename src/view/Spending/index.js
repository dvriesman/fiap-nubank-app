import React from 'react';

import {Text, ScrollView} from 'react-native';
import {ListItem} from 'react-native-elements';
import axios from 'axios';
import {
  handleAndroidBackButton,
  removeAndroidBackButtonHandler,
} from '../../components/handleAndroidBackButton';
import {
  Container,
  Content,
  CardHeader,
  Card,
  CardContent,
  SafeAreaView,
  Description,
  ElementRow,
  SimpleColumn,
} from './styles';

const BACKENDAPI = 'http://192.168.0.19:8080/listSpending';

class Spending extends React.Component {
  state = {list: []};

  navigateBack(self) {
    self.props.navigation.navigate('Main');
  }

  componentDidMount() {
    handleAndroidBackButton(this.navigateBack, this);

    const data = {
      username: 'denny',
      initialDate: '2010-01-01 00:00:00',
      finalDate: '2011-02-01 00:00:00',
    };

    axios.post(`${BACKENDAPI}`, data).then(result => {
      this.setState({list: result.data.amountByCategoryList});
      console.log(JSON.stringify(result.data));
    });
  }
  componentWillUnmount() {
    removeAndroidBackButtonHandler();
  }

  render() {
    return (
      <SafeAreaView>
        <Container>
          <Content>
            <CardHeader>
              <Description>Despesas por categoria</Description>
            </CardHeader>
            <CardContent>
              <Card>
                <ScrollView>
                  {this.state.list.map((l, i) => (
                    <ListItem
                      key={i}
                      title={
                        <ElementRow>
                          <SimpleColumn>
                            <Text>{l.category}</Text>
                          </SimpleColumn>
                          <SimpleColumn>
                            <Text style={{textAlign: 'right'}}>{l.value}</Text>
                          </SimpleColumn>
                        </ElementRow>
                      }
                      bottomDivider
                    />
                  ))}
                </ScrollView>
              </Card>
            </CardContent>
          </Content>
        </Container>
      </SafeAreaView>
    );
  }
}

export default Spending;
