import { StatusBar } from 'react-native';
import { Navigation } from './navigation'
import { registerRootComponent } from 'expo';

export default function App() {
  return (
    <>
      <StatusBar translucent barStyle='light-content' backgroundColor='transparent' />
      <Navigation />
    </>
  );
}

registerRootComponent(App);
