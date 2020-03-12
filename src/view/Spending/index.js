import React from 'react';

import {View, Text, ScrollView} from 'react-native';
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
  CalendarElementRow,
  SimpleColumn,
  CalendarColumn,
} from './styles';
import DatePicker from 'react-native-datepicker';
import {BACKENDAPI} from '../../env';

class Spending extends React.Component {
  state = {list: []};

  navigateBack(self) {
    self.props.navigation.navigate('Main');
  }

  formatInitialDate(date) {
    return (
      date.getFullYear() +
      '-' +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + date.getDate()).slice(-2) +
      ' 00:00:00'
    );
  }

  formatFinalDate(date) {
    return (
      date.getFullYear() +
      '-' +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + date.getDate()).slice(-2) +
      ' 23:59:59'
    );
  }

  componentDidMount() {
    handleAndroidBackButton(this.navigateBack, this);

    const today = new Date();

    const OneMothAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);

    const iDate = this.formatInitialDate(OneMothAgo);
    const fDate = this.formatFinalDate(today);

    this.setState({initialDate: iDate, finalDate: fDate}, () => {
      this.loadData();
    });
  }
  componentWillUnmount() {
    removeAndroidBackButtonHandler();
  }

  loadData() {
    const data = {
      username: 'denny',
      initialDate: this.state.initialDate,
      finalDate: this.state.finalDate,
    };
    console.log(`${BACKENDAPI}`);

    axios.post(`${BACKENDAPI}`, data).then(result => {
      this.setState({list: result.data.amountByCategoryList});
      console.log(JSON.stringify(result.data));
    });
  }

  render() {
    return (
      <SafeAreaView>
        <Container>
          <Content>
            <CardHeader>
              <Description>Despesas por categoria</Description>
            </CardHeader>
            <CalendarElementRow>
              <CalendarColumn>
                <Text>Data Inicial</Text>
                <DatePicker
                  style={{width: 200}}
                  date={this.state.initialDate} //initial date from state
                  mode="date" //The enum of date, datetime and time
                  placeholder="Data Inicial"
                  format="YYYY-MM-DD 00:00:00"
                  minDate="1900-01-01"
                  maxDate="2099-01-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0,
                    },
                    dateInput: {
                      marginLeft: 36,
                    },
                  }}
                  onDateChange={date => {
                    this.setState({initialDate: date}, () => {
                      if (date !== undefined) {
                        this.loadData();
                      }
                    });
                  }}
                />
              </CalendarColumn>
              <CalendarColumn>
                <Text>Data Final</Text>
                <DatePicker
                  style={{width: 200}}
                  date={this.state.finalDate} //initial date from state
                  mode="date" //The enum of date, datetime and time
                  placeholder="Data Final"
                  format="YYYY-MM-DD 23:59:59"
                  minDate="1900-01-01"
                  maxDate="2099-01-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0,
                    },
                    dateInput: {
                      marginLeft: 36,
                    },
                  }}
                  onDateChange={date => {
                    this.setState({finalDate: date}, () => {
                      if (date !== undefined) {
                        this.loadData();
                      }
                    });
                  }}
                />
              </CalendarColumn>
            </CalendarElementRow>

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
                            <Text style={{textAlign: 'right'}}>$ 
                              {(Math.round(l.value * 100) / 100).toFixed(2)}
                            </Text>
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
