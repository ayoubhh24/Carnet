// Mostrar la hora en tiempo real
function updateTime() {
    const timeElement = document.getElementById("time");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);

// Generar el código QR
const qr = new QRious({
    element: document.getElementById('qr-code'),
    value: 'https://uma.es',
    size: 90
});
function updateTime() {
    var now = new Date();

    // Formatear la hora
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    var timeString = hours + ':' + minutes + ':' + seconds;

    // Mostrar la hora
    document.getElementById('time').textContent = timeString;

    // Formatear la fecha
    var day = now.getDate().toString().padStart(2, '0');
    var month = (now.getMonth() + 1).toString().padStart(2, '0'); // Los meses van de 0 a 11
    var year = now.getFullYear();
    var dateString = day + '/' + month + '/' + year;

    // Mostrar la fecha
    document.getElementById('date').textContent = dateString;
}

// Actualizar la hora y la fecha cada segundo
setInterval(updateTime, 1000);

// Llamar a la función inicialmente para mostrar la hora y la fecha sin esperar un segundo
updateTime();
