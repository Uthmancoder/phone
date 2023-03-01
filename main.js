
let nav = document.getElementById("datescreen")
let homepage = document.getElementById("home")
let screen = document.getElementById("screen2")
let thiredScreen = document.getElementById("screen3")
let dialnum = document.getElementById("dial")
let digi = document.querySelectorAll(".lig")
setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    const currentTime = hour + ":" + (minutes < 10 ? "0" + minutes : minutes);
    nav.innerHTML = `<div class ="d-flex justify-content-between allign-items-center text-white mt-2"> ${currentTime}  <span class="material-symbols-outlined icons mx-3">
alarm
</span>  <div class ="d-flex allign-items-center marg"><span class="material-symbols-outlined icons ">
wifi
</span><span class="material-symbols-outlined icons">
signal_cellular_alt
</span> <span class="material-symbols-outlined icons">
signal_cellular_alt
</span> 
<span class="material-symbols-outlined icons">
battery_horiz_050
</span>
</div></div> `
}, 1000);

function phone() {
    homepage.innerHTML = ""
    document.getElementById("phone").style.backgroundImage = "none";
    document.getElementById("phone").style.backgroundColor = "rgb(30, 30, 30)";
    homepage.innerHTML += ` 
    <hr> 
    <div class="d-flex phonecall ">
        <div class="border rounded-4 w-100  inp-div">
            <span class="material-symbols-outlined search">
                search
            </span>
            <input type="text" class="w-100 rounded-4 " placeholder="Search Contacts">
            <span class="material-symbols-outlined mic">
                mic
            </span>
        </div>
        <div class="more-div">
            <button class="more"><span class="material-symbols-outlined vert">
            more_vert
            </span></button>
            <div class="more-drop">
                <p class="fw-bolder m-3">Call History</p>
                <p class="fw-bolder m-3 ">Call recording</p>
                <p class="fw-bolder m-3">Settings</p>
            </div>
        </div> 
    </div>
`;

    recent();
}

let recentArray = [
    {
        Image: `./whatsapp.jpg`,
        name: "Abdullah Sqi",
        phonenumber: "08012345678"
    },
    {
        Image: `./telegram.jpg`,
        name: "Pablo Gci",
        phonenumber: "08112345678"
    },
    {
        Image: `./whatsapp.jpg`,
        name: "Dev d❤",
        phonenumber: "09012345678"
    },
    {
        Image: `./telegram.jpg`,
        name: "Pablo Gci",
        phonenumber: "08018945678"
    },

]

function autorecent() {
    screen3.innerHTML =
        `

<div class = "recent  Py-2"> 
<button class = "text-primary  rec "> <span class="material-symbols-outlined">
schedule
</span> <small class = "text-light small">recent </small> </button>
<button onclick = "contacts()" class = "text-primary  rec"> <span class="material-symbols-outlined symb">
person
</span> <small class = "text-light small">Contacts </small> </button>
<button class = "text-primary  rec"> <span class="material-symbols-outlined symb">
grade
</span> <small class = "text-light small">Favorite </small> </button>
</div>
</div>`

    for (let index = 0; index < recentArray.length; index++) {
        const element = recentArray[index];
        screen3.innerHTML += `
<div class="onecontact my-3 mx-1" id="onecontact " onclick="addtorec(${index})">
    <img class = "img-fluid pxt" src="${element.Image}" alt="">
    <div>
        <p>${element.name}</p>
        <p>${element.phonenumber}</p>
    </div>
</div>
`
    }
}
function recent() {
    autorecent();
}

