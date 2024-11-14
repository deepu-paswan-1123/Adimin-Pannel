let img=document.querySelector(".img");
let profile=document.querySelector(".profile");
let register_email=document.querySelector(".register_email");
let register_password=document.querySelector(".register_password");
let register_btn=document.querySelector(".register_btn");
let reg_btn1=document.querySelector(".reg_btn1");
let login_email=document.querySelector(".login_email");
let login_password=document.querySelector(".login_password");
let log_btn=document.querySelector(".log_btn");
let hide=document.querySelector(".hide");
let nav_hide=document.querySelector(".nav_hide");
let a="0";
let admin_data=[];
let admin_log_out=document.querySelector(".admin_log_out");
let user_name=document.querySelector(".user_name")
let my_image=document.querySelector(".my_image");

img.addEventListener('click',function(){
    profile.classList.toggle("profile1");
   
})

register_btn.addEventListener('click',function(){
   
    
    admin_data.push({
        register_email:register_email.value,
        register_password:register_password.value,
        register_img:"",
    })
    localStorage.setItem("reg_res",JSON.stringify(admin_data))
    
    checkregister();
   
})

function checkregister(){
    registerdata=JSON.parse(localStorage.getItem("reg_res")) ?? [];
    // alert(registerdata.length)
    if(registerdata.length==1){
        reg_btn1.classList.add("reg_btn2");
    }
    else{
        register_btn.classList.remove("reg_btn2");
    }
}

checkregister();

log_btn.addEventListener('click',function(){
    let login_data=JSON.parse(localStorage.getItem("reg_res")) ?? [];
    
    if(login_data[0].register_email==login_email.value && login_data[0].register_password==login_password.value){
        a=1;
        localStorage.setItem("log_res",a);
        checkform();
        
    }
    else{
        alert("Your Email or password is wrong please check")
        a=0;
        localStorage.setItem("log_res",a);
    }
    login_email.value=""
    login_password.value=""
})



function log_out(){
    a=0;
    localStorage.setItem("log_res",a);
    hide.classList.remove("hide1");
    nav_hide.classList.remove("nav_hide2");
    
    checkform();
}

// update profile+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



let profile_img=document.querySelector("#profile_img")
let profile_email=document.querySelector("#profile_email");
let profile_pass = document.querySelector('#profile_pass')
let update_btn1=document.querySelector(".update_btn1")
let profile_btn=document.querySelector(".profile_btn");
let user_img=document.querySelector(".user_img");
let url;



profile_img.addEventListener('change',function(){
    let freader=new FileReader();

    freader.addEventListener('load',function(e){
        url=e.target.result
        user_img.src = url
        
    })

    freader.readAsDataURL(profile_img.files[0])


})

profile_btn.addEventListener('click',function(){
    profile_data=JSON.parse(localStorage.getItem("reg_res")) ?? [];
    
    profile_email.value=profile_data[0].register_email;
    profile_pass.value=profile_data[0].register_password;

   
    update_btn1.addEventListener('click',function(){
        // localStorage.setItem("reg_res",stringify(profile_data));
        profile_data[0]={
            register_email:profile_email.value,
            register_password:profile_pass.value,
            register_img:url,
            
        }

        localStorage.setItem("reg_res",JSON.stringify(profile_data));
        // user_name.innerHTML=profile_data[0].register_email
        profile.classList.remove("profile1")



        checkform();  
    })
   
    
})

//profile work end -------------------------------------------------------------------



   




function checkform(){
    let ad=localStorage.getItem("log_res");
    let  profile_data=JSON.parse(localStorage.getItem("reg_res")) ?? [];
    if(ad==1){
        hide.classList.add("hide1");
        nav_hide.classList.add("nav_hide2");
        registerdata=JSON.parse(localStorage.getItem("reg_res")) ?? [];
        user_name.innerHTML=registerdata[0].register_email
        my_image.src =profile_data[0].register_img
        user_img.src = profile_data[0].register_img


       
       
    }
    
}

checkform();





















