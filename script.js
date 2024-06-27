// script.js

function toggleContactInfo(selectElement) {
    var contactInfoDiv = document.getElementById('contactInfo');

    if (selectElement.value === 'sim') {
        contactInfoDiv.style.display = 'block';
    } else {
        contactInfoDiv.style.display = 'none';
    }
}
