/*
import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import Player from './Player';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

function handleRegistrationError(errorMessage: string) {
    alert(errorMessage);
    throw new Error(errorMessage);
  }

const App = () => {
  useEffect(() => {
    registerForPushNotificationsAsync();

    const subscription = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => subscription.remove();
  }, []);

    async function registerForPushNotificationsAsync() {
        if (Platform.OS === 'android') {
          Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }
      
        if (Device.isDevice) {
          const { status: existingStatus } = await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            handleRegistrationError('Permission not granted to get push token for push notification!');
            return;
          }
          const projectId =
            Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
          if (!projectId) {
            handleRegistrationError('Project ID not found');
          }
          try {
            const pushTokenString = (
              await Notifications.getExpoPushTokenAsync({
                projectId,
              })
            ).data;
            console.log(pushTokenString);
            return pushTokenString;
          } catch (e: unknown) {
            handleRegistrationError(`${e}`);
          }
        } else {
          handleRegistrationError('Must use physical device for push notifications');
        }
      }
  
  // Exemplo de dados de música
  const song = {
    detail: {
      title: 'Título da Música',
      author: 'Autor da Música',
      uri: 'https://res.cloudinary.com/jsxclan/video/upload/v1623988277/GitHub/Projects/Musicont/mock/audios/therefore-i-am_sea49g.mp3',
      img: 'https://res.cloudinary.com/jsxclan/image/upload/v1623987985/GitHub/Projects/Musicont/mock/images/therefore-i-am_t9xxfs.jpg',
      durationMillis: 300000,
    },
    playbackStatus: {
      positionMillis: 0,
    },
  };

  return (
    <Player
      song={song}
      navigate={() => {}}
      actions={{ prev: false, play: false, next: false }}
      handlePrev={() => {}}
      handlePlayAndPause={() => {}}
      handleNext={() => {}}
    />
  );
};

export default App;

*/