// work on post deatail is starting from here
let sports=[];
let fitness=[];
let latestnews=[];
let foodtravles=[];
let posttitle=document.querySelector("#posttitle");
let postsubtitle=document.querySelector("#postsubtitle");
let postpicture=document.querySelector("#postpicture");
let postdescription=document.querySelector("#postdescription");
let postcategory=document.querySelector("#postcategory");
let postbtn=document.querySelector("#postbtn");
let posturl;

postpicture.addEventListener('change',function(){
    let freader=new FileReader();
    freader.addEventListener('load',function(e){
        posturl=e.target.result
        console.log(posturl)
    })
    freader.readAsDataURL(postpicture.files[0])
})


postbtn.addEventListener('click',function(){
     
    if(postcategory.value == "sports"){
        sports=JSON.parse(localStorage.getItem("sports")) ?? [];
 
        sports.push({
              posttitle:posttitle.value,
              postsubtitle:postsubtitle.value,
              postpicture:posturl,
              postdescription:postdescription.value,
              postcategory:postcategory.value,
        })
     
        localStorage.setItem("sports",JSON.stringify(sports))
        // console.log(sports)
        
        
        displaydata();

    }

    if(postcategory.value=="fitness"){
        
        fitness=JSON.parse(localStorage.getItem("fitness")) ?? [];
        fitness.push({
            posttitle:posttitle.value,
            postsubtitle:postsubtitle.value,
            postpicture:posturl,
            postdescription:postdescription.value,
            postcategory:postcategory.value,
      })
      localStorage.setItem("fitness",JSON.stringify(fitness))
    //   
    displaydata();
        
    }


    if(postcategory.value=="latestnews"){
        latestnews=JSON.parse(localStorage.getItem("latestnews")) ?? [];
        latestnews.push({
            posttitle:posttitle.value,
            postsubtitle:postsubtitle.value,
            postpicture:posturl,
            postdescription:postdescription.value,
            postcategory:postcategory.value,
      })

      localStorage.setItem("latestnews",JSON.stringify(latestnews))

        // console.log(latestnews)
        displaydata();

    }
    
    if(postcategory.value=="foodtravles"){
        foodtravles=JSON.parse(localStorage.getItem("foodtravles")) ?? [];
        foodtravles.push({
            posttitle:posttitle.value,
            postsubtitle:postsubtitle.value,
            postpicture:posturl,
            postdescription:postdescription.value,
            postcategory:postcategory.value,
      })
      localStorage.setItem("foodtravles",JSON.stringify(foodtravles))
        // console.log(foodtravles)
        displaydata();
    }
    
    
   
 })


 function displaydata(){
 
//sports++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
let post_data1=document.querySelector("#post_data1");
post_data1.innerHTML="";
sports=JSON.parse(localStorage.getItem("sports")) ?? [];

sports.forEach(function(e,i){
    post_data1.innerHTML +=`
    <tr>
       <td>${i+1}</td>
       <td>${e.postcategory}</td>
       <td>
        <img src="${e.postpicture}" alt="" class="postimg">
       </td>
       <td>${e.posttitle}</td>
       <td>${e.postsubtitle}</td>
       <td>${e.postdescription}</td>
       <td>
       <button class="btn text-success editbtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop6"
       onclick="postupdate(${i}, '${e.postcategory}','${e.postpicture}','${e.posttitle}','${e.postsubtitle}','${e.postdescription}')">
        <i class="fa-solid fa-pen"></i>
        </button>

        <button class="btn text-danger delbtn" onclick="del('${e.postcategory}',${i})">
        <i class="fa-solid fa-trash"></i>
        </button>
       </td>
       
   </tr>



   `
})


// fitness+++++++++++++++++++++++
let post_data2=document.querySelector("#post_data2");
post_data2.innerHTML =""
fitness=JSON.parse(localStorage.getItem("fitness")) ?? [];
fitness.forEach(function(e,i){
    post_data2.innerHTML +=`
    <tr>
       <td>${i+1}</td>
       <td>${e.postcategory}</td>
       <td>
        <img src="${e.postpicture}" alt="" class="postimg">
       </td>
       <td>${e.posttitle}</td>
       <td>${e.postsubtitle}</td>
       <td>${e.postdescription}</td>
       <td>
       <button class="btn text-success editbtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop6"
       onclick="postupdate(${i}, '${e.postcategory}','${e.postpicture}','${e.posttitle}','${e.postsubtitle}','${e.postdescription}')">
        <i class="fa-solid fa-pen"></i>
        </button>

        <button class="btn text-danger delbtn" onclick="del('${e.postcategory}',${i})">
        <i class="fa-solid fa-trash"></i>
        </button>
       </td>
       
   </tr>



   `
})



// latestnews++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let post_data3=document.querySelector("#post_data3");
post_data3.innerHTML=""
latestnews=JSON.parse(localStorage.getItem("latestnews")) ?? [];
latestnews.forEach(function(e,i){
    post_data3.innerHTML +=`
    <tr>
       <td>${i+1}</td>
       <td>${e.postcategory}</td>
       <td>
        <img src="${e.postpicture}" alt="" class="postimg">
       </td>
       <td>${e.posttitle}</td>
       <td>${e.postsubtitle}</td>
       <td>${e.postdescription}</td>
       <td>
       <button class="btn text-success editbtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop6"
       onclick="postupdate(${i}, '${e.postcategory}','${e.postpicture}','${e.posttitle}','${e.postsubtitle}','${e.postdescription}')">
        <i class="fa-solid fa-pen"></i>
        </button>

        <button class="btn text-danger delbtn" onclick="del('${e.postcategory}',${i})">
        <i class="fa-solid fa-trash"></i>
        </button>
       </td>
       
   </tr>



   `
})




// foodtravels+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let post_data4=document.querySelector("#post_data4");
post_data4.innerHTML="";
foodtravles=JSON.parse(localStorage.getItem("foodtravles")) ?? [];
foodtravles.forEach(function(e,i){
    post_data4.innerHTML +=`
    <tr>
       <td>${i+1}</td>
       <td>${e.postcategory}</td>
       <td>
        <img src="${e.postpicture}" alt="" class="postimg">
       </td>
       <td>${e.posttitle}</td>
       <td>${e.postsubtitle}</td>
       <td>${e.postdescription}</td>
       <td>
       <button class="btn text-success editbtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop6"
       onclick="postupdate(${i}, '${e.postcategory}','${e.postpicture}','${e.posttitle}','${e.postsubtitle}','${e.postdescription}')" >
        <i class="fa-solid fa-pen" ></i>
        </button>

        <button class="btn text-danger delbtn" onclick="del('${e.postcategory}',${i})">
        <i class="fa-solid fa-trash"></i>
        </button>
       </td>
       
   </tr>



   `
})


}





