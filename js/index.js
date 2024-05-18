// var xhr=new XMLHttpRequest();
// var arr=[];
// xhr.addEventListener('readystatechange',function(){
//     if(xhr.readyState==4){
//      arr=JSON.parse(xhr.responseText);
//      display();
//     }

// })
// xhr.open('get','https://jsonplaceholder.typicode.com/posts')
// xhr.send()


// function display(){
//     var box='';
//     for(var i=0;i<arr.length;i++){
//      box+=`
//      <div class="col-md-4" class=form-contrle>
//      <p>${arr[i].id}</p>
//      <p>${arr[i].title}</p>
//      <p>${arr[i].body}</p>
//     </div>
//      `
//     }
//     document.getElementById('demo').innerHTML=box
// }
// var posts=[];
//     http.addEventListener('readystatechange',function(){

//         if(http.readyState==4){
//            posts=JSON.parse(http.responseText).recipes
//            Display()
//         }
//       })

// var http=new XMLHttpRequest();
//  var posts=[];
 
// http.open('GET',`https://forkify-api.herokuapp.com/api/search?q=pizza`)
// http.send();

// function Display(){

//     var cartona='';
//     for(var i=0;i<posts.length;i++){
//         cartona+=`
//         <div class="col-md-4">
       
//         <img src="${posts[i].image_url}" width="300" height="300">
//         <p>${posts[i].title}</p>
//           <a href="${[i].source_url}">${posts[i].publisher}</a>
//       </div>
     
//         `
//     }
//     document.getElementById('demo').innerHTML=cartona
// }


// var http=new XMLHttpRequest();
// var posts=[];
// function Data(){
//     http.addEventListener('readystatechange',function(){
//         if(http.readyState==4){
//           posts=JSON.parse(http.responseText).recipe
//           console.log(posts);
//           Display()
//         }
//      })
//      http.open('get',`https://forkify-api.herokuapp.com/api/search?q=pizza`);
//      http.send();
     
// }
// Data();
// function Display(){
//     var box=''
//     for(var i=0;i<posts.length;i++){
//       box+=`
//       <div class="col-md-4">
//       <img src=" ${posts[i].image_url}"  width="300" height="300">
//       <p>${posts[i].title}</p>
//     </div>
//       `
//     }
//     document.getElementById('demo').innerHTML=box
// }


// document.addEventListener("DOMContentLoaded",function(){

// document.querySelector("#red").onclick =function(){
// document.querySelector("#amr").style.color="red";
// }
// })

// document.addEventListener("DOMContentLoaded",function(){
//     document.querySelector("#red").onclick=function(){
//         document.getElementById("amr").style.background="green";
//     }
// })
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("sub")
    document.getElementById("text").onkeyup=function(){
        if(document.getElementById("sub").value.length > 6){
            document.getElementById("text")
        }else{
            document.getElementById("sub")
        }
    }

})








