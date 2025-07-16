const nombresSemestres = {
    '1-1': 'Primer semestre' [
        { nombre: 'Química General I', codigo: 'qg1' },
        { nombre: 'Matemáticas', codigo: 'mat' },
        { nombre: 'Biología Celular', codigo: 'bio' },
        { nombre: 'Introducción al Laboratorio', codigo: 'lab' },
        { nombre: 'Introducción a la Química y Farmacia', codigo: 'iqf' },
        { nombre: 'Anatomía', codigo: 'anat' },
        { nombre: 'Taller de Nivelación de Lenguaje', codigo: 'leng' }
    ],
    '1-2': 'Segundo semestre' [
        { nombre: 'Química General II', codigo: 'qg2', prereq: ['qg1', 'lab'] },
        { nombre: 'Cálculo', codigo: 'calc', prereq: ['mat'] },
        { nombre: 'Fisiología I', codigo: 'fisio1', prereq: ['bio', 'anat'] },
        { nombre: 'Química Orgánica I', codigo: 'qo1', prereq: ['qg1', 'lab'] },
        { nombre: 'Introducción a la Estadística', codigo: 'estad', prereq: ['mat'] },
        { nombre: 'Taller de Nivelación de Inglés', codigo: 'ing' }
    ],
    '2-1': 'Tercer semestre' [
        { nombre: 'Química Orgánica II', codigo: 'qo2', prereq: ['qg2', 'qo1'] },
        { nombre: 'Química Analítica', codigo: 'qa', prereq: ['qg2', 'calc'] },
        { nombre: 'Fisiología II', codigo: 'fisio2', prereq: ['fisio1'] },
        { nombre: 'Administración de Organizaciones', codigo: 'adm', prereq: ['mat', 'leng'] },
        { nombre: 'Bioquímica', codigo: 'bioq', prereq: ['bio', 'qo1'] },
        { nombre: 'Ética', codigo: 'etica', prereq: ['leng'] }
    ],
    '2-2': 'Cuarto semestre' [
        { nombre: 'Botánica', codigo: 'bot', prereq: ['bio', 'qo1'] },
        { nombre: 'Análisis Instrumental', codigo: 'ai', prereq: ['qa'] },
        { nombre: 'Fisiopatología', codigo: 'fp', prereq: ['fisio2'] },
        { nombre: 'Fisicoquímica', codigo: 'fcq', prereq: ['qg2', 'calc'] },
        { nombre: 'Administración de Recursos Humanos', codigo: 'rrhh', prereq: ['adm', 'etica'] },
        { nombre: 'Introducción a la Química Farmacéutica', codigo: 'iqf2', prereq: ['qo2'] }
    ],
    '3-1': 'Quinto semestre' [
        { nombre: 'Farmacognosia', codigo: 'fco', prereq: ['qo2', 'bot'] },
        { nombre: 'Biología Molecular', codigo: 'biomol', prereq: ['bioq'] },
        { nombre: 'Operaciones Unitarias', codigo: 'ou', prereq: ['fcq'] },
        { nombre: 'Química Farmacéutica I', codigo: 'qf1', prereq: ['fisio2', 'iqf2'] },
        { nombre: 'Asignatura Electiva Profesional I', codigo: 'elect1', prereq: ['etica'] },
        { nombre: 'Microbiología', codigo: 'micro', prereq: ['bioq'] },
        { nombre: 'Legislación Farmacéutica', codigo: 'leg', prereq: ['adm'] }
    ],
    '3-2': 'Sexto semestre' [
        { nombre: 'Biofarmacia', codigo: 'biof', prereq: ['fisio2', 'ai'] },
        { nombre: 'Farmacología I', codigo: 'farma1', prereq: ['fp', 'qf1'] },
        { nombre: 'Inmunología', codigo: 'inmu', prereq: ['fp', 'biomol'] },
        { nombre: 'Química Farmacéutica II', codigo: 'qf2', prereq: ['qf1', 'micro'] },
        { nombre: 'Práctica Profesional Farmacia I', codigo: 'ppf1', prereq: ['etica', 'rrhh', 'leg'] },
        { nombre: 'Bioestadística', codigo: 'bioest', prereq: ['mat', 'etica'] }
    ],
    '4-1': 'Séptimo semestre' [
        { nombre: 'Tecnología Farmacéutica I', codigo: 'tf1', prereq: ['ou', 'biof'] },
        { nombre: 'Farmacología II', codigo: 'farma2', prereq: ['farma1', 'qf2'] },
        { nombre: 'Química Fisiológica y Patológica', codigo: 'qfp', prereq: ['ai', 'inmu'] },
        { nombre: 'Salud Pública y Epidemiología', codigo: 'sp', prereq: ['etica', 'bioest'] },
        { nombre: 'Química de Alimentos', codigo: 'qali', prereq: ['ai'] },
        { nombre: 'Metodología de la Investigación', codigo: 'met', prereq: ['etica', 'bioest'] },
        { nombre: 'Taller Integración Perfil de Egreso I', codigo: 'tipe1', prereq: ['ppf1'] }
    ],
    '4-2': 'Octavo semestre' [
        { nombre: 'Tecnología Farmacéutica II', codigo: 'tf2', prereq: ['tf1'] },
        { nombre: 'Farmacia Asistencial', codigo: 'fa', prereq: ['rrhh', 'sp'] },
        { nombre: 'Nutrición', codigo: 'nut', prereq: ['qfp', 'qali'] },
        { nombre: 'Gestión de Calidad', codigo: 'gc', prereq: ['leg', 'tf1'] },
        { nombre: 'Bioquímica Clínica', codigo: 'bqc', prereq: ['qfp'] },
        { nombre: 'Seminario de Licenciatura', codigo: 'sem', prereq: ['tf1', 'farma2', 'qfp', 'sp', 'qali', 'met', 'tipe1'] },
        { nombre: 'Taller Integración Perfil de Egreso II', codigo: 'tipe2', prereq: ['tipe1'] }
    ],
    '5-1': 'Noveno semestre' [
        { nombre: 'Farmacia Clínica I', codigo: 'fc1', prereq: ['tf2', 'fa', 'nut', 'gc', 'bqc', 'sem', 'tipe2'] },
        { nombre: 'Cosmética', codigo: 'cosm', prereq: ['tf2'] },
        { nombre: 'Toxicología', codigo: 'toxi', prereq: ['farma2'] },
        { nombre: 'Gestión Comercial', codigo: 'gcom', prereq: ['rrhh', 'gc'] },
        { nombre: 'Medicamentos Complementarios', codigo: 'medcomp', prereq: ['farma2', 'nut'] },
        { nombre: 'Práctica Profesional II', codigo: 'ppf2', prereq: ['ppf1', 'farma2'] },
        { nombre: 'Taller Integración Perfil de Egreso III', codigo: 'tipe3', prereq: ['tipe2'] }
    ],
    '5-2': 'Décimo semestre' [
        { nombre: 'Asignatura Electiva Profesional II', codigo: 'elect2', prereq: ['etica'] },
        { nombre: 'Farmacia Clínica II', codigo: 'fc2', prereq: ['fc1'] },
        { nombre: 'Unidad de Investigación I o Internado I', codigo: 'ui1', prereq: ['sem'] },
        { nombre: 'Práctica Profesional III', codigo: 'ppf3', prereq: ['ai', 'qali', 'tf2', 'fa', 'bqc', 'toxi'] }
    ],
    '6-1': 'Onceavo semestre' [
        { nombre: 'Unidad de Investigación II o Internado II', codigo: 'ui2', prereq: ['ui1'] }
    ]
};