// add post work is done here ++++++++++++++++++++++++++++++++++++++++++++++++++++++++




function del(del_cat,index){
    // console.log(del_cat)
  
    // deletion of sport data is working from here++++++++++++++
    if(del_cat== "sports" ){
        // alert("hoo")
        sports=JSON.parse(localStorage.getItem("sports")) ?? [];
        sports.splice(index,1)

        localStorage.setItem("sports",JSON.stringify(sports))
        displaydata();
    }
    // deletion of sport data is end from here------------------------------



    // deletion of fitness data is working from here++++++++++++++
    else if(del_cat=="fitness"){
        fitness=JSON.parse(localStorage.getItem("fitness")) ?? [];
        fitness.splice(index,1);

        localStorage.setItem("fitness",JSON.stringify(fitness))
        displaydata();
    }

     // deletion of sport data is end from here------------------------------


   

    // deletion of latestnews data is working from here++++++++++++++++++++++++++++
    else if(del_cat=="latestnews"){
        latestnews=JSON.parse(localStorage.getItem("latestnews")) ?? [];
        latestnews.splice(index,1);

        localStorage.setItem("latestnews",JSON.stringify(latestnews))
        displaydata();
    }
    // deletion of latestworking data is end from here---------------------------


    


    // deletion of foodtravels data is working from here+++++++++++++++++++++++++
    else if(del_cat=="foodtravles"){
        foodtravles=JSON.parse(localStorage.getItem("foodtravles")) ?? [];
        foodtravles.splice(index,1)

        localStorage.setItem("foodtravles",JSON.stringify(foodtravles))
        displaydata();
    }
    // deletion of latest data is end from here----------------------------------
   
}
displaydata();



