import React from 'react';
import {ThemeProvider} from 'styled-components';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import defaultTheme from './src/theme/defaultTheme';
import { Routes } from './src/routes';

function App() {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <ThemeProvider theme={defaultTheme}>
        <Routes />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
