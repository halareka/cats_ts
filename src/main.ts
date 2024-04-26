const subBtn = document.getElementById("submit")  as HTMLButtonElement;
const catImg = document.getElementById("cat_img") as HTMLImageElement ;
const docInp = document.getElementById("num")     as HTMLInputElement ;
const textId = document.getElementById("text")    as HTMLElement      ;
let code:string = '0', arrayOfCodes:any = [];
//------------------------------------------------------------------------------------
subBtn?.addEventListener("click", () => {
    code = docInp?.value;
    catImg.src = "https://http.cat/" + code;
    arrayOfCodes =  sortArray(arrayOfCodes,code);
    textId.innerText = `Последние 5 кодов ошибки которые вы загружали: ${arrayOfCodes}`
    localStorage.setItem('last' , arrayOfCodes)
});
function sortArray(arr:any, el:string) {
    const result = arr;
    result.unshift(el);
    result.length > 5 ? result.splice(5, 1) : false;
    return result;
}
window.onload = () =>{
    if(!localStorage.getItem('last')){ return 0 }
    textId.innerText = `Последние 5 кодов ошибки которые вы загружали: ${localStorage.getItem('last')}`
    arrayOfCodes = localStorage.getItem('last')?.split(',');
}
