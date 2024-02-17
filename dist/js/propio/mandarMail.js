window.onload = function () {
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        let msg = document.getElementById("msg_email");
        event.preventDefault();
        // these IDs from the previous steps
        // servicio, template //
        emailjs.sendForm("service_4ths9pw", "template_wck81id", this).then(
          () => {
            console.log("SUCCESS!");
            msg.innerText = "El correo fue enviado exitosamente !";
          },
          (error) => {
            console.log("FAILED...", error);
            msg.innerText = "Ha ocurrido un error en el envío del correo";
          }
        );
        setTimeout(() => {
          document.getElementById("contact-form").reset();
          msg.innerText = "";
        }, "5000");
      });
  };
  