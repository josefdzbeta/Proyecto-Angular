interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Detail;
    
}

interface Detail{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 0,
    songDuration: 0,
    song: "Till I collapse",
    details: {
        author: "Ed Sheeran",
        year: 2017
    }
}// audioPlayer is an object of type AudioPlayer with a details property of type Detail

// const {} = audioPlayer;
// const {song} = audioPlayer; // song come from audioPlayer.song

// const {song:anotherSong, songDuration:duration, details:{author}  } = audioPlayer; //anotherSong and duration come from audioPlayer.song and audioPlayer.songDuration respectively 
const {song:anotherSong, songDuration:duration, details  } = audioPlayer; //details is already deestructured with author
const {author} = details;

// console.log('Song: ', anotherSong);
// console.log('Duration: ', duration);
// console.log('Author: ', author);
// console.log(audioPlayer.details.author)	// Ed Sheeran'

// const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

// const trunks = dbz[3];
// const [, , trunks ='Not found']: string[] = ['Goku', 'Vegeta', 'Trunks']; //ignore the first two elements of the array and assign the third to trunks
const [, , trunks ='Not found']: string[] = ['Goku', 'Vegeta']; //ignore the first two elements of the array and assign the third to trunks

// console.log('personaje 3:', dbz[2] || trunks)
console.log('personaje 3:', trunks)


export{}