function addtorec(index) {
    recentArray.push(recentArray[index])
    console.log(recentArray);

    screen3.innerHTML += `
     <div class = "dialdiv">
     <p class = "text-primary m-2">call with</p>
     <div onclick=  "placecall(${index})"  class = "text-light">
         <img class = "img-fluid simm" src="sim1.png" alt=""> <span class = "mx-1">MTN Nigeria</span> <br>
         <small class = "mx-4">${recentArray[index].phonenumber}</small>
     </div>
     <div onclick = "placecall2(${index})" class = "text-light my-2">
         <img class = "img-fluid simm" src="sim2.png" alt=""> <span class = "mx-1">Airtel Nigeria</span> <br>
         <small class = "mx-4">${recentArray[index].phonenumber}</small>
         <button onclick = "cancelcall()" class = "can text-light"> Cancel </button>
     </div>

     
 </div> 
     `

}
let audioinit = 5
function placecall(index) {
    homepage.innerHTML = ""
    screen3.innerHTML = ""
    let myTimer = setTimeout(() => {
        document.getElementById("audio").play();
    }, 1000);

    audioinit = setTimeout(() => {
        alert("user is not responding")
        hangup()
    }, 5000);


    document.getElementById("phone").style.backgroundImage = "linear-gradient(to bottom, rgb(35, 40, 62), rgb(37,42, 64),rgb(47,54, 80), rgb(62,74,100))";
    homepage.innerHTML = `
    <div class = "grid"> 
    <div class = "mx-auto disp">
    <button class= "person rounded-circle border-0 shadow"> <span class="material-symbols-outlined fsize">
    person
    </span> </button>
    </div>
    <div>
    <p id = "timescreen" class = "my-2 fs-4 text-center text-light"></p>
    <div class = "absol">
   <div >
   <p class = "text-light "> ${recentArray[index].name}  <br>  <span class = "text-light top"> ${recentArray[index].phonenumber} </span></p>
  
   </div class = "text-center">
    <div class = "d-flex allign-items-center nig ">
    <img class="img-fluid sim" src="sim1.png" alt="">
    <span class = "text-light "> Nigeria </span>
    </div>
    <p class = "text-light mx-3"> caling... </p>
    </div>
    </div>
 
    <div class = "mx-3 myy"> 
      <button class = "py-2 px-1 m-3 rounded-circle dd border-0"> <i class="fa-solid fa-volume-high fs-3"></i></button>
      <button class = "p-2 m-3 rounded-circle dd border-0"><i class="fa-solid fa-microphone fs-3"></i></button>
      <button class = "p-2 m-3 rounded-circle dd border-0"><span class="material-symbols-outlined fs-3">
      voicemail
      </span></button>
      <button class = "p-2 m-3 rounded-circle dd border-0"> <i class="fa-solid fa-video fs-3"></i> </button>
      <button class = "p-2 m-3 rounded-circle dd border-0" > <span class="material-symbols-outlined fs-3">
      dialpad
      </span> </button>
      <button class = "p-2 m-3 rounded-circle dd border-0"> <span class="material-symbols-outlined fs-3">
      pause_circle
      </span> </button>
    </div>

    <button onclick = "hangup()" class = "btn btn-danger rounded-circle hang p-2"> <span class="material-symbols-outlined fs-2">
    call_end
    </span></button>
    </div>
   `
}
function placecall2(index) {
    homepage.innerHTML = ""
    screen3.innerHTML = ""
    let myTimer = setTimeout(() => {
        document.getElementById("audio").play();
    }, 1000);

    audioinit = setTimeout(() => {
        alert("user is not responding")
        hangup()
    }, 5000);


    document.getElementById("phone").style.backgroundImage = "linear-gradient(to bottom, rgb(35, 40, 62), rgb(37,42, 64),rgb(47,54, 80), rgb(62,74,100))";
    homepage.innerHTML = `
    <div class = "grid"> 
    <div class = "mx-auto disp">
    <button class= "person rounded-circle border-0 shadow"> <span class="material-symbols-outlined fsize">
    person
    </span> </button>
    </div>
    <div>
    <p id = "timescreen" class = "my-2 fs-4 text-center text-light"></p>
    <div class = "absol">
   <div >
   <p class = "text-light "> ${recentArray[index].name}  <br>  <span class = "text-light top"> ${recentArray[index].phonenumber} </span></p>
  
   </div class = "text-center">
    <div class = "d-flex allign-items-center nig ">
    <img class="img-fluid sim" src="sim2.png" alt="">
    <span class = "text-light "> Nigeria </span>
    </div>
    <p class = "text-light mx-3"> caling... </p>
    </div>
    </div>
 
    <div class = "mx-3 myy"> 
      <button class = "py-2 px-1 m-3 rounded-circle dd border-0"> <i class="fa-solid fa-volume-high fs-3"></i></button>
      <button class = "p-2 m-3 rounded-circle dd border-0"><i class="fa-solid fa-microphone fs-3"></i></button>
      <button class = "p-2 m-3 rounded-circle dd border-0"><span class="material-symbols-outlined fs-3">
      voicemail
      </span></button>
      <button class = "p-2 m-3 rounded-circle dd border-0"> <i class="fa-solid fa-video fs-3"></i> </button>
      <button class = "p-2 m-3 rounded-circle dd border-0" > <span class="material-symbols-outlined fs-3">
      dialpad
      </span> </button>
      <button class = "p-2 m-3 rounded-circle dd border-0"> <span class="material-symbols-outlined fs-3">
      pause_circle
      </span> </button>
    </div>

    <button onclick = "hangup()" class = "btn btn-danger rounded-circle hang p-2"> <span class="material-symbols-outlined fs-2">
    call_end
    </span></button>
    </div>
   `
}

