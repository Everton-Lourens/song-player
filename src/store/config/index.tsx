import * as MediaLibrary from 'expo-media-library';
import { allSongs } from './storage';
var uriImgValue: string = '';

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

export async function getAllSongs2() {

  return [
    {
      id: 1,
      title: 'Heartless',
      author: 'The Weeknd',
      img: 'https://res.cloudinary.com/jsxclan/image/upload/v1623984884/GitHub/Projects/Musicont/mock/images/heartless_du9yxe.jpg',
      uri: 'https://res.cloudinary.com/jsxclan/video/upload/v1623987046/GitHub/Projects/Musicont/mock/audios/heartless_u7exot.mp3',
      durationMillis: 249740,
    },
    {
      id: 2,
      title: 'Peaches',
      author: 'Justin Bieber',
      img: 'https://res.cloudinary.com/jsxclan/image/upload/v1623987767/GitHub/Projects/Musicont/mock/images/peaches_sm4qvm.jpg',
      uri: 'https://res.cloudinary.com/jsxclan/video/upload/v1623986838/GitHub/Projects/Musicont/mock/audios/peaches_dzluia.mp3',
      durationMillis: 197800,
    },
    {
      id: 3,
      title: 'Therefore I Am',
      author: 'Billie Eilish',
      img: 'https://res.cloudinary.com/jsxclan/image/upload/v1623987985/GitHub/Projects/Musicont/mock/images/therefore-i-am_t9xxfs.jpg',
      uri: 'https://res.cloudinary.com/jsxclan/video/upload/v1623988277/GitHub/Projects/Musicont/mock/audios/therefore-i-am_sea49g.mp3',
      durationMillis: 171040,
    },
    {
      id: 4,
      title: 'This Girl',
      author: "Kungs vs Cookin' on 3 Burners",
      img: 'https://res.cloudinary.com/jsxclan/image/upload/v1623984884/GitHub/Projects/Musicont/mock/images/kungs-vs-cookin_yhuqv3.jpg',
      uri: 'https://res.cloudinary.com/jsxclan/video/upload/v1623986820/GitHub/Projects/Musicont/mock/audios/kungs-vs-cookin_gbvmhs.mp3',
      durationMillis: 197500,
    },
    {
      id: 5,
      title: 'Dance Monkey',
      author: 'Tones and I',
      img: 'https://res.cloudinary.com/jsxclan/image/upload/v1623984884/GitHub/Projects/Musicont/mock/images/dance-monkey_dht1uv.jpg',
      uri: 'https://res.cloudinary.com/jsxclan/video/upload/v1623986803/GitHub/Projects/Musicont/mock/audios/dance-monkey_disxa8.mp3',
      durationMillis: 209060,
    },
    {
      id: 6,
      title: 'HOLIDAY',
      author: 'Lil Nas X',
      img: 'https://res.cloudinary.com/jsxclan/image/upload/v1623984884/GitHub/Projects/Musicont/mock/images/holiday_vzyzke.jpg',
      uri: 'https://res.cloudinary.com/jsxclan/video/upload/v1623986852/GitHub/Projects/Musicont/mock/audios/holiday_tbcj06.mp3',
      durationMillis: 155080,
    },
    {
      id: 7,
      title: 'Cogulândia',
      author: 'Matuê',
      img: 'https://res.cloudinary.com/jsxclan/image/upload/v1623895066/GitHub/Projects/Musicont/mock/images/cogulandia_h09ike.jpg',
      uri: 'https://res.cloudinary.com/jsxclan/video/upload/v1623895062/GitHub/Projects/Musicont/mock/audios/cogulandia_kyq4tb.mp3',
      durationMillis: 118674,
    },
    {
      id: 8,
      title: 'Bank Account',
      author: '21 Savage',
      img: 'https://res.cloudinary.com/jsxclan/image/upload/v1623895067/GitHub/Projects/Musicont/mock/images/bank_account_s7vfq5.jpg',
      uri: 'https://res.cloudinary.com/jsxclan/video/upload/v1623895057/GitHub/Projects/Musicont/mock/audios/bank_account_ivbmrg.mp3',
      durationMillis: 220395,
    },
    {
      id: 9,
      title: 'Butterfly Effect',
      author: 'Travis Scott',
      img: 'https://res.cloudinary.com/jsxclan/image/upload/v1623895065/GitHub/Projects/Musicont/mock/images/butterfly_effect_oimlry.png',
      uri: 'https://res.cloudinary.com/jsxclan/video/upload/v1623895068/GitHub/Projects/Musicont/mock/audios/butterfly_effect_yti55d.mp3',
      durationMillis: 212793,
    },
    {
      id: 10,
      title: 'Check',
      author: 'Young Thug',
      img: 'https://res.cloudinary.com/jsxclan/image/upload/v1623895063/GitHub/Projects/Musicont/mock/images/check_vwxgvl.jpg',
      uri: 'https://res.cloudinary.com/jsxclan/video/upload/v1623895098/GitHub/Projects/Musicont/mock/audios/check_mmwzqi.mp3',
      durationMillis: 229773,
    },
    {
      id: 11,
      title: 'Máquina do Tempo',
      author: 'Matuê',
      img: 'https://res.cloudinary.com/jsxclan/image/upload/v1623895066/GitHub/Projects/Musicont/mock/images/maquina_do_tempo_gc3j68.jpg',
      uri: 'https://res.cloudinary.com/jsxclan/video/upload/v1623895071/GitHub/Projects/Musicont/mock/audios/maquina_do_tempo_k2bqrz.mp3',
      durationMillis: 230504,
    },
    {
      id: 12,
      title: 'Pecado Capital',
      author: 'Xamã',
      img: 'https://res.cloudinary.com/jsxclan/image/upload/v1623895064/GitHub/Projects/Musicont/mock/images/luxuria_kr7c1r.png',
      uri: 'https://res.cloudinary.com/jsxclan/video/upload/v1623895070/GitHub/Projects/Musicont/mock/audios/luxuria_nnp3ou.mp3',
      durationMillis: 185417,
    },
  ]

  return [{
    id: 1,
    title: 'VVVVVVVVVVVVVVV',
    author: 'Justin Bieber',
    img: 'https://res.cloudinary.com/jsxclan/image/upload/v1623987767/GitHub/Projects/Musicont/mock/images/peaches_sm4qvm.jpg',
    uri: 'https://res.cloudinary.com/jsxclan/video/upload/v1623986838/GitHub/Projects/Musicont/mock/audios/peaches_dzluia.mp3',
    durationMillis: 197800,
  }]
}


