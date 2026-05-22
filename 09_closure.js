

const v = "global"
function f() {
    console.log(v);
}
f();
function f2(){
    const v="local";
    f();
}
f2();

function f3(){
    let c=0;
    return function(){
        return ++c;
    };
}

f3();
f3()();
const counter = f3();
console.log(counter());
console.log(counter());