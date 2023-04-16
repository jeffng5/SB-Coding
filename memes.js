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


function uploadImage(){
  let val = document.querySelector('#imagename').value
  src= val;
  img = document.querySelector('img');
  img.src = src;
  document.getElementById('display_image').appendChild(img);
  let frame=document.getElementById('display_image');
  let frame2= document.createElement('img');
  frame.appendChild(frame2).setAttribute('src')
  return frame2;
}

let meme=document.getElementById('bottombutton')
meme.addEventListener('click', (e) => {
    e.preventDefault(); uploadImage()

  });


let delvid=document.getElementById('rembutton')
delvid.addEventListener('click', function(e) {
    let vidtag=document.getElementsByClassName('vid')
    let imgtag=document.getElementsByClassName('profile')
    vidtag.remove()
    imgtag.remove()

})