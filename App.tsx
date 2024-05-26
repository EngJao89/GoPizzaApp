import React from 'react';
import {ThemeProvider} from 'styled-components';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import defaultTheme from './src/theme/defaultTheme';
import {SignInAdm} from './src/screens/SignInAdm';

function App() {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <ThemeProvider theme={defaultTheme}>
        <SignInAdm />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
