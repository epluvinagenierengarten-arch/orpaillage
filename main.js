const slides = [
            {
                title: "La déforestation",
                text: "Les sites d'orpaillage illégaux provoquent une destruction massive de la canopée amazonienne. Les arbres sont abattus, les sols retournés et les berges des rivières dévastées pour accéder aux alluvions aurifères."
            },
            {
                title: "La pollution au mercure",
                text: "Le mercure est utilisé pour amalgamer l'or des sédiments. Il se retrouve ensuite dans les rivières, contaminant toute la chaîne alimentaire et menaçant la santé des populations locales qui dépendent des cours d'eau."
            },
            {
                title: "Les communautés menacées",
                text: "Les communautés amérindiennes installées le long des fleuves sont directement exposées aux effets de l'orpaillage illégal : contamination de l'eau, destruction des ressources naturelles et tensions avec les orpailleurs clandestins."
            },
            {
                title: "Les opérations de lutte",
                text: "L'opération Harpie mobilise chaque année des centaines de soldats et de gendarmes pour démanteler les sites illégaux. Malgré ces efforts, la superficie de la Guyane et la valeur de l'or rendent la surveillance extrêmement difficile."
            }
        ];

        let current = 0;

        function updateSlide(i) {
            current = (i + slides.length) % slides.length;
            document.getElementById('slide-title').textContent = slides[current].title;
            document.getElementById('slide-text').textContent = slides[current].text;
            document.querySelectorAll('.dot').forEach((d, idx) => {
                d.classList.toggle('active', idx === current);
            });
        }

        document.getElementById('prev').addEventListener('click', () => updateSlide(current - 1));
        document.getElementById('next').addEventListener('click', () => updateSlide(current + 1));
        document.querySelectorAll('.dot').forEach(d => {
            d.addEventListener('click', () => updateSlide(+d.dataset.i));
        });