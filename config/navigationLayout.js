import * as colors from '../src/constants/colors';

export const tabNavigationStyle = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    indicatorStyle: {
      backgroundColor: colors.gray
    },
    style: {
      backgroundColor: colors.lightBlue
    }
  }
};

export const stackNavigationStyle = {
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.lightBlue
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
      textAlign: 'center'
    }
  }
};
