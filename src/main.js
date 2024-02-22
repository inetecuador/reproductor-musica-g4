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
    listaCanciones;

    constructor(playListName, listaCanciones){
        this.playListName = playListName;
        this.listaCanciones = listaCanciones;
    }
    
    addSongToPlaylist(song){
        this.listaCanciones.push(song);
        this.dibujarCanciones();
    }

    dibujarCanciones(){
        let canciones=document.getElementById(this.nombre);
        let alterna="";
        let alterna2="";
        switch(this.nombre){
            case 'resFavoritos':
                alterna='fa-plus';
                alterna2='fa-light fa-heart-o';
                break;
            case 'resPlaylist':
                alterna='fa-minus';
                alterna2='fa-heart';
                break;
        }
        canciones.innerHTML='';
        this.listaCanciones.forEach(song=> {
            canciones.innerHTML+=
            <li id="res_${song.id}" class="cancion" > ${song.nombre}
            <span class="favoritos fa ${alterna2}" data-idCancion="${song.id}"></span>
            <span class="addPlaylist fa ${alterna}" data-idCancion="${song.id}"></span>
            <span class="playSong fa fa-play" data-idCancion="${song.id}"></span>
            </li>;
        });
        this.onPlay();
    }

     onPlay(){
        let playSongs=document.getElementsByClassName("playSong");
        for(let i=0; i< playSongs.length; i++){
            playSongs[i].addEventListener("click", ()=> {
                let id= playSong[i].getAttribute ('data-idCancion');
                let cancion=this.listaCanciones.find(song=> song.id==id);
                let event=new CustomEvent('playSong',{
                    detail:{
                        song: cancion,
                        actual: this.nombre
                    },
                    });
                    document.dispatchEvent(event);
            });
        }
    }
    removeSongFromPlaylist(song){}
    nextSong(id){}


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
    audio;
    filtroDeCanciones;
    currentPlaylist='busqueda';
    favoritos;
    myPlaylist;
    isPaused;
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
        this.myPlaylist=new PlayList('resPlaylist');
       
        document.addEventListener('playSong', (e)=>{
            this.currentSong= e.detail.song;
            this.currentPlaylist=e.detail.actual;
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

    mostrarCanciones = function(PlayList) {
        let canciones = document.getElementById("resBusqueda");
        this.catalogoDeCanciones.forEach(song => {
            canciones.innerHTML += 
            <li class="cancion" data-idCancion="${song.id}">${song.nombre}
                <span class="favoritos fa fa-heart" data-idCancion="${song.id}"></span>
                <span class="favoritos fa fa-heart" data-idCancion="${song.id}"></span>
                <span class="favoritos fa fa-heart" data-idCancion="${song.id}"></span>
            </li>;
            
           `<p class="cancion">${song.nombre}</p>`;
        });

        let playSongs=document.getElementsByClassName("playSong");
        for(let i=0; i<playSongs.length; i++)
        {
            playSongs[i].addEventListener("click", ()=>{
           
            this.currentPlaylist= 'busqueda';
            let id=playSongs[i].parentElement.getAttribute('data-idCancion');
            this.currentSong=this.catalogoDeCanciones.find(song=> song.id==id);
            this.play();
            });
        }
        let favoritos=document.getElementsByClassName("favoritos");
        for (let i=0; i< favoritos.length;i++){
            favoritos[i].addEventListener("click", ()=>{
                let id=favoritos[i].getAttribute('data-idCancion');
                this.addPlaylist(id,'favoritos');
            });
        }
        let addPlaylist=document.getElementsByClassName("addPlaylist");
        for (let i=0; i< addPlaylist.length;i++){
            
            addPlaylist[i].addEventListener("click", ()=>{
                let id=addPlaylist[i].getAttribute('data-idCancion');
                this.addPlaylist(id, 'myPlaylist');
            });
        }

    }

    addPlaylist=function(id, PlayList){
        let cancion= this.catalogoDeCanciones.find(song=> song.id==id);
        switch(PlayList){
            case 'favoritos':
                this.favoritos.addPlaylist(cancion);
                break;
            case 'myPlaylist':
                this.myPlaylist.addSongToPlaylist(cancion);
                break;

        }
    }

    mostrarBusqueda(filtroDeCanciones){
        let canciones=document.getElementById("resBusqueda");
        filtroDeCanciones.forEach(song=>{
            canciones.innerHTML+=
                <li id="res_${song.id}" class="cancion">${song.nombre}
                <span class="favoritos fa fa-heart"></span> <span class="addPlaylist fa fa-plus"></span>
                </li>;
        });
    }

    buscarCancion = function(inputUser){
        inputUser=inputUser.trim(inputUser);
        inputUser=inputUser.toLowerCase();
        let canciones=document.getElementById("resBusqueda");
        canciones.innerHTML='';
        let resNombre=this.catalogoDeCanciones.filter(song=> song.nombre.match(inputUser));
        let resAlbun=this.catalogoDeCanciones.filter(song=> song.album.match(inputUser));
        let resArtista=this.catalogoDeCanciones.filter(song=> song.autor.match(inputUser));
        let filtroDeCanciones=[ ...resNombre, ...resAlbun, ...resArtista];
        
        filtroDeCanciones=[ ...new setInterval(filtroDeCanciones)]
        this.mostrarBusqueda(filtroDeCanciones);
    }
    cambiarPortada=function(){
        const cover=document.getElementById("portadaImg");
        cover.src="/portadas/"+this.currentSong.id+".webp";
    }

    pause = function(){
        //let pauseButton = document.getElementById("pause")
        this.audio.pause();
    }

    play = function(){
        if (this.currentSong !== undefined&& this.isPaused==false){
            this.audio.src="/canciones/"+this.currentSong.urlSong;
            this.audio.play();
            this.cambiarPortada();            
        }else{
            this.audio.play();
            this.isPaused=true
        }
       // let audio = new Audio (this.currentSong.urlSong);
        //audio.play();
    }

    playStop = function(){
      //  let stopButton = document.getElementById("playStop");
        //stopButton.addEventListener("click",() => {
          //  let currentSong = this.getCurrentSong();
            //let audio = new Audio(currentSong.urlSong);
           
            this.isPaused=false;
            this.audio.pause();
            this.audio.currentTime = 0;
       // }

        //)
    }
    next=function(){
       let id =this.currentSong.id;
       switch(this.currentPlaylist){
        case'busqueda':
            this.currentSong=this.catalogoDeCanciones(id);
            this.play();
            break;
        case'favoritos':
            this.currentSong=this.favoritos.nextSong(id);
            this.play();
            break;
        case'myPlaylist':
            this.currentSong=this.myPlaylist.nextSong(id);
            this.play();
            break;
       }
       this.getCurrentSong=this.currentPlaylist.getCurrentSong(0);
       this.play();
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