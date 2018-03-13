import { StackNavigator, TabNavigator } from 'react-navigation';

import App from '../src/screens/App';
import Books from '../src/screens/Books';
import Book from '../src/screens/Book';

import { tabNavigationStyle, stackNavigationStyle } from './navigationLayout';

const navigationRoutes = {
  TodoList: () => ({ title: 'Todo List' }),
  Books: () => ({ title: 'Books' })
};

const Routes = TabNavigator(
  {
    Home: { screen: App, navigationOptions: navigationRoutes.TodoList },
    Settings: { screen: Books, navigationOptions: navigationRoutes.Books }
  },
  tabNavigationStyle
);

const Navigator = StackNavigator(
  {
    Home: { screen: Routes },
    Book: { screen: Book }
  },
  stackNavigationStyle
);

export default Navigator;
