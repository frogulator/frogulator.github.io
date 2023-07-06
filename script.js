
const frog = document.getElementById('frog');
const popup = document.getElementById('popup');

const a = document.getElementById('a');
const b = document.getElementById('b');
const numberOne = document.getElementById('numberOne');
const numberTwo = document.getElementById('numberTwo');
const result = document.getElementById('result');
const add = document.getElementById('plus');
const subtract = document.getElementById('minus');
const multiply = document.getElementById('asterik');
const divide = document.getElementById('slash');
const operator = document.getElementById('operator');
const audioOne = document.getElementById('audioOne');
const audioTwo = document.getElementById('audioTwo');
// const backgroundMusic = document.getElementById('backgroundMusic');
const frogBoi = document.getElementById('frogVoice');
const snack= document.getElementById('snack');
const play = document.getElementById('play');






// play.addEventListener('click', (event) => {
//   if (backgroundMusic.paused) {
//     backgroundMusic.play();
//     play.textContent = "pause audio";
//   } else {
//     backgroundMusic.pause();
//     play.textContent = "play audio";
//   }
// });
const player = document.getElementById('player');
const obstacles = document.querySelectorAll('.test');
const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight;
const playerWidth = player.offsetWidth;
const playerHeight = player.offsetHeight;
const maxLeft = pageWidth - playerWidth;
const maxTop = pageHeight - playerHeight;
const speed = 1;
const bounceRange = 0.95;
let directionX = 1;
let directionY = 1;

function checkCollision() {
    const playerRect = player.getBoundingClientRect();

    for (const obstacle of obstacles) {
        const obstacleRect = obstacle.getBoundingClientRect();

        if (
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top
        ) {
            const playerCenterX = playerRect.left + playerRect.width / 2;
            const playerCenterY = playerRect.top + playerRect.height / 2;
            const obstacleCenterX = obstacleRect.left + obstacleRect.width / 2;
            const obstacleCenterY = obstacleRect.top + obstacleRect.height / 2;

            const angle = Math.atan2(playerCenterY - obstacleCenterY, playerCenterX - obstacleCenterX);
            const angleDeg = angle * 180 / Math.PI;

            if (angleDeg > -45 && angleDeg <= 45) {
                directionX *= -1;
            } else if (angleDeg > 45 && angleDeg <= 135) {
                directionY *= -1;
            } else if (angleDeg > 135 || angleDeg <= -135) {
                directionX *= -1;
            } else {
                directionY *= -1;
            }
        }
    }
}

function movePlayer() {
    const currentLeft = parseInt(player.style.left) || 0;
    const currentTop = parseInt(player.style.top) || 0;
    let newLeft = currentLeft + speed * directionX;
    let newTop = currentTop + speed * directionY;

    if (newLeft <= 0 || newLeft >= maxLeft) {
        directionX *= -1; // Reverse horizontal direction
    }

    if (newTop <= 0 || newTop >= (maxTop - (playerHeight * bounceRange))) {
        directionY *= -1; // Reverse vertical direction
    }

    player.style.left = newLeft + 'px';
    player.style.top = newTop + 'px';

    checkCollision();

    requestAnimationFrame(movePlayer);
}

movePlayer();


// const player = document.getElementById('player');
// const pageWidth = window.innerWidth;
// const pageHeight = window.innerHeight;
// const playerWidth = player.offsetWidth;
// const playerHeight = player.offsetHeight;
// const maxLeft = pageWidth - playerWidth;
// const maxTop = pageHeight - playerHeight;
// const speed = 1;
// const bounceRange = 0.95; // Adjust the bounce range (0 to 1) here
// let directionX = 1;
// let directionY = 1;

// function movePlayer() {
//     const currentLeft = parseInt(player.style.left) || 0;
//     const currentTop = parseInt(player.style.top) || 0;
//     let newLeft = currentLeft + speed * directionX;
//     let newTop = currentTop + speed * directionY;

//     if (newLeft <= 0 || newLeft >= maxLeft) {
//         directionX *= -1; // Reverse horizontal direction
//     }

