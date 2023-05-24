function mostrarHoraChile(){
    let d = new Date()
    d.setHours(d.getHours());
    document.getElementById("santiago"). innerText = formatHora(d)
}

function mostrarHoraParis(){
    let d = new Date()
    d.setHours(d.getHours() + 6);
    document.getElementById("paris"). innerText = formatHora(d)
}

function mostrarHoraLondres(){
    let d = new Date()
    d.setHours(d.getHours() + 5);
    document.getElementById("londres"). innerText = formatHora(d)
}

function mostrarHoraNewYork(){
    let d = new Date()
    d.setHours(d.getHours());
    document.getElementById("nueva york"). innerText = formatHora(d)
}

function mostrarHoraPetersburgo(){
    let d = new Date()
    d.setHours(d.getHours() + 7);
    document.getElementById("san petersburgo"). innerText = formatHora(d)
}

function mostrarHoraBeijing(){
    let d = new Date()
    d.setHours(d.getHours() + 12);
    document.getElementById("beijing"). innerText = formatHora(d)
}

function mostrarHoraSeul(){
    let d = new Date()
    d.setHours(d.getHours() + 13);
    document.getElementById("seul"). innerText = formatHora(d)
}

function formatHora(date) {
    const horas = date.getHours().toString().padStart(2, '0');
    const minutos = date.getMinutes().toString().padStart(2, '0');
    const segundos = date.getSeconds().toString().padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
}

function iniciarHora(){
    setTimeout(function(){
        mostrarHoraChile()
        setInterval(mostrarHoraChile, 1000)
    },4000)

    setTimeout(function(){
        mostrarHoraParis()
        setInterval(mostrarHoraParis, 1000)
    },8000)

    setTimeout(function(){
        mostrarHoraLondres()
        setInterval(mostrarHoraLondres, 1000)
    },12000)

    setTimeout(function(){
        mostrarHoraNewYork()
        setInterval(mostrarHoraNewYork, 1000)
    },16000)

    setTimeout(function(){
        mostrarHoraPetersburgo()
        setInterval(mostrarHoraPetersburgo, 1000)
    },20000)

    setTimeout(function(){
        mostrarHoraBeijing()
        setInterval(mostrarHoraBeijing, 1000)
    },24000)

    setTimeout(function(){
        mostrarHoraSeul()
        setInterval(mostrarHoraSeul, 1000)
    },28000)
}

iniciarHora()