// let sub=document.getElementById('sub')

// let image=document.getElementById('display');
// image.style.width="30rem"
// image.style.height="22rem"
// image.style.borderRadius="10px"

// let span=document.querySelectorAll('span')
// let topic=document.getElementById('topic')
// let content=document.getElementById('content')
// image.src="history.jpg"


// span.forEach((current,index)=>{
//     current.addEventListener('click',()=>{   
//         current.style.backgroundColor="white"     
//         if(index==1){
//             image.src="vision.jpg"
//             topic.innerText="Vision";
//             content.innerText="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
//         };
//         if(index==2){
//             image.src="goals.jpg"
//             topic.innerText="Goals";
//             content.innerText="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself";
//         }
//         if(index==0){
//             image.src="history.jpg"
//             topic.innerText="History"
//             content.innerText="But I must explain and the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain"
//         }
//     })
// })

// span.forEach((current)=>{
//     current.addEventListener('mouseover',()=>{
//       current.style.backgroundColor="lightblue"
//       current.style.color="purple"
//     })
//     current.addEventListener('mouseleave',()=>{
//         current.style.backgroundColor=""
//         current.style.color=""
//     })
// })


let span=document.querySelectorAll('span')

const obj=[
    {
        img:'history.jpg',
        topic:'History',
        content:'But I must explain and the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain'
        
    },
    {
        img:'vision.jpg',
        topic:'Vision',
        content:'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
    },
    {
        img:'goals.jpg',
        topic:'Goals',
        content:'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself'
 
    }
]

let img=document.getElementById('display');
let topic=document.getElementById('topic')
let content=document.getElementById('content')
let index=0

img.src=obj[index].img
topic.innerText=obj[index].topic
content.innerText=obj[index].content

for(let i=0;i<span.length;i++){
    span[i].addEventListener('click',()=>{
            img.src=obj[i].img
            topic.innerText=obj[i].topic
            content.innerText=obj[i].content
    span.forEach((current,indexes)=>{
        if(i==indexes){
            current.style.backgroundColor="white"
        }
        else{
            current.style.backgroundColor="rgb(197, 193, 193)"
        }
    })
    })
}

