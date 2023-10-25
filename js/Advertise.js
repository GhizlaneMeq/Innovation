let Service= document.querySelectorAll('.serviceDetail');

let detailService=document.querySelectorAll('.detailService');

Service.forEach((element, index) => {
    console.log(element);
     element.addEventListener('click',function(){
        detailService[index].style.display = (detailService[index].style.display === 'block') ? 'none' : 'block';


        
    }) 
    
}); 