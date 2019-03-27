const initialState = [
    {
        id:0,
        uri:'http://simpleicon.com/wp-content/uploads/star.png',
        name: 'Департамент образования\nгорода Москвы',
        adress: 'Москва, ул. Большая Спасская, д.15, стр. 1',
        number: '+7 (495) 366-66-80',
        email: 'dogm@mos.ru',
        workingHours: 'Пн - Пт: с 8.00 до 20.00\nСб: с 9.00 до 15.00',
        coords: {
            latitude: 55.7744166,
            longitude: 37.6396971 
        }
    },
    {
        id:1,
        uri:'http://simpleicon.com/wp-content/uploads/star.png',
        name: 'Московский городской\nпедагогический университет',
        adress: 'Москва, 2-ой Сельскохозяйственный проезд, д. 4, к. 1',
        number: '+7 (499) 181-24-62',
        email: 'info@mgpu.ru',
        workingHours: 'Пн - Пт: с 9.00 до 18.00',
        coords: {
            latitude: 55.833671,
            longitude: 37.6421689
        }
    },
    {
        id:2,
        uri:'http://simpleicon.com/wp-content/uploads/star.png',
        name: 'Рособрнадзор России',
        adress: 'Москва, ул.Садовая-Сухаревская, д.16, К-51, ГСП-4',
        number: '+7 (495) 984-89-19',
        workingHours: 'Пн - Пт: с 9.00 до 18.00',
        email: 'pochta@obrnadzor.gov.ru',
        workingHours: '',
        coords: {
            latitude: 55.772591,
            longitude: 37.62792
        }
    },
    {
        id:3,
        uri:'http://simpleicon.com/wp-content/uploads/star.png',
        name: 'Московский центр качества образования',
        adress: 'Москва, Семёновская площадь, д. 4',
        number: '+7 (499) 638-23-52',
        email: 'mcko@edu.mos.ru',
        workingHours: 'Пн - Пт: с 9.00 до 17.30',
        coords: {
            latitude: 55.781334,
            longitude: 37.721033 
        }
    },
    {
        id:4,
        uri:'http://simpleicon.com/wp-content/uploads/star.png',
        name: 'Юридический институт МГПУ',
        adress: 'Москва, Новокузнецкая ул., д.16, стр.10',
        number: '+7 (495) 951-71-44',
        email: 'jurist.info@mgpu.ru',
        workingHours: 'Пн - Пт: с 9.00 до 18.00',
        coords: {
            latitude: 55.737025,
            longitude: 37.629756 
        }
    },
]

export default function contacts(state = initialState, action){
    switch(action.type){
        default:
            return state
    }
}