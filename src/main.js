console.log('funcionando');

class Song{
    constructor(cover, nombre, autor, artista, duracion, album, anio, genero, urlSong) {
        this.cover = cover;
        this.nombre = nombre;
        this.autor = autor;
        this.artista = artista;
        this.duracion = duracion;
        this.album = album;
        this.anio = anio;
        this.genero = genero;
        this.urlSong = urlSong;
    }
}

class PlayList {
    constructor(playListName, listaCanciones, ordenEscucha){
        this.playListName = playListName;
        this.listaCanciones = listaCanciones;
        this.ordenEscucha = ordenEscucha;
    }
    playPlayList() {
        this.listaCanciones.forEach(song => {
            console.log(`Playing: ${this.listaCanciones[i].nombre}`);
        });
    }

    getPlayListName(){
        return this.playListName;
    }


}

class Reproductor {
    catalogoDeCanciones;
    currentSong;
    constructor(){
        this.catalogoDeCanciones = [
            new Song("cover1","nombre1","autor1","artista1","duracion1","album1","anio1","genero1","url1"),
            new Song("cover2","nombre2","autor2","artista2","duracion2","album2","anio2","genero2","url2"),
            new Song("cover3","nombre3","autor3","artista3","duracion3","album3","anio3","genero3","url3")
        ];

    }
    mostrarCanciones = function() {
        let canciones = document.getElementById("canciones");
        this.catalogoDeCanciones.forEach(song => {
            canciones.innerHTML += `<p class="cancion">${song.nombre}</p>`;
        });
    }



    buscarCancion = function(songName){

    }

    pause = function(){
        let pauseButton = document.getElementById("pause")

    }

    play = function(){
        let audio = new Audio (this.currentSong.urlSong);
        audio.play();
    }

    playStop = function(){
        let stopButton = document.getElementById("playStop");
        stopButton.addEventListener("click",() => {
            let currentSong = this.getCurrentSong();
            let audio = new Audio(currentSong.urlSong);
            audio.pause();
            audio.currentTime = 0;
        }

        )
    }

    buscarAlbum = function (songAlbum) {
        return this.catalogoDeCanciones.find(song => song.album === songAlbum);
    }

    getCurrentSong (){
        return `${this.currentSong}`;
    }
}

let reproductor = new Reproductor();
