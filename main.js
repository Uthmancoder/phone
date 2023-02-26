
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


function recent() {
    screen3.innerHTML = `<div>
    <div class = "logs">
    <p class = " text-light m-3">Today</p>

    <div class="d-flex justify-content-between text-white ">
    <button class="but btn btn-primary rounded-circle mx-1"><span class="material-symbols-outlined">
        person
        </span>
    </button>
       <div class = "d-flex allign-items-center  calllogs">
        <div class="num-div">
            <p class="num">07033123578  <br>
                <small><i class="fa-solid fa-sim-card text-info"></i> <span class="material-symbols-outlined smm text-primary">
                    call_received
                    </span> <small class="text-light"> Nigeria </small>
            </p>

        </div>
        <div class = "tim">
            <small class="d-flex allign-items-center">20 min. ago <span class="material-symbols-outlined smm text-primary">
                info
                </span></small>
    
        </div>
       </div>
</div>
    <div class="d-flex allign-items-center justify-content-between text-white ">
    <button class="but btn btn-info rounded-circle mx-1"><span class="material-symbols-outlined">
        person
        </span>
    </button>
       <div class = "d-flex allign-items-center  widt calllogs">
        <div class="num-div">
            <p class="num fsss">07033123578  <br>
                <small><i class="fa-solid fa-sim-card text-info"></i> <span class="material-symbols-outlined smm text-primary">
                    call_received
                    </span> <small class="text-light"> Nigeria </small>
            </p>

        </div>
        <div class = "tim my-2 ">
            <small class="d-flex allign-items-center inf">23 min. ago <span class="material-symbols-outlined smm text-primary">
                info
                </span></small>
    
        </div>
       </div>
</div>
    <div class="d-flex allign-items-center justify-content-between text-white ">
    <button class="but btn btn-primary rounded-circle mx-1"><span class="material-symbols-outlined">
        person
        </span>
    </button>
       <div class = "d-flex allign-items-center widt calllogs">
        <div class="num-div">
            <p  class="num current">07033123578  <br>
                <small><i class="fa-solid fa-sim-card text-info"></i> <span class="material-symbols-outlined smm text-primary">
                    call_received
                    </span> <small class="text-light"> Nigeria </small>
            </p>

        </div>
        <div class = "tim my-2 ttt">
            <small class="d-flex allign-items-center inf">23 min. ago <span class="material-symbols-outlined smm text-primary">
                info
                </span></small>
    
        </div>
       </div>
</div>

<p class = " text-light m-3 fsss">Yesterday</p>

<div class="d-flex allign-items-center justify-content-between text-white ">
<button class="but btn btn-success rounded-circle mx-1"><span class="material-symbols-outlined">
    person
    </span>
</button>
   <div class = "d-flex allign-items-center widt calllogs">
    <div class="num-div">
        <p  class="num current">07033123578  <br>
            <small><i class="fa-solid fa-sim-card text-info"></i> <span class="material-symbols-outlined smm text-primary">
                call_received
                </span> <small class="text-light"> Nigeria </small>
        </p>

    </div>
    <div class = "tim my-2 ttt">
        <small class="d-flex allign-items-center inf">23 min. ago <span class="material-symbols-outlined smm text-primary">
            info
            </span></small>

    </div>
   </div>
</div>
<div class="d-flex justify-content-between text-white ">
<button class="but btn btn-primary rounded-circle mx-1"><span class="material-symbols-outlined">
    person
    </span>
</button>
   <div class = "d-flex allign-items-center  calllogs">
    <div class="num-div">
        <p class="num con">07033123578  <br>
            <small><i class="fa-solid fa-sim-card text-info"></i> <span class="material-symbols-outlined smm text-primary">
                call_received
                </span> <small class="text-light"> Nigeria </small>
        </p>

    </div>
    <div class = "tim">
        <small class="d-flex allign-items-center mint">20 min. ago <span class="material-symbols-outlined smm text-primary">
            info
            </span></small>

    </div>
   </div>
</div>
<div class="d-flex justify-content-between text-white ">
<button class="but btn btn-info rounded-circle mx-1"><span class="material-symbols-outlined">
    person
    </span>
</button>
   <div class = "d-flex allign-items-center  calllogs">
    <div class="num-div">
        <p class="num con">07033123578  <br>
            <small><i class="fa-solid fa-sim-card text-info"></i> <span class="material-symbols-outlined smm text-primary">
                call_received
                </span> <small class="text-light"> Nigeria </small>
        </p>

    </div>
    <div class = "tim">
        <small class="d-flex allign-items-center mint">20 min. ago <span class="material-symbols-outlined smm text-primary">
            info
            </span></small>

    </div>
   </div>
</div>

<div class = "divv"> 
<button class = "btn btn-primary text-light rounded-circle fs-4 position"> <span class="material-symbols-outlined">
dialpad
</span> </button>

<div class = "logs-drop"> 
    <div class ="d-flex allign-items-center mx-5 position-relative">
    <p id = "dial" class ="text-center text-light fs-5 mx-5 dialscreen ">  </p>
    <button onclick = "del(${index})" class = "btn btn text-primary fs-5 abs"> <span class="material-symbols-outlined">
    backspace
    </span> </button>
    </div>
    <div class = "bttn-mag text-light">
    <button class ="btn btn  text-light lig" value = "1" onclick="but()" > 1</button>
    <button class ="btn btn  text-light lig" value = "2" onclick="but()" > 2</button>
    <button class ="btn btn  text-light lig" value = "3" onclick="but()" > 3</button>
    <button class ="btn btn  text-light lig" value = "4" onclick="but()" > 4</button>
    <button class ="btn btn  text-light lig" value = "5" onclick="but()" > 5</button>
    <button class ="btn btn  text-light lig" value = "6" onclick="but()" > 6</button>
    <button class ="btn btn  text-light lig" value = "7" onclick="but()" > 7</button>
    <button class ="btn btn  text-light lig" value = "8" onclick="but()" > 8</button>
    <button class ="btn btn   text-light lig" value = "9" onclick="but()"> 9</button>
    <button class ="btn btn  text-light lig" value = "0" onclick="but()"> 0</button>
    </div>

    <div class = "d-flex mx-5" > 
     <button onclick = "sim1()" class = "btn btn-success recc rounded-circle mx-4" ><i
     class="fa-solid fa-phone fs-5 py-1"></i>1 </button>
     <button onclick = "sim2()" class = "btn btn-success recc rounded-circle mx-2" > <i
     class="fa-solid fa-phone fs-5 py-1"></i>2 </button>
     <button onclick = "undial()" class= "btn btn text-primary fs-1"><span class="material-symbols-outlined">
     apps
     </span> </button>
    </div>
   
</div>
</div>
<div class="d-flex justify-content-between text-white ">
<button class="but btn btn-primary rounded-circle mx-1"><span class="material-symbols-outlined">
    person
    </span>
</button>
   <div class = "d-flex allign-items-center  calllogs">
    <div class="num-div">
        <p class="num con">07033123578  <br>
            <small><i class="fa-solid fa-sim-card text-info"></i> <span class="material-symbols-outlined smm text-primary">
                call_received
                </span> <small class="text-light"> Nigeria </small>
        </p>

    </div>
    <div class = "tim">
        <small class="d-flex allign-items-center mint">20 min. ago <span class="material-symbols-outlined smm text-primary">
            info
            </span></small>

    </div>
   </div>
</div>
<div class="d-flex justify-content-between text-white ">
<button class="but btn btn-success rounded-circle mx-1"><span class="material-symbols-outlined">
    person
    </span>
</button>
   <div class = "d-flex allign-items-center  calllogs">
    <div class="num-div">
        <p class="num con">07033123578  <br>
            <small><i class="fa-solid fa-sim-card text-info"></i> <span class="material-symbols-outlined smm text-primary">
                call_received
                </span> <small class="text-light"> Nigeria </small>
        </p>

    </div>
    <div class = "tim">
        <small class="d-flex allign-items-center mint">20 min. ago <span class="material-symbols-outlined smm text-primary">
            info
            </span></small>

    </div>
   </div>
</div>
<div class="d-flex justify-content-between text-white ">
<button class="but btn btn-primary rounded-circle mx-1"><span class="material-symbols-outlined">
    person
    </span>
</button>
   <div class = "d-flex allign-items-center  calllogs">
    <div class="num-div">
        <p class="num con">07033123578  <br>
            <small><i class="fa-solid fa-sim-card text-info"></i> <span class="material-symbols-outlined smm text-primary">
                call_received
                </span> <small class="text-light"> Nigeria </small>
        </p>

    </div>
    <div class = "tim">
        <small class="d-flex allign-items-center mint">20 min. ago <span class="material-symbols-outlined smm text-primary">
            info
            </span></small>

    </div>
   </div>
</div>
<div class="d-flex justify-content-between text-white ">
<button class="but btn btn-info rounded-circle mx-1"><span class="material-symbols-outlined">
    person
    </span>
</button>
   <div class = "d-flex allign-items-center  calllogs">
    <div class="num-div">
        <p class="num con">07033123578  <br>
            <small><i class="fa-solid fa-sim-card text-info"></i> <span class="material-symbols-outlined smm text-primary">
                call_received
                </span> <small class="text-light"> Nigeria </small>
        </p>

    </div>
    <div class = "tim">
        <small class="d-flex allign-items-center mint">20 min. ago <span class="material-symbols-outlined smm text-primary">
            info
            </span></small>

    </div>
   </div>
</div>
<div class="d-flex justify-content-between text-white ">
<button class="but btn btn-primary rounded-circle mx-1"><span class="material-symbols-outlined">
    person
    </span>
</button>
   <div class = "d-flex allign-items-center  calllogs">
    <div class="num-div">
        <p class="num con">07033123578  <br>
            <small><i class="fa-solid fa-sim-card text-info"></i> <span class="material-symbols-outlined smm text-primary">
                call_received
                </span> <small class="text-light"> Nigeria </small>
        </p>

    </div>
    <div class = "tim">
        <small class="d-flex allign-items-center mint">20 min. ago <span class="material-symbols-outlined smm text-primary">
            info
            </span></small>

    </div>
   </div>
</div>
   
    </div>
<div class = "recent  Py-2"> 
  <button class = "text-primary  rec "> <span class="material-symbols-outlined">
  schedule
  </span> <small class = "text-light">recent </small> </button>
  <button onclick = "contacts()" class = "text-primary  rec"> <span class="material-symbols-outlined symb">
  person
  </span> <small class = "text-light">Contacts </small> </button>
  <button class = "text-primary  rec"> <span class="material-symbols-outlined symb">
  grade
  </span> <small class = "text-light">Favorite </small> </button>
</div>
    </div>`
}
let anArray = []
let index = 0

document.getElementById("dial").innerHTML = dial;
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
function sim1() {
   homepage.innerHTML = ""
   screen3.innerHTML = ""
   

}

function contacts() {
    screen3.innerHTML = ""
    screen3.innerHTML = `
      
    `
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
function back() {
    screen.innerHTML = ""
    defaultScreen()
    setInterval(() => {
        window.location.reload();
    }, 50);
}