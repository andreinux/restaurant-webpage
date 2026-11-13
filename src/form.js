import "./form.css"

export function loadForm() {
    const container = document.querySelector("#container");

    const form = document.createElement("form");

    const title = document.createElement("h2");
    title.textContent = "Make a Reservation";

    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Your Name";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Enter your name";
    nameInput.required = true;

    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Reservation Date";

    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.required = true;

    const timeLabel = document.createElement("label");
    timeLabel.textContent = "Reservation Time";

    const timeInput = document.createElement("input");
    timeInput.type = "time";
    timeInput.required = true;

    const guestsLabel = document.createElement("label");
    guestsLabel.textContent = "Number of Guests";

    const guestsInput = document.createElement("input");
    guestsInput.type = "number";
    guestsInput.min = "1";
    guestsInput.max = "20";
    guestsInput.value = "2";
    guestsInput.required = true;

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Reserve Now";

    form.append(
        title,
        nameLabel,
        nameInput,
        dateLabel,
        dateInput,
        timeLabel,
        timeInput,
        guestsLabel,
        guestsInput,
        submitButton
    );

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        alert(`Thank you, ${nameInput.value}! Your reservation request has been received.`);
        form.reset();
    });

    container.appendChild(form);
}