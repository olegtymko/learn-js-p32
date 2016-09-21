/**
 * Created by Oleg on 21.09.2016.
 */
var values = [12,43,54,32,97,453,787];
var operators = ['+','*','-','+','*','/'];
var result;

for (var i = 0; i < operators.length; i++) {
    switch(operators[i]){
        case '*':{
            values[i+1]=mnog(values[i],values[i+1]);
            values[i]=0;
            if(i>0)operators[i]=operators[i-1];
            break;
        };
        case '/':{
            values[i+1]=dil(values[i],values[i+1]);
            values[i]=0;
            if(i>0)operators[i]=operators[i-1];
            break;
        };
    }
}

for (var i = 0; i < operators.length; i++) {
    switch(operators[i]){
        case '+':{
            values[i+1]=sum(values[i],values[i+1]);
            values[i]=0;
            break;
        };
        case '-':{
            values[i+1]=raz(values[i],values[i+1]);
            values[i]=0;
            break;
        };
    }
}

function raz(a, b) {
    a-=b;
    return a;
}
function dil(a, b) {
    a/=b;
    return a;
}
function mnog(a, b) {
    a*=b;
    return a;
}
function sum(a, b) {
    a += b;
    return a;
}
result=values[values.length-1]
console.log(result);