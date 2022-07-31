

let section = document.querySelector('section')


fetch(`https://api.imgflip.com/get_memes`)
.then(res=>res.json())
.then(data=>{
    let memesArr = data.data.memes
    console.log(memesArr);

    memesArr.forEach((item)=>{
        let memeHeader = document.createElement("h2");
        let memeImg = document.createElement('img')
        memeHeader.innerText = item.name;
        section.appendChild(memeHeader);
        memeImg.src = item.url
        section.appendChild(memeImg)
            
    })


})