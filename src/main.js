console.log('funcionando');

class Song{
    constructor(id, cover, nombre, autor, artista, duracion, album, anio, genero, url) {
        this.id = id;
        this.cover = cover;
        this.nombre = nombre;
        this.autor = autor;
        this.artista = artista;
        this.duracion = duracion;
        this.album = album;
        this.anio = anio;
        this.genero = genero;
        this.url = url;
    }
}

class PlayList {
    constructor(playListName, listaCanciones){
        this.playListName = playListName;
        this.listaCanciones = listaCanciones;
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

class catalogoDeCanciones {
    constructor(nombre, listaCanciones){
        this.nombre = nombre;
        this.listaCanciones = listaCanciones;
    }

    cargar(contenedor) {
        this.listaCanciones.forEach(song => {

            let elementoNombre = document.createElement("strong");
            elementoNombre.innerText = song.nombre;

            let botonPlay = document.createElement("img");
            botonPlay.setAttribute("src", "./img/play-solid.svg");
            botonPlay.setAttribute("width", "15");
            botonPlay.setAttribute("height", "15");

            let botonFavorite = document.createElement("img");
            botonFavorite.setAttribute("src", "./img/heart-solid.svg");
            botonFavorite.setAttribute("width", "15");
            botonFavorite.setAttribute("height", "15");

            let botonAdd = document.createElement("img");
            botonAdd.setAttribute("src", "./img/plus-solid.svg");
            botonAdd.setAttribute("width", "15");
            botonAdd.setAttribute("height", "15");

            let elementoLista = document.createElement("li");
            elementoLista.appendChild(elementoNombre);
            elementoLista.appendChild(botonPlay);
            elementoLista.appendChild(botonFavorite);
            elementoLista.appendChild(botonAdd);

            contenedor.appendChild(elementoLista);
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
            new Song(1,"cover1","nombre1","autor1","artista1","duracion1","album1","anio1","genero1","url1"),
            new Song(2,"cover2","nombre2","autor2","artista2","duracion2","album2","anio2","genero2","url2"),
            new Song(3,"cover3","nombre3","autor3","artista3","duracion3","album3","anio3","genero3","url3")
        ];
        this.mostrarCanciones();
        this.currentSong=this.catalogoDeCanciones[0];
        this.audio=new Audio();
        this.currentPlaylist='busqueda';
        this.favoritos=new PlayList('resFavoritos');
        this.favoritos=new PlayList('resPlaylist');
       
        document.addEventListener('playSong', (e)=>{
            this.currentSong= e.detail.song;
            this.play();
        });

        this.isPaused=false;
        this.inicializarControles();


    }

    inicializarControles()
    {
        let buscar=document.getElementById("buscar");
        buscar.addEventListener("click",()=>{

        });
        let play = document.getElementById("play");
        play.addEventListener("click",()=>{});
        let stop = document.getElementById("stop");
        stop.addEventListener("click",()=>{});
        let pause = document.getElementById("pause");
        pause.addEventListener("click",()=>{});
        this.audio.addEventListener("ended", ()=>{});
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
let listaCanciones = [
    new Song(1,"cover1","Canción 1","autor1","artista1","duracion1","album1","anio1","genero1","url1"),
    new Song(2,"cover2","Canción 2","autor2","artista2","duracion2","album2","anio2","genero2","url2"),
    new Song(3,"cover3","Canción 3","autor3","artista3","duracion3","album3","anio3","genero3","url3")
];

let catalogo = new catalogoDeCanciones("", listaCanciones);
let listaCatalogo = document.getElementById("catalogoDisponibleId");
catalogo.cargar(listaCatalogo);