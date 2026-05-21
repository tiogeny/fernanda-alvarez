Java script:

// Variables de estado
let xp = 0;
let level = 1;
let streak = 0;

// Bases de datos simples
const quotes = [
    "¡Estás on fire! 🔥",
    "Tu cuerpo te lo agradecerá mañana.",
    "¡No te detengas, vas increíble!",
    "La constancia es la clave del éxito."
];

const exercises = [
    "10 Sentadillas",
    "15 segundos de Plancha",
    "10 Saltos de tijera",
    "5 Flexiones de rodillas"
];

const dietTips = [
    "Come una fruta después de entrenar.",
    "Reduce el azúcar en tu café.",
    "Bebe 2 litros de agua hoy."
];

// Selección de elementos
const btn = document.getElementById('btn-complete');
const xpText = document.getElementById('xp');
const levelText = document.getElementById('level');
const streakText = document.getElementById('streak');
const quoteText = document.getElementById('motivation-quote');
const exerciseText = document.getElementById('exercise-name');
const dietText = document.getElementById('diet-text');
const rewardMsg = document.getElementById('reward-msg');

// Función principal
btn.addEventListener('click', () => {
    // Lógica de progreso
    xp += 10;
    streak++;

    if (xp >= 50) {
        level++;
        xp = 0;
        showReward();
    }

    actualizarInterfaz();
});

function actualizarInterfaz() {
    xpText.innerText = xp;
    levelText.innerText = level;
    streakText.innerText = streak + " días";
    
    // Cambios aleatorios para que sea divertido
    quoteText.innerText = quotes[Math.floor(Math.random() * quotes.length)];
    exerciseText.innerText = "Ejercicio: " + exercises[Math.floor(Math.random() * exercises.length)];
    dietText.innerText = dietTips[Math.floor(Math.random() * dietTips.length)];function showReward() {
    if (level % 2 === 0) {
        rewardMsg.style.display = 'block';
        alert("🎁 ¡NIVEL " + level + "! Desbloqueaste un regalo.");
    } else {
        rewardMsg.style.display = 'none';
    }
}
}