const senateMembers = [

{
    id: 1,
    name: "Амир",
    age: 19,
    direction: "BA",
    post: "Президент",
    description: "Координирует работу всего сената, представляет интересы студентов на собраниях с администрацией, ведет заседания"
},

{
    id: 2,
    name: "Айзирек",
    age: 19,
    direction: "IR",
    post: "Вице-президент",
    description: "Помогает президенту в организационных вопросах, контролирует выполнение решений сената, курирует несколько направлений"
},

{
    id: 3,
    name: "Асад",
    age: 19,
    direction: "IT",
    post: "Арт-директор / Сценарист / Режиссер",
    description: "Отвечает за творческую часть мероприятий, пишет сценарии для студенческих событий, занимается постановкой выступлений"
},

{
    id: 4,
    name: "Перизат",
    age: 19,
    direction: "IR",
    post: "SMM-менеджер",
    description: "Ведет социальные сети сената, создает контент для Instagram и TikTok, занимается фото- и видеосъемкой мероприятий"
},

{
    id: 5,
    name: "Мерей",
    age: 19,
    direction: "LNG",
    post: "SMM-менеджер",
    description: "Помогает с ведением соцсетей, пишет посты, берет интервью у студентов и преподавателей"
},

{
    id: 6,
    name: "Илья",
    age: 19,
    direction: "BA",
    post: "Ведущий мероприятий",
    description: "Отвечает за проведение студенческих мероприятий, работает с аудиторией, объявляет номера и ведет официальную часть"
}

];


// имитация задержки сервера
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Получить всех членов сената
export const fetchSenateMembersApi = async () => {
    await delay(500);
    return senateMembers;
};

// Получить одного члена сената по id
export const fetchSenateMemberByIdApi = async (id) => {
    await delay(300);
    return senateMembers.find(member => member.id === Number(id));
};

//  Получить членов сената по должности
export const fetchSenateMembersByPostApi = async (post) => {
    await delay(400);
    return senateMembers.filter(member => member.post.toLowerCase().includes(post.toLowerCase()));
};

//  Получить членов сената по направлению обучения
export const fetchSenateMembersByDirectionApi = async (direction) => {
    await delay(400);
    return senateMembers.filter(member => member.direction.toLowerCase().includes(direction.toLowerCase()));
};

