export function getNombreSeccion(seccion) {
  const nombres = {
    sobreMi: "Sobre mí",
    conocimientos: "Conocimientos",
    proyectos: "Proyectos",
    formacion: "Formación",
    contacto: "Contacto",
  };

  return nombres[seccion] ?? "Sección";
}
