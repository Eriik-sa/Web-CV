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
                    "endereco": "Address: Professor Silvio Rabelo Street, Jaboatão dos Guararapes - Pernambuco, Brazil",
                    "redes": "Social Networks:",
                    "experiencia": "Professional Experience",
                    "habilidades": "Skills",
                    "formacao": "Education",
                    "cursos": "Courses",
                    "jovem aprendiz": "Apprentice - Administrative assistant (July 2024 - December 2024)",
                    "empresa": "Company:",
                }
            },
            pt: {
                translation: {
                    "titulo": "Desenvolvedor de Software JR.",
                    "descricao": "Placeholder blablabla blablabla...",
                    "contato": "Informações de contato:",
                    "telefone": "Telefone: (81) 98541-4017",
                    "endereco": "Endereço: Rua Professor Silvio Rabelo, Jaboatão dos Guararapes - Pernambuco",
                    "redes": "Redes Sociais:",
                    "experiencia": "Experiência Profissional",
                    "habilidades": "Habilidades",
                    "formacao": "Formação",
                    "cursos": "Cursos",
                    "jovem aprendiz": "Aprendiz - Assistente Administrativo (Julho 2024 - Dezembro 2024)",
                    "empresa": "Empresa: ",
                }
            }
        }
    }, function (err, t) {
        atualizarTextos();
    });

    function atualizarTextos() {
        document.querySelectorAll("[data-translate]").forEach(el => {
            el.innerHTML = i18next.t(el.dataset.translate);
        });
    }

    function mudar_idioma() {
        const flag = document.getElementById("flag");
        const novoIdioma = i18next.language === "pt" ? "en" : "pt";

        i18next.changeLanguage(novoIdioma, function () {
            atualizarTextos();

            flag.src = novoIdioma === "en" ? "Imagens/usa_flag.png" : "Imagens/brasil_flag.png";
            flag.alt = novoIdioma === "en" ? "eua" : "brasil";
        });
    }

    document.getElementById("flag").addEventListener("click", mudar_idioma);
});
