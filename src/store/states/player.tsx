function getSongs() {
	return [
		{
			id: 1,
			title: 'INIT',
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
		/*
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
		*/
	]
}
//const musicData = async () => {
const musicData = {
	currentSong: {
		playback: {},
		soundObj: {},
		detail: {
			id: 1,
			title: 'INIT',
			author: 'The Weeknd',
			img: 'https://res.cloudinary.com/jsxclan/image/upload/v1623984884/GitHub/Projects/Musicont/mock/images/heartless_du9yxe.jpg',
			uri: 'https://res.cloudinary.com/jsxclan/video/upload/v1623987046/GitHub/Projects/Musicont/mock/audios/heartless_u7exot.mp3',
			durationMillis: 249740,
		},
		playbackStatus: {},
	},
	songs:  getSongs()
};

export default musicData;

/////////////////////////////////////////////////
/*
async function getSongs() {
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
}
//const musicData = async () => {
const musicData = {
	currentSong: {
		playback: {},
		soundObj: {},
		detail: {
			id: 1,
			title: 'Heartless',
			author: 'The Weeknd',
			img: 'https://res.cloudinary.com/jsxclan/image/upload/v1623984884/GitHub/Projects/Musicont/mock/images/heartless_du9yxe.jpg',
			uri: 'https://res.cloudinary.com/jsxclan/video/upload/v1623987046/GitHub/Projects/Musicont/mock/audios/heartless_u7exot.mp3',
			durationMillis: 249740,
		},
		playbackStatus: {},
	},
	songs: async () => await getSongs()
};

export default musicData;
*/
/////////////////////////////////////////////////
/*
export default {
	currentSong: {
		playback: {},
		soundObj: {},
		detail: {
			id: 1,
			title: 'Heartless',
			author: 'The Weeknd',
			img: 'https://res.cloudinary.com/jsxclan/image/upload/v1623984884/GitHub/Projects/Musicont/mock/images/heartless_du9yxe.jpg',
			uri: 'https://res.cloudinary.com/jsxclan/video/upload/v1623987046/GitHub/Projects/Musicont/mock/audios/heartless_u7exot.mp3',
			durationMillis: 249740,
		},
		playbackStatus: {},
	},
	songs: [
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
};
*/