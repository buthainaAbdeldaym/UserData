var nAme=document.querySelector(".parent .child2 .name");
var email=document.querySelector(".parent .child2 .email");
var pass=document.querySelector(".parent .child2 .pass");
var signup=document.querySelector(".parent .child2 button");

var acounts=[],x,y;

function addAcount(){
    x=0;
    var acount={
        Name:nAme.value,
        Email:email.value,
        Pass:pass.value
    }
    nAme.addEventListener("keydown",function(){
        document.querySelector(".parent .child2 .alert1").style.display="none";
        document.querySelector(".parent .child2 .alert4").style.display="none";
    })
    email.addEventListener("keydown",function(){
        document.querySelector(".parent .child2 .alert2").style.display="none";
    })
    pass.addEventListener("keydown",function(){
        document.querySelector(".parent .child2 .alert3").style.display="none";
    })

    if(nAme.value==""&&email.value==""&&pass.value=="")
    {
        document.querySelector(".parent .child2 .alert1").style.display="block";
        document.querySelector(".parent .child2 .alert2").style.display="block";
        document.querySelector(".parent .child2 .alert3").style.display="block";
    }
    else if(nAme.value=="")
    {
        document.querySelector(".parent .child2 .alert1").style.display="block";
    }
    else if(email.value=="")
    {
        document.querySelector(".parent .child2 .alert2").style.display="block";
    }
    else if(pass.value=="")
    {
        document.querySelector(".parent .child2 .alert3").style.display="block";
    }
    else{
        if(acounts.length==0)
        {
            acounts.push(acount);
            localStorage.setItem("acounts",JSON.stringify(acounts));
            document.querySelector(".parent .child2 .alert4").style.display="block";
            clearData();
        }
        else{
            acounts=JSON.parse(localStorage.getItem("acounts"));
            for(var i=0;i<acounts.length;i++)
            {
                if(acount.Name==acounts[i].Name && acount.Email==acounts[i].Email && acount.Pass==acounts[i].Pass)
                {
                    x=1;
                    break;
                }
            }
            if(x==1)
            {
                alert("this acount is alredy existed");
            }
            else
            {
                acounts.push(acount);
                localStorage.setItem("acounts",JSON.stringify(acounts));
                document.querySelector(".parent .child2 .alert4").style.display="block";
                clearData();
            }
        }
    }
}

signup.addEventListener("click",addAcount);


var ancor1=document.querySelector(".parent .child1 p a");
ancor1.addEventListener("click",function(){
    document.querySelector(".parent .child1").style.display="none"
    document.querySelector(".parent .child2").style.display="block"
})
var ancor2=document.querySelector(".parent .child2 p a");
ancor2.addEventListener("click",function(){
    document.querySelector(".parent .child1").style.display="block"
    document.querySelector(".parent .child2").style.display="none"
})



var eMail=document.querySelector(".parent .child1 .email");
var pAss=document.querySelector(".parent .child1 .pass");

function login(){
    y=0;
    var logIn={
        emaiL:eMail.value,
        pasS:pAss.value,
    }
    acounts=JSON.parse(localStorage.getItem("acounts"));
    eMail.addEventListener("keydown",function(){
        document.querySelector(".parent .child1 .alert1").style.display="none";
        document.querySelector(".parent .child1 .alert3").style.display="none";
    })
    pAss.addEventListener("keydown",function(){
        document.querySelector(".parent .child1 .alert2").style.display="none";
        document.querySelector(".parent .child1 .alert3").style.display="none";
    })

    if(eMail.value=="" && pAss.value=="")
    {
        document.querySelector(".parent .child1 .alert1").style.display="block";
        document.querySelector(".parent .child1 .alert2").style.display="block";
    }
    else if(eMail.value=="")
    {
        document.querySelector(".parent .child1 .alert1").style.display="block";
    }
    else if(pAss.value=="")
    {
        document.querySelector(".parent .child1 .alert2").style.display="block";
    }
    else{
        for(var n=0;n<acounts.length;n++)
        {
            if(logIn.emaiL == acounts[n].Email && logIn.pasS == acounts[n].Pass){
                y=1;
                var g=acounts[n].Name;
                break;
            }
        }
        if(y==1){
            document.querySelector(".Home").style.display="block";
            document.querySelector(".parent").style.display="none";
            document.querySelector(".Home .home .hello p span").innerHTML=g;
            clearData();
        }
        else{
            document.querySelector(".parent .child1 .alert3").style.display="block";
        }
    }
}

document.querySelector(".parent .child1 button").addEventListener("click",login);
var button=document.querySelector(".Home .home .nav button");
button.addEventListener("click",function(){
    document.querySelector(".parent").style.display="block";
    document.querySelector(".Home").style.display="none";
})


function clearData(){
    nAme.value="";
    email.value="";
    pass.value="";
    eMail.value="";
    pAss.value="";
}
