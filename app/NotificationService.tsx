/*
import { Notifications } from 'react-native-notifications';
import Sound from 'react-native-sound';

let sound: any = null;

Notifications.registerRemoteNotifications();

Notifications.events().registerNotificationReceivedForeground((notification, completion) => {
  console.log('Notification received in foreground:', notification.payload);
  completion({ alert: true, sound: true, badge: false });
});

Notifications.events().registerNotificationOpened((notification, completion) => {
  console.log('Notification opened by device user', notification.payload);
  completion();
});


export const showMusicNotification = (song) => {
  Notifications.postLocalNotification({
    title: song.detail.title,
    body: song.detail.author || '',
    silent: true,
    category: 'music',
    userInfo: { song },
    sound: 'default',
  });

  sound = new Sound(song.detail.uri, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    sound.play((success) => {
      if (!success) {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });
};

export const stopMusic = () => {
  if (sound) {
    sound.stop(() => {
      console.log('Sound stopped');
    });
  }
};

*/