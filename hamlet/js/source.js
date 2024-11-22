document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("add-source-form");
    const sourcesList = document.getElementById("sources");

    // Load saved sources from localStorage
    const loadSources = () => {
        const savedSources = JSON.parse(localStorage.getItem("sources")) || [];
        savedSources.forEach(addSourceToDOM);
    };

    // Save sources to localStorage
    const saveSource = (source) => {
        const savedSources = JSON.parse(localStorage.getItem("sources")) || [];
        savedSources.push(source);
        localStorage.setItem("sources", JSON.stringify(savedSources));
    };

    // Add a source to the DOM
    const addSourceToDOM = (source) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>Titel:</strong> ${source.title} <br>
            <strong>Zeit:</strong> ${source.author || "N/A"} <br>
            <strong>Datum:</strong> ${source.date || "N/A"} <br>
            <strong>URL:</strong> <a href="${source.url}" target="_blank">${source.url}</a>
        `;
        sourcesList.appendChild(li);
    };

    // Handle form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const source = {
            title: form.title.value,
            author: form.author.value,
            date: form.date.value,
            url: form.url.value
        };

        addSourceToDOM(source);
        saveSource(source);
        form.reset();
    });

    loadSources();
});
