document.addEventListener('DOMContentLoaded', () => {
    // Background decorations
    const body = document.body;
    const circle1 = document.createElement('div');
    circle1.className = 'bg-circle circle-1';
    const circle2 = document.createElement('div');
    circle2.className = 'bg-circle circle-2';
    body.appendChild(circle1);
    body.appendChild(circle2);

    const nameSelect = document.getElementById('name-select');
    const verifyButton = document.getElementById('verify-button');
    const errorMessage = document.getElementById('error-message');
    const mainContainer = document.getElementById('main-container');
    
    const verifySection = document.getElementById('verify-section');
    const resultSection = document.getElementById('result-section');
    const resultMessage = document.getElementById('result-message');
    const backButton = document.getElementById('back-button');

    // Gay group
    const group1 = ["Mike R", "Melden P", "David B", "Mick", "Adam"];
    // Not gay group
    const group2 = ["Alex P", "Andrei B", "Filip L"];

    verifyButton.addEventListener('click', () => {
        const selectedName = nameSelect.value;
        
        if (!selectedName) {
            errorMessage.classList.add('show');
            // Shake animation for error
            mainContainer.style.transform = 'translateX(10px)';
            setTimeout(() => mainContainer.style.transform = 'translateX(-10px)', 100);
            setTimeout(() => mainContainer.style.transform = 'translateX(10px)', 200);
            setTimeout(() => mainContainer.style.transform = 'translateX(0)', 300);
            return;
        }

        errorMessage.classList.remove('show');
        
        // Determine result
        if (group1.includes(selectedName)) {
            resultMessage.textContent = "You are gay!";
            resultMessage.style.background = "linear-gradient(135deg, #ef4444 0%, #ec4899 100%)";
            resultMessage.style.webkitBackgroundClip = "text";
        } else if (group2.includes(selectedName)) {
            resultMessage.textContent = "You are not gay";
            resultMessage.style.background = "linear-gradient(135deg, #10b981 0%, #059669 100%)";
            resultMessage.style.webkitBackgroundClip = "text";
        }

        // Transition to next page
        verifySection.classList.remove('active');
        setTimeout(() => {
            verifySection.style.display = 'none';
            resultSection.style.display = 'flex';
            // Trigger reflow
            void resultSection.offsetWidth;
            resultSection.classList.add('active');
            
            // Add pop animation to container
            mainContainer.style.transform = 'scale(1.02)';
            setTimeout(() => mainContainer.style.transform = 'scale(1)', 200);
        }, 400); // Wait for fade out
    });

    backButton.addEventListener('click', () => {
        nameSelect.value = "";
        
        resultSection.classList.remove('active');
        setTimeout(() => {
            resultSection.style.display = 'none';
            verifySection.style.display = 'flex';
            void verifySection.offsetWidth;
            verifySection.classList.add('active');
        }, 400);
    });

    // Remove error message when user selects an option
    nameSelect.addEventListener('change', () => {
        errorMessage.classList.remove('show');
    });
});