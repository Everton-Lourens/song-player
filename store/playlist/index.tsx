import * as MediaLibrary from 'expo-media-library';
import { allSongs } from './storage';

const getMediaLibrary = async () => {
  try {
    let allAssets = [] as MediaLibrary.Asset[];
    let hasNextPage = true;
    let nextPage = null;

    while (hasNextPage) {
      const fetchedAudios = await MediaLibrary.getAssetsAsync({
        mediaType: [MediaLibrary.MediaType.audio],
        first: 100,  // Ajuste conforme necessário (o padrão é 20)
        after: nextPage === null ? undefined : nextPage,  // Para paginação
      });

      allAssets = allAssets.concat(fetchedAudios.assets);
      hasNextPage = fetchedAudios.hasNextPage;
      nextPage = fetchedAudios.endCursor;
    }
    return allAssets;
  } catch (error: any) {
    console.log(`[Playlist Error][getMediaLibrary]: ${error?.message}`);
    return [];
  }
}

export async function getAllSongs() {
  const allMediaMP3 = await getMediaLibrary();
  const songs = allMediaMP3.map(song => {
    return {
      id: song?.id,
      title: song?.filename.replace(/\.[^/.]+$/, '') || 'Unknown',
      author: 'Unknown',
      img: getRamdomImg(),
      uri: song?.uri,
      durationMillis: (song?.duration * 1000) || 0,
    }
  });
  return songs;

  function getRamdomImg() {
    return ['https://media.istockphoto.com/id/488580912/photo/cello-silhouette.jpg?s=612x612&w=0&k=20&c=xmmVc-mF_IROL5HlaIKxxV2-qZCWukC3liTa3jUd7v8=',
      'https://st3.depositphotos.com/29384342/34063/i/450/depositphotos_340632074-stock-photo-abstract-arrangement-violin-graphic-musical.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Mpijl1GjibriNkXjUd95Fyr9icED3XjwGywJJVw0zeHum_4b3qyY3EqU8NzufL1NSXQ',
      'https://img.freepik.com/fotos-gratis/fundo-musical-volumetrico-com-uma-clave-de-sol-e-ia-geradora-de-notas_169016-29576.jpg',
      'https://static.vecteezy.com/system/resources/previews/029/573/477/non_2x/headphones-for-listening-to-music-and-enjoying-the-bass-and-beats-bright-arc-headphones-free-photo.jpg',
      'https://i.pinimg.com/736x/6c/02/ef/6c02efaed4ac7071868600b778ac4157.jpg',
      'https://img.freepik.com/premium-photo/headphones-music-background-generative-ai_1160-3253.jpg',
      'https://static.vecteezy.com/ti/fotos-gratis/p1/27446957-melodia-silhueta-conceito-gratis-foto.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Mpijl1GjibriNkXjUd95Fyr9icED3XjwGywJJVw0zeHum_4b3qyY3EqU8NzufL1NSXQ'][Math.floor(Math.random() * 8)]
  }
}


/*
export async function getAllSongs() {
  const allMediaMP3 = await getMediaLibrary();
  let count = 0;
  let songs2: any = {}
  const songs = allMediaMP3.map(song => {
    if (count <= 3) {
      return {
        id: song?.id,
        title: song?.filename || 'Unknown',
        author: 'Unknown',
        img: getRamdomImg(),
        uri: song?.uri,
        durationMillis: (song?.duration * 1000) || 0,
      }
      count++;
    }
  });

  return songs;


  function getRamdomImg() {
    return ['https://media.istockphoto.com/id/488580912/photo/cello-silhouette.jpg?s=612x612&w=0&k=20&c=xmmVc-mF_IROL5HlaIKxxV2-qZCWukC3liTa3jUd7v8=',
      'https://st3.depositphotos.com/29384342/34063/i/450/depositphotos_340632074-stock-photo-abstract-arrangement-violin-graphic-musical.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Mpijl1GjibriNkXjUd95Fyr9icED3XjwGywJJVw0zeHum_4b3qyY3EqU8NzufL1NSXQ',
      'https://img.freepik.com/fotos-gratis/fundo-musical-volumetrico-com-uma-clave-de-sol-e-ia-geradora-de-notas_169016-29576.jpg',
      'https://static.vecteezy.com/system/resources/previews/029/573/477/non_2x/headphones-for-listening-to-music-and-enjoying-the-bass-and-beats-bright-arc-headphones-free-photo.jpg',
      'https://i.pinimg.com/736x/6c/02/ef/6c02efaed4ac7071868600b778ac4157.jpg',
      'https://img.freepik.com/premium-photo/headphones-music-background-generative-ai_1160-3253.jpg',
      'https://static.vecteezy.com/ti/fotos-gratis/p1/27446957-melodia-silhueta-conceito-gratis-foto.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Mpijl1GjibriNkXjUd95Fyr9icED3XjwGywJJVw0zeHum_4b3qyY3EqU8NzufL1NSXQ'][Math.floor(Math.random() * 8)]
  }
}
*/