function cancelcall() {
    document.querySelector(".dialdiv").style = "display : none"
}
function hangup() {
    homepage.innerHTML = ""
    screen3.innerHTML = ""
    document.getElementById("phone").style.backgroundcolor = "black"
    autorecent();
    clearTimeout(audioinit)
    clearTimeout(myTimer)


}

let recentDiv
let anArray = []
let index = 0
function but() {
    let btnVal = event.target.value;
    anArray.push(btnVal);
    dial.innerHTML = anArray.join(''); // Clear previous contents and display updated array
}
function del(index) {
    anArray.pop();
    document.getElementById("dial").innerHTML = anArray.join('');
}
function undial() {
    document.querySelector(".divv").style = "display : none"
}
let phonenumber = document.getElementById("numb")



function sim1() {
    homepage.innerHTML = ""
    screen3.innerHTML = ""
    document.getElementById("phone").style.backgroundImage = "linear-gradient(to bottom, rgb(35, 40, 62), rgb(37,42, 64),rgb(47,54, 80), rgb(62,74,100))";
    homepage.innerHTML = `
    <div class = "grid"> 
    <div class = "mx-auto disp">
    <button class= "person rounded-circle border-0 shadow"> <span class="material-symbols-outlined fsize">
    person
    </span> </button>
    </div>
    <div>
    <p id = "timescreen" class = "my-2 fs-4 text-center text-light"></p>
    <div class = "absol">
    <div class = "d-flex allign-items-center">
    <img class="img-fluid simm" src="sim1.png" alt="">
    <span class = "text-light"> Nigeria </span>
    </div>
    <p class = "text-light"> caling... </p>
    </div>
    </div>
 
    <div class = "mx-3 my-5"> 
      <button class = "py-2 px-1 m-3 rounded-circle dd border-0"> <i class="fa-solid fa-volume-high fs-3"></i></button>
      <button class = "p-2 m-3 rounded-circle dd border-0"><i class="fa-solid fa-microphone fs-3"></i></button>
      <button class = "p-2 m-3 rounded-circle dd border-0"><span class="material-symbols-outlined fs-3">
      voicemail
      </span></button>
      <button class = "p-2 m-3 rounded-circle dd border-0"> <i class="fa-solid fa-video fs-3"></i> </button>
      <button class = "p-2 m-3 rounded-circle dd border-0" > <span class="material-symbols-outlined fs-3">
      dialpad
      </span> </button>
      <button class = "p-2 m-3 rounded-circle dd border-0"> <span class="material-symbols-outlined fs-3">
      pause_circle
      </span> </button>
    </div>

    <button class = "btn btn-danger rounded-circle hang p-2"> <span class="material-symbols-outlined fs-2">
    call_end
    </span></button>
    </div>
   `
    //    document.addEventListener("DOMContentLoaded", function(event) {
    let show = document.getElementById("dial");
    let simArray = [];
    simArray.push(show.innerHTML);
    document.getElementById("timescreen").innerHTML = document.getElementById("dial");
    console.log(show);
    //   });
}
let contactArray = [
    {
        pic: `<button  class = "btn btn-primary rounded-circle text-light  fs-3 py-1 px-2 plux" > <span class="material-symbols-outlined">
      person
      </span> <buttton>`,
        names: "poe",
        phonenum: 08132577114,

    },
    {
        pic: `<button class = "btn btn-info rounded-circle text-light  fs-3 py-1 px-2 plux" > <span class="material-symbols-outlined">
    person
    </span> <buttton>`,
        names: "Abdul",
        phonenum: 08132887114,

    },
    {
        pic: `<button class = "btn btn-success rounded-circle text-light  fs-3 py-1 px-2 plux" > <span class="material-symbols-outlined">
    person
    </span> <buttton>`,
        names: `<p class = "text-light tom"> Tommy </p>`,
        phonenum: `<p class = "phenum">08132577114 </p> `,

    },
    {
        pic: `<button class = "btn btn-info rounded-circle text-light  fs-3 py-1 px-2 plux" > <span class="material-symbols-outlined">
    person
    </span> <buttton>`,
        names: "Abdul",
        phonenum: 08132887114,

    },

]
function contacts() {

    screen3.innerHTML = ""
    screen3.innerHTML = `
          <div onclick = "rece()" class = "recent ccc"> 
          <button class = "text-primary  rec  "> <span class="material-symbols-outlined">
      schedule
      </span> <small class = "text-light small firs">recent </small> </button>
      <button onclick = "contacts()" class = "text-light btn btn-primary rounded-circle recc"><i class="fa-solid fs-3 fa-plus"></i></button>
      <button class = "text-primary  rec"> <span class="material-symbols-outlined symb">
      grade
      </span> <small class = "text-light small mall sma">Favorite </small> </button>
                </div>
        `
    for (let index = 0; index < contactArray.length; index++) {
        const uthman = contactArray[index];
        screen3.innerHTML += `
           <div id = "contactDiv" class = "d-flex my-2 mx-3" onclick = "currentContacts(${index})"> 
           <div> ${uthman.pic} </div>
           <div id ="contact-div" class = "text-light   mx-3 heigh">
           <p>  ${uthman.names}  </p> 
           <p class = "pnonnum"> ${uthman.phonenum} </p> 
           </div>
           </div>
        `
    }


}
function currentContacts(index) {
    contactArray.push(contactArray[index])
    homepage.innerHTML = ""
    screen3.innerHTML = ""
    let myTimer = setTimeout(() => {
        document.getElementById("audio").play();
    }, 1000);

    audioinit = setTimeout(() => {
        alert("user is not responding")
        hangup()
    }, 5000);


    document.getElementById("phone").style.backgroundImage = "linear-gradient(to bottom, rgb(35, 40, 62), rgb(37,42, 64),rgb(47,54, 80), rgb(62,74,100))";
    homepage.innerHTML = `
    <div class = "grid"> 
    <div class = "mx-auto disp">
    <button class= "person rounded-circle border-0 shadow"> <span class="material-symbols-outlined fsize">
    person
    </span> </button>
    </div>
    <div>
    <p id = "timescreen" class = "my-2 fs-4 text-center text-light"></p>
    <div class = "absol">
   <div >
   <p class = "text-light "> ${recentArray[index].name}  <br>  <span class = "text-light top"> ${recentArray[index].phonenumber} </span></p>
  
   </div class = "text-center">
    <div class = "d-flex allign-items-center nig ">
    <img class="img-fluid sim" src="sim1.png" alt="">
    <span class = "text-light "> Nigeria </span>
    </div>
    <p class = "text-light mx-3"> caling... </p>
    </div>
    </div>
 
    <div class = "mx-3 myy"> 
      <button class = "py-2 px-1 m-3 rounded-circle dd border-0"> <i class="fa-solid fa-volume-high fs-3"></i></button>
      <button class = "p-2 m-3 rounded-circle dd border-0"><i class="fa-solid fa-microphone fs-3"></i></button>
      <button class = "p-2 m-3 rounded-circle dd border-0"><span class="material-symbols-outlined fs-3">
      voicemail
      </span></button>
      <button class = "p-2 m-3 rounded-circle dd border-0"> <i class="fa-solid fa-video fs-3"></i> </button>
      <button class = "p-2 m-3 rounded-circle dd border-0" > <span class="material-symbols-outlined fs-3">
      dialpad
      </span> </button>
      <button class = "p-2 m-3 rounded-circle dd border-0"> <span class="material-symbols-outlined fs-3">
      pause_circle
      </span> </button>
    </div>

    <button onclick = "hangup()" class = "btn btn-danger rounded-circle hang p-2"> <span class="material-symbols-outlined fs-2">
    call_end
    </span></button>
    </div>
   `
}


