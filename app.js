const music = new Audio('audio/');
//music.play();


const songs = [
    {
        id:'1',
        songName: `Sound Of Silence <br>
        <div class="subtitle">
            Colm Joseph Keegan
        </div>`,
        poster:"img/img1(colm).jpg"
    },
    {
        id:'2',
        songName: ` Another Love <br>
        <div class="subtitle">
            Tom Odell
        </div>`,
        poster:"img/img2(tom odell).jpg"
    },
    {
        id:'3',
        songName: ` Love me like you do <br>
        <div class="subtitle">
            Ellie Goulding
        </div>`,
        poster:"img/img3(Ellie Goulding).jpg"
    },
    {
        id:'4',
        songName: ` Daylight <br>
        <div class="subtitle">
            David Kushner
        </div>`,
        poster:"img/img4(David kushner).jpg"
    },
    {
        id:'5',
        songName: ` Habibi <br>
        <div class="subtitle">
            Ricky-Rich
        </div>`,
        poster:"img/img5(ricky rich).jpg"
    },
    {
        id:'6',
        songName: `You Give Love a Bad name <br>
        <div class="subtitle">
            Bon Jovi
        </div>`,
        poster:"img/img6(bon jovi).jpg"
    },
    {
        id:'7',
        songName: ` Paparazzi<br>
        <div class="subtitle">
            Kim Dracula
        </div>`,
        poster:"img/img7(kim dracula).jpg"
    },
    {
        id:'8',
        songName: ` Money Rain <br>
        <div class="subtitle">
            Phonk
        </div>`,
        poster:"img/img8(phonk).jpg"
    },
    {
        id:'9',
        songName: `Senorita <br>
        <div class="subtitle">
            Shawn Mendes
        </div>`,
        poster:"img/img9(shawn mendes).jpg"
    },
    {
        id:'10',
        songName: ` I ain't worried <br>
        <div class="subtitle">
            Ryan Tedder
        </div>`,
        poster:"img/img10(ryan tedder).jpg"
    },
    {
        id:'11',
        songName: ` 52 Bars<br>
        <div class="subtitle">
            Karan Aujla
        </div>`,
        poster:"img/img11(karan aujla).jpg"
    },
    {
        id:'12',
        songName: ` Gal Dil Di<br>
        <div class="subtitle">
            Diljit Dosanjh
        </div>`,
        poster:"img/img12(diljit dosanjh).jpg"
    },
    {
        id:'13',
        songName: ` She Move It Like <br>
        <div class="subtitle">
            Badshah
        </div>`,
        poster:"img/img13(badshah).jpg"
    },
    {
        id:'14',
        songName: ` Udaariyan <br>
        <div class="subtitle">
            Colm Joseph Keegan
        </div>`,
        poster:"img/img14(satinder satraj).jpg"
    },
    {
        id:'15',
        songName: ` True Stories <br>
        <div class="subtitle">
            AP Dhillon
        </div>`,
        poster:"img/img15(ap dhillon).jpg"
    },
    {
        id:'16',
        songName: ` Teri Yaadon Mein <br>
        <div class="subtitle">
            KK
        </div>`,
        poster:"img/img16(kk).jpg"
    },
    {
        id:'17',
        songName: `Tere Liye <br>
        <div class="subtitle">
            Atif Aslam
        </div>`,
        poster:"img/img17(atif aslam).jpg"
    },
    {
        id:'18',
        songName: ` Kabhie Joh Baadal Barse <br>
        <div class="subtitle">
            Arijit Singh
        </div>`,
        poster:"img/img18(arijit singh).jpg"
    },
    {
        id:'19',
        songName: `Saadi Gali Aaja <br>
        <div class="subtitle">
            Ayushmann Khurrana
        </div>`,
        poster:"img/img19(ayushmann khurrana).jpg"
    },
    {
        id:'20',
        songName: `Pehle Bhi Main <br>
        <div class="subtitle">
            Vishal Mishra
        </div>`,
        poster:"img/img20(vishal mishra).jpg"
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
})

let index = 0;

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
    index=el.target.id;
    console.log(index);
})
})







//search data start
let search_results= document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const {id, songName, poster} = element;
    //console.log(poster);
    let card = document.createElement('a');
    card.href="#"+id;
    card.classList.add('card');

    card.innerHTML = `
    <img src="${poster}" alt="" >
                    <div class="content">
                        ${songName}
                        </div>
    `;
    search_results.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for(let index =0; index<items.length;index++){
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if(text_value.toUpperCase().indexOf(input_value)>-1){
            items[index].style.display = "flex";
        }else{
            items[index].style.display = "none";
        }

        if(input.value == 0){
            search_results.style.display = "none";
        }else{
            search_results.style.display = "";
        }
    }
})
//search data end
 
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft +=330;
})

pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -=330;
})

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click', ()=>{
    Artists_bx.scrollLeft +=330;
})

pop_art_left.addEventListener('click', ()=>{
    Artists_bx.scrollLeft -=330;
})

 