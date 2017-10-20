let min = 0, max = 25, i = 0, j = 0, x = 0, y = 0, input_string = 0, reply = 0;
let a = [0], total=[0];
let btn1 = document.getElementsByTagName("button")[0];

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function solution(a){

    j = a[0];

    for(i=0; i<a.length; i++){
        if(j > 0 && j !== a[i]){
            return j;
            break;
        }
        if(a[i] !== a[i+1]){
            j++;
        }
    }
    return j;
}

btn1.addEventListener('click', function( event ){

    for(i=0; i<max; i++){
        a[i] = getRandomInt(min, max);
    }

    function sortNumber(x,y){
        return x - y;
    }
    a.sort(sortNumber);
    a.join(",");

    document.getElementsByTagName("p")[0].innerHTML = "a = "+ a;
    reply = solution(a);
    document.getElementsByTagName("p")[1].innerHTML = "Value found is "+ reply;
    
});