function rece() {
    recent();
}

function defaultScreen() {
    homepage.innerHTML += `
        <div  class="d-flex justify-content-between mx-3 ">
                <button  onclick="phone()" class="btn btn-success cam"><i class="fa-solid fa-phone fs-5 py-1"></i></button>
                <button onclick="home()" class="btn btn-dark dark py-2"><i class="fa-solid fa-house"></i></button>
                <div class="mt-5 bigdi">
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-sharp fa-solid fa-bolt"></i></button>
                        <small class="text-white mx-3">bolt</small>
                    </div>
                    <div class="app-div  mx-3">
                        <button class="btn btn-dark apps  py-2 m-2"><span class="material-symbols-outlined">
                                stadia_controller
                            </span> </i></button>
                        <small class="text-white mx-2">games</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-solid fa-image"></i></button>
                        <small class="text-white mx-3">gallery</small>
                    </div>
                    <div class="app-div ">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-instagram"></i></button>
                        <small class="text-white ">instagram</small>
                    </div>
                    <div class="app-div mx-3">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-tiktok"></i></button>
                        <small class="text-white mx-3">Tiktok</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-twitter"></i></button>
                        <small class="text-white mx-3">Twitter</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-linkedin"></i></button>
                        <small class="text-white mx-2">linkedin</small>
                    </div>
                    <div class="app-div mx-3">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-solid fa-music"></i></button>
                        <small class="text-white mx-3">Music</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-solid fa-envelope"></i></button>
                        <small class="text-white mx-2">Message</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-github"></i></button>
                        <small class="text-white mx-3">Github</small>
                    </div>
                    <div class="app-div mx-3">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-discord"></i></button>
                        <small class="text-white mx-2">Discord</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-facebook"></i></button>
                        <small class="text-white mx-1">Facebook</small>
                    </div>
                </div>
                <button class="btn btn-dark camer"> <span class="material-symbols-outlined">
                        photo_camera
                    </span> </button>
            </div>
        `
}

