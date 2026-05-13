import React, { useState } from "react";
import { motion } from "framer-motion";

const profile = {
  name: "Brandon Eduardo Tobar Sánchez",
  role: "Ingeniero de Sistemas",
  headline:
    "Desarrollo software inteligente, automatización de procesos e inteligencia artificial aplicada para crear soluciones digitales con impacto real.",
  phone: "304 587 4931",
  email: "brandont882@gmail.com",
  location: "Colombia",
  linkedin: "https://www.linkedin.com/in/brandon-s%C3%A1nchez-944bb6235/",
  github: "https://github.com/brandon5254",
  photoUrl: "/images/profile/imagen brandon.jpeg",
};

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Perfil", href: "#perfil" },
  { label: "Skills", href: "#skills" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Educación", href: "#educacion" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Investigación", href: "#investigacion" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

const impactStats = [
  {
    value: "+30 pts",
    label: "Mejora en precisión",
    detail: "Clasificación de solicitudes con IA durante práctica profesional en DIAN.",
  },
  {
    value: "-60%",
    label: "Reducción de tiempo",
    detail: "Optimización del proceso de clasificación mediante automatización.",
  },
  {
    value: "-40%",
    label: "Menos reprocesos",
    detail: "Mayor eficiencia operativa, trazabilidad y consistencia en el flujo.",
  },
];

const valueCards = [
  {
    icon: "server",
    title: "Backend y arquitectura",
    text: "Construcción de APIs, integración de servicios, diseño modular y desarrollo orientado a mantenibilidad.",
  },
  {
    icon: "brain",
    title: "IA y automatización",
    text: "Aplicación de modelos, agentes inteligentes, automatización institucional y optimización de procesos.",
  },
  {
    icon: "briefcase",
    title: "Soporte técnico y operación",
    text: "Experiencia en soporte informático, diagnóstico de fallas, configuración de sistemas y acompañamiento tecnológico.",
  },
];

const skillGroups = [
  {
    title: "Lenguajes de programación",
    icon: "code",
    skills: ["Python", "C++", "Java", "JavaScript", "TypeScript", "C#", "Go"],
  },
  {
    title: "Backend & APIs",
    icon: "server",
    skills: ["Node.js", "FastAPI", "Spring Boot", ".NET Core", "Flask", "Django", "REST APIs"],
  },
  {
    title: "Frontend & Mobile",
    icon: "layers",
    skills: ["Angular", "React", "Ionic", "Bootstrap", "HTML", "CSS", "Responsive UI"],
  },
  {
    title: "Bases de datos",
    icon: "database",
    skills: ["Oracle SQL", "PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Redis", "Firebase", "SQLite"],
  },
  {
    title: "Cloud, DevOps & despliegue",
    icon: "rocket",
    skills: ["Firebase", "Supabase", "Docker", "Vercel", "Railway", "Jenkins", "Apache Tomcat"],
  },
  {
    title: "IA, datos & automatización",
    icon: "brain",
    skills: ["Scikit-learn", "Anaconda", "Machine Learning", "LLM", "Prompt Engineering", "Power Apps", "Power Automate"],
  },
  {
    title: "Herramientas profesionales",
    icon: "terminal",
    skills: ["Git", "GitHub", "Postman", "Visual Studio", "VS Code", "Rider", "PyCharm"],
  },
  {
    title: "Arquitecturas de software",
    icon: "shield",
    skills: ["Clean Code", "Monolítica", "Microservicios", "Arquitectura Limpia", "Modular", "Hexagonal"],
  },
];

const experiences = [
  {
    company: "DIAN – Dirección de Impuestos y Aduanas Nacionales",
    role: "Practicante de Ingeniería de Sistemas",
    period: "Práctica profesional",
    accent: "IA institucional",
    icon: "brain",
    summary:
      "Durante mi práctica profesional participé en el desarrollo e implementación de soluciones sobre Power Platform, integrando automatización e inteligencia artificial para optimizar procesos institucionales. Trabajé en análisis de requerimientos, diseño de soluciones tecnológicas y mejora de la trazabilidad operativa, logrando incrementos en precisión, reducción de tiempos y disminución de reprocesos.",
    achievements: [
      "+30 puntos porcentuales en precisión",
      "-60% en tiempo de clasificación",
      "-40% en reprocesos operativos",
    ],
  },
  {
    company: "Confecciones Nemetex SAS",
    role: "Técnico en soporte técnico e informático, ventas y marketing digital",
    period: "Junio 2021 – Octubre 2023",
    accent: "Soporte y operación",
    icon: "briefcase",
    summary:
      "Me desempeñé brindando soporte técnico e informático, realizando instalación, configuración y mantenimiento de equipos, sistemas operativos, programas y aplicaciones. Apoyé el diagnóstico y solución de fallas de hardware y software, configuración de perfiles, correos y accesos, revisiones básicas de seguridad, pruebas de nuevas herramientas tecnológicas y acompañamiento a usuarios. Además, participé en actividades relacionadas con ventas y marketing digital, aportando soporte operativo y tecnológico al negocio.",
    achievements: [
      "Soporte técnico integral",
      "Mantenimiento de equipos y sistemas",
      "Configuración de accesos y correos",
      "Apoyo en ventas y marketing digital",
    ],
  },
];

const education = [
  {
    institution: "Universidad de San Buenaventura de Cali",
    degree: "Ingeniería de Sistemas – Profesional graduado",
    period: "Febrero 2021 – Marzo 2026",
    description:
      "Formación profesional enfocada en ingeniería de software, desarrollo de soluciones tecnológicas, bases de datos, análisis de sistemas, arquitectura, inteligencia artificial y construcción de proyectos aplicados.",
    distinction: "Becas Diamante por excelencia académica en el bachillerato.",
  },
  {
    institution: "Corporación Universitaria Autónoma de Nariño",
    degree: "Técnico Laboral por competencias en Auxiliar en Sistemas Informáticos",
    period: "Enero 2018 – Diciembre 2020",
    description:
      "Base técnica en soporte, sistemas informáticos, herramientas de desarrollo, mantenimiento, lógica computacional y fundamentos de programación.",
    distinction: "Formación técnica orientada al desempeño laboral en tecnología.",
  },
  {
    institution: "Centro Educativo Industrial Luis Madina",
    degree: "Bachiller Técnico Industrial con énfasis en Sistemas Informáticos",
    period: "2020",
    description:
      "Formación media técnica con orientación a sistemas informáticos, pensamiento lógico y competencias iniciales para el desarrollo tecnológico.",
    distinction: "Énfasis técnico industrial en sistemas informáticos.",
  },
];

const projects = [
  {
    name: "MindMate",
    category: "Tesis de grado · Salud mental + IA",
    badge: "Proyecto insignia",
    description:
      "Plataforma móvil y web diseñada como apoyo tecnológico para el monitoreo de pacientes con esquizofrenia. El sistema centraliza información clínica, síntomas, signos vitales y seguimiento médico-paciente, facilitando un acompañamiento más estructurado y orientado a datos. Integra componentes de inteligencia artificial para apoyar la predicción de subtipos de esquizofrenia y generar recomendaciones útiles para el proceso clínico.",
    challenge:
      "El reto principal fue construir una solución sensible y confiable para un contexto de salud mental, donde la trazabilidad, la seguridad de la información, la claridad de uso y el soporte clínico son elementos críticos.",
    solution:
      "Se desarrolló una arquitectura basada en Angular y Firebase, con autenticación, almacenamiento, base de datos en tiempo real, Cloud Functions y componentes de machine learning para aportar valor predictivo dentro del flujo funcional.",
    impact: [
      "Gestión digital de historia clínica y seguimiento",
      "Predicción de subtipos mediante IA",
      "Comunicación entre médico y paciente",
      "Arquitectura móvil y web escalable",
    ],
    stack: ["Angular", "Firebase", "Firestore", "Auth", "Storage", "Realtime DB", "Cloud Functions", "Machine Learning"],
  },
  {
    name: "Cali Conecta IA",
    category: "Agentes inteligentes · WiFi público",
    badge: "IA operativa",
    description:
      "Plataforma inteligente orientada al análisis de redes WiFi públicas, capaz de convertir datos operativos en información accionable para la toma de decisiones. El sistema permite identificar anomalías, consultar información en lenguaje natural y generar recomendaciones estratégicas apoyadas por modelos de IA.",
    challenge:
      "El desafío fue transformar datos técnicos de operación en una experiencia comprensible para usuarios no necesariamente técnicos, manteniendo valor analítico y capacidad de acción.",
    solution:
      "Se implementó una arquitectura con React, FastAPI y Supabase, combinando detección de anomalías con Isolation Forest y modelos de lenguaje para consultas inteligentes y recomendaciones operativas.",
    impact: [
      "Detección de comportamientos anómalos",
      "Consultas en lenguaje natural",
      "Recomendaciones estratégicas para operación",
      "Análisis inteligente de infraestructura pública",
    ],
    stack: ["React", "FastAPI", "Supabase", "Isolation Forest", "LLM", "Python"],
  },
  {
    name: "FacturaOps / Factura Autopilot",
    category: "Automatización · Facturación electrónica",
    badge: "Automatización inteligente",
    description:
      "Sistema enfocado en automatizar procesos posteriores a la emisión de facturas electrónicas. La plataforma facilita validación documental, consulta de estados, trazabilidad, extracción de información y ejecución automática de acciones repetitivas mediante herramientas de automatización e inteligencia artificial.",
    challenge:
      "Los procesos posteriores a la facturación suelen requerir revisión manual, seguimiento constante y validaciones repetitivas. El objetivo fue reducir carga operativa y aumentar trazabilidad.",
    solution:
      "Se diseñó un flujo backend con FastAPI, SQLite, SQLAlchemy y componentes de lectura documental usando PyPDF2, OCR y Selenium para automatizar tareas sobre documentos y plataformas externas.",
    impact: ["Validación documental", "Trazabilidad operativa", "Extracción con OCR", "Automatización con Selenium"],
    stack: ["Python", "FastAPI", "SQLite", "SQLAlchemy", "PyPDF2", "OCR", "Selenium"],
  },
  {
    name: "Sistema de gestión para aerolínea",
    category: "API REST + Frontend empresarial",
    badge: "Arquitectura empresarial",
    description:
      "Sistema completo para apoyar la gestión de operaciones internas de una aerolínea. Incluye backend robusto, base de datos relacional, frontend administrativo y despliegue sobre infraestructura de servidor, orientado a mantener procesos organizados y centralizados.",
    challenge:
      "El proyecto exigía estructurar una solución mantenible, con separación clara entre backend, frontend, persistencia de datos y despliegue, simulando un entorno empresarial real.",
    solution:
      "Se implementó una API REST con Java Spring Boot, persistencia en PostgreSQL, frontend en Angular y despliegue apoyado en Jenkins y Apache Tomcat.",
    impact: ["API REST mantenible", "Frontend administrativo", "Integración CI/CD", "Despliegue en servidor"],
    stack: ["Java", "Spring Boot", "PostgreSQL", "Angular", "Jenkins", "Tomcat"],
  },
  {
    name: "App móvil de carpooling",
    category: "Movilidad colaborativa · Tipo BlaBlaCar",
    badge: "Mobile product",
    description:
      "Aplicación móvil para conectar personas interesadas en compartir viajes, optimizar costos de transporte y mejorar la organización de rutas. El enfoque del proyecto fue crear una experiencia simple, funcional y centrada en usuarios que necesitan movilidad compartida.",
    challenge:
      "La solución requería manejar usuarios, viajes, disponibilidad, rutas y persistencia de datos en una experiencia móvil clara y eficiente.",
    solution:
      "Se desarrolló con Ionic y TypeScript, integrando MongoDB y Prisma para la gestión de datos y estructuración del modelo de información.",
    impact: ["Gestión de viajes", "Conexión entre usuarios", "Optimización de costos", "Experiencia móvil"],
    stack: ["Ionic", "TypeScript", "MongoDB", "Prisma"],
  },
  {
    name: "Control de asistencia biométrica",
    category: "Desktop · Reportería operativa",
    badge: "Sistema de escritorio",
    description:
      "Solución de escritorio para automatizar el registro de asistencia mediante control biométrico, gestión de información y generación de reportes. El sistema está orientado a mejorar el control interno y reducir el manejo manual de registros.",
    challenge:
      "El proyecto debía garantizar almacenamiento estructurado, generación de reportes y facilidad de consulta para procesos administrativos.",
    solution:
      "Se implementó con C#, .NET, SQL Server y Crystal Reports, priorizando una experiencia de escritorio funcional y reportes listos para uso operativo.",
    impact: ["Registro biométrico", "Reportes administrativos", "Automatización", "Control interno"],
    stack: ["C#", ".NET", "SQL Server", "Crystal Reports"],
  },
];

const research = {
  title: "MindMate: An Application for Symptom Monitoring and Clinical Support in Schizophrenia",
  event: "Congreso Internacional AmITIC 2025",
  role: "Ponente",
  category: "Ingeniería de Software y Salud Electrónica y Móvil",
  place: "Neiva, Colombia",
  description:
    "Participación como ponente con el proyecto de tesis MindMate, una aplicación orientada al monitoreo de síntomas y apoyo clínico en esquizofrenia. Esta experiencia conecta desarrollo de software, salud digital, inteligencia artificial y comunicación científica en un escenario académico internacional.",
  imageUrl: "/public/images/research/certificado_AmITIC_2025__ (1).jpg",
};

const aiFocus = [
  "Desarrollo de modelos de clasificación y predicción con Python, Scikit-learn y entornos de análisis como Anaconda.",
  "Implementación de soluciones con IA en entornos reales, incluyendo automatización institucional durante la práctica profesional en DIAN.",
  "Uso de modelos de lenguaje, prompt engineering y agentes inteligentes para mejorar procesos de consulta, clasificación y toma de decisiones.",
  "Aplicación de técnicas de machine learning para detección de anomalías, clasificación, predicción y apoyo operativo.",
];

const galleryItems = [
  {
    title: "MindMate",
    subtitle: "Capturas del módulo clínico, seguimiento de síntomas y experiencia médico-paciente.",
    tag: "HealthTech",
    imageUrl: "public/images/projects/mindmate module.jpeg",
  },
  {
    title: "App móvil de carpooling",
    subtitle: "Producto móvil tipo BlaBlaCar desarrollado con Ionic y TypeScript para conectar usuarios, compartir viajes y optimizar costos.",
    tag: "Ionic / MongoDB",
    imageUrl: "portafolio/public/images/projects/intermuniconect.png",
  },
  {
    title: "Cali Conecta IA",
    subtitle: "Panel de anomalías, consultas inteligentes y recomendaciones operativas.",
    tag: "AI Ops",
    imageUrl: "/public/images/projects/cali conecta.jpeg",
  },
  {
    title: "FacturaOps",
    subtitle: "Flujos de OCR, validación, trazabilidad y automatización documental.",
    tag: "Automation",
    imageUrl: "/public/images/projects/facturaops.jpeg",
  },
  {
    title: "Sistema de gestión para aerolínea",
    subtitle: "Frontend administrativo y API REST empresarial para centralizar vuelos, reservas, usuarios y operaciones internas.",
    tag: "Angular / Spring Boot",
    imageUrl: "/public/images/projects/aerolinea panel.png",
  },
  {
    title: "Control de asistencia biométrica",
    subtitle: "Sistema de escritorio para registro biométrico, gestión administrativa y reportes operativos.",
    tag: "Desktop / Reporting",
    imageUrl: "/public/images/projects/asistencia digital.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function runPortfolioSelfTests() {
  const requiredSections = ["#inicio", "#perfil", "#skills", "#experiencia", "#educacion", "#proyectos", "#investigacion", "#galeria", "#contacto"];
  console.assert(profile.name.length > 3, "Debe existir el nombre del perfil.");
  console.assert(profile.email.includes("@"), "El correo debe tener formato válido.");
  console.assert(profile.linkedin.startsWith("http"), "LinkedIn debe iniciar con http.");
  console.assert(requiredSections.every((href) => navItems.some((item) => item.href === href)), "La navegación debe incluir todas las secciones principales.");
  console.assert(impactStats.length === 3, "El resumen de impacto debe tener tres métricas principales.");
  console.assert(valueCards.length === 3, "La propuesta de valor debe tener tres bloques.");
  console.assert(experiences.length >= 2, "Deben existir al menos dos experiencias profesionales.");
  console.assert(experiences.some((exp) => exp.company.includes("Confecciones Nemetex")), "Debe incluirse la experiencia en Confecciones Nemetex SAS.");
  console.assert(skillGroups.length >= 8, "Deben existir mínimo ocho grupos de habilidades.");
  console.assert(education.length === 3, "La sección de educación debe contener los tres estudios indicados.");
  console.assert(projects.length >= 6, "Debe haber al menos seis proyectos destacados.");
  console.assert(research.title.includes("MindMate"), "El apartado de investigación debe incluir el artículo/proyecto MindMate.");
  console.assert(galleryItems.length >= 6, "La galería debe tener al menos seis espacios.");
}

if (typeof window !== "undefined") {
  runPortfolioSelfTests();
}

function Icon({ name = "sparkles", className = "h-5 w-5" }) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    brain: <><path d="M9 3a3 3 0 0 0-3 3v1a4 4 0 0 0-2 7.5A4 4 0 0 0 8 21h1V3Z" /><path d="M15 3a3 3 0 0 1 3 3v1a4 4 0 0 1 2 7.5A4 4 0 0 1 16 21h-1V3Z" /><path d="M9 7H7" /><path d="M15 7h2" /><path d="M9 13H6" /><path d="M15 13h3" /></>,
    briefcase: <><path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" /><rect x="3" y="6" width="18" height="14" rx="2" /><path d="M3 12h18" /><path d="M10 12v2h4v-2" /></>,
    chevron: <path d="m9 18 6-6-6-6" />,
    code: <><path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></>,
    external: <><path d="M14 3h7v7" /><path d="M10 14 21 3" /><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" /></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.5 2-5-2-7-2" /></>,
    globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" /></>,
    graduation: <><path d="m22 10-10-5-10 5 10 5 10-5Z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></>,
    layers: <><path d="m12 2 10 5-10 5L2 7l10-5Z" /><path d="m2 17 10 5 10-5" /><path d="m2 12 10 5 10-5" /></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    menu: <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.61a2 2 0 0 1-.45 2.11L8 9.69a16 16 0 0 0 6.31 6.31l1.25-1.25a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.61.59A2 2 0 0 1 22 16.9Z" />,
    rocket: <><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /><path d="M11 8v6" /><path d="M8 11h6" /></>,
    server: <><rect x="3" y="4" width="18" height="8" rx="2" /><rect x="3" y="12" width="18" height="8" rx="2" /><path d="M7 8h.01" /><path d="M7 16h.01" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
    sparkles: <><path d="M12 3 9.8 8.8 4 11l5.8 2.2L12 19l2.2-5.8L20 11l-5.8-2.2L12 3Z" /><path d="M5 3v4" /><path d="M3 5h4" /><path d="M19 17v4" /><path d="M17 19h4" /></>,
    terminal: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m8 9 3 3-3 3" /><path d="M13 15h4" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 20a8 8 0 0 1 16 0" /></>,
    x: <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>,
  };

  return <svg {...commonProps}>{paths[name] || paths.sparkles}</svg>;
}

