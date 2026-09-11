document.addEventListener('DOMContentLoaded', function () {
    let currentStep = 0;
    const maxSteps = 9;

    // Prevent one mouse-wheel movement from firing too many steps
    let isLocked = false;
    const scrollDelay = 500;

    document.addEventListener('wheel', function (event) {
        if (isLocked) return;

        if (event.deltaY > 0) {
            // SCROLL DOWN
            if (currentStep < maxSteps) {
                currentStep++;

                document.body.classList.add(
                    'scroll-down-' + currentStep
                );

                lockScroll();
            }

        } else if (event.deltaY < 0) {
            // SCROLL UP
            if (currentStep > 0) {
                document.body.classList.remove(
                    'scroll-down-' + currentStep
                );

                currentStep--;

                lockScroll();
            }
        }
    }, { passive: true });

    function lockScroll() {
        isLocked = true;

        setTimeout(function () {
            isLocked = false;
        }, scrollDelay);
    }
});