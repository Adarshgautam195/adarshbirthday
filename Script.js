let shares = 0;

function showOperatorSelection() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    if (phoneNumber) {
        document.getElementById('phoneForm').style.display = 'none';
        document.getElementById('operatorSelection').style.display = 'block';
    } else {
        alert("कृपया अपना नंबर डालें।");
    }
}

function showTargetLine() {
    const operator = document.getElementById('operator').value;
    if (operator) {
        document.getElementById('operatorSelection').style.display = 'none';
        document.getElementById('targetLine').style.display = 'block';
    } else {
        alert("कृपया अपना ऑपरेटर चुनें।");
    }
}

function shareOnWhatsApp() {
    const targetStatus = document.getElementById('targetStatus');
    shares += 1;
    let completed = (shares / 15) * 100;
    if (completed > 100) {
        completed = 100;
    }
    targetStatus.innerText = Math.round(completed) + '%';

    const shareText = "मुझे 699 का फ्री रिचार्ज मिल रहा है क्योंकि आज आदर्श का जन्मदिन है! आप भी पाएं: https://username.github.io";
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;

    window.open(whatsappUrl, '_blank');

    if (completed >= 100) {
        document.getElementById('doneButton').style.display = 'block';
    }
}

function showCongratulations() {
    document.getElementById('targetLine').style.display = 'none';
    document.getElementById('congratulationsMessage').style.display = 'block';
}
