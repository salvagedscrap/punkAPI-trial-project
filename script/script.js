

let section = document.querySelector('section')

let select = document.querySelector('select');
let beerArr 

fetch(`https://api.punkapi.com/v2/beers
`)
.then(res=>res.json())
.then(data=>{
    
        console.log(data); 
        let beerArr=data
     for(let i = 0; i<beerArr.length; i++){
          let option=document.createElement('option')
          option.innerText=beerArr[i].name
          select.appendChild(option)
          option.setAttribute('value',beerArr[i].id )
          
     }



     select.addEventListener('change', event=>{
          
          let url=`https://api.punkapi.com/v2/beers/${event.target.value}`
          fetch(url)
              .then(res=>{
                  return res.json();
              })
              .then(data=>{
                document.querySelector('.name').innerText=data[0].name;
                document.querySelector('.tagline').innerText=data[0].tagline;
                document.querySelector('.brewer-tips').innerText=data[0].brewers_tips;
                document.querySelector('.contributed_by').innerText=data[0].contributed_by;
                document.querySelector('.description').innerText=data[0].description;
                document.querySelector('.first-brewed').innerText=data[0].first_brewed;
                document.querySelector('.food-pairing').innerText=data[0].food_pairing;
                document.querySelector('img').src=data[0].image_url




                console.log(data);
                
                  
              })
  
  
     
        })

 
    })


