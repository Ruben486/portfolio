const copiarClipboard = async (texto) => {
    try {
      await navigator.clipboard.writeText(texto);
      console.log("Contenido copiado al portapapeles");
    } catch (err) {
      console.error("Error al copiar: ", err);
    }
  };
  