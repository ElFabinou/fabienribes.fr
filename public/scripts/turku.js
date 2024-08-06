function calculateProgress(startDate, endDate) {
    const currentDate = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    const totalDuration = end - start;
    const currentDuration = currentDate - start;
    const progress = (currentDuration / totalDuration) * 100;
    return progress > 100 ? 100 : progress;
}

function calculateMilestones(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const totalDuration = end - start;

    const oneQuarter = new Date(start.getTime() + (totalDuration) / 4);
    const oneThird = new Date(start.getTime() + totalDuration / 3);
    const half = new Date(start.getTime() + totalDuration / 2);
    const twoThirds = new Date(start.getTime() + (2 * totalDuration) / 3);
    const threeQuarters = new Date(start.getTime() + (3 * totalDuration) / 4);

    return {
        oneQuarter: oneQuarter.toLocaleDateString(),
        oneThird: oneThird.toLocaleDateString(),
        half: half.toLocaleDateString(),
        twoThirds: twoThirds.toLocaleDateString(),
        threeQuarters: threeQuarters.toLocaleDateString()
    };
}

function calculateDaysRemaining(startDate, endDate) {
    const currentDate = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    const totalDuration = end - start;
    const timeRemaining = end - currentDate;
    const daysRemaining = Math.ceil(timeRemaining / (1000 * 60 * 60 * 24));
    const totalDays = Math.ceil(totalDuration / (1000 * 60 * 60 * 24));
    return { daysRemaining, totalDays };
}

function calculateWeeksRemaining(startDate, endDate) {
    const currentDate = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    const totalDuration = end - start;
    const timeRemaining = end - currentDate;
    const weeksRemaining = (timeRemaining / (1000 * 60 * 60 * 24 * 7)).toFixed(1);
    const totalWeeks = (totalDuration / (1000 * 60 * 60 * 24 * 7)).toFixed(1);
    return { weeksRemaining, totalWeeks };
}

function updateProgressBar() {
    const startDate = '2024-07-14';
    const endDate = '2024-10-16';
    const progress = calculateProgress(startDate, endDate);
    const progressBar = document.querySelector('.progress');
    const progressText = document.getElementById('progress-text');
    const milestones = calculateMilestones(startDate, endDate);
    const { daysRemaining, totalDays } = calculateDaysRemaining(startDate, endDate);
    const { weeksRemaining, totalWeeks } = calculateWeeksRemaining(startDate, endDate);

    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${progress.toFixed(2)}%`;

    const milestonesText = `
        <p>1/4 atteint le : ${milestones.oneQuarter}</p>
        <p>1/3 atteint le : ${milestones.oneThird}</p>
        <p>1/2 atteint le : ${milestones.half}</p>
        <p>2/3 atteints le : ${milestones.twoThirds}</p>
        <p>3/4 atteints le : ${milestones.threeQuarters}</p>
    `;
    document.getElementById('milestones').innerHTML = milestonesText;

    document.getElementById('days-remaining').textContent = `Jours restants : ${daysRemaining} / ${totalDays}`;
    document.getElementById('weeks-remaining').textContent = `Semaines restantes : ${weeksRemaining} / ${totalWeeks}`;
}

updateProgressBar();
setInterval(updateProgressBar, 86400000); // Mise à jour quotidienne
