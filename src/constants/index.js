import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    miac,
    freelance,
    cyclo,
    house,
    wwave,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Frontend Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Fullstack Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Специалист технической поддержки",
        company_name: "Аспро",
        icon: starbucks,
        iconBg: "#FFF",
        date: "Май 2021 - Август 2022",
        points: [
            "Обработка запросов пользователей: Прием, регистрация и решение запросов пользователей через телефон, электронную почту или чат.",
            "Диагностика и устранение проблем: Определение и исправление технических проблем с программным обеспечением и оборудованием.",
            "Поддержка пользователей: Помощь пользователям в обучении работе с программами и системами.",
            "Документирование и отчеты: Ведение записей о проблемах и решениях, подготовка отчетов о проделанной работе.",
        ],
    },
    {
        title: "Программист технического поддержки, 2 линия",
        company_name: "Аспро",
        icon: starbucks,
        iconBg: "#FFF",
        date: "Август 2022 - Март 2023",
        points: [
            "Анализ и решение сложных проблем: Устранение технических проблем, которые не смогла решить 1-я линия поддержки.",
            "Работа с кодом и конфигурацией: Исправление ошибок в коде и настройках программного обеспечения.",
            "Разработка и внедрение решений: Создание и внедрение исправлений, обновлений и улучшений для существующих систем.",
            "Взаимодействие с разработчиками: Сотрудничество с командой разработчиков для решения сложных технических проблем и внедрения изменений.",
        ],
    },
    {
        title: "Web Разработчик",
        company_name: "МИАЦ",
        icon: miac,
        iconBg: "#FFF",
        date: "Апрель 2023 - Сентябрь 2023",
        points: [
            "Разработка и поддержка веб-приложений с использованием React.js и других технологий.",
            "Поддержка и рефакторинг существующих приложений.",
            "Реализация адаптивного дизайна и обеспечение кроссбраузерной совместимости.",
            "Участие в код-ревью.",
        ],
    },
    {
        title: "Freelance",
        company_name: "",
        icon: freelance,
        iconBg: "#FFF",
        date: "Сентябрь 2023 - По настоящее",
        points: [
            "Разработка и поддержка веб-приложений с использованием NextJS и других технологий.",
            "Сотрудничество с различными клиентами для понимания их требований и создания качественных решений.",
            "Реализация адаптивного дизайна и обеспечение совместимости с различными браузерами.",
            "Участие в рецензировании кода и предоставление конструктивной обратной связи для улучшения кода.",
            "Самостоятельное управление проектами, включая планирование, выполнение и контроль за соблюдением сроков.",
            "Обеспечение высоких стандартов качества кода и выполнения задач в установленные сроки."
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Заказ выполнен быстро как всегда, все работает, все требования по ТЗ соблюдены. Благодарю за работу!",
        name: "Ivan Merkulov",
        place: 'FL.ru',
        image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
        testimonial:
            "Замечательный исполнитель. Все слышит и исправляет вовремя. Изначально мы сами предоставили неверные исходники так Артем все пояснил и сам исправил ошибки. Очень приятно, когда исполнитель всегда на связи – это очень важный аспект",
        name: "Alexey Vlasov",
        place: 'FL.ru',
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "Верстали лендинг по макету, работы выполнили быстрее обозначенного срока, оперативно и четко внесли мелкие правки в результат, я доволен качеством!",
        name: "Ekaterina Shubina",
        place: 'FL.ru',
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Cyclo Rent",
        description:
            "Сайт позволяет пользователям легко находить, настраивать и заказывать велосипеды под свои потребности. Использованы новейшие технологии для создания быстрого, отзывчивого и визуально привлекательного интерфейса. Интеграция с API позволяет динамически отображать актуальные модели и аксессуары.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "nextjs",
                color: "black-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "express",
                color: "yellow-text-gradient",
            },
            {
                name: "mongoDB",
                color: "green-text-gradient",
            },
        ],
        image: cyclo,
    },
    {
        name: "Modern Haven",
        description:
            "Проект Modern Haven стал результатом тщательного внимания к деталям и стремления создать не только функциональное, но и визуально привлекательное решение для поиска вашего идеального дома.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: house
    },
    {
        name: "W-Wave",
        description:
            "W-Wave — современныя платформа с интуитивно понятным интерфейсом, использующую NextJS и Tailwind CSS для создания отзывчивого дизайна.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind CSS",
                color: "green-text-gradient",
            },
            {
                name: "react",
                color: "pink-text-gradient",
            },
        ],
        image: wwave,
        source_code_link: "https://wwave.marsy.online",
    },
];

export { services, technologies, experiences, testimonials, projects };