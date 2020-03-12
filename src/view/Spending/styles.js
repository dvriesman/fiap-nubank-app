import {Animated} from 'react-native';
import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background: #8b10ae;
`;

export const Container = styled.View`
  flex: 1;
  background: #8B10AE;
  /* Não necessário o uso */
  /* padding-top: ${getStatusBarHeight()}px; */
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 600px;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;

export const CalendarElementRow = styled.View`
  padding: 10px 0;
  max-height: 80px;
  margin: 0 20px;
  background: #fff;
  flex: 1;
  flexDirection: row;
`;

export const CalendarColumn = styled.View`
padding: 0 10px;
`;

export const ElementRow = styled.View`
  flex: 1;
  flexDirection: row;
`;


export const SimpleColumn = styled.View`
  flex: 1;
`;