function FloatingIcon({ name, className = "h-5 w-5", delay = 0 }) {
  return (
    <motion.div
      animate={{ y: [0, -4, 0], rotate: [0, 2, -2, 0] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <Icon name={name} className={className} />
    </motion.div>
  );
}

function Pill({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur ${className}`}>
      {children}
    </span>
  );
}

function SectionLabel({ icon = "sparkles", children }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-300/20 bg-fuchsia-300/10 px-4 py-2 text-sm font-semibold text-fuchsia-100 shadow-lg shadow-fuchsia-950/20">
      <FloatingIcon name={icon} className="h-4 w-4" />
      {children}
    </div>
  );
}

function ZoomableImage({ imageUrl, title, alt, onPreview, className = "h-full w-full object-cover" }) {
  return (
    <button
      type="button"
      onClick={() => onPreview(imageUrl, title)}
      className="group absolute inset-0 cursor-zoom-in overflow-hidden text-left"
      aria-label={`Ampliar imagen de ${title}`}
    >
      <img
        src={imageUrl}
        alt={alt || title}
        className={`${className} transition duration-500 group-hover:scale-105`}
      />

      <div className="absolute inset-0 bg-slate-950/0 transition group-hover:bg-slate-950/40" />

      <div className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-slate-950/65 text-white opacity-0 shadow-xl backdrop-blur-xl transition group-hover:opacity-100">
        <Icon name="search" className="h-5 w-5" />
      </div>

      <div className="absolute bottom-4 left-4 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-2 text-sm font-semibold text-white opacity-0 backdrop-blur-xl transition group-hover:opacity-100">
        Ver imagen ampliada
      </div>
    </button>
  );
}

function ImagePreviewModal({ previewImage, onClose }) {
  if (!previewImage) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-xl"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 z-10 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white/20"
        aria-label="Cerrar imagen ampliada"
      >
        <Icon name="x" className="h-6 w-6" />
      </button>

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/50"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between gap-4 px-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
              Vista ampliada
            </p>
            <h3 className="text-xl font-black text-white">
              {previewImage.title}
            </h3>
          </div>
        </div>

        <div className="max-h-[78vh] overflow-auto rounded-[1.5rem] bg-slate-950/60">
          <img
            src={previewImage.imageUrl}
            alt={previewImage.title}
            className="mx-auto h-auto max-h-none w-auto max-w-full object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProfilePhotoCard() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
      <div className="absolute -inset-5 rounded-[2rem] bg-[radial-gradient(circle_at_20%_20%,rgba(167,139,250,.32),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,.32),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(251,191,36,.24),transparent_30%)] blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.07] p-5 shadow-2xl shadow-black/30 backdrop-blur-2xl">
        <div className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.02))] p-4">
          <div className="relative mx-auto aspect-[4/5] max-w-[340px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.18),transparent_40%),linear-gradient(180deg,#141b34,#0b1022)]">
            {profile.photoUrl ? (
              <img src={profile.photoUrl} alt={profile.name} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center text-center">
                <motion.div animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 3, repeat: Infinity }} className="mb-5 grid h-24 w-24 place-items-center rounded-full border border-white/10 bg-white/5 text-white shadow-xl">
                  <Icon name="user" className="h-12 w-12" />
                </motion.div>
                <p className="text-lg font-bold text-white">Tu foto profesional aquí</p>
                <p className="mt-2 max-w-xs px-6 text-sm leading-6 text-slate-300">Agrega tu imagen en <span className="font-semibold text-cyan-100">photoUrl</span> para que el hero quede listo para reclutadores.</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            ["briefcase", "Perfil profesional", "Ingeniería + producto"],
            ["brain", "IA aplicada", "Modelos y automatización"],
            ["server", "Backend sólido", "APIs, datos y despliegue"],
            ["linkedin", "Marca profesional", "Listo para reclutadores"],
          ].map(([icon, title, subtitle], index) => (
            <motion.div key={title} whileHover={{ y: -4, scale: 1.02 }} className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-400/20 via-cyan-300/20 to-amber-300/20 text-cyan-100">
                  <FloatingIcon name={icon} className="h-5 w-5" delay={index * 0.2} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="text-xs text-slate-400">{subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ImpactSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 pb-10 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl"
        >
          <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-fuchsia-400/10 blur-3xl" />

          <div className="relative">
            <SectionLabel icon="sparkles">Resumen de impacto</SectionLabel>
            <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
              Resultados medibles y una propuesta de valor clara.
            </h2>
            <p className="mt-4 max-w-3xl text-slate-300 leading-7">
              Mi perfil combina desarrollo de software, inteligencia artificial, automatización y soporte técnico, con enfoque en construir soluciones funcionales, mantenibles y alineadas a necesidades reales del negocio.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {impactStats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="rounded-[1.8rem] border border-white/10 bg-slate-950/25 p-5"
                >
                  <p className="bg-gradient-to-r from-white via-cyan-100 to-fuchsia-100 bg-clip-text text-3xl font-black text-transparent">{item.value}</p>
                  <p className="mt-2 text-sm font-semibold text-cyan-100">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4">
          {valueCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-400/20 via-cyan-300/20 to-amber-300/20 text-white">
                  <FloatingIcon name={card.icon} className="h-5 w-5" delay={index * 0.15} />
                </div>
                <div>
                  <h3 className="text-lg font-black">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{card.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const cleanPhone = profile.phone.replace(/\s/g, "");

  const openImagePreview = (imageUrl, title) => {
    setPreviewImage({ imageUrl, title });
  };

  const closeImagePreview = () => {
    setPreviewImage(null);
  };

  return (
    <main className="min-h-screen scroll-smooth bg-[#070B17] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-12%] top-[-10%] h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[24rem] w-[24rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[30%] h-[28rem] w-[28rem] rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070B17]/70 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#inicio" className="group flex items-center gap-3">
            <motion.div animate={{ rotate: [0, 3, -3, 0], y: [0, -2, 0] }} transition={{ duration: 4, repeat: Infinity }} className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-400 via-cyan-300 to-amber-300 font-black text-slate-950 shadow-lg shadow-fuchsia-500/20">BT</motion.div>
            <div>
              <p className="text-sm font-bold leading-none">Brandon Tobar</p>
              <p className="text-xs text-slate-400">Systems Engineer</p>
            </div>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 xl:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">{item.label}</a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
              <FloatingIcon name="linkedin" className="h-4 w-4" /> LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:scale-[1.02] hover:bg-amber-100">Contactar</a>
          </div>

          <button type="button" onClick={() => setOpenMenu(!openMenu)} className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 xl:hidden" aria-label="Abrir o cerrar menú">
            <Icon name={openMenu ? "x" : "menu"} className="h-5 w-5" />
          </button>
        </nav>

        {openMenu && (
          <div className="border-t border-white/10 bg-[#070B17]/95 px-5 py-4 xl:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpenMenu(false)} className="rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/10 hover:text-white">{item.label}</a>
              ))}
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/10 hover:text-white">LinkedIn</a>
            </div>
          </div>
        )}
      </header>

      <section id="inicio" className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-28">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur">
            <FloatingIcon name="sparkles" className="h-4 w-4 text-fuchsia-200" /> Portafolio profesional · Backend · IA · Automatización
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.94] tracking-tight text-white sm:text-6xl lg:text-7xl">{profile.name}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">{profile.role}</span>
            <span className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-100">Profesional graduado</span>
            <span className="inline-flex rounded-full border border-fuchsia-300/20 bg-fuchsia-300/10 px-4 py-2 text-sm font-semibold text-fuchsia-100">IA + Arquitectura + Automatización</span>
          </div>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">{profile.headline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#proyectos" className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-amber-300 px-6 py-4 font-bold text-slate-950 shadow-xl shadow-fuchsia-950/30 transition hover:scale-[1.02]">Ver proyectos destacados <Icon name="arrow" className="h-5 w-5 transition group-hover:translate-x-1" /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-6 py-4 font-bold text-white backdrop-blur transition hover:bg-white/12"><FloatingIcon name="linkedin" className="h-5 w-5" />Ver LinkedIn</a>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300"><FloatingIcon name="phone" className="h-4 w-4 text-cyan-300" />{profile.phone}</div>
            <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300"><FloatingIcon name="mail" className="h-4 w-4 text-fuchsia-300" />{profile.email}</div>
            <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300"><FloatingIcon name="globe" className="h-4 w-4 text-amber-300" />{profile.location}</div>
          </div>
        </motion.div>
        <ProfilePhotoCard />
      </section>

      <ImpactSection />

      <section id="perfil" className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <SectionLabel icon="briefcase">Perfil profesional</SectionLabel>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Un perfil técnico con criterio, impacto y visión de crecimiento.</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 leading-8 text-slate-300 backdrop-blur-xl">
            <p>Ingeniero de Sistemas con enfoque en desarrollo de software, inteligencia artificial y automatización de procesos. Experiencia en diseño e implementación de soluciones tecnológicas utilizando Angular, React, Python, FastAPI, Java Spring Boot, servicios en la nube y herramientas de automatización.</p>
            <p className="mt-5">Durante mi práctica profesional en la DIAN, desarrollé soluciones basadas en Power Platform integrando IA y automatización para optimizar procesos institucionales. También he participado en proyectos de machine learning, sistemas inteligentes, salud digital, plataformas operativas y aplicaciones empresariales enfocadas en resolver problemas reales.</p>
            <div className="mt-6 flex flex-wrap gap-2">{["Backend", "Arquitectura", "IA aplicada", "Automatización", "Cloud", "Ciencia de datos", "Clean Code", "Despliegue"].map((tag) => <Pill key={tag}>{tag}</Pill>)}</div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionLabel icon="terminal">Conocimientos técnicos y herramientas</SectionLabel>
        <div className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Herramientas que convierto en soluciones reales</h2>
          <p className="max-w-xl text-slate-400">Un recorrido por las tecnologías que he aplicado en proyectos web, móviles, backend, bases de datos, inteligencia artificial y despliegue.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.div key={group.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: index * 0.04 }} whileHover={{ y: -6 }} className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:bg-white/[0.09]">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-400/15 via-cyan-300/15 to-amber-300/15 text-white"><FloatingIcon name={group.icon} className="h-5 w-5" delay={index * 0.1} /></div>
                <h3 className="text-lg font-black">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">{group.skills.map((skill) => <Pill key={skill}>{skill}</Pill>)}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experiencia" className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionLabel icon="shield">Experiencia profesional</SectionLabel>
        <div className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Experiencia construida entre tecnología, operación y mejora de procesos.</h2>
          <p className="max-w-xl text-slate-400">Un recorrido que combina automatización institucional, desarrollo de soluciones y soporte técnico aplicado en entornos reales.</p>
        </div>

        <div className="grid gap-6">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="overflow-hidden rounded-[2.3rem] border border-white/10 bg-white/[0.06] backdrop-blur-xl"
            >
              <div className="grid gap-0 lg:grid-cols-[.36fr_.64fr]">
                <div className="bg-[linear-gradient(135deg,rgba(217,70,239,.12),rgba(34,211,238,.12),rgba(251,191,36,.08))] p-7 lg:p-8">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-white">
                    <FloatingIcon name={experience.icon} className="h-7 w-7" delay={index * 0.2} />
                  </div>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-fuchsia-100">{experience.period}</p>
                  <h3 className="mt-3 text-2xl font-black">{experience.company}</h3>
                  <p className="mt-2 font-semibold text-cyan-100">{experience.role}</p>
                  <Pill className="mt-4 border-amber-300/20 bg-amber-300/10 text-amber-100">{experience.accent}</Pill>
                </div>

                <div className="p-7 lg:p-8">
                  <p className="text-lg leading-8 text-slate-300">{experience.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.achievements.map((item) => <Pill key={item}>{item}</Pill>)}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="educacion" className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionLabel icon="graduation">Educación, formación y distinciones</SectionLabel>
        <div className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Una trayectoria académica construida desde bases técnicas hasta ingeniería profesional.</h2>
          <p className="max-w-xl text-slate-400">Mi formación combina bases técnicas, aprendizaje constante y experiencia aplicada en proyectos reales de software.</p>
        </div>
        <div className="grid gap-6">
          {education.map((item, index) => (
            <motion.article key={item.institution} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: index * 0.06 }} className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl lg:grid-cols-[.36fr_.64fr]">
              <div>
                <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-400/20 via-cyan-300/20 to-amber-300/20 text-white"><FloatingIcon name="graduation" className="h-7 w-7" delay={index * 0.2} /></div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-100">{item.period}</p>
                <h3 className="mt-3 text-2xl font-black">{item.institution}</h3>
              </div>
              <div>
                <p className="text-xl font-bold text-cyan-100">{item.degree}</p>
                <p className="mt-4 leading-8 text-slate-300">{item.description}</p>
                <div className="mt-5 rounded-2xl border border-amber-300/15 bg-amber-300/10 p-4 text-sm font-semibold text-amber-100">{item.distinction}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="proyectos" className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionLabel icon="rocket">Proyectos destacados</SectionLabel>
        <div className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Proyectos que muestran cómo construyo soluciones</h2>
          <p className="max-w-xl text-slate-400">Cada proyecto refleja un reto real, las decisiones técnicas que tomé y el resultado logrado con la solución.</p>
        </div>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <motion.article key={project.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: index * 0.04 }} whileHover={{ y: -5 }} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] backdrop-blur-xl transition hover:border-fuchsia-300/20 hover:bg-white/[0.08]">
              <div className="grid gap-0 lg:grid-cols-[.85fr_1.15fr]">
                <div className="relative min-h-64 border-b border-white/10 bg-slate-950/35 p-7 lg:border-b-0 lg:border-r">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,70,239,.22),transparent_30%),radial-gradient(circle_at_80%_60%,rgba(34,211,238,.18),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(251,191,36,.12),transparent_30%)]" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div>
                      <Pill className="border-fuchsia-300/20 bg-fuchsia-300/10 text-fuchsia-100">{project.badge}</Pill>
                      <h3 className="mt-5 text-3xl font-black tracking-tight">{project.name}</h3>
                      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{project.category}</p>
                    </div>
                    <div className="mt-8 grid h-24 place-items-center rounded-3xl border border-white/10 bg-white/5"><FloatingIcon name="brain" className="h-12 w-12 text-cyan-200" delay={index * 0.12} /></div>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-lg leading-8 text-slate-300">{project.description}</p>
                  <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/25 p-4"><p className="text-sm font-bold text-fuchsia-100">Reto</p><p className="mt-2 text-sm leading-6 text-slate-300">{project.challenge}</p></div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/25 p-4"><p className="text-sm font-bold text-cyan-100">Solución</p><p className="mt-2 text-sm leading-6 text-slate-300">{project.solution}</p></div>
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">{project.impact.map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/25 p-3 text-sm text-slate-200"><span className="h-2 w-2 rounded-full bg-cyan-300" />{item}</div>)}</div>
                  <div className="mt-6 flex flex-wrap gap-2">{project.stack.map((tech) => <Pill key={tech}>{tech}</Pill>)}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="investigacion" className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(217,70,239,.12),rgba(255,255,255,.05),rgba(34,211,238,.10),rgba(251,191,36,.08))] backdrop-blur-xl">
          <div className="grid gap-0 lg:grid-cols-[.95fr_1.05fr]">
            <div className="p-8 lg:p-10">
              <SectionLabel icon="sparkles">Investigación y artículo científico</SectionLabel>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-100">{research.role} · {research.event}</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight">{research.title}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">{research.description}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/25 p-4"><p className="text-sm text-slate-400">Categoría</p><p className="mt-1 font-bold text-cyan-100">{research.category}</p></div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/25 p-4"><p className="text-sm text-slate-400">Lugar</p><p className="mt-1 font-bold text-amber-100">{research.place}</p></div>
              </div>
            </div>
            <div className="border-t border-white/10 bg-slate-950/25 p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.20),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(217,70,239,.18),transparent_30%),linear-gradient(180deg,#141b34,#0c1020)]">
                {research.imageUrl ? (
                  <ZoomableImage
                    imageUrl={research.imageUrl}
                    title={research.title}
                    alt="Artículo científico o ponencia MindMate"
                    onPreview={openImagePreview}
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                    <div className="mb-5 grid h-20 w-20 place-items-center rounded-3xl border border-white/10 bg-white/8 text-white"><FloatingIcon name="graduation" className="h-10 w-10" /></div>
                    <p className="text-xl font-black">Espacio para imagen del artículo</p>
                    <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">Puedes poner aquí certificado, póster, portada del artículo, captura de la ponencia o evidencia del Congreso Internacional AmITIC 2025.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl">
            <SectionLabel icon="brain">Inteligencia artificial aplicada</SectionLabel>
            <h2 className="text-3xl font-black">IA conectada con procesos reales</h2>
            <div className="mt-6 grid gap-4">{aiFocus.map((item) => <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/25 p-4 text-slate-300"><FloatingIcon name="sparkles" className="mt-1 h-5 w-5 flex-none text-fuchsia-300" /><p>{item}</p></div>)}</div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl">
            <SectionLabel icon="shield">Fortalezas profesionales</SectionLabel>
            <h2 className="text-3xl font-black">Criterio técnico + autonomía + resultados</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">{["Pensamiento analítico", "Resolución de problemas", "Aprendizaje autónomo", "Trabajo en equipo", "Adaptabilidad tecnológica", "Orientación a resultados"].map((strength) => <div key={strength} className="rounded-2xl border border-white/10 bg-slate-950/25 p-4 font-semibold text-slate-100">{strength}</div>)}</div>
          </div>
        </div>
      </section>

      <section id="galeria" className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionLabel icon="layers">Galería</SectionLabel>
        <div className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Espacios visuales para evidenciar tu trabajo.</h2>
          <p className="max-w-xl text-slate-400">Galería lista para capturas reales: dashboards, módulos, certificados, artículos, flujos de automatización y vistas móviles.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.45, delay: index * 0.04 }} whileHover={{ y: -6 }} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] backdrop-blur-xl">
              <div className="relative aspect-[16/10] border-b border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.20),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(217,70,239,.18),transparent_30%),linear-gradient(180deg,#141b34,#0c1020)]">
                {item.imageUrl ? (
                  <ZoomableImage
                    imageUrl={item.imageUrl}
                    title={item.title}
                    alt={item.title}
                    onPreview={openImagePreview}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center"><div className="grid h-16 w-16 place-items-center rounded-3xl border border-white/10 bg-white/8 text-white shadow-xl"><FloatingIcon name="layers" className="h-8 w-8" delay={index * 0.1} /></div></div>
                )}
                <div className="absolute left-4 top-4 pointer-events-none"><Pill className="border-cyan-300/20 bg-cyan-300/10 text-cyan-100">{item.tag}</Pill></div>
              </div>
              <div className="p-5"><h3 className="text-lg font-black">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{item.subtitle}</p></div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contacto" className="relative mx-auto max-w-7xl px-5 py-16 pb-24 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.07] backdrop-blur-xl">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_.95fr]">
            <div className="p-8 lg:p-10">
              <SectionLabel icon="mail">Contacto</SectionLabel>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Construyamos una solución con impacto real.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Busco oportunidades donde pueda aportar en desarrollo backend, inteligencia artificial, automatización de procesos, arquitectura de software y construcción de plataformas digitales modernas.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-bold text-slate-950 transition hover:bg-amber-100"><FloatingIcon name="mail" className="h-5 w-5" />Enviar correo</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-6 py-4 font-bold text-white transition hover:bg-white/12"><FloatingIcon name="linkedin" className="h-5 w-5" />Ir a LinkedIn</a>
                <a href={`tel:${cleanPhone}`} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-6 py-4 font-bold text-white transition hover:bg-white/12"><FloatingIcon name="phone" className="h-5 w-5" />Llamar</a>
              </div>
            </div>
            <div className="border-t border-white/10 bg-slate-950/30 p-8 lg:border-l lg:border-t-0 lg:p-10">
              <h3 className="text-2xl font-black">Información profesional</h3>
              <div className="mt-6 grid gap-4">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5"><p className="text-sm text-slate-400">Nombre</p><p className="mt-1 font-bold">{profile.name}</p></div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5"><p className="text-sm text-slate-400">Correo</p><p className="mt-1 font-bold">{profile.email}</p></div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5"><p className="text-sm text-slate-400">Teléfono</p><p className="mt-1 font-bold">{profile.phone}</p></div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5"><p className="text-sm text-slate-400">LinkedIn</p><a href={profile.linkedin} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-2 font-bold text-cyan-200 hover:text-cyan-100"><FloatingIcon name="linkedin" className="h-4 w-4" />Ver perfil profesional</a></div>
                <div className="flex gap-3 pt-2">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white" aria-label="LinkedIn"><FloatingIcon name="linkedin" className="h-5 w-5" /></a>
                  <a href={profile.github} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white" aria-label="GitHub"><FloatingIcon name="github" className="h-5 w-5" /></a>
                  <button type="button" className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white" aria-label="Demo pendiente"><FloatingIcon name="external" className="h-5 w-5" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImagePreviewModal previewImage={previewImage} onClose={closeImagePreview} />
    </main>
  );
}

export default App;
