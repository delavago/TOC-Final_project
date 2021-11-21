/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { View } from 'react-native';
import GreetingsScreen from './src/screen/GreetingScreen';
import ItemSelectionListScreen from './src/screen/itemsSelectionList';
import OptionsScreen from './src/screen/OptionsScreen';
import ToPharmacistScreen from './src/screen/toPharmasistScreen';


const App = () => {
  let [screen, setScreen] = useState("greetings")
  return (
    <View>

      {screen === 'greetings' ? <GreetingsScreen
        onPressNext={() => setScreen("options")}
      /> : null}

      {screen === 'options' ? <OptionsScreen
        toAssistanceScreen={() => setScreen("toPharmacist")}
        toItemSelection={() => setScreen("itemList")}
      /> : null}

      {screen === 'toPharmacist' ? <ToPharmacistScreen
        backToGreetingsScreen={() => setScreen('greetings')}
        backToOptionScreen={() => setScreen('options')}
      /> : null}

      {screen === 'itemList' ? <ItemSelectionListScreen
        
      /> : null}
    </View>
  );
};

export default App;
