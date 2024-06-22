let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'F9U-yoJbgWs',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        const videoContainer = document.getElementById('video-container');
        videoContainer.classList.add('hidden');

        setTimeout(() => {
            videoContainer.innerHTML = '';
            document.getElementById('character-section').classList.add('visible');
        }, 500);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const imagesTheBoys = document.querySelectorAll('.the-boys img');
    const imagesLos7 = document.querySelectorAll('.los-7 img');
    const sectionTheBoys = document.getElementById('character-section');
    const sectionLos7 = document.getElementById('los-7');

    function changeBackground(section, imageUrl) {
        section.style.backgroundImage = `linear-gradient(to right, rgb(0, 0, 0), rgba(11, 10, 10, 0)), url(${imageUrl})`;
    }

    changeBackground(sectionTheBoys, 'images/billy-large.jpg');
    changeBackground(sectionLos7, 'images/homelander-large.jpg');

    imagesTheBoys.forEach(image => {
        image.addEventListener('click', function () {
            const largeImageUrl = this.getAttribute('data-large');
            changeBackground(sectionTheBoys, largeImageUrl);
            
            imagesTheBoys.forEach(img => img.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    imagesLos7.forEach(image => {
        image.addEventListener('click', function() {
            const largeImageUrl2 = this.getAttribute('data-large');
            changeBackground(sectionLos7, largeImageUrl2);
            
            imagesLos7.forEach(img => img.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const characterImages = document.querySelectorAll(".the-boys img, .los-7 img");
    const descriptions = document.querySelectorAll(".character-description");

    function showDescription(img) {
        descriptions.forEach(desc => {
            desc.classList.add("hidden");
            desc.classList.remove("visible");
        });

        const characterDescription = document.querySelector(`.character-description[data-character='${img.alt}']`);
        if (characterDescription) {
            characterDescription.classList.remove("hidden");
            characterDescription.classList.add("visible");
        }
    }

    characterImages.forEach(img => {
        img.addEventListener("click", function() {
            showDescription(img);
        });
    });

    const initialCharacters = ["Billy Butcher", "Homelander"];
    initialCharacters.forEach(character => {
        const initialCharacter = document.querySelector(`img[alt='${character}']`);
        if (initialCharacter) {
            showDescription(initialCharacter);
        }
    });
});