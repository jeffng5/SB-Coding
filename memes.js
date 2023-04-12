
// function add(){

// const add = document.querySelector('#user-input').value 
// const h2 = document.querySelector('h2')
// h2.append(add)
// return h2}

// const uppertext = document.getElementById("topbutton")
// uppertext.addEventListener("click", function(e) {add() ; e.preventDefault()})

// function addPunchLine(){
// const punchLine= document.querySelector('#user-input2').value
// const span = document.querySelector('span')
// span.append(punchLine)
// return span}

// const bottomtext = document.getElementById("bottombutton")
// bottomtext.addEventListener("click", function(e) {addPunchLine() ; e.preventDefault()})



// //I used https://www.youtube.com/watch?v=lzK8vM_wdoY for this block of code//
// const memegen = document.getElementById('photo')
// let uploaded_image = ""

// memegen.addEventListener("change", function(){
// const reader = new FileReader();
// reader.addEventListener("load", () => {
//     uploaded_image = reader.result;
//     document.querySelector('#display_image').style.backgroundImage = `url(${uploaded_image})`
// });
// reader.readAsDataURL(this.files[0]);

// })

function addPunchLine(){
    const add = document.querySelector('#user-input').value 
    const h2 = document.querySelector('h2')
    h2.append(add)
    const punchLine= document.querySelector('#user-input2').value
    const span = document.querySelector('span')
    span.append(punchLine)
    return h2, span};

const bottomtext = document.getElementById("bottombutton")
bottomtext.addEventListener("click", function(e) {e.preventDefault(); addPunchLine()})


//I used https://www.codewithlinda.com/blog/upload-picture-on-the-web for these block of code///

const getValuesFromInputs = () =>{
    const profileImg = document.querySelector('input.profile-img').files[0];
    const profileVid = document.querySelector('input.profile-vid').files[0];
 
    document.querySelector('form').style.display = 'none';
 
    return [profileImg, profileVid];
 
 }


 const convertInputValues = () => {
    const [profileImg, profileVid] = getValuesFromInputs();
  let binaryData=[]
  let binaryData2=[]
  binaryData.push(profileVid)
  binaryData2.push(profileImg)
    
  const profileImgURL = URL.createObjectURL(new Blob(binaryData2, {type: "application/zip"}));
  const profileVidURL = URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}));  
  
    return[profileVidURL, profileImgURL]
  }


  const addInputToProfile = () => {

    const [profileVidURL, profileImgURL]  = convertInputValues();

    document.querySelector('.profile img').setAttribute('src', profileImgURL);
    document.querySelector('.vid').setAttribute('src', profileVidURL);

}

let meme=document.getElementById('bottombutton')
meme.addEventListener('click', (e) => {
    e.preventDefault();
    addInputToProfile();
  });


let delvid=document.getElementById('remobutton')
delvid.addEventListener('click', function(e) {
    let vidtag=document.getElementsByClassName('vid')
    let imgtag=document.getElementsByClassName('profile')
    vidtag.remove()
    imgtag.remove()

})