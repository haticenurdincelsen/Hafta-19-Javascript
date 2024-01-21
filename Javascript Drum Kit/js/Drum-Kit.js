function changeButtonStyleAndPlaySound(button, soundFileName) {
    // Düğmeye tıklandığında bu fonksiyon çalışacak
    button.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    // İstediğiniz stil değişikliklerini buraya ekleyebilirsiniz

    var audio = new Audio(soundFileName);
    audio.play();
}


document.addEventListener('keydown', function (event) {
    // Klavye tuşuna basıldığında bu fonksiyon çalışacak
    var keyPressed = event.key.toUpperCase(); // Basılan tuşun değerini al

    var button;

    switch (keyPressed) {
        case 'A':
            button = document.querySelector('.button button');
            changeButtonStyleAndPlaySound(button, 'documents/boom.wav');
            break;
        case 'S':
            button = document.querySelector('.button button');
            changeButtonStyleAndPlaySound(button, 'clap.wav');
            break;
        case 'D':
            button = document.querySelector('.button button');
            changeButtonStyleAndPlaySound(button, 'hihat.wav');
            break;
        case 'F':
            button = document.querySelector('.button button');
            changeButtonStyleAndPlaySound(button, 'kick.wav');
            break;
        case 'G':
            button = document.querySelector('.button button');
            changeButtonStyleAndPlaySound(button, 'openhat.wav');
            break;
        case 'H':
            button = document.querySelector('.button button');
            changeButtonStyleAndPlaySound(button, 'ride.wav');
            break;
        case 'J':
            button = document.querySelector('.button button');
            changeButtonStyleAndPlaySound(button, 'snare.wav');
            break;
        case 'K':
            button = document.querySelector('.button button');
            changeButtonStyleAndPlaySound(button, 'tink.wav');
            break;
        case 'L':
            button = document.querySelector('.button button');
            changeButtonStyleAndPlaySound(button, 'tom.wav');
            break;
        default:
            // Farklı bir tuşa basıldığında yapılacak işlemleri ekleyebilirsiniz
            break;
    }
});
