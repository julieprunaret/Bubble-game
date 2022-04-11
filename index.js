const counterDisplay = document.querySelector('h3');
let counter = 0;

const bubbleMaker = () => {
    const bubble = document.createElement("span");
    bubble.classList.add('bubble');
    document.body.appendChild(bubble);
    
    //console.log(Math.random()*100);// chiffre entre 0 et 100
    //console.log(Math.random()*100+100); // Math = objet ; random = sa methode
    // le *100 permet de créer une valeur en 100 et 200 px
    
    const size = Math.random() * 200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;
    
    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";
    
    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty('--left', Math.random() * 100 * plusMinus + "%"); 
    // attention il ne faut pas oublié l'unité (ici le pourcentage)

    bubble.addEventListener('click', () => {
        counter++;

        counterDisplay.innerHTML = counter;
        bubble.remove();
    })

    // comme la bulle dure 8 secondes , on peut la suprimer au bout de ce timing :
    setTimeout(() => {
        bubble.remove();
    }, 8000);
};

setInterval(bubbleMaker, 800);


