// Add messages
let textInput = document.querySelector("#message");
let sendBtn = document.querySelector("#send-btn");
let messages = document.querySelector("#messages");

function sendMsg() {
    let textMessage = document.createElement("article");
    textMessage.classList.add("text");
    textMessage.classList.add("user-text");
    textMessage.innerHTML = `
                <p class="time">9:40AM</p>
                <p class="message">${textInput.value}</p>
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user profile" class="user-profile">
    `
    messages.appendChild(textMessage)
    textInput.value = "";
}

sendBtn.addEventListener('click', () => {
    sendMsg();
})

textInput.addEventListener('keypress', (e) => {
    console.log(e.target);
})