function home() {
    homepage.innerHTML = ""
    screen.innerHTML = ` <div class = "menu">
            <div class="big-di">
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-sharp fa-solid fa-bolt"></i></button>
                        <small class="text-white mx-3">bolt</small>
                    </div>
                    <div class="app-div mx-3">
                        <button class="btn btn-dark apps  py-2 m-2"><span class="material-symbols-outlined">
                                stadia_controller
                            </span> </i></button>
                        <small class="text-white mx-2">games</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-solid fa-image"></i></button>
                        <small class="text-white mx-3">gallery</small>
                    </div>
                    <div class="app-div ">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-instagram"></i></button>
                        <small class="text-white ">instagram</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-tiktok"></i></button>
                        <small class="text-white mx-3">Tiktok</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-twitter"></i></button>
                        <small class="text-white mx-4">Twitter</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-linkedin"></i></button>
                        <small class="text-white mx-2">linkedin</small>
                    </div>
                    <div class="app-div mx-3">
                        <button class="btn btn-dark apps  py-2 my-2"><i class="fa-solid fa-music"></i></button>
                        <small class="text-white mx-3">Music</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-solid fa-envelope"></i></button>
                        <small class="text-white mx-2">Message</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-github"></i></button>
                        <small class="text-white mx-3">Github</small>
                    </div>
                    <div class="app-div mx-3">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-discord"></i></button>
                        <small class="text-white mx-2">Discord</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-facebook"></i></button>
                        <small class="text-white mx-1">Facebook</small>
                    </div>
                </div>
            <div class="big-di">
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-sharp fa-solid fa-bolt"></i></button>
                        <small class="text-white mx-3">bolt</small>
                    </div>
                    <div class="app-div mx-3">
                        <button class="btn btn-dark apps  py-2 m-2"><span class="material-symbols-outlined">
                                stadia_controller
                            </span> </i></button>
                        <small class="text-white mx-2">games</small>
                    </div>
                    <div class="app-div">
                        <button onclick = "gallery()" class="btn btn-dark apps  py-2 m-2"><i class="fa-solid fa-image"></i></button>
                        <small class="text-white mx-3">gallery</small>
                    </div>
                    <div class="app-div ">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-instagram"></i></button>
                        <small class="text-white ">instagram</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-tiktok"></i></button>
                        <small class="text-white mx-3">Tiktok</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-twitter"></i></button>
                        <small class="text-white mx-4">Twitter</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-linkedin"></i></button>
                        <small class="text-white mx-2">linkedin</small>
                    </div>
                    <div class="app-div mx-3">
                        <button class="btn btn-dark apps  py-2 my-2"><i class="fa-solid fa-music"></i></button>
                        <small class="text-white mx-3">Music</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-solid fa-envelope"></i></button>
                        <small class="text-white mx-2">Message</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-github"></i></button>
                        <small class="text-white mx-3">Github</small>
                    </div>
                    <div class="app-div mx-3">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-discord"></i></button>
                        <small class="text-white mx-2">Discord</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-facebook"></i></button>
                        <small class="text-white mx-1">Facebook</small>
                    </div>
                </div>
            <div class="big-di">
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-sharp fa-solid fa-bolt"></i></button>
                        <small class="text-white mx-3">bolt</small>
                    </div>
                    <div class="app-div mx-3">
                        <button class="btn btn-dark apps  py-2 m-2"><span class="material-symbols-outlined">
                                stadia_controller
                            </span> </i></button>
                        <small class="text-white mx-2">games</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-solid fa-image"></i></button>
                        <small class="text-white mx-3">gallery</small>
                    </div>
                    <div class="app-div ">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-instagram"></i></button>
                        <small class="text-white ">instagram</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-tiktok"></i></button>
                        <small class="text-white mx-3">Tiktok</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-twitter"></i></button>
                        <small class="text-white mx-4">Twitter</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-linkedin"></i></button>
                        <small class="text-white mx-2">linkedin</small>
                    </div>
                    <div class="app-div mx-3">
                        <button class="btn btn-dark apps  py-2 my-2"><i class="fa-solid fa-music"></i></button>
                        <small class="text-white mx-3">Music</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-solid fa-envelope"></i></button>
                        <small class="text-white mx-2">Message</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-github"></i></button>
                        <small class="text-white mx-3">Github</small>
                    </div>
                    <div class="app-div mx-3">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-discord"></i></button>
                        <small class="text-white mx-2">Discord</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-facebook"></i></button>
                        <small class="text-white mx-1">Facebook</small>
                    </div>
                </div>
            <div class="big-di">
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-sharp fa-solid fa-bolt"></i></button>
                        <small class="text-white mx-3">bolt</small>
                    </div>
                    <div class="app-div mx-3">
                        <button class="btn btn-dark apps  py-2 m-2"><span class="material-symbols-outlined">
                                stadia_controller
                            </span> </i></button>
                        <small class="text-white mx-2">games</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-solid fa-image"></i></button>
                        <small class="text-white mx-3">gallery</small>
                    </div>
                    <div class="app-div ">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-instagram"></i></button>
                        <small class="text-white ">instagram</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-tiktok"></i></button>
                        <small class="text-white mx-3">Tiktok</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-twitter"></i></button>
                        <small class="text-white mx-4">Twitter</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-linkedin"></i></button>
                        <small class="text-white mx-2">linkedin</small>
                    </div>
                    <div class="app-div mx-3">
                        <button class="btn btn-dark apps  py-2 my-2"><i class="fa-solid fa-music"></i></button>
                        <small class="text-white mx-3">Music</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-solid fa-envelope"></i></button>
                        <small class="text-white mx-2">Message</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-github"></i></button>
                        <small class="text-white mx-3">Github</small>
                    </div>
                    <div class="app-div mx-3">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-discord"></i></button>
                        <small class="text-white mx-2">Discord</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-facebook"></i></button>
                        <small class="text-white mx-1">Facebook</small>
                    </div>
                </div>
            <div class="big-di">
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-sharp fa-solid fa-bolt"></i></button>
                        <small class="text-white mx-3">bolt</small>
                    </div>
                    <div class="app-div mx-3">
                        <button class="btn btn-dark apps  py-2 m-2"><span class="material-symbols-outlined">
                                stadia_controller
                            </span> </i></button>
                        <small class="text-white mx-2">games</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-solid fa-image"></i></button>
                        <small class="text-white mx-3">gallery</small>
                    </div>
                    <div class="app-div ">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-instagram"></i></button>
                        <small class="text-white ">instagram</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-tiktok"></i></button>
                        <small class="text-white mx-3">Tiktok</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-twitter"></i></button>
                        <small class="text-white mx-4">Twitter</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-linkedin"></i></button>
                        <small class="text-white mx-2">linkedin</small>
                    </div>
                    <div class="app-div mx-3">
                        <button class="btn btn-dark apps  py-2 my-2"><i class="fa-solid fa-music"></i></button>
                        <small class="text-white mx-3">Music</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-solid fa-envelope"></i></button>
                        <small class="text-white mx-2">Message</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-github"></i></button>
                        <small class="text-white mx-3">Github</small>
                    </div>
                    <div class="app-div mx-3">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-discord"></i></button>
                        <small class="text-white mx-2">Discord</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-facebook"></i></button>
                        <small class="text-white mx-1">Facebook</small>
                    </div>
                </div>
            <div class="big-di">
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-sharp fa-solid fa-bolt"></i></button>
                        <small class="text-white mx-3">bolt</small>
                    </div>
                    <div class="app-div mx-3">
                        <button class="btn btn-dark apps  py-2 m-2"><span class="material-symbols-outlined">
                                stadia_controller
                            </span> </i></button>
                        <small class="text-white mx-2">games</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-solid fa-image"></i></button>
                        <small class="text-white mx-3">gallery</small>
                    </div>
                    <div class="app-div ">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-instagram"></i></button>
                        <small class="text-white ">instagram</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-tiktok"></i></button>
                        <small class="text-white mx-3">Tiktok</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-twitter"></i></button>
                        <small class="text-white mx-4">Twitter</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-linkedin"></i></button>
                        <small class="text-white mx-2">linkedin</small>
                    </div>
                    <div class="app-div mx-3">
                        <button class="btn btn-dark apps  py-2 my-2"><i class="fa-solid fa-music"></i></button>
                        <small class="text-white mx-3">Music</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-solid fa-envelope"></i></button>
                        <small class="text-white mx-2">Message</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-github"></i></button>
                        <small class="text-white mx-3">Github</small>
                    </div>
                    <div class="app-div mx-3">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-discord"></i></button>
                        <small class="text-white mx-2">Discord</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-facebook"></i></button>
                        <small class="text-white mx-1">Facebook</small>
                    </div>
                </div>
            </div>
            
           <div class = "w-100  px-3 back-div d-flex align-items-center">
           <button onclick ="back()" class = "back"> <span class="material-symbols-outlined fs-2">
           arrow_left
           </span> </button>
           <button onclick ="back()" class = "back mid"> <span class="material-symbols-outlined mx-5">
           panorama_fish_eye
           </span> </button>

           <button onclick ="back()" class = "back"> <span class="material-symbols-outlined fs-4">
           play_arrow
           </span></button>
           </div> 
           </button>`

}
let galleryArray = [`<img  src="calender.jpg" alt="">`, `<img src="call.jpg" alt="">`, `<img src="instagram.jpg" alt="">`, `<img src="let'schat.jpg" alt="">`, `<img src="music.jpg" alt="">`,`<img src="phonebook.jpg" alt="">`, `<img src="photos.jpg" alt="">`,`<img src="whatsapp.jpg" alt="">`, `<img src="telegram.jpg" alt="">`,`<img src="music.jpg" alt="">`,`<img src="linkedin.jpg" alt="">`, `<img src="tiktok.jpg" alt="">`]
function allImages() {
    homepage.innerHTML = ""
    screen.innerHTML = ""
     document.getElementById("phone").style.backgroundImage = "none";
     document.getElementById("phone").style.backgroundColor = "black";
      screen.innerHTML = `<div id = "galleryscreeen" class = "galleryscreeen"> 
      <div class = "w-100  px-3 back-div d-flex align-items-center galfoot">
      <button onclick ="back()" class = "back"> <span class="material-symbols-outlined fs-2">
      arrow_left
      </span> </button>
      <button onclick ="back()" class = "back mid"> <span class="material-symbols-outlined mx-5">
      panorama_fish_eye
      </span> </button>

      <button onclick ="back()" class = "back bck"> <span class="material-symbols-outlined fs-4">
      play_arrow
      </span></button>
      </div>  
      </div>`
      let gscreen = document.getElementById("galleryscreeen")

     for (let index = 0; index < galleryArray.length; index++) {
        const element = galleryArray[index];
        gscreen.innerHTML += `
          <div class = "d-flex">
             <p onclick = "singleImage(${index})" class="gallery d-flex"> ${galleryArray[index]} </p>
          </div>
        `

        
     }
}
function gallery() {
  allImages();
}
let gscreen = document.getElementById("galleryscreeen")
function singleImage(index) {
    screen.innerHTML = `
    <button onclick = "bktogal()" class = "borda text-light"> <span class="material-symbols-outlined ">
    arrow_back_ios_new
    </span> </button>
      <div  class = "singleimg">
      <button  onclick = "prev(${index})" class="next"> <span class="material-symbols-outlined">
      arrow_back_ios_new
      </span> </button>
       <p id="g-image" class ="exact"> ${galleryArray[index]} </p>
       <button onclick = "next(${index})" class= "next"> <span class="material-symbols-outlined">
       arrow_forward_ios
       </span> </button>
       </div>
    <div class = "w-100  px-3 back-div d-flex align-items-center galfoot">
    <button onclick ="back()" class = "back"> <span class="material-symbols-outlined fs-2">
    arrow_left
    </span> </button>
    <button onclick ="back()" class = "back mid"> <span class="material-symbols-outlined mx-5">
    panorama_fish_eye
    </span> </button>

    <button onclick ="back()" class = "back bck"> <span class="material-symbols-outlined fs-4">
    play_arrow
    </span></button>
    </div>  `
}
function bktogal() {
    screen.innerHTML = ""
    allImages()
}
function next(index) {
    index++;
    if (index >= galleryArray.length) {
      // if the index is greater than or equal to the length of the galleryArray, set the index to 0 to loop back to the first image
      index = 0;
    }
    document.getElementById("g-image").src = galleryArray[index].Image;
  }

function back() {
    screen.innerHTML = ""
    defaultScreen()
    setInterval(() => {
        window.location.reload();
    }, 50);
}