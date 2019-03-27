const initialState = [
    {
        id:0,
        uri:'http://mosobrnadzor.ru/files/images/persons/rozhkov.png',
        name: 'Рожков А.И.',
        firstName: 'Рожков',
        lastName: 'Артемий Игоревич',
        description:'К.ю.н., проректор по экономическим и правовым вопросам ГАОУ ВО',
        descriptionFull:'Кандидат юридических наук, проректор по организационно-правовым и экономическим вопросам, доцент кафедры международного права и прав человека Юридического института ГАОУ ВО МГПУ',
        email: 'rozhkova@mgpu.ru'
    },
    {
        id:1,
        uri:'http://mosobrnadzor.ru/files/images/persons/feklin.png',
        name: 'Фёклин С.И.',
        firstName: 'Фёклин',
        lastName: 'Сергей Иванович',
        description:'К.ю.н., доцент, руководитель юридической клиники (консультации) и доцент кафедры уголовно-правовых дисциплин юридического института',
        descriptionFull:'Кандидат юридических наук, проректор по организационно-правовым и экономическим вопросам, доцент кафедры международного права и прав человека Юридического института ГАОУ ВО МГПУ',
        email:'FeklinSI@mgpu.ru'
    },
    {
        id:2,
        uri:'http://mosobrnadzor.ru/files/images/persons/ladnushkina.png',
        name: 'Ладнушкина Н.М.',
        firstName: 'Ладнушкина',
        lastName: 'Нина Михайловна',
        description:'К.п.н., доцент кафедры международного права и прав человека юридического института ГАОУ ВО МГПУ',
        descriptionFull:'Кандидат педагогических наук, доцент кафедры международного права и прав человека юридического института ГАОУ ВО МГПУ',
        email: 'ladnushkinanm@mgpu.ru'
    },
    {
        id:3,
        uri:'http://mosobrnadzor.ru/files/images/persons/matveev.png',
        name: 'Матвеев В.Ю.',
        firstName: 'Матвеев',
        lastName: 'Виталий Юрьевич',
        description:'К.ю.н., заведующий лабораторией образовательного права юридического института ГАОУ ВО МГПУ',
        descriptionFull:'Кандидат юридических наук, заведующий лабораторией образовательного права юридического института ГАОУ ВО МГПУ',
        email: 'MatveevVU@mgpu.ru'
    },
    {
        id:4,
        uri:'http://mosobrnadzor.ru/files/images/persons/toporkova.png',
        name: 'Топоркова М.К.',
        firstName: 'Топоркова',
        lastName: 'Марина Константиновна',
        description:'К.ю.н., доцент, заместитель заведующего кафедрой по научной работе Юридического института ГАОУ ВО МГПУ',
        descriptionFull:'Кандидат юридических наук, доцент, заместитель заведующего кафедрой по научной работе Юридического института ГАОУ ВО МГПУ',
        email: 'ToporkovaMK@mgpu.ru'
    },
    {
        id:5,
        uri:'http://mosobrnadzor.ru/files/images/persons/aksenova.png',
        name: 'Аксёнова Д.А.',
        firstName: 'Аксёнова',
        lastName: 'Дарья Александровна',
        description:'Эксперт лаборатории образовательного права Юридического института ГАОУ ВО МГПУ',
        descriptionFull:'Эксперт лаборатории образовательного права Юридического института ГАОУ ВО МГПУ',
        email: 'darax15@yandex.ru'
    },

]

export default function experts(state = initialState, action){
    switch(action.type){
        default:
            return state
    }
}