function cargarRamos() {
    const container = document.getElementById('malla-container');
    for (let semestre in ramos) {
        const semDiv = document.createElement('div');
        semDiv.classList.add('semestre');
        semDiv.innerHTML = `<h2>${nombresSemestres[semestre]}</h2>`;

        ramos[semestre].forEach(ramo => {
            const div = document.createElement('div');
            div.classList.add('ramo');
            div.textContent = ramo.nombre;
            div.dataset.codigo = ramo.codigo;

            if (!cumplePrerreq(ramo)) {
                div.classList.add('bloqueado');
            } else if (estaAprobado(ramo.codigo)) {
                div.classList.add('aprobado');
            }

            div.addEventListener('click', () => {
                if (div.classList.contains('bloqueado')) return;
                div.classList.toggle('aprobado');
                guardarEstado(ramo.codigo, div.classList.contains('aprobado'));
            });

            semDiv.appendChild(div);
        });

        container.appendChild(semDiv);
    }
}

function cumplePrerreq(ramo) {
    if (!ramo.prereq) return true;
    return ramo.prereq.every(cod => estaAprobado(cod));
}

function estaAprobado(codigo) {
    return localStorage.getItem(`ramo-${codigo}`) === 'true';
}

function guardarEstado(codigo, aprobado) {
    localStorage.setItem(`ramo-${codigo}`, aprobado);
    location.reload();
}

window.onload = cargarRamos;
