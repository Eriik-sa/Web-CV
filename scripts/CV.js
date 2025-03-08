document.addEventListener("DOMContentLoaded", function () {
    i18next.init({
        lng: "pt-br", // Idioma inicial 
        resources: {
            en: {
                translation: {
                    "titulo": "Junior Software Developer",
                    "pdf": "Download CV as PDF",
                    "descricao": "Placeholder text blablabla...",
                    "contato": "Contact Information:",
                    "telefone": "Cellphone: (+55) 81 98541-4017",
                    "endereco": "Address: Candeias, Jaboatão dos Guararapes - Pernambuco, Brazil",
                    "redes": "Social Networks:",
                    "experiencia": "Professional Experience",
                    "habilidades": "Skills",
                    "formacao": "Education",
                    "cursos": "Courses",
                    "jovem aprendiz": "Trainee - Administrative assistant (July 2024 - December 2024)",
                    "empresa": "Company:",
                    "scan": "Scanned, digitized and uploaded documents using the LMS, Emphasis TNT and FedEX systems;",
                    "indenização": "Provided eventual assistance in preparing spreadsheets and documents regarding customer compensation and other incidents;",
                    "projeto": "Developed a web automation project for the document upload process, utilizing the emphasis website, Python programming language and the Selenium library",
                    "soluções": "Trainee - Costumer solutions assistant (Current role)",
                    "banco de dados": "Daily updates on the ongoing and outgoing merchandise excel spreadsheet;",
                    "atendimento ao cliente": "Direct contact with customers using LMS Web and email to generate goods availability letters, return invoices, and re-delivery notes.",
                    "RNCS": "Opening of non-conformities (RNCs) and occurrences updates regarding clients merchandises, utilizing the LMS website",
                    "contato clientes": "Sending emails to customers to ensure retention, while also addressing issues such as damaged goods, lost shipments, delays, and other concerns.",
                    "pacote office": "Office Package",
                    "inglês": "English level - B2",
                    "atendimento ao publico": "Customer Service",
                    "automações web": "Web system automations ",
                    "backend": "Python and Selenium",
                    "conceitos gerais": "General IT Concepts",
                    "aprendizado continuo": "Continuous learning",
                    "resolução de problemas": "Problem Solving",
                    "excelente trabalho": "Excelent Team Work",
                    "assertividade": "Assertiveness",
                    "rapida adaptação": "Fast adaptability to changes",
                    "formacao": "Education",
                    "ensino medio": "High School Diploma – Colégio Elo (2018 - 2020)",
                    "ensino superior": "Software Engineering – Cruzeiro do Sul (2025.1 - 2028.2)",
                    "aprendiz": "Young Apprentice Program – ESPRO (March - August 2022)",
                    "cursos": "Courses",
                    "logica": "Programming Logic with Python – USP",
                    "desenvolvimento": "Web Development using HTML, CSS and JavaScript - Curso em Vídeo",
                    "ifood": "Potência Tech iFood (Python for Data Science) – Digital Innovation One"
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

    document.querySelector(".bandeira-container").addEventListener("click", mudar_idioma);
});