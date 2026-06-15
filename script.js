const PDF_URL = "menu.pdf";

const iframe =
    document.getElementById("pdf-viewer");

const loader =
    document.getElementById("loader");

const errorContainer =
    document.getElementById("error-container");

fetch(PDF_URL, {
    method: "HEAD"
})
    .then(response => {

        if (!response.ok) {
            throw new Error("PDF no encontrado");
        }

        iframe.src = PDF_URL;

        iframe.onload = () => {
            loader.style.display = "none";
        };

    })
    .catch(error => {

        console.error(error);

        loader.style.display = "none";

        errorContainer.style.display = "flex";

    });