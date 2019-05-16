// let pop = document.getElementById("highlight_menu");
// let popText = document.getElementsByClassName("side-by-side")[0];
let pop = document.createElement("div");
pop.id = "highlight_menu";
let popText = document.createElement("div");
popText.className = "side-by-side";
pop.appendChild(popText);
document.body.appendChild(pop);
let caret = document.createElement("div");
caret.className="caret";
pop.appendChild(caret);

let translate = "";

pop.style.display = 'none';

// document.onmousedown = function(){
    


document.onmouseup =  function(e){
        
            
    let s = document.getSelection();
        if(s.toString() != ""){
            let r = s.getRangeAt(0);
            
            pop.style.display = 'block';
            
            let word = s.toString();

            let p = r.getBoundingClientRect();
                
            if(p.left || p.top){
                pop.style.left = `${(p.left + (p.width / 2)) - (pop.offsetWidth /2)}px`;
                pop.style.top = `${(p.top - pop.offsetHeight - 10)}px`;
            }  

            fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190206T062711Z.d8a70fce03da101c.7527c499c670a18077255cd20f4e1ebdf810a34b&text=${word}&lang=en-tr`)
            .then(sonuc => sonuc.json())
            .then(sonuc =>{
                translate = sonuc.text;
                console.log(translate);
                popText.innerText=translate;
            });
            // if(r && s.toString()){
            //     let p = r.getBoundingClientRect();
            //     if(p.left || p.top){
            //         pop.style.left = `${(p.left + (p.width / 2)) - (pop.offsetWidth /2)}px`;
            //         pop.style.top = `${(p.top - pop.offsetHeight - 10)}px`;
            //     }  
            // }
    
}
    document.onmousedown = function(){
        
        pop.style.display = 'none';
    }
}


// }