//     if (newTop <= 0 || newTop >= (maxTop - (playerHeight * bounceRange))) {
//         directionY *= -1; // Reverse vertical direction
//     }

//     player.style.left = newLeft + 'px';
//     player.style.top = newTop + 'px';

//     requestAnimationFrame(movePlayer);
// }

// movePlayer();

let audio_iframe = document.querySelector('iframe');

widget = SC.Widget(audio_iframe);
widget.setVolume(0.1);



a.addEventListener('click', (event) => {
  var randomA = Math.floor(Math.random() * 101);
  updateScreen(randomA);
  audioTwo.play()
});

b.addEventListener('click', (event) => {
  var randomB = Math.floor(Math.random() * 101);
  updateScreenTwo(randomB);
  audioTwo.play()
});

function updateScreen(numberA) {
    numberOne.textContent = numberA;
}

function updateScreenTwo(numberB) {
  numberTwo.textContent = numberB;
}

function addResult(numberA, numberB) {
  result.textContent = "= " + (numberA + numberB);
  operator.textContent = "+"
}

function subtractResult(numberA, numberB) {
  result.textContent = "= " + (numberA - numberB);
  operator.textContent = "-"
}

function multiplyResult(numberA, numberB) {
  result.textContent = "= " + (numberA * numberB);
  operator.textContent = "*"
}

function divideResult(numberA, numberB) {
  result.textContent = "= " + (numberA / numberB).toFixed(3);
  operator.textContent = "/";
}

add.addEventListener('click', (event) => {
  let randomB = parseInt(numberTwo.textContent);
  addResult(parseInt(numberOne.textContent), randomB);
  audioOne.play()
});

subtract.addEventListener('click', (event) => {
  let randomB = parseInt(numberTwo.textContent);
  subtractResult(parseInt(numberOne.textContent), randomB);
  audioOne.play()
});

multiply.addEventListener('click', (event) => {
  let randomB = parseInt(numberTwo.textContent);
  multiplyResult(parseInt(numberOne.textContent), randomB);
  audioOne.play()
});

divide.addEventListener('click', (event) => {
  let randomB = parseInt(numberTwo.textContent);
  if (randomB === 0) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
  
    const frogX = frog.offsetLeft;
    const frogY = frog.offsetTop;
    const offsetX = -30; 
    const offsetY = -23; 
    const distanceX = mouseX - frogX + offsetX;
    const distanceY = mouseY - frogY + offsetY;

    frog.style.transition = 'transform 0.7s ease-in-out';
    frog.style.transform = `translate(${distanceX}px, ${distanceY}px)`;

  setTimeout(() => {
    frog.style.backgroundImage = 'url(frog/frog2.svg)';
    setTimeout(() => {snack.play();},300);

    setTimeout(() => {
      document.body.classList.add('hidecursor');
      frog.style.backgroundImage = 'url(frog/frog1.svg)';
      popup.style.display = 'block';
    }, 1500);
  }, 1000);
  
  let typewriterText = document.querySelector(".bubbleText");
  setTimeout(() => {let text = "Oy! You! Little dimwit! Think you're clever, dividing by zero, huh? Are you TRYING to have me fired?? Me, the mighty guardian of math? Listen up fella, you're lucky I was able to gobble up your little cursor in time.  Now  I will give it back to you, but no more funny business! *grumble*";
  const speed = 50;
  
  let index = 0;
  
  function type() {
    if (index < text.length) {
      typewriterText.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
      frogBoi.play();
    }
  }
  type();
  }, 3000);

  setTimeout(() => {
    document.body.classList.remove('hidecursor');
    popup.style.display = 'none';
  }, 20000);
  setTimeout(() => {
    frog.style.transition = 'transform 0.7s ease-in-out';
    frog.style.transform = '';
    typewriterText.textContent = '';
  }, 20000);
  return;}
  
  divideResult(parseInt(numberOne.textContent), randomB);
  audioOne.play()
});



