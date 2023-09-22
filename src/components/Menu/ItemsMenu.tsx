export const menuItems = [
  { text: 'Главная', to: '/' },
  { text: 'О компании', to: '/about' },
  { text: 'Портфолио', to: '/portfolio' },
  {
    text: 'Услуги',
    to: '/services',
    subMenu: [
      { text: 'Все услуги', to: '/services/' },
      { text: 'Разработка сайтов', to: '/services/websites' },
      { text: 'Дизайн', to: '/services/design' },
      { text: 'Программирование', to: '/services/development' },
    ],
  },
  { text: 'Наша команда', to: '/team' },
  { text: 'Контакты', to: '/contacts' },
  { text: 'FAQ', to: '/faq' },
  { text: 'Обратная связь', to: '/feedback' },
]
