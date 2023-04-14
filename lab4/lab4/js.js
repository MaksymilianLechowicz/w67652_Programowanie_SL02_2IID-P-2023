function Book(title,author,creatdate){
    this.title = title;
    this.author = author;
    this.creatdate = creatdate;
}
function display(value){
    console.log(value);
}

const book = new Book("kwiaty","Jamiński","10");
display(book);

let stud={
    firstname:"Kamil",
    lastname:"Rob",
    album: "w29345",
    firgrade:5,
    secgrade:4,
    thigrade:4
}
console.log((stud.firgrade+stud.secgrade+stud.thigrade)/3)


function Samo(mark,model,prodyear,kolor,predkosc){
    this.mark = mark;
    this.model = model;
    this.prodyear = prodyear;
    this.kolor = kolor;
    this.predkosc = predkosc
    this.szyb = function(inc){
        this.predkosc= this.predkosc + inc;
    }
    this.woln = function(dec){
        this.predkosc= this.predkosc - dec;
    }
    this.displ = function(){
        console.log(` marki ${this.mark} modelu ${this.model} z predkością ${this.predkosc}`)
    }
    this.wiek = function(){
        const date = new Date();
        year = date.getFullYear() 
        console.log(year - this.prodyear)
    }
}
const auto = new Samo("wol","golf",2000,"zielony",60)
auto.szyb(10)
auto.woln(5)
auto.displ()
auto.wiek()



function parallelogram(bokjed,bokdwa){
    this.bokjed = bokjed;
    this.bokdwa = bokdwa;
    per = this.bokjed*2+this.bokdwa*2;
    area = this.bokjed*this.bokdwa;
    this.test = function(){
        console.log(per)
        console.log(area)
        if(this.bokjed==this.bokdwa){
            console.log("kwadrat")
        }
        else{
            console.log("Nie Kwadrat")
        }
    }
}
function clck(){
let An = document.getElementById("a1").value;
let be = document.getElementById("b1").value;

const kwadr = new parallelogram(An,be)
kwadr.test()
}