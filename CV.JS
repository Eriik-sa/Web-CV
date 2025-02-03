document.addEventListener("DOMContentLoaded", function () {
    i18next.init({
        lng: "pt", // Idioma inicial (Português)
        resources: {
            en: {
                translation: {
                    "titulo": "Junior Software Developer",
                    "descricao": "Placeholder text blablabla...",
                    "contato": "Contact Information",
                    "experiencia": "Professional Experience",
                    "habilidades": "Skills",
                    "formacao": "Education",
                    "cursos": "Courses"
                }
            },
            pt: {
                translation: {
                    "titulo": "Desenvolvedor de Software JR.",
                    "descricao": "Placeholder blablabla blablabla...",
                    "contato": "Informações de contato",
                    "experiencia": "Experiência Profissional",
                    "habilidades": "Habilidades",
                    "formacao": "Formação",
                    "cursos": "Cursos"
                }
            }
        }
    }, function (err, t) {
        atualizarTextos();
    });

    function atualizarTextos() {
        document.querySelectorAll("[data-translate]").forEach(el => {
            el.textContent = i18next.t(el.dataset.translate);
        });
    }

    function mudar_idioma() {
        const flag = document.getElementById("flag");
        const novoIdioma = i18next.language === "pt" ? "en" : "pt";

        // Troca o idioma do site
        i18next.changeLanguage(novoIdioma, function () {
            atualizarTextos(); // Atualiza os textos após a troca de idioma

            // Altera a bandeira conforme o idioma
            if (novoIdioma === "en") {
                flag.src = "Imagens/usa_flag.png";
                flag.alt = "eua";
            } else {
                flag.src = "Imagens/brasil_flag.png";
                flag.alt = "brasil";
            }
        });
    }

    // Garante que o botão de troca de idioma esteja funcionando
    document.getElementById("flag").addEventListener("click", mudar_idioma);
});
function mudar_idioma() {
    const flag = document.getElementById("flag");
    const novoIdioma = i18next.language === "pt" ? "en" : "pt";

    // Troca o idioma do site
    i18next.changeLanguage(novoIdioma, atualizarTextos);

    // Altera a bandeira conforme o idioma
    if (novoIdioma === "en") {
        flag.src = "Imagens/usa_flag.png";
        flag.alt = "eua";
    } else {
        flag.src = "Imagens/brasil_flag.png";
        flag.alt = "brasil";
    }
}
