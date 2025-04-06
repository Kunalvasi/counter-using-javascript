const countValue=document.querySelector('#counter');
const decrement=()=>{
    let val=parseInt(countValue.innerText);
    val=val-1;
    countValue.innerText=val;
};
const increment=()=>{
    let val=parseInt(countValue.innerText);
    val=val+1;
    countValue.innerText=val;
};