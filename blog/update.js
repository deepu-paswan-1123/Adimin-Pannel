let update_btn = document.querySelector("#update_btn");
let updatetitle = document.querySelector("#updatetitle");
let updatesubtitle = document.querySelector("#updatesubtitle");
let updatepicture = document.querySelector("#updatepicture");
let updatedescription = document.querySelector("#updatedescription");
let updatecategory = document.querySelector("#updatecategory");
let post_update_url;

updatepicture.addEventListener('change', function () {
    let freader = new FileReader();
    freader.addEventListener('load', function (e) {
        post_update_url = e.target.result
        // console.log(post_update_url)
    })
    freader.readAsDataURL(updatepicture.files[0])

})

function postupdate(index, postcategory, postpicture, posttitle, postsubtitle, postdescription) {
   

    foodtravles = JSON.parse(localStorage.getItem("foodtravles")) ?? [];
    sports = JSON.parse(localStorage.getItem("sports")) ?? [];
    fitness = JSON.parse(localStorage.getItem("fitness")) ?? [];
    updatetitle.value = posttitle
    updatesubtitle.value = postsubtitle
    // updatepicture.src=postpicture
    updatedescription.value = postdescription
    updatecategory.value = postcategory


    if (updatecategory.value == "sports") {
        update_btn.addEventListener('click', function () {
            sports[index] = {
                posttitle: updatetitle.value,
                postsubtitle: updatesubtitle.value,
                postpicture: post_update_url==undefined?postpicture:post_update_url,
                postdescription: updatedescription.value,
                postcategory: updatecategory.value,
            }
            localStorage.setItem("sports", JSON.stringify(sports))
            displaydata();
        })

    }



    if (updatecategory.value == "fitness") {
        update_btn.addEventListener('click', function () {
            fitness[index] = {
                posttitle: updatetitle.value,
                postsubtitle: updatesubtitle.value,
                postpicture: post_update_url,
                postdescription: updatedescription.value,
                postcategory: updatecategory.value
            }
            localStorage.setItem("fitness", JSON.stringify(fitness))
            displaydata();
        })
    }



    if (updatecategory.value == "latestnews") {
        update_btn.addEventListener('click', function () {
            latestnews[index] = {
                posttitle: updatetitle.value,
                postsubtitle: updatesubtitle.value,
                postpicture: post_update_url,
                postdescription: updatedescription.value,
                postcategory: updatecategory.value
            }
            localStorage.setItem("latestnews",JSON.stringify(latestnews))
            displaydata();
        })
    }





    if (updatecategory.value == "foodtravles") {
        update_btn.addEventListener('click', function () {
            foodtravles[index] = {
                posttitle: updatetitle.value,
                postsubtitle: updatesubtitle.value,
                postpicture: post_update_url,
                postdescription: updatedescription.value,
                postcategory: updatecategory.value
            }

            localStorage.setItem("foodtravles", JSON.stringify(foodtravles))
            displaydata();

        })

    }






}


