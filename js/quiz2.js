$(document).ready(()=>{
    const $paraObj =$('.paraSec');
    const $moreB =$('.morebtn');
    const $lessB =$('.lessbtn');
    
    $moreB.on('click', () => {
    $paraObj.show();
    });
    
    $lessB.on('click', () => {
    $paraObj.hide();
    });
    
    
    $($paraObj).mouseover(function(){    
        $paraObj.css("background","green");    
    });

    $($paraObj).mouseout(function(){    
        $paraObj.css("background","#356ba2");       
    });
});