document.getElementById('clickMeButton').addEventListener('click', function() {
    document.getElementById('displayText').innerText = '¡Hola, Adopta un Jr!';
});

const reasons = [
    "Me encanta aprender nuevas tecnologías y aplicarlas en proyectos reales.",
    "Tengo experiencia trabajando en equipos ágiles y colaborativos.",
    "Me apasiona resolver problemas complejos y crear soluciones eficientes.",
    "Estoy comprometido con la mejora continua y el aprendizaje constante."
];

document.getElementById('readMoreBtn').addEventListener('click', function() {
    const extraReasons = `
        Además, estoy emocionado por la oportunidad de trabajar con un equipo de mentores y profesionales
        experimentados en Adopta un Jr. Creo que puedo aportar mucho con mi conocimiento en desarrollo
        frontend, y estoy ansioso por aprender de otros desarrolladores y compartir mis propias experiencias.
    `;
    document.getElementById('motivationText').innerHTML += extraReasons;
    this.style.display = 'none';
});

document.getElementById('addReasonBtn').addEventListener('click', function() {
    const ul = document.getElementById('reasonsList');
    const li = document.createElement('li');
    li.textContent = reasons.shift();
    ul.appendChild(li);
    if (reasons.length === 0) {
        this.style.display = 'none';
    }
});
