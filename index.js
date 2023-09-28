// ---------- Banner imagenes
const imgBanner = document.getElementById("imgBanner");
const images = ["images/banner0.png", "images/banner1.png", "images/banner2.png"];
let currentIndex = 0;

// ---------- Formulario
const formulario = document.getElementById("formulario");
const nameInput = document.getElementById("name");
const scname = document.getElementById("scname");
const email = document.getElementById("email");
const course = document.getElementById("course");
const comments = document.getElementById("comments");
const sendComments = document.getElementById("sendComments");
const sendModalTitle = document.getElementById("enviarComentariosLabel");
const sendModalBody = document.getElementById("sendModalBody");
// ---------- Errors
const nameErr = document.getElementById("nameErr");
const scnameErr = document.getElementById("scnameErr");
const emailErr = document.getElementById("emailErr");
const courseErr = document.getElementById("courseErr");
const commentsErr = document.getElementById("commentsErr");



function changeImage() {
    imgBanner.classList.add("hidden");
    setTimeout(() => {
        imgBanner.src = images[currentIndex];
        imgBanner.classList.remove("hidden");
        currentIndex = (currentIndex + 1) % images.length;
    }, 1000);
}

class validateForm {

    constructor() {
        this.valid = [false, false, false, false, false];
    }

    validateName() {
        if (nameInput.value.length >= 2 & nameInput.value.length <= 15) {
            nameInput.className = "form-control is-valid";
            nameErr.style.display = "none";
            this.valid[0] = true;

        } else {
            nameInput.className = "form-control is-invalid";
            nameErr.style.display = "block";
            this.valid[0] = false;
        }
    }

    validateScName() {
        if (scname.value.length >= 2 & scname.value.length <= 15) {
            scname.className = "form-control is-valid";
            scnameErr.style.display = "none";
            this.valid[1] = true;
        } else {
            scname.className = "form-control is-invalid";
            scnameErr.style.display = "block";
            this.valid[1] = false;
        }
    }

    validateEmail() {
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regexEmail.test(email.value)) {
            email.className = "form-control is-valid";
            emailErr.style.display = "none";
            this.valid[2] = true;
        } else {
            email.className = "form-control is-invalid";
            emailErr.style.display = "block";
            this.valid[2] = false;
        }
    }

    validateCourse() {
        if (course.value == "1" || course.value == "2" || course.value == "3") {
            course.className = "form-control is-valid";
            courseErr.style.display = "none";
            this.valid[3] = true;
        } else {
            course.className = "form-control is-invalid";
            courseErr.style.display = "block";
            this.valid[3] = false;
        }
    }

    validateComments() {
        if (comments.value.length > 10) {
            comments.className = "form-control is-valid";
            commentsErr.style.display = "none";
            this.valid[4] = true;
        } else {
            comments.className = "form-control is-invalid";
            commentsErr.style.display = "block";
            this.valid[4] = false;
        }
    }

    formIsValid() {
        const isvalid = this.valid.filter((element) => element == true);
        if (isvalid.length == 5) {
            return true;
        } else {
            return false;
        }
    }
}

// ---------- Validador
const validador = new validateForm();

function nameValid() {
    validador.validateName();
    if (validador.formIsValid()) {
        sendComments.disabled = false;
    } else {
        sendComments.disabled = true;
    }
}

function scNameValid() {
    validador.validateScName();
    if (validador.formIsValid()) {
        sendComments.disabled = false;
    } else {
        sendComments.disabled = true;
    }
}

function emailValid() {
    validador.validateEmail();
    if (validador.formIsValid()) {
        sendComments.disabled = false;
    } else {
        sendComments.disabled = true;
    }
}

function courseValid() {
    validador.validateCourse();
    if (validador.formIsValid()) {
        sendComments.disabled = false;
    } else {
        sendComments.disabled = true;
    }
}

function commentsValid() {
    validador.validateComments();
    if (validador.formIsValid()) {
        sendComments.disabled = false;
    } else {
        sendComments.disabled = true;
    }
}

function valueAString(val) {
    switch (val) {
        case "1":
            return "Sí, me encantó.";
        case "2":
            return "Es probable.";
        default:
            return "Hmmm... tengo que pensarlo más.";
    }
}

function mostrarXConsola() {
    let datos = {};
    datos.nombre = String(nameInput.value);
    datos.apellido = String(scname.value);
    datos.email = String(email.value);
    datos.quiero_inscribirme = valueAString(course.value);
    datos.comentarios = String(comments.value);

    console.log(datos);
}

function enviarCommentarios() {
    sendModalBody.innerHTML = "";
    let title = document.createElement("h3");
    if (validador.formIsValid()) {
        sendModalTitle.textContent = " ¡Muchas Gracias por tus comentarios!";
        let p = document.createElement("p");
        p.textContent = "🤫 No le cuentes a nadie, pero por la consola vas a poder ver los datos del formulario. 😉";
        p.className = "fs-5"
        sendModalBody.appendChild(p);
        mostrarXConsola();

    } else {
        title.textContent = "El formulario no ha sido completado.";
        sendModalTitle.textContent = " ¡Ups! 🤖 ";
        sendModalBody.appendChild(title);
    }
}

function resetForm() {
    formulario.reset();
    nameErr.style.display = "none";
    scnameErr.style.display = "none";
    emailErr.style.display = "none";
    courseErr.style.display = "none";
    commentsErr.style.display = "none";
    nameInput.className = "form-control";
    scname.className = "form-control";
    email.className = "form-control";
    course.className = "form-control";
    comments.className = "form-control";

}

changeImage();
setInterval(changeImage, 10000);