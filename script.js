
    const stats = document.querySelectorAll('.statb h1');
    const targets = [34, 12, 24];
    let animated = false;

    function animateCounters() {
        stats.forEach((stat, index) => {
            let count = 0;
            const target = targets[index];
            const speed = 50;
            const increment = Math.ceil(target / speed);

            const counter = setInterval(() => {
                count += increment;
                if (count >= target) {
                    stat.innerText = target;
                    clearInterval(counter);
                } else {
                    stat.innerText = count;
                }
            }, 30);
        });
    }

    window.addEventListener('scroll', () => {
        const statsSection = document.querySelector('.stat');
        const sectionTop = statsSection.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight && !animated) {
            animated = true;
            animateCounters();
        }
    });