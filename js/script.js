const emailList = document.querySelector(".email-list");
const bottone = document.getElementById("bottone")

function emailFetch() {
    return axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp) => resp.data.response);
}

async function generatoreDieciEmail() {
    let result = [];

    for (let i = 0; i < 10; i++) {
        const email = await emailFetch();
        result.push(email);
    }

    emailList.innerHTML = '';

    result.forEach(email => {
        const listElem = document.createElement("li");
        listElem.innerHTML = email;
        emailList.appendChild(listElem);
    });
}

generatoreDieciEmail(); 

bottone.addEventListener('click', generatoreDieciEmail);
