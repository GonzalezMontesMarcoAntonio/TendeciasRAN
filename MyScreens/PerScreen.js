import * as React from 'react';
import { Button, View } from 'react-native';

function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: "#c6cbef" }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
export default NotificationsScreen