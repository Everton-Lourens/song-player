import React, { useEffect } from 'react';
import { View } from 'react-native';
import Video from 'react-native-video';
import MusicControl from 'react-native-music-control';

const AudioPlayer = ({ audioUri }: any) => {
  useEffect(() => {
    // Configurar controles de música
    MusicControl.enableBackgroundMode(true);

    MusicControl.on('play', () => {
      MusicControl.updatePlayback({
        state: MusicControl.STATE_PLAYING,
      });
    });

    MusicControl.on('pause', () => {
      MusicControl.updatePlayback({
        state: MusicControl.STATE_PAUSED,
      });
    });

    MusicControl.on('stop', () => {
      MusicControl.updatePlayback({
        state: MusicControl.STATE_STOPPED,
      });
    });

    // Configure informações do áudio
    MusicControl.setNowPlaying({
      title: 'Título da Música',
      artist: 'Artista',
      album: 'Álbum',
      genre: 'Gênero',
      duration: 240, // duração em segundos
      color: 0xFFFFFF,
      date: '2024-07-23T00:00:00Z',
      rating: 84,
      notificationIcon: 'my_custom_icon',
    });

    return () => {
      MusicControl.stopControl();
    };
  }, []);

  return (
    <View>
      <Video
        source={{ uri: audioUri }}
        audioOnly={true}
        playInBackground={true}
        playWhenInactive={true}
        controls={true}
      />
    </View>
  );
};

export default AudioPlayer;
