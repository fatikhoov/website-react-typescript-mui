export const menuItems = [
  { text: 'Главная', to: '/' },
  {
    text: 'Услуги',
    to: '/services',
    subMenu: [
      { text: 'Сайт-визитка', to: '/services/bussiness' },
      { text: 'Интернет-магазин', to: '/services/ecommerce' },
      { text: 'Лендинг', to: '/services/landing' },
    ],
  },
  /* { text: 'О компании', to: '/about' }, */
  { text: 'Кейсы', to: '/portfolio' },

  /*  { text: 'Наша команда', to: '/team' }, */
  { text: 'Контакты', to: '/contacts' },
  /* { text: 'FAQ', to: '/faq' },
  { text: 'Обратная связь', to: '/feedback' }, */
]
