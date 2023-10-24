const {response} = require('express');

const messageFrom = document.getElementById('message-from');
const messageInput = document.getElementById('message-input');
const chatMessages = document.getElementById('chat-messages');

messageFrom.addEventListener('submit', (e)=>{
    e.preventDefault();

    const message = messageInput.value;
    sendMessage(message);
    messageInput.value = '';
});

function sendMessage(message){
    const chatMessage = document.createElement('div');
    chatMessage.classList.add('chat-message');
    chatMessage.textContent = message;
    chatMessage.appendChild(chatMessage);

    fetch('/send-message',{
        mathod:'POST',
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify({message})
    })
    .then(response=>response.json())
    .then(Data=>{
        console.log(data);
    })
    .catch(error=>{
        console.log(error);
    });
}