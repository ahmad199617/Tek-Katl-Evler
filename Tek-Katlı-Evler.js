document.addEventListener("DOMContentLoaded", function(){
        
    {myVar = setTimeout(showPagex, 1500);}
    {myVar = setTimeout(showPage, 1000);}
    
    
    function showPage() {
    document.getElementById("LoadingID").style.opacity = "0%";}
    
    function showPagex() {
    document.getElementById("LoadingID").style.display = "none";}  
    
    
    
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    

                    
    




   
    {
    $('[lang="tr"]').show();
    $('[lang="en"]').hide();
    $('[lang="ar"]').hide();}    
   
    var lang=localStorage.getItem('lang');
    localStorage.getItem('lang');   
    if(lang==("en")){
    $('[lang="en"]').show();
    $('[lang="tr"]').hide();
    $('[lang="ar"]').hide();}
    
    
    if(lang==("tr")){
    $('[lang="tr"]').show();
    $('[lang="en"]').hide();
    $('[lang="ar"]').hide();}
    
    if(lang==("ar")){
    $('[lang="ar"]').show();
    $('[lang="en"]').hide();
    $('[lang="tr"]').hide();}});


    


    
    $(document).ready(function () {
        $('#switch-lang-en').click(function() {
            $('[lang="tr"]').hide();
            $('[lang="en"]').show();
            $('[lang="ar"]').hide();
            localStorage.setItem('lang', 'en');
        });
    });
    

    $(document).ready(function () {
        $('#switch-lang-tr').click(function() {
            $('[lang="tr"]').show();
            $('[lang="en"]').hide();
            $('[lang="ar"]').hide();
            localStorage.setItem('lang', 'tr');
        });
    });


    $(document).ready(function () {
        $('#switch-lang-ar').click(function() {
            $('[lang="ar"]').show();
            $('[lang="en"]').hide();
            $('[lang="tr"]').hide();
            localStorage.setItem('lang', 'ar');
        });
    });

    
    
    function filter00 (){

        $('[filtet="50"]').show();
        $('[filtet="100"]').show();
        $('[filtet="200"]').show();

        document.querySelector(".FILTAR-div-IMG").style.backgroundColor= "#1A4990";
        document.querySelector(".FILTAR-div-IMG img").style.content= "url(./images/filter.png)";
        
        document.querySelector(".M50").style.backgroundColor= "white";
        document.querySelector(".M50 p").style.color= "#1A4990";

        document.querySelector(".M100").style.backgroundColor= "white";
        document.querySelector(".M100 p").style.color= "#1A4990";

        document.querySelector(".M200").style.backgroundColor= "white";
        document.querySelector(".M200 p").style.color= "#1A4990";
        
    }
    
    
    function filter50 (){
        
        $('[filtet="50"]').show();
        $('[filtet="100"]').hide();
        $('[filtet="200"]').hide();

        document.querySelector(".FILTAR-div-IMG").style.backgroundColor= "white";
        document.querySelector(".FILTAR-div-IMG img").style.content= "url(./images/filter-SE.png)";
        
        document.querySelector(".M50").style.backgroundColor= "#1A4990";
        document.querySelector(".M50 p").style.color= "white";

        document.querySelector(".M100").style.backgroundColor= "white";
        document.querySelector(".M100 p").style.color= "#1A4990";

        document.querySelector(".M200").style.backgroundColor= "white";
        document.querySelector(".M200 p").style.color= "#1A4990";
       
        
        
        
        

    }
    function filter100 (){

        $('[filtet="50"]').hide();
        $('[filtet="100"]').show();
        $('[filtet="200"]').hide();

        document.querySelector(".FILTAR-div-IMG").style.backgroundColor= "white";
        document.querySelector(".FILTAR-div-IMG img").style.content= "url(./images/filter-SE.png)";
        
        document.querySelector(".M50").style.backgroundColor= "white";
        document.querySelector(".M50 p").style.color= "#1A4990";

        document.querySelector(".M100").style.backgroundColor= "#1A4990";
        document.querySelector(".M100 p").style.color= "white";

        document.querySelector(".M200").style.backgroundColor= "white";
        document.querySelector(".M200 p").style.color= "#1A4990";

    }
    function filter200 (){

        $('[filtet="50"]').hide();
        $('[filtet="100"]').hide();
        $('[filtet="200"]').show();


        document.querySelector(".FILTAR-div-IMG").style.backgroundColor= "white";
        document.querySelector(".FILTAR-div-IMG img").style.content= "url(./images/filter-SE.png)";
        
        document.querySelector(".M50").style.backgroundColor= "white";
        document.querySelector(".M50 p").style.color= "#1A4990";

        document.querySelector(".M100").style.backgroundColor= "white";
        document.querySelector(".M100 p").style.color= "#1A4990";

        document.querySelector(".M200").style.backgroundColor= "#1A4990";
        document.querySelector(".M200 p").style.color= "white";
    }
