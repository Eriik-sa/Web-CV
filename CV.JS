document.addEventListener("DOMContentLoaded", function () {
    i18next.init({
        lng: "pt", // Idioma inicial (Português)
        resources: {
            en: {
                translation: {
                    "titulo": "Junior Software Developer",
                    "descricao": "Placeholder text blablabla...",
                    "contato": "Contact Information:",
                    "telefone": "Cellphone: (+55) 81 98541-4017",
                    "endereco": "Address: Candeias, Jaboatão dos Guararapes - Pernambuco, Brazil",
                    "redes": "Social Networks:",
                    "experiencia": "Professional Experience",
                    "habilidades": "Skills",
                    "formacao": "Education",
                    "cursos": "Courses",
                    "jovem aprendiz": "Apprentice - Administrative assistant (July 2024 - December 2024)",
                    "empresa": "Company:",
                }
            },
        }
    });
    // Armazena o texto original em uma variável
    function guardarTexto() {
        document.querySelectorAll("[data-translate]").forEach(el => {
            if (!el.dataset.originalText) {
                el.dataset.originalText = el.innerHTML; // Salva o texto original
            }
        });
    }

    function atualizarTextos() {
        document.querySelectorAll("[data-translate]").forEach(el => {
            if (i18next.language === "pt") {
                // Reverte para o texto original em português
                el.innerHTML = el.dataset.originalText;
            } else {
                // Traduz para o inglês
                el.innerHTML = i18next.t(el.dataset.translate);
            }
        });
    }

    // Altera o idioma e atualiza os textos
    function mudar_idioma() {
        const flag = document.getElementById("flag");
        const novoIdioma = i18next.language === "pt" ? "en" : "pt";

        i18next.changeLanguage(novoIdioma, function () {
            atualizarTextos();

            // Atualiza a bandeira 
            flag.src = novoIdioma === "en" ? "Imagens/usa_flag.png" : "Imagens/brasil_flag.png";
            flag.alt = novoIdioma === "en" ? "eua" : "brasil";
        });
    }

    // Armazena o texto original quando a página carrega
    guardarTexto();

    document.getElementById("flag").addEventListener("click", mudar_idioma);
});