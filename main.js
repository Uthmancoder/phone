let nav = document.getElementById("datescreen")
let homepage = document.getElementById("home")
let screen = document.getElementById("screen2")
let screen3 = document.getElementById("screen3")
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


function cardgenerator() {
    homepage.innerHTML = ""
    screen.innerHTML = ""
    document.getElementById("phone").style.backgroundImage = "none";
    document.getElementById("phone").style.backgroundColor = "teal";
    homepage.innerHTML += `
     <div>
       <h1 class="text-light text-center"> Recharge card generator </h1>
       <p class="text-light"> to use this recharge card generator you have to select a network provider and the amount of card you wanted to generate then generate </p>
       <main>
       <select name="" id="provider">
         <option value="">Select a network provider</option>
         <option value="MTN">MTN</option>
         <option value="GLO">GLO</option>
         <option value="AIRTEL">AIRTEL</option>
         <option value="etisalat">9mobile</option>
       </select>
       <select name="amount" id="amount">
         <option value=""> Amount</option>
         <option value="100">100 </option>
         <option value="200">200 </option>
         <option value="500">500 </option>
         <option value="1000">1000 </option>
       </select>
       <button class="btn btn-dark mx-5 my-3 " onclick="generate()">generate</button>

       <p id="cardscreen" clas="text-light fs-5"> </p>
    </main> 
     </div>

     <div class = "w-100  px-3 back-div d-flex align-items-center galfoot">
     <button onclick ="backto()" class = "back"> <span class="material-symbols-outlined fs-2">
     arrow_left
     </span> </button>
     <button onclick ="backto()" class = "back mid"> <span class="material-symbols-outlined mx-5">
     panorama_fish_eye
     </span> </button>
    
     <button onclick ="backto()" class = "back bck"> <span class="material-symbols-outlined fs-4">
     play_arrow
     </span></button>
     </div>
    `

}
function backto() {
    homepage.innerHTML = ""
    screen.innerHTML = ""
    document.getElementById("phone").style.backgroundImage = "url(https://wallpaper.dog/large/742006.jpg)";
    document.getElementById("phone").style.backgroundColor = "none";
    home();
}  
let provider = document.getElementById("provider")
let amount = document.getElementById("amount")
// let rechargepin = Math.floor(Math.random() * 9999999999999999)
let MTN = [];
let GLO = [];
let AIRTEL = [];
let etisalat = []
let cardId = 0
let allrec = []
let q = 10
function generate() {
    let rechargepin;
    do {
        rechargepin = Math.floor(Math.random() * 999);
    } while (allrec.includes(rechargepin)); // keep generating until a unique pin is found
    allrec.push(rechargepin); 
    cardId++
    if (document.getElementById("provider").value == "" || document.getElementById("amount").value == "") {
        alert("invalid operation")
        return
    } else if (document.getElementById("provider").value == "MTN") {
        MTN.push({network : document.getElementById("provider").value, Id :cardId, amount:document.getElementById("amount").value,pin: rechargepin}   )
        console.log(MTN);
  document.getElementById("cardscreen").innerHTML =`<div>
   <p class = "text-light"> Provider : ${document.getElementById("provider").value} </p> 
   <p class = "text-light"> Amount : ${document.getElementById("amount").value} </p> 
   <p class = "text-light"> Pin : ${rechargepin} </p> 
   
   </div>`
        alert(`you have successfully generated an ${document.getElementById("provider").value} card of ${document.getElementById("amount").value} Naira`)
    } else if (document.getElementById("provider").value == "GLO") {
        GLO.push(document.getElementById("provider").value, document.getElementById("amount").value, rechargepin)
        console.log(GLO);
        document.getElementById("cardscreen").innerHTML =`<div>
        <p class = "text-light"> Provider : ${document.getElementById("provider").value} </p> 
        <p class = "text-light"> Amount : ${document.getElementById("amount").value} </p> 
        <p class = "text-light"> Pin : ${rechargepin} </p> 
        
        </div>`
        alert(`you have successfully generated an ${document.getElementById("provider").value} card of ${document.getElementById("amount").value} Naira`)
    } else if (document.getElementById("provider").value == "AIRTEL") {
        AIRTEL.push(document.getElementById("provider").value, document.getElementById("amount").value, rechargepin)
        console.log(AIRTEL);
        document.getElementById("cardscreen").innerHTML =`<div>
        <p class = "text-light"> Provider : ${document.getElementById("provider").value} </p> 
        <p class = "text-light"> Amount : ${document.getElementById("amount").value} </p> 
        <p class = "text-light"> Pin : ${rechargepin} </p> 
        
        </div>`
        alert(`you have successfully generated an ${document.getElementById("provider").value} card of ${document.getElementById("amount").value} Naira`)
    } else if (document.getElementById("provider").value == "etisalat") {
        etisalat.push(document.getElementById("provider").value, document.getElementById("amount").value, rechargepin)
        console.log(etisalat);
        document.getElementById("cardscreen").innerHTML =`<div>
        <p class = "text-light"> Provider : ${document.getElementById("provider").value} </p> 
        <p class = "text-light"> Amount : ${document.getElementById("amount").value} </p> 
        <p class = "text-light"> Pin : ${rechargepin} </p> 
        
        </div>`
        alert(`you have successfully generated an ${document.getElementById("provider").value} card of ${document.getElementById("amount").value} Naira`)
    }
}
function dislpad() {
    screen3.innerHTML += `
    <div class="container" name = "container" id="container">
    <div class= "d-flex align-items-center callinp">
    <p id="input"></p>
    <button onclick= "deletenum()" class="btn btn text-light"> <span class="material-symbols-outlined">
    backspace
    </span> </button>
    </div>
   <div class= "nums">
   <button class="dial" onclick="dislnum(1)">1</button>
   <button class="dial" onclick="dislnum(2)">2</button>
   <button class="dial" onclick="dislnum(3)">3</button>
   <button class="dial" onclick="dislnum(4)">4</button>
   <button class="dial" onclick="dislnum(5)">5</button>
   <button class="dial" onclick="dislnum(6)">6</button>
   <button class="dial" onclick="dislnum(7)">7</button>
   <button class="dial" onclick="dislnum(8)">8</button>
   <button class="dial" onclick="dislnum(9)">9</button>
   <button class="dial" onclick="dislnum('*')">*</button>
   <button class="dial" onclick="dislnum(0)">0</button> 
   <button class="dial" onclick="dislnum('#')">#</button> 
   </div>
   <button onclick = "mtn()" class = "rounded-circle place"><span class="material-symbols-outlined">
   call
   </span>1 </button>
   <button onclick= "airtel()" class = "rounded-circle plac"><span class="material-symbols-outlined">
   call
   </span>2 </button>
  </div>
    `
}
let inp = document.getElementById("input")
function mtn() {
     homepage.innerHTML = ""
    document.getElementById("container").style.display = "none"
    document.getElementById("dialpad").style.display = "none"
    let found = MTN.find((current)=> current.pin && current.amount )
        console.log(found);
        recentArray.push(document.getElementById("input").innerHTML) 
        console.log(document.getElementById("input").innerHTML);
        if (document.getElementById("input").innerHTML.startsWith(0) && document.getElementById("input").innerHTML.length <= 10){        
            let myTimer = setTimeout(() => {
                document.getElementById("audio").play();
            }, 1000);
        
            audioinit = setTimeout(() => {
                alert("user is not responding")
                hangup()
            }, 5000);
        
        
            document.getElementById("phone").style.backgroundImage = "linear-gradient(to bottom, rgb(35, 40, 62), rgb(37,42, 64),rgb(47,54, 80), rgb(62,74,100))";
            homepage.innerHTML += `
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
             <br>  <span class = "text-light top"> ${document.getElementById("input").innerHTML} </span></p>
          
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
           screen3.innerHTML = ""   
        }
        
    else if (document.getElementById("input").innerHTML.startsWith("*555*") && document.getElementById("input").innerHTML.includes(`${found.pin}`) && document.getElementById("input").innerHTML.endsWith("#") ) {
        alert("recharge successful")
        alert (`${found.amount} has been added to your balance`)
        console.log( document.getElementById("input").innerHTML.includes(`${found.pin}`));
    }
    
    else{
        alert("incorrect pin")
        console.log( document.getElementById("input").innerHTML.includes(`${found.pin}`));
    }
  
}
function autorecent() {
    screen3.innerHTML =
        `

<div class = "recent  Py-2"> 
<button class = "text-primary  rec "> <span class="material-symbols-outlined">
schedule
</span> <small class = "text-light small mx-1">recent </small> </button>
<button onclick = "contacts()" class = "text-primary  rec"> <span class="material-symbols-outlined symb">
person
</span> <small class = "text-light small">Contacts </small> </button>
<button class = "text-primary  rec" onclick = "favorite()"> <span class="material-symbols-outlined symb">
grade
</span> <small class = "text-light small">Favorite </small> </button>
</div>
<button id="dialpad" onclick = "dislpad()" class = "btn btn-primary shadow rounded-circle dialpad"> <span class="material-symbols-outlined">
apps
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
</div>
`

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

function dislnum(tone) {
    document.getElementById("input").innerHTML += tone
}

 function camera() {
    homepage.innerHTML = ""
    screen2.innerHTML = ""
    screen3.innerHTML = ""
    document.getElementById("phone").style.backgroundImage = "none";
 }

function phone() {
   
    homepage.innerHTML = ""
    screen2.innerHTML = ""
    screen3.innerHTML = ""
    document.getElementById("phone").style.backgroundImage = "none";
    document.getElementById("phone").style.backgroundColor = "rgb(30, 30, 30)";
    homepage.innerHTML += ` 
    <div class="d-flex phonecall">
        <div class="border rounded-4 w-100  inp-div">
            <span class="material-symbols-outlined search">
                search
            </span>
            <input  type="text" class="w-100 rounded-4 input" placeholder="Search Contacts">
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
`;

    recent();
}
function deletenum() {
    let input = document.getElementById("input");
    input.innerHTML = input.innerHTML.slice(0, -1);
}

let cardArray = [
    {
        description: "Mtn",
        pricelist: [
            {
                100: 0926667809 - 9867,
                200: 67890876367890
            }
        ]
    }
]

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
    homepage.innerHTML += `
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
   <p class = "text-light "> ${recentArray[index].name}
     <br>  <span class = "text-light top"> ${recentArray[index].phonenumber} </span></p>
  
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
    let timeForring = setTimeout(() => {
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
    homepage.innerHTML = "";
    recent();
  }
  
function hangup() {
    homepage.innerHTML = ""
    screen3.innerHTML = ""
    document.getElementById("phone").style.backgroundcolor = "black"
    autorecent();
    clearTimeout(audioinit)
    document.getElementById("audio").pause();


}
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
      </span> <small class = "text-light small firs mx-1">recent </small> </button>
      <button onclick = "contacts()" class = "text-light btn btn-primary rounded-circle recc"><i class="fa-solid fs-3 fa-plus"></i></button>
      <button class = "text-primary  rec" onclick = "favorite()"> <span class="material-symbols-outlined symb">
      grade
      </span> <small class = "text-light small mall sma">Favorite </small> </button>
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
                        <button onclick="phone()" class="btn btn-success apps  py-2 m-2"><span class="material-symbols-outlined">
                        call
                        </span></button>
                        <small class="text-white mx-4">phone</small>
                    </div>
                    <div class="app-div mx-3">
                        <button class="btn btn-dark apps  py-2 m-2"><span class="material-symbols-outlined">
                                stadia_controller
                            </span> </i></button>
                        <small class="text-white mx-2">games</small>
                    </div>
                    <div class="app-div">
                        <button onclick = "caculator()" class="btn btn-dark apps  py-2 m-2"><img class= "img-fluid" src = "https://png.pngtree.com/element_our/20190602/ourmid/pngtree-silver-cartoon-calculator-image_1418076.jpg"></button>
                        <small class="text-white">Caculator</small>
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
                        <button onclick = "cardgenerator()" class="btn btn-dark apps  py-2 my-2 mx-3"><span class="material-symbols-outlined">
                        local_atm
                        </span></button>
                        <small class="text-white mx-2">Generator</small>
                    </div>
                    <div class="app-div">
                        <button class="btn btn-dark apps  py-2 m-2"><i class="fa-brands fa-linkedin"></i></button>
                        <small class="text-white my-2 ml-4">linkedin</small>
                    </div>
                    <div class="app-div mx-3">
                        <button onclick = "music()" class="btn btn-dark apps  py-2 my-2"><i class="fa-solid fa-music"></i></button>
                        <small class="text-white ml-3">Music</small>
                    </div>
                    <div class="app-div">
                        <button onclick = "message()" class="btn btn-dark apps  py-2 m-2"><i class="fa-solid fa-envelope"></i></button>
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
                        <button onclick="gallery()" class="btn btn-dark apps  py-2 m-2"><i class="fa-solid fa-image"></i></button>
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
                        <small onclick = "gallery()" class="text-white mx-3">gallery</small>
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

function caculator() {
    homepage.innerHTML = ""
    screen.innerHTML = ""
    document.getElementById("phone").style.backgroundImage = "none";
    document.getElementById("phone").style.backgroundColor = "teal";
    screen.innerHTML += `
        <div action="" class="caculator " id="caculator">
        <div class="display">
            <p class="caclscreen border shadow text-light" id="caculatorScreen"> </p>
          <h3 class="fw-bold shadow my-3 mx-4 px-2 "> Avatron 396</h3>
             <button class="but shadow"  onclick="clearscr()">C</button>
             <button class="but shadow"  onclick="mynumbers(9)">9</button>
             <button class="but shadow"  onclick="mynumbers(8)">8</button>
             <button class="but shadow"  onclick="mynumbers('+')">+</button>
             <button class="but shadow"  onclick="mynumbers(7)">7</button>
             <button class="but shadow"  onclick="mynumbers(6)">6</button>
             <button class="but shadow"  onclick="mynumbers(5)">5</button>
             <button class="but shadow"  onclick="mynumbers('*')">*</button>
             <button class="but shadow"  onclick="mynumbers(4)">4</button>
             <button class="but shadow"  onclick="mynumbers(3)">3</button>
             <button class="but shadow"  onclick="mynumbers(2)">2</button>
             <button class="but shadow"  onclick="mynumbers('/')">/</button>
             <button class="but shadow"  onclick="clearscr(1)">1</button>
             <button class="but shadow"  onclick="mynumbers(0)">0</button>
             <button class="but shadow"  onclick="equas()">=</button>
  
             
        </div>
        <div id = "galleryscreeen" class = "galleryscreeen"> 
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
      </div>
    </form>
        `

}

function mynumbers(uth) {
    document.getElementById("caculatorScreen").innerHTML += uth;
}
function equas() {
    document.getElementById("caculatorScreen").innerHTML = eval(document.getElementById("caculatorScreen").innerHTML)
    console.log(eval(document.getElementById("caculatorScreen").innerHTML));
}
function clearscr() {
    document.getElementById("caculatorScreen").innerHTML = ""
}
let galleryArray = [`<img  src="calender.jpg" alt="">`, `<img src="call.jpg" alt="">`, `<img src="instagram.jpg" alt="">`, `<img src="let'schat.jpg" alt="">`, `<img src="music.jpg" alt="">`, `<img src="phonebook.jpg" alt="">`, `<img src="photos.jpg" alt="">`, `<img src="whatsapp.jpg" alt="">`, `<img src="telegram.jpg" alt="">`, `<img src="music.jpg" alt="">`, `<img src="linkedin.jpg" alt="">`, `<img src="tiktok.jpg" alt="">`]
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

let messageArray = [
    {
        image: `./whatsapp.jpg`,
        name: "Ultimate",
        pohonenum: 08132577114,
        message: [
            {
                sentby: "me",
                chat: "hey bro",
                chat2: "How tinz"
            },
            {
                sentfron: "someoneelse",
                chat: "Boss man"
            }
        ]

    },
    {
        image: `./telegram.jpg`,
        name: "Mahmood",
        pohonenum: 09152577114,
        message: [
            {
                sentby: "me",
                chat: "Aburo",
                chat2: "How tinz"
            },
            {
                sentfron: "someoneelse",
                chat: "Haffa na"
            }
        ]

    },
    {
        image: `./whatsapp.jpg`,
        name: "Dev-D",
        pohonenum: 07152577114,
        message: [
            {
                sentby: "me",
                chat: "Oga mhi sir",
                chat2: "How tinz"
            },
            {
                sentfron: "someoneelse",
                chat: "Senior Dev"
            }
        ]

    },
    {
        image: `./telegram.jpg`,
        name: "Abdullahi",
        pohonenum: 08032597114,
        message: [
            {
                sentby: "me",
                chat: "Bro ",
                chat2: "how life😗"
            },
            {
                sentfron: "someoneelse",
                chat: "Haffa",

            }
        ]

    },
    {
        image: `./instagram.jpg`,
        name: "Mayor",
        pohonenum: 071577114,
        message: [
            {
                sentby: "me",
                chat: "Boss",
                chat2: "How tinz"
            },
            {
                sentfron: "someoneelse",
                chat: "What's up"
            }
        ]

    },
]


function message() {
    homepage.innerHTML = ""
    screen.innerHTML = ""
    document.getElementById("phone").style.backgroundImage = "none";
    document.getElementById("phone").style.backgroundColor = "black";

    homepage.innerHTML += `
    <div class = "d-grid"> 
       <div class=" border rounded-2 bgdk p-1 shadow d-flex align-items-center">
              <span class="material-symbols-outlined text-light">
                search
             </span>
            <input type="text"  class=" w-75 inpp shadow text-light  border-0" placeholder="search contacts">
        </div> 
       <p id="mesageScreen" class="messageScreen"></p>
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
    </div>  
    </div>

    `
    for (let index = 0; index < messageArray.length; index++) {
        const element = messageArray[index];
        document.getElementById("mesageScreen").innerHTML += `
          <div onclick = "sentmessage(${index})" class = "d-flex  my-3"> 
          <img class = "albulm rounded-circle" src ="${element.image}"> 
          <div class = "mx-2">
          <small class = "text-light"> ${element.name} </small><br>
          <small class = "text-light"> ${element.pohonenum} </small>
          </div>

          </div>
        `

    }
}

function sentmessage(index) {
    homepage.innerHTML = ""
    homepage.innerHTML += `
     <div  class = "d-grid"> 
       <div class = "text-light d-flex  mesg align-items-center">
       <button onclick = "tomessage()" class = "btn btn"> <span class="material-symbols-outlined">
       chevron_left
       </span> </button>
        ${messageArray[index].name} 
        </div>
      <div id = "contentscreen" class = "contentscreen  text-light " >
         <p id ="contentscreen1"></p>
         <p id="contentscreen2"></p>
      </div>
      <div class ="w-100 bottom">
      <input id= "newmessageinp" type="text" class ="messageinp" placeholder="Type Message">
      <button id = "" onclick = "sendmessage()" class = "btn btn text-primary shadow rounded-4 px-3" ><span class="material-symbols-outlined">
        send
        </span></button>
      </div> 
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
     </div>  
     
    `
    for (let i = 0; i < messageArray[index].message.length; i++) {
        const element = messageArray[index].message[i];
        console.log(element);
        if (element.sentby == "me") {
            document.getElementById("contentscreen1").innerHTML = ""
            document.getElementById("contentscreen1").innerHTML += `
             <button class = "curv btn btn-primary py-2 px-3 "> ${element.chat} </button> <br>
        `
        } else {
            document.getElementById("contentscreen2").innerHTML = ""
            document.getElementById("contentscreen2").innerHTML += `
             <button class = "curvv btn btn-primary"> ${element.chat}</button> <br>
        `
        }


    }


}
let newmesage = document.getElementById("newmessage")
function sendmessage() {
    document.getElementById("contentscreen2").innerHTML += ` <button class = "curvv btn btn-primary py-2 px-3 my-1"> ${newmessageinp.value}</button> <br>`
    newmessageinp.value = ""

}
function tomessage() {
    homepage.innerHTML = ""
    message();
}


function starttochat() {
    homepage.innerHTML = ""
}


function gallery() {
    // homepage.innerHTML = ""
    screen.innerHTML = ""
    allImages();
}
let gscreen = document.getElementById("galleryscreeen")
function singleImage(index) {
    screen.innerHTML = `
    <button onclick = "bktogal()" class = "borda text-light"> <span class="material-symbols-outlined ">
    arrow_back_ios_new
    </span> </button>
      <div  class = "singleimg">
       <p id="g-image" class ="exact"> ${galleryArray[index]} </p>
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

let musicArray = [
    {
        image: `trendybeat.png`,
        artist: "T-dollar",
        name: "Ti-Blaze-Rise",
        song: `./Ruger-Bounce.mp3`

    },
    {
        image: `trendybeat.png`,
        artist: "Sheyi-vibes",
        name: "T-Dollar-Rise",
        song: `./audio/Burna_Boy_Anybody_9jaflaver.com_.mp3`,

    },
    {
        image: `trendybeat.png`,
        artist: "Sheyi-vibes",
        name: "Seyi-Vibez-On your Own (O.Y.O)",
        song: `./Seyi-Vibez-On your Own (O.Y.O).mp3`,

    },
    {
        image: `trendybeat.png`,
        artist: "Sheyi-vibes",
        name: "Seyi_Vibez_-_God_sent",
        song: `./Seyi_Vibez_-_God_sent.mp3`,

    },
]
function music() {
    homepage.innerHTML = ""
    screen.innerHTML = ""
    document.getElementById("phone").style.backgroundImage = "none";
    document.getElementById("phone").style.backgroundColor = "rgb(49, 49, 49)";
    // HTML structure
    for (let index = 0; index < musicArray.length; index++) {
        const element = musicArray[index];
        screen.innerHTML += `
      <div onclick = "playsong(${index})" class="d-flex align-items-center">
        <img class="img-fluid pxt mx-2 my-2 shadow albulm" src="${element.image}" alt="">
        <div>
          <p class="text-light wdth">${element.name}</p>
          <div id= "current-song" class = "current-song">
            <p id = "currently""></p>
            <p class="song-name"></p>
            <input  type="range" class="d-none song-progress" value="0" min="0" step="0.01">
          </div>
        </div>
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
      </div> 
    `;
    }


    // Event listener for audio element
    const audioPlayer = document.querySelectorAll('.audio-player');
    const songName = document.querySelectorAll('.song-name');
    const playingnow = document.getElementById('.currently');
    const songProgress = document.querySelectorAll('.song-progress');

    // audioPlayer.forEach((player, index) => {
    //     player.addEventListener('play', () => {
    //         playingnow.innerHTML = `<p class="text-light"> ${element.artist} - ${element.name} </p>`;
    //     });
    //     player.addEventListener('timeupdate', () => {
    //         songProgress[index].value = player.currentTime;
    //     });
    //     songProgress[index].addEventListener('input', () => {
    //         player.currentTime = songProgress[index].value;
    //     });
    // });

}
function playsong(index) {
    document.getElementById('currently').innerHTML = `
      <div class="d-flex align-items-center">
        <img class="img-fluid mx-2 my-2 shadow alb" src="${musicArray[index].image}" alt="">
        <div class="d-grid">
          <small class="text-light fonmt">${musicArray[index].artist}</small>
          <small class="text-light">${musicArray[index].name}</small>
        </div>
        <button class="play-pause-button alb playll px-1 rounded-circle border-0 shadow" onclick="togglePlayPause(event)">
          <i class="fa fa-play"></i>
        </button>
        <audio id="audio-player" autoplay src="${musicArray[index].song}"></audio>
      </div>
    `;
}
function togglePlayPause(event) {
    const audio = event.target.parentElement.querySelector('audio');
    const playPauseBtn = event.target;

    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = '<i class="fa fa-pause"></i>';
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fa fa-play"></i>';
    }
}
function back() {
    screen.innerHTML = ""
    defaultScreen()
    setInterval(() => {
        window.location.reload();
    }, 50);
}