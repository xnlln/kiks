function updateTimer() {
    const startDateElement = document.getElementById('startDate');
    if (!startDateElement) {
        return;
    }
    const startDate = new Date(startDateElement.textContent);
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        const lastMonthDate = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonthDate.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    let totalMonths = (now.getFullYear() - startDate.getFullYear()) * 12;
    totalMonths += now.getMonth() - startDate.getMonth();

    if (now.getDate() < startDate.getDate()) {
        totalMonths--;
    }

    years = Math.floor(totalMonths / 12);
    months = totalMonths % 12;

    const totalTimeDifferenceMs = now - startDate;
    const hours = Math.floor((totalTimeDifferenceMs / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((totalTimeDifferenceMs / (1000 * 60)) % 60);
    const seconds = Math.floor((totalTimeDifferenceMs / 1000)) % 60;

    const formatNumber = (num) => num < 10 ? '0' + num : num;

    document.getElementById('years').innerText = years;
    document.getElementById('months').innerText = months;
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = formatNumber(hours);
    document.getElementById('minutes').innerText = formatNumber(minutes);
    document.getElementById('seconds').innerText = formatNumber(seconds);
}

setInterval(updateTimer, 1000);
updateTimer();

function togglePopup() {
    const popup = document.getElementById('popup');
    if (popup) {
        popup.classList.toggle('active');
    }
}
