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
    document.getElementById('content-4').innerHTML='You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.';
}


function contentGone5(){

    document.getElementById('content-5').innerHTML='';

    
}

function contentAppear5(){
    document.getElementById('content-5').innerHTML='You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.';
}


























function accordion(){
    if(document.getElementById('content-1').innerHTML=''){
        contentAppear();
    } 
     else if (document.getElementById('content-1').innerHTML='You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'){
        contentGone();
    }
}
