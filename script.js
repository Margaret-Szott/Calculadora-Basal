const BOTON = document.getElementById("calcular")
const FLU = document.getElementById("flu")
const FLUJO = document.getElementById("flujo")
const MAN = document.getElementById("man")
const ERROR = document.getElementById("error")

BOTON.addEventListener("click",() => {
    const DATO = document.getElementById('peso').value
    console.log('dato ingresado: ', DATO)
if (DATO > 0 && DATO <= 30){
    ERROR.style.display = 'none'
    let flujo = calcFlujo(DATO);
    let mantenimiento = flujo*1.5;
    FLU.innerHTML = flujo[0] + ' cc';
    FLUJO.innerHTML = flujo[1] + ' cc/hr';
    MAN.innerHTML = 'm+m/2 ' + flujo[2] + ' cc/hr';
    FLU.style.display = 'block';
    FLUJO.style.display = 'block';
    MAN.style.display = 'block';
} else if (DATO>30){
    let sc = supeficieCorporal(DATO)
    FLU.innerHTML = sc[0] + ' cc/hr';
    MAN.innerHTML =  sc[1] + ' cc/hr';
    FLU.style.display = 'block';
    FLUJO.style.display = 'none';
    MAN.style.display = 'block';

}
else {
    ERROR.style.display = 'block';
    FLU.style.display = 'none';
    MAN.style.display = 'none';
}
})

function calcFlujo(peso){
    let flujo = 0
    if (peso <= 10) {
        flujo= peso * 100;
    } else if (peso <= 20) {
        flujo = 1000 + (peso - 10) * 50;
    } else {
        flujo = 1500 + (peso - 20) * 20;
    }
    return [flujo.toFixed(2),(flujo/24).toFixed(2),((flujo/24)*1.5).toFixed(2)]
}

function supeficieCorporal(peso){
    let supeficieCorporal = ((peso * 4) + 7) / (peso + 90)
    return [(supeficieCorporal * 1500).toFixed(2),(supeficieCorporal * 2000).toFixed(2)]
}

