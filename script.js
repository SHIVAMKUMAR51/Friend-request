var a = document.querySelector("h5")
var b = document.querySelector("#friend");
var flag =0;

b.addEventListener("click", function(){
    if(flag==0){
        a.innerHTML = "Friends now";
        a.style.color = "Green";
        b.innerHTML = "Remove friend";
        b.style.backgroundColor ="pink";
        flag = 1;
    }
    else if(flag==1){
    a.innerHTML = "Strangers";
    a.style.color = "Red";
    b.innerHTML="Add friend";
    b.style.backgroundColor = "lightblue";
    flag=0;
    }

})

