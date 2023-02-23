
let nav = document.getElementById("datescreen")
let homepage = document.getElementById("home")
let screen = document.getElementById("screen2")
let screen3 = document.getElementById("screen3")
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
    homepage.innerHTML = ` <hr> <div class="d-flex phonecall w-100">
       <div class="border rounded-4 w-75  inp-div">
           <span class="material-symbols-outlined search">
               search
           </span>
           <input type="text" class="w-75 rounded-4 " placeholder="Search Contacts">
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
    `
    screen3.innerHTML = `<div class = "text-light ">lorem </div>`
}


function defaultScreen() {
    homepage.innerHTML = `
        <div  class="d-flex justify-content-between mx-3 ">
                <button class="btn btn-success cam"><i class="fa-solid fa-phone fs-5 py-1"></i></button>
                <button onclick="home()" class="btn btn-dark dark py-2"><i class="fa-solid fa-house"></i></button>
                <div class="mt-5 mx-2 big-div">
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
            <div class="mx-3 big-div">
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
                <div class="mx-3 big-div">
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
            </div>
            
            <button onclick ="back()" class = "back"> <span class="material-symbols-outlined">
play_arrow
</span> </button>`

}
function back() {
    screen.innerHTML = ""
    defaultScreen()
    window.location.reload();
}