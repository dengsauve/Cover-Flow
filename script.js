var index = 0;

var nextButton = document.getElementById('nextButton');
var prevButton = document.getElementById('prevButton');

nextButton.addEventListener('click', function(){
    if ( (index + 7) < document.getElementsByClassName('bar')[0].childElementCount ){
        document.getElementsByClassName('image')[index].classList.replace('image', 'hidden');
        index += 1;
        document.getElementsByClassName('hidden')[index].classList.replace('hidden', 'image');
    }
});    

prevButton.addEventListener('click', function(){
    if( index > 0 ){
        document.getElementsByClassName('image')[6].classList.replace('image', 'hidden');
        index -= 1;
        document.getElementsByClassName('hidden')[index].classList.replace('hidden', 'image');
    }
});