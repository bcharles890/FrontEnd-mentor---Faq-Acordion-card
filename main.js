/*next time you work on this project you nee to find a way to make the label bold when it is clicked 
fix the spacing among the accordion items
fix the click function so you dont need to double click to hide items
find a way to allow the images to hover over the accordion with z index
find a way for the accordion size to stretch with the accordion items opening
change the background color
start on the desktop styles
change the font to fit the screen size*/




function contentGone1(){

    document.getElementById('content-1').innerHTML='';

    
}

function contentAppear1(){
    document.getElementById('content-1').innerHTML='You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.';
    
}

function contentGone2(){

    document.getElementById('content-2').innerHTML='';

    
}

function contentAppear2(){
    document.getElementById('content-2').innerHTML=' No more than 2GB. All files in your account must fit your allotted storage space.';
}


function contentGone3(){

    document.getElementById('content-3').innerHTML='';

    
}

function contentAppear3(){
    document.getElementById('content-3').innerHTML='Click “Forgot password” from the login page or “Change password” from your profile page.'
    'A reset link will be emailed to you.'
}


function contentGone4(){

    document.getElementById('content-4').innerHTML='';

    
}

function contentAppear4(){
    document.getElementById('content-4').innerHTML='Yes! Send us a message and we’ll process your request no questions asked.';
}


function contentGone5(){

    document.getElementById('content-5').innerHTML='';

    
}

function contentAppear5(){
    document.getElementById('content-5').innerHTML='Chat and email support is available 24/7. Phone lines are open during normal business hours.';
}


























function accordion(){
    if(document.getElementById('content-1').innerHTML=''){
        contentAppear();
    } 
     else if (document.getElementById('content-1').innerHTML='You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'){
        contentGone();
    }
}
