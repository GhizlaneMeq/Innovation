let QuestionFaq = document.querySelectorAll('.QuestionFaq');
let AnswerFaq = document.querySelectorAll('.AnswerFaq');
console.log(QuestionFaq);

QuestionFaq.forEach((element, index) => {
    element.addEventListener('click', function () {
        AnswerFaq[index].style.display = (AnswerFaq[index].style.display === 'block') ? 'none' : 'block';
        
    })

});




/* QuestionFaq.forEach(item => {
    /* q.addEventListener('click',function(){ */

/* if(AnswerFaq[index].style.display==='none'){
    AnswerFaq[index].style.display==='block'
}
else{
    AnswerFaq[index].style.display==='none'
} */
/* }) */


