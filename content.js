window.COURSE_CONTENT = {
  objectives: [
    {
      title: "Entender el valor de los datos",
      description: "Reconocer por qué los datos tienen un rol central en la tecnología y en las decisiones actuales."
    }, // Define el objetivo específico 1 y su explicación visible en la web.
    {
      title: "Detectar patrones y tendencias",
      description: "Identificar relaciones, repeticiones y señales relevantes dentro de distintos tipos de información."
    }, // Define el objetivo específico 2 y lo conecta con la búsqueda de patrones.
    {
      title: "Comprender análisis de datos e IA",
      description: "Introducir conceptos esenciales de ciencia de datos e inteligencia artificial con lenguaje accesible y aplicado."
    }, // Define el objetivo específico 3 con foco en conceptos base de IA y datos.
    {
      title: "Razonar con evidencia",
      description: "Desarrollar pensamiento analítico, formular preguntas y respaldar conclusiones con información verificable."
    }, // Define el objetivo específico 4 para reforzar el pensamiento científico.
    {
      title: "Interpretar visualizaciones",
      description: "Leer tablas, porcentajes, gráficos y otras representaciones simples para extraer hallazgos."
    }, // Define el objetivo específico 5 relacionado con visualización de información.
    {
      title: "Resolver desafíos en equipo",
      description: "Observar, analizar, argumentar y comunicar ideas de manera colaborativa frente a problemas reales."
    }, // Define el objetivo específico 6 con foco en trabajo grupal y comunicación.
    {
      title: "Proyectar la ciencia de datos",
      description: "Comprender su impacto en distintas áreas del conocimiento, la universidad y el mundo laboral."
    } // Define el objetivo específico 7 y muestra la proyección futura de la disciplina.
  ],
  sessions: [
    {
      number: 1,
      title: "Pensar como científico de datos",
      description: "Qué es la ciencia de datos, qué hace un analista y un científico de datos, el ciclo del dato y la diferencia entre opinión y evidencia.",
      status: "done",
      statusLabel: "Realizada",
      materials: [
        { label: "Presentación", path: "materials/sesion-01/presentacion-sesion-01.pptx" }, // Enlaza la presentación utilizada durante la sesión 1.
        { label: "Guía del estudiante", path: "materials/sesion-01/guia-estudiante-sesion-01.docx" } // Enlaza la guía práctica que acompaña a la sesión 1.
      ]
    }, // Define la primera sesión del taller y sus archivos disponibles.
    {
      number: 2,
      title: "Datos, preguntas y patrones",
      description: "Cómo estructurar información, formular preguntas útiles y llevar el ciclo del dato a una situación real. Incluyó la actividad de carta Gantt con SharePoint + Power BI.",
      status: "done",
      statusLabel: "Realizada",
      materials: [
        { label: "Ejercicio carta Gantt", path: "materials/sesion-02/ejercicio-carta-gantt-sharepoint-power-bi.docx" } // Enlaza el ejercicio aplicado de SharePoint y Power BI realizado en la sesión 2.
      ]
    }, // Define la segunda sesión e incorpora el ejercicio de Gantt que ya fue realizado.
    {
      number: 3,
      title: "Cómo la IA aprende de los datos",
      description: "Qué significa que un sistema aprenda, ejemplos de recomendación, clasificación y predicción, además de sesgos y uso responsable.",
      status: "next",
      statusLabel: "Próximamente",
      materials: []
    }, // Define la tercera sesión, todavía sin material publicado.
    {
      number: 4,
      title: "Visualizar para entender",
      description: "Tablas, frecuencias, porcentajes y gráficos simples para descubrir hallazgos y evitar errores frecuentes de interpretación.",
      status: "next",
      statusLabel: "Próximamente",
      materials: []
    }, // Define la cuarta sesión y su foco en visualización de datos.
    {
      number: 5,
      title: "Laboratorio de ideas y análisis",
      description: "Trabajo grupal sobre un desafío cercano: hábitos digitales, música, deporte, redes sociales, consumo o formas de estudio.",
      status: "next",
      statusLabel: "Próximamente",
      materials: []
    }, // Define la quinta sesión como espacio de análisis aplicado en equipo.
    {
      number: 6,
      title: "Presentamos como científicos de datos",
      description: "Comunicación de hallazgos, retroalimentación, cierre del taller y proyección de la ciencia de datos y la IA hacia estudios y mundo profesional.",
      status: "next",
      statusLabel: "Próximamente",
      materials: []
    } // Define la sexta y última sesión como instancia de presentación y cierre.
  ],
  library: [
    {
      title: "Presentación · Sesión 1",
      description: "Presentación principal: ciencia de datos, ciclo del dato, analista vs. científico de datos, evidencia y actividades iniciales.",
      type: "PPTX",
      session: "Sesión 1",
      path: "materials/sesion-01/presentacion-sesion-01.pptx"
    }, // Registra la presentación de la sesión 1 dentro de la biblioteca descargable.
    {
      title: "Guía del estudiante · Sesión 1",
      description: "Actividades Cazadores de datos, Opinión o evidencia, Decisiones más inteligentes y ticket de salida.",
      type: "DOCX",
      session: "Sesión 1",
      path: "materials/sesion-01/guia-estudiante-sesion-01.docx"
    }, // Registra la guía de trabajo de la sesión 1 y su archivo descargable.
    {
      title: "Mi agenda en modo científico de datos",
      description: "Ejercicio práctico para construir una carta Gantt con una lista de SharePoint y visualizarla en Power BI.",
      type: "DOCX",
      session: "Sesión 2",
      path: "materials/sesion-02/ejercicio-carta-gantt-sharepoint-power-bi.docx"
    }, // Registra el ejercicio de carta Gantt realizado durante la sesión 2.
    {
      title: "Programa del taller",
      description: "Documento base con descripción, objetivos, contenidos, metodología, requerimientos y perfil docente.",
      type: "DOCX",
      session: "Programa",
      path: "materials/programa/programa-taller-piensa-como-cientifico-de-datos.docx"
    } // Registra el programa académico completo del taller como documento de referencia.
  ]
}; // Centraliza todo el contenido editable del sitio para que agregar futuras clases sea rápido y ordenado.
