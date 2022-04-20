function fun(){
    let tk = document.getElementById("tk").value;
    const card = document.querySelector('.card');
    var para = document.createElement("div");
    para.className="card bg-primary text-white fill m-3";
    para.setAttribute("draggable", "true");
    var para1 = document.createElement("div");
    para1.classList.add("card-body");
    var node = document.createTextNode(tk);
    var para2 = document.createElement("span");
    para2.setAttribute("onclick", "rem(this)");
    para2.className = " btn btn-light float-right btn-sm";
    var node2 = document.createTextNode('X');
    para2.appendChild(node2);
    para1.appendChild(node);
    para1.appendChild(para2);
    para.appendChild(para1);
    para.addEventListener('dragstart', dragStart);
    para.addEventListener('dragend', dragEnd);
    card.appendChild(para);

}

function rem(a){
    var b = a.parentNode.parentNode.parentNode;
    var c = a.parentNode.parentNode;
    b.removeChild(c);
}

let fills = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');
let a=0,f;


// setInterval(function(){
//     fills = document.querySelectorAll('.fill');
//     for (const fill of fills) {
//         fill.addEventListener('dragstart', dragStart);
//         fill.addEventListener('dragend', dragEnd);
//     }
// },0);



for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}



function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = ' invisible'), 0);
    f=this;
}

function dragEnd() {
    this.className = ' card bg-primary text-white fill m-3';
    f = this;

}

function dragOver(e) {
    e.preventDefault();
    if(a==0){
        this.className += ' hovered';
        a=1;
    }
}


function dragLeave() {
    a=0;
    this.className = ' card bg-light text-dark empty m-3';
}

function dragDrop() {
  this.className = ' card bg-light text-dark empty m-3';
  
  this.append(f);
}