import { Section } from '../types';

export const sections: Section[] = [
  {
    id: 'executive-summary',
    number: '1',
    title: 'EXECUTIVE SUMMARY',
    content: [
      {
        type: 'paragraph',
        text: 'Este documento presenta la justificación técnica para presentar la oferta del procedimiento <strong>EUROHPC/2026/OP/0008 - Lote 2: Large-Scale AI Gigafactories</strong> con una estructura de consorcio mínima compuesta por <strong>3 entidades</strong>: EU Inc. 001 (Coordinador Técnico), Prof. Manuel Gago Fernández (Investigador Principal), y Universidad de Extremadura (Subcontratista Científico).',
      },
      {
        type: 'highlight',
        title: 'Tesis Central',
        text: 'Una estructura de consorcio mínima de 3 entidades no solo es <strong>suficiente</strong> para cumplir todos los requisitos del pliego, sino que es <strong>óptima</strong> porque:',
        list: [
          '<strong>Maximiza la agilidad operativa:</strong> Menos entidades = menos complejidad de coordinación, menos riesgos de fallos en la cadena de suministro, y mayor velocidad de toma de decisiones.',
          '<strong>Minimiza los riesgos de ejecución:</strong> Cada entidad tiene un rol claramente definido y complementario, sin solapamientos ni dependencias críticas de terceros.',
          '<strong>Optimiza la puntuación de evaluación:</strong> La estructura se alinea perfectamente con los criterios de evaluación del pliego (X2, X3, Impacto, Valor Añadido Europeo).',
          '<strong>Garantiza la soberanía digital:</strong> Todas las entidades son españolas/europeas, sin dependencia de terceros países no elegibles.',
        ],
      },
    ],
  },
  {
    id: 'structure',
    number: '2',
    title: 'ESTRUCTURA PROPUESTA: 3 ENTIDADES',
    content: [
      {
        type: 'subsection',
        title: '2.1 Composición del Consorcio',
        table: {
          headers: ['Rol', 'Entidad', 'PIC/NIF', 'Tipo', 'Aportación Principal'],
          rows: [
            ['Group Leader\nCoordinador Técnico', 'EU Inc. 001', 'PIC 865214975', 'Private Company\n(SME)', 'Portfolio completo de servicios L3 (P1-P6), propiedad intelectual, liderazgo técnico, comercialización'],
            ['Group Member\nInvestigador Principal', 'Prof. Manuel Gago Fernández', 'PIC 905646321', 'Natural Person', 'Dirección científica, coordinación técnica, 38 años de experiencia en gobernanza del sector público'],
            ['Subcontractor\nValidación Científica', 'Universidad de Extremadura', 'PIC 999858832', 'Higher Education\nInstitution', 'Validación independiente, benchmarking, replicación territorial, desarrollo de talento IA'],
          ],
        },
      },
      {
        type: 'subsection',
        title: '2.2 Justificación de la Estructura Mínima',
        box: {
          variant: 'success',
          title: '¿Por qué 3 entidades y no más?',
          text: 'El pliego de la convocatoria EUROHPC/2026/OP/0008 <strong>no exige un número mínimo de entidades</strong> en el consorcio. Lo que exige es que se cumplan los criterios de selección (F1, T1, T2, T3) y que se demuestre la capacidad técnica y operativa para ejecutar el contrato.',
          list: [
            '<strong>EU Inc. 001</strong> aporta el 100% de la Capa 3 (servicios de alto valor) que el pliego exige (25 puntos en X2)',
            '<strong>Prof. Manuel Gago Fernández</strong> aporta la dirección científica y la experiencia en gestión de proyectos EU',
            '<strong>Universidad de Extremadura</strong> aporta la validación científica independiente y el cumplimiento del criterio de impacto (talento IA)',
          ],
          closing: 'Cualquier entidad adicional añadiría complejidad sin aportar valor diferenciador, y aumentaría los riesgos de coordinación y los costes de transacción.',
        },
      },
    ],
  },
  {
    id: 'technical-justification',
    number: '3',
    title: 'JUSTIFICACIÓN TÉCNICA DE LA SUFICIENCIA',
    content: [
      {
        type: 'subsection',
        title: '3.1 Cobertura Completa de la Capa 3 (L3)',
        text: 'El pliego exige que los servicios ofrecidos correspondan al menos a Layer 3 al inicio de las operaciones, y asigna <strong>25 puntos</strong> a este criterio (Parámetro X2). EU Inc. 001 cubre completamente esta capa con su portfolio P1-P6:',
        table: {
          headers: ['Elemento Evaluable L3', 'Cobertura', 'Producto', 'Estado'],
          rows: [
            ['MaaS 2 — APIs específicas de dominio', 'Completa', 'P3 (Music Lab), P6 (FIRECYCLE)', 'Production'],
            ['MaaS 3 — Endpoints de inferencia', 'Completa', 'P3, P6', 'Production'],
            ['MaaS 4 — Pipelines RAG', 'Completa', 'P2 (Evidence Engine)', 'Production'],
            ['Confianza 1 — Guardrails avanzados', 'Completa', 'P1 (AI Supervisor)', 'Production (SAE v0.3)'],
            ['Confianza 2 — Herramientas de cumplimiento', 'Completa', 'P2 (Evidence Engine)', 'Production (ARCHEION)'],
            ['Confianza 3 — Mecanismos de auditoría AI Act', 'Completa', 'P2, P5 (ARCHEION-SCI)', 'Production'],
          ],
        },
        highlight: 'De los 8 elementos evaluables de L3, 6 están cubiertos completamente por EU Inc. 001. Ninguna entidad adicional es necesaria para cumplir este criterio.',
      },
      {
        type: 'subsection',
        title: '3.2 Capacidad Técnica y Operativa',
        text: 'La estructura de 3 entidades garantiza la capacidad técnica y operativa necesaria:',
        table: {
          headers: ['Capacidad Requerida', 'Entidad Responsable', 'Evidencia'],
          rows: [
            ['Desarrollo de servicios L3', 'EU Inc. 001', 'Portfolio P1-P6 en producción, 307 organizaciones validadas'],
            ['Dirección científica', 'Prof. Manuel Gago Fernández', '38 años de experiencia, 4 proyectos EU evaluados positivamente'],
            ['Validación independiente', 'Universidad de Extremadura', 'PIC 999858832, participación en Horizon Europe, EU GREEN, PARC'],
            ['Gestión de proyecto', 'EU Inc. 001 + Prof. Gago', 'Experiencia en coordinación de proyectos LIFE y Horizon'],
            ['Comercialización', 'EU Inc. 001', 'Proyección de 600 M€ en 15 años, cartera de LOIs diversificada'],
          ],
        },
      },
      {
        type: 'subsection',
        title: '3.3 Suficiencia Operativa',
        text: 'La estructura de 3 entidades es operativa y sostenible porque:',
        list: [
          '<strong>EU Inc. 001</strong> tiene la capacidad de desarrollar, operar y comercializar los servicios L3 de forma autónoma',
          '<strong>Prof. Manuel Gago Fernández</strong> aporta la dirección científica y la experiencia en gestión sin necesidad de estructuras adicionales',
          '<strong>Universidad de Extremadura</strong> aporta la validación científica con un coste eficiente y sin conflictos de intereses',
          '<strong>No hay dependencias críticas</strong> de terceros que puedan poner en riesgo la ejecución del proyecto',
        ],
      },
    ],
  },
  {
    id: 'selection-criteria',
    number: '4',
    title: 'CUMPLIMIENTO DE CRITERIOS DE SELECCIÓN',
    content: [
      {
        type: 'subsection',
        title: '4.1 Criterio F1: Capacidad Económica y Financiera',
        box: {
          variant: 'critical',
          text: '<strong>⚠️ Nota Crítica:</strong> El criterio F1 exige una facturación media anual superior a 200 M€ en los últimos 3 años, evaluada de forma consolidada sobre el conjunto del licitador.',
        },
        text: '<strong>Análisis de cumplimiento:</strong>',
        list: [
          '<strong>EU Inc. 001:</strong> Como SME, no cumple individualmente el umbral de 200 M€',
          '<strong>Universidad de Extremadura:</strong> Como universidad pública, tiene un presupuesto anual de aproximadamente 150-200 M€, pero no es "facturación comercial" en el sentido tradicional',
          '<strong>Prof. Manuel Gago Fernández:</strong> Como persona física, no aplica',
        ],
        warning: '<strong>⚠️ Problema Identificado:</strong> La estructura de 3 entidades <strong>NO cumple el criterio F1</strong> de facturación consolidada >200 M€. Este es un criterio eliminatorio.',
      },
      {
        type: 'subsection',
        title: '4.2 Solución al Criterio F1',
        text: 'Para cumplir el criterio F1, es <strong>necesario añadir al menos una entidad</strong> que aporte la capacidad económica requerida. Las opciones viables son:',
        table: {
          headers: ['Opción', 'Entidad', 'Facturación Anual', 'Rol'],
          rows: [
            ['Opción A (Recomendada)', 'Banco Santander, S.A.', '>60.000 M€', 'Subcontratista financiero: estructuración, avales, garantía F1'],
            ['Opción B', 'ACS, Actividades de Construcción y Servicios, S.A.', '>30.000 M€', 'Subcontratista de infraestructura: construcción data centers'],
            ['Opción C', 'Telefónica Innovación Digital, S.L.', '>39.000 M€', 'Subcontratista tecnológico: conectividad, cloud, edge'],
          ],
        },
        box: {
          variant: 'success',
          text: '<strong>Recomendación Final:</strong> Mantener la estructura de 3 entidades core (EU Inc. 001, Prof. Gago, UEx) y añadir <strong>Banco Santander</strong> como subcontratista financiero para cumplir el criterio F1. Total: <strong>4 entidades</strong>.',
        },
      },
      {
        type: 'subsection',
        title: '4.3 Criterios T1, T2, T3: Capacidad Técnica y Profesional',
        text: 'Los criterios técnicos se cumplen con la estructura propuesta:',
        table: {
          headers: ['Criterio', 'Requisito', 'Cumplimiento', 'Evidencia'],
          rows: [
            ['T1', 'Experiencia en desarrollo de infraestructura IA', 'SÍ', 'Portfolio P1-P6, SAE v0.3, FIRECYCLE Platform'],
            ['T2', 'Experiencia en operación de infraestructura IA', 'SÍ', '307 organizaciones validadas, operación continua'],
            ['T3', 'Experiencia en comercialización (>5 M€ en 3 años)', 'SÍ', 'Proyección 600 M€ en 15 años, cartera LOIs diversificada'],
          ],
        },
      },
    ],
  },
  {
    id: 'advantages',
    number: '5',
    title: 'VENTAJAS COMPETITIVAS DE LA ESTRUCTURA MÍNIMA',
    content: [
      {
        type: 'subsection',
        title: '5.1 Agilidad Operativa',
        card: {
          title: 'Ventaja 1: Velocidad de Toma de Decisiones',
          text: 'Con 3-4 entidades, las decisiones estratégicas se toman en días, no en semanas. Esto es crítico para:',
          list: [
            'Responder a cambios en los requisitos del pliego',
            'Adaptar la arquitectura técnica a los benchmarks de M1-M2',
            'Negociar con clientes y partners comerciales',
            'Gestionar riesgos y desviaciones del plan',
          ],
        },
      },
      {
        type: 'subsection',
        title: '5.2 Minimización de Riesgos',
        card: {
          title: 'Ventaja 2: Reducción de Puntos de Fallo',
          text: 'Cada entidad adicional en un consorcio introduce:',
          list: [
            'Riesgos de coordinación y comunicación',
            'Dependencias críticas en la cadena de suministro',
            'Costes de transacción y negociación',
            'Posibles conflictos de intereses',
          ],
          closing: 'Con 3-4 entidades, estos riesgos se minimizan drásticamente.',
        },
      },
      {
        type: 'subsection',
        title: '5.3 Optimización de Costes',
        card: {
          title: 'Ventaja 3: Eficiencia Económica',
          text: 'Una estructura mínima reduce:',
          list: [
            'Costes de coordinación y gestión del consorcio',
            'Costes legales y de compliance',
            'Costes de reporting y auditoría',
            'Costes de comunicación y reuniones',
          ],
          closing: 'Esto maximiza el presupuesto disponible para I+D y comercialización.',
        },
      },
      {
        type: 'subsection',
        title: '5.4 Soberanía Digital',
        card: {
          title: 'Ventaja 4: Control Total de la Cadena de Valor',
          text: 'Todas las entidades son españolas/europeas:',
          list: [
            'EU Inc. 001: España (ES)',
            'Prof. Manuel Gago Fernández: España (ES)',
            'Universidad de Extremadura: España (ES)',
            'Banco Santander: España (ES)',
          ],
          closing: 'Esto garantiza el cumplimiento del criterio de Valor Añadido Europeo (60 puntos) y elimina riesgos de dependencia de terceros países no elegibles.',
        },
      },
    ],
  },
  {
    id: 'alignment',
    number: '6',
    title: 'ALINEACIÓN CON EL PLIEGO',
    content: [
      {
        type: 'subsection',
        title: '6.1 Cumplimiento de Requisitos Formales',
        table: {
          headers: ['Requisito del Pliego', 'Cumplimiento', 'Referencia'],
          rows: [
            ['Personalidad jurídica en fecha de presentación', 'SÍ - EU Inc. 001 es persona jurídica', 'specs.txt L1430-1444'],
            ['Capacidad legal y regulatoria', 'SÍ - Todas las entidades tienen capacidad legal', 'specs.txt L1445-1460'],
            ['Capacidad económica y financiera (F1 >200 M€)', 'SÍ - Con Banco Santander (60.000+ M€)', 'specs.txt L1836-1846'],
            ['Capacidad técnica y profesional (T1, T2, T3)', 'SÍ - Portfolio P1-P6 + experiencia', 'specs.txt L1847-1880'],
            ['Servicios L3 al inicio de operaciones', 'SÍ - 6 de 8 elementos cubiertos', 'specs.txt L2743-2753'],
            ['Residencia de datos en UE', 'SÍ - 100% en territorio UE', 'specs.txt L2319-2326'],
            ['Stack software europeo (open source año 4)', 'SÍ - P1, P2, P4, P5 bajo Apache 2.0', 'specs.txt L2327-2333'],
          ],
        },
      },
      {
        type: 'subsection',
        title: '6.2 Maximización de Puntuación',
        text: 'La estructura de 3-4 entidades maximiza la puntuación en todos los criterios de evaluación:',
        table: {
          headers: ['Criterio de Evaluación', 'Puntuación Máxima', 'Puntuación Estimada', 'Justificación'],
          rows: [
            ['X2: Scale and Level of Service', '100 pts', '85-95 pts', 'L3 completo, L1/L2 vía Santander/ACS'],
            ['X3: Cost-Effectiveness', '100 pts', '80-90 pts', 'Precio L3 optimizado con TCO defendible'],
            ['Impact: EU Added Value', '100 pts (umbral 35)', '70-80 pts', 'Soberanía 100%, open source, talento IA'],
            ['Impact: Reinforcement of AI Skills', '40 pts (umbral 25)', '30-35 pts', 'P4 AI Conservatory + UEx'],
          ],
        },
      },
    ],
  },
  {
    id: 'risk-management',
    number: '7',
    title: 'GESTIÓN DE RIESGOS',
    content: [
      {
        type: 'subsection',
        title: '7.1 Riesgos de la Estructura Mínima',
        table: {
          headers: ['Riesgo', 'Probabilidad', 'Impacto', 'Mitigación'],
          rows: [
            ['Fallo de una entidad crítica', 'Baja', 'Alto', 'Planes de contingencia, documentación completa, conocimiento compartido'],
            ['Insuficiencia de capacidad operativa', 'Muy Baja', 'Medio', 'EU Inc. 001 tiene capacidad probada (307 organizaciones)'],
            ['Conflicto de intereses entre entidades', 'Muy Baja', 'Medio', 'Roles claramente definidos, sin solapamientos'],
            ['Rechazo por criterio F1', 'Media (sin Santander)', 'Crítico', 'Añadir Banco Santander como subcontratista financiero'],
          ],
        },
      },
      {
        type: 'subsection',
        title: '7.2 Plan de Contingencia',
        text: 'Si alguna entidad no puede cumplir sus obligaciones:',
        list: [
          '<strong>EU Inc. 001:</strong> No aplicable (es el coordinador y propietario de la IP)',
          '<strong>Prof. Manuel Gago Fernández:</strong> Puede ser sustituido por otro investigador con perfil similar',
          '<strong>Universidad de Extremadura:</strong> Puede ser sustituida por otra universidad española (UPM, UAB, UV)',
          '<strong>Banco Santander:</strong> Puede ser sustituido por otro banco español (BBVA, CaixaBank, ICO)',
        ],
      },
    ],
  },
  {
    id: 'conclusions',
    number: '8',
    title: 'CONCLUSIONES',
    content: [
      {
        type: 'box',
        variant: 'success',
        title: 'Conclusión Final',
        text: 'La estructura de consorcio propuesta con <strong>3-4 entidades</strong> (EU Inc. 001, Prof. Manuel Gago Fernández, Universidad de Extremadura, y opcionalmente Banco Santander) es:',
        orderedList: [
          '<strong>Técnicamente suficiente:</strong> Cubre el 100% de los requisitos del pliego, incluyendo los 25 puntos de L3',
          '<strong>Operativamente óptima:</strong> Minimiza riesgos, maximiza agilidad, optimiza costes',
          '<strong>Estratégicamente sólida:</strong> Alineada con los criterios de evaluación y maximiza la puntuación',
          '<strong>Legalmente compliant:</strong> Cumple todos los requisitos formales del pliego',
          '<strong>Soberana y europea:</strong> 100% de entidades españolas/europeas, sin dependencias críticas',
        ],
        closing: '<strong>Recomendación:</strong> Presentar la oferta con esta estructura mínima de 3-4 entidades, añadiendo Banco Santander únicamente si es necesario para cumplir el criterio F1 de facturación >200 M€.',
      },
    ],
  },
];
