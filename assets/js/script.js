document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const authMessage = document.getElementById("auth-message");
        authMessage.classList.remove("pending");
        authMessage.classList.add("success");
        authMessage.innerHTML = `
            <h1>Authentification Réussie!</h1>
            <p>Votre authentification a réussi, vous allez être automatiquement redirigé vers le site marchand.</p>
            <button id="return-button" class="return-button">
            <img src="assets/img/back.png" class="return-icon">
            <b>Retour à la boutique</b>
        </button>
        `;

        const returnButton = document.getElementById("return-button");
        returnButton.addEventListener("click", function() {
            window.location.href = "https://github.com/oscardev17"; // Redirection vers un site.
        });
    }, 4000); // 4 secondes
});
