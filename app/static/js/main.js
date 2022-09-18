document.addEventListener('DOMContentLoaded', () => {
    allbutton = document.getElementById('all');
    frontbutton = document.getElementById('frontend');
    backbutton = document.getElementById('backend');
    extrabutton = document.getElementById('extra');

    function fontMark() {
        allbutton.classList.remove("active");
        backbutton.classList.remove("active");
        extrabutton.classList.remove("active");

        frontbutton.classList.add("active");

        const cleanCards = document.getElementsByClassName('all');

        for (var card = 0; card < cleanCards.length; card++) {
            cleanCards[card].style.backgroundColor = 'transparent';
        }

        const cards = document.getElementsByClassName('frontend');
        for (var card = 0; card < cards.length; card++) {
            cards[card].style.backgroundColor = 'rgb(5, 66, 5)';
        }
    }

    function backMark() {
        allbutton.classList.remove("active");
        frontbutton.classList.remove("active");
        extrabutton.classList.remove("active");

        backbutton.classList.add("active");

        const cleanCards = document.getElementsByClassName('all');
        for (var card = 0; card < cleanCards.length; card++) {
            cleanCards[card].style.backgroundColor = 'transparent';
        }

        const cards = document.getElementsByClassName('backend');
        for (var card = 0; card < cards.length; card++) {
            cards[card].style.backgroundColor = 'rgb(19, 5, 58)';
        }
    }

    function extraMark() {
        allbutton.classList.remove("active");
        frontbutton.classList.remove("active");
        backbutton.classList.remove("active");

        extrabutton.classList.add("active");

        const cleanCards = document.getElementsByClassName('all');
        for (var card = 0; card < cleanCards.length; card++) {
            cleanCards[card].style.backgroundColor = 'transparent';
        }

        const cards = document.getElementsByClassName('extra');
        for (var card = 0; card < cards.length; card++) {
            cards[card].style.backgroundColor = 'rgb(44, 16, 3)';
        }
    }

    function allMark() {
        extrabutton.classList.remove("active");
        frontbutton.classList.remove("active");
        backbutton.classList.remove("active");

        allbutton.classList.add("active");

        const cleanCards = document.getElementsByClassName('all');
        for (var card = 0; card < cleanCards.length; card++) {
            cleanCards[card].style.backgroundColor = '#241b02';
        }
    }

    frontbutton.onclick = fontMark;
    backbutton.onclick = backMark;
    extrabutton.onclick = extraMark;
    allbutton.onclick = allMark;
});