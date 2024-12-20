const switchToColor = (color, jsConfetti) => {
    try {

        document.querySelectorAll(".page").forEach(page => {
            page.style.borderColor = color;
        });

        document.querySelectorAll(".avatar").forEach(avatar => {
            avatar.contentDocument.getElementById("circle").setAttribute("fill", color);
        });

        if (color === "pink") {
            setTimeout(() => {
                jsConfetti.addConfetti({
                    emojis: ['🌈', '🦄', '🌺', '🎀'],
                });
            }, 300);

            document.querySelectorAll(".highlighted").forEach(highlighted => {
                highlighted.style.backgroundColor = "rgba(255, 192, 203, 0.2)";
            });
        } else {
            setTimeout(() => {
                jsConfetti.addConfetti({
                    emojis: ['🐊', '🌵', '🥝', '💚'],
                });
            }, 300);

            document.querySelectorAll(".highlighted").forEach(highlighted => {
                highlighted.style.backgroundColor = "rgba(0, 128, 0, 0.15)";
            });
        }

    } catch (e) { }
};

const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('/sw.js');
        } catch (err) {
            console.error('ServiceWorker registration failed:', err);
        }
    }
};

const updateWorkExperience = () => {
    const startWorkDate = new Date("2017-06-01");
    const todaysDate = new Date();
    const workExperience = todaysDate.getFullYear() - startWorkDate.getFullYear();
    document.getElementById("workExperience").innerHTML = workExperience + '+';
};

document.addEventListener('DOMContentLoaded', () => {
    updateWorkExperience();

    const jsConfetti = new JSConfetti();

    document.getElementById('green').addEventListener('click', () => switchToColor('green', jsConfetti));
    document.getElementById('pink').addEventListener('click', () => switchToColor('pink', jsConfetti));

    registerServiceWorker();

    console.log("%cDoes this page need fixes or improvements?\n\n🤝 Open an issue or contribute a pull request: https://github.com/Potapy4/mykyta.dev ", "color:black; font-size:16px");
});