export async function getAllSongs() {
  const allMediaMP3 = await getMediaLibrary();
  const songs = allMediaMP3.map((song, index) => {
    if (song?.duration && song.duration * 1000 < 5000) {
      return null;
    }
    return {
      id: index + 1,
      title: song?.filename.replace(/\.[^/.]+$/, '') || 'Sem Título',
      author: '', // 'Desconhecido(a)',
      img: getRandomImg(),
      uri: song?.uri,
      durationMillis: (song?.duration * 1000) || 0,
    }
  }).filter(Boolean);
  return songs;
}

export function getRandomImg() {
  return [
    'https://media.istockphoto.com/id/488580912/photo/cello-silhouette.jpg?s=612x612&w=0&k=20&c=xmmVc-mF_IROL5HlaIKxxV2-qZCWukC3liTa3jUd7v8=',
    'https://st3.depositphotos.com/29384342/34063/i/450/depositphotos_340632074-stock-photo-abstract-arrangement-violin-graphic-musical.jpg',
    'https://img.freepik.com/fotos-gratis/fundo-musical-volumetrico-com-uma-clave-de-sol-e-ia-geradora-de-notas_169016-29576.jpg',
    'https://static.vecteezy.com/system/resources/previews/029/573/477/non_2x/headphones-for-listening-to-music-and-enjoying-the-bass-and-beats-bright-arc-headphones-free-photo.jpg',
    'https://i.pinimg.com/736x/6c/02/ef/6c02efaed4ac7071868600b778ac4157.jpg',
    'https://img.freepik.com/premium-photo/headphones-music-background-generative-ai_1160-3253.jpg',
    'https://static.vecteezy.com/ti/fotos-gratis/p1/27446957-melodia-silhueta-conceito-gratis-foto.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Mpijl1GjibriNkXjUd95Fyr9icED3XjwGywJJVw0zeHum_4b3qyY3EqU8NzufL1NSXQ',
    'https://avatarfiles.alphacoders.com/645/thumb-1920-64575.jpg',
    'https://img.freepik.com/fotos-premium/abstrato-colorido-sobre-notas-musicais-e-temas-musicais_608068-24348.jpg',
    'https://img.freepik.com/fotos-premium/papel-de-parede-vibrante-abstrato-do-fundo-das-notas-musicais_800563-1829.jpg',
    'https://png.pngtree.com/thumb_back/fw800/background/20240302/pngtree-colorful-music-notes-background-abstract-image_15634799.jpg',
    'https://img.freepik.com/fotos-gratis/natacao-morta-de-guitarra-eletrica_23-2151376244.jpg',
    'https://img.freepik.com/fotos-gratis/natacao-morta-de-guitarra-eletrica_23-2151376245.jpg',
    'https://img.freepik.com/fotos-gratis/natacao-morta-de-guitarra-eletrica_23-2151376246.jpg',
    'https://img.freepik.com/fotos-gratis/natacao-morta-de-guitarra-eletrica_23-2151376247.jpg',
    'https://img.freepik.com/fotos-gratis/natacao-morta-de-guitarra-eletrica_23-2151376248.jpg',
    'https://img.freepik.com/fotos-gratis/natacao-morta-de-guitarra-eletrica_23-2151376249.jpg',
    'https://img.freepik.com/fotos-gratis/natacao-morta-de-guitarra-eletrica_23-2151376250.jpg',
    'https://img.freepik.com/fotos-gratis/natacao-morta-de-guitarra-eletrica_23-2151376251.jpg',
    'https://img.freepik.com/fotos-gratis/natacao-morta-de-guitarra-eletrica_23-2151376252.jpg',
    'https://img.freepik.com/fotos-gratis/natacao-morta-de-guitarra-eletrica_23-2151376253.jpg',
    'https://img.freepik.com/fotos-gratis/natacao-morta-de-guitarra-eletrica_23-2151376254.jpg',
    'https://img.freepik.com/fotos-gratis/natacao-morta-de-guitarra-eletrica_23-2151376255.jpg',
    'https://img.freepik.com/fotos-gratis/guitarra-eletrica-com-luz-de-neon-natureza-morta_23-2151376202.jpg?t=st=1721447295~exp=1721447895~hmac=ec8fd57dc6442e1cf09347b9ec0cf0f0294ab126fac0f08ed9e7fc30a23ae7fe',
    'https://img.freepik.com/fotos-premium/uma-arte-digital-de-um-reprodutor-de-musica-com-notas-coloridas-e-um-fundo-preto_900370-14342.jpg'
  ][Math.floor(Math.random() * 23)]
}


export function setUriPicture(uri: string) {
  uriImgValue = uri;
}
export function getUriPicture() {
  return uriImgValue || '';
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
        img: getRandomImg(),
        uri: song?.uri,
        durationMillis: (song?.duration * 1000) || 0,
      }
      count++;
    }
  });

  return songs;


  function getRandomImg() {
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