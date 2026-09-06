
let selections = {
    occasion: "",
    vibe: "",
    style: ""
};

function startStyling() {
    document.getElementById("discover").scrollIntoView({
        behavior: "smooth"
    });
}

function selectOption(button, value) {

    const parent = button.parentElement;

    parent.querySelectorAll("button").forEach(btn => {
        btn.classList.remove("selected");
    });

    button.classList.add("selected");

    const question = button.closest(".question");
    const step = question.querySelector(".step").textContent;

    if (step.includes("01")) {
        selections.occasion = value;
    }

    if (step.includes("02")) {
        selections.vibe = value;
    }

    if (step.includes("03")) {
        selections.style = value;
    }
}

function generateStyle() {

    if (
        !selections.occasion ||
        !selections.vibe ||
        !selections.style
    ) {
        alert("Please choose one option from each section.");
        return;
    }

    const result = document.getElementById("result");
    const title = document.getElementById("resultTitle");
    const text = document.getElementById("resultText");
    const tags = document.getElementById("resultTags");

    let titleText = "";
    let description = "";

    if (selections.style === "indian") {
        titleText = "The Modern Indian Muse";
        description =
            "A refined Indian look with elegant details, thoughtful layering and a modern silhouette.";
    }

    else if (selections.style === "western") {
        titleText = "The Effortless It-Girl";
        description =
            "A polished western look balancing comfort, confidence and understated elegance.";
    }

    else if (selections.style === "fusion") {
        titleText = "The Contemporary Muse";
        description =
            "A beautiful fusion of traditional elements and modern fashion, made for your personality.";
    }

    else {
        titleText = "The Timeless Muse";
        description =
            "An elegant ethnic look with classic details and a fresh contemporary finish.";
    }

    title.textContent = titleText;
    text.textContent = description;

    tags.innerHTML = `
        <span>${selections.occasion}</span>
        <span>${selections.vibe}</span>
        <span>${selections.style}</span>
    `;

    result.classList.add("show");

    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}
