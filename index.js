const homepage = document.getElementById('home');
const aboutpage = document.getElementById('about');
const contactpage = document.getElementById('contact');
const servicespage = document.getElementById('service');


const sample = document.getElementById('university');
const adding = document.getElementById('uni')

function remover(){
    sample.innerHTML='';
    sample.innerHTML=adding.innerHTML;

}

function service(){
    homepage.innerHTML='';
    homepage.innerHTML=servicespage.innerHTML;
}

function about(){
    homepage.innerHTML='';
    homepage.innerHTML=aboutpage.innerHTML;
}

function contact(){
    homepage.innerHTML='';
    homepage.innerHTML=contactpage.innerHTML;
}