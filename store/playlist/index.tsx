import * as MediaLibrary from 'expo-media-library';

export const getAllSongs = async () => {
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
}

(async () => {
    const songs = await getAllSongs();
    console.log('@@@@@@@@@@@@@@@@@@@@@');
    console.log(songs);
    console.log('@@@@@@@@@@@@@@@@@@@@@');
})()


/*
  const [playlists] = useState([
    { "albumId": "540528482", "filename": "Estou Procurando (Live)_Y1NHlzRrxsI.mp3", "uri": "file:///storage/emulated/0/Download/Estou Procurando (Live)_Y1NHlzRrxsI.mp3" },
    { "albumId": "540528482", "filename": "Rafael Oliveira _ O Exilado [Harpa Cristã 36]_ySN1gknzYJE.mp3", "uri": "file:///storage/emulated/0/Download/Rafael Oliveira _ O Exilado [Harpa Cristã 36]_ySN1gknzYJE.mp3" },
    { "albumId": "540528482", "filename": "O Crente_X6MFkfuBatw.mp3", "uri": "file:///storage/emulated/0/Download/O Crente_X6MFkfuBatw.mp3" },
    // Adicione mais músicas conforme necessário
  ]);

*/