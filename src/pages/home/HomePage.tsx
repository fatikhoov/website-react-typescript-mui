import { MyButton } from 'starpage-ui-kit'
import './style.css'

const HomePage = () => {
  return (
    <div className="main wrapper" id="section__home-1">
      <div className="button_wrapper-callme">
        <MyButton fvclassname="middle background">Перезвоните мне</MyButton>
      </div>
      <header className="main__header">
        <h1 className="title__head-block">
          Креативные сайты <br />- наша особенность
        </h1>
        <div className="button_wrapper-primary">
          <MyButton fvclassname="large background">
            Рассчитать стоимость
          </MyButton>
        </div>
        <div className="circle-blue"></div>
      </header>

      <section className="main__section-wrapper">
        <h6>
          Мы знаем, как разработать сайт
          <br />
          который принесет прибыль!
        </h6>

        <section className="main__services">
          <div className="link-block js-modal-open">
            <h2 className="text-color-brand text-color-brand-hover">
              Сайт-визитка
            </h2>
            <h5 className="link-block-content">
              Создаем интуитивно понятну навигацию по сайту с входами,
              переходами и захватывающим дизайном
            </h5>
            <p>14-21 день</p>
            <div className="button_wrapper-services">
              <MyButton>Подробнее</MyButton>
            </div>
          </div>
          <div className="link-block js-modal-open">
            <h2 className="text-color-brand text-color-brand-hover">
              Интернет-магазин
            </h2>
            <h5 className="link-block-content">
              Разработаем полноценный магазин с корзиной, листингом и карточками
              товара, чтобы делать покупки легко
            </h5>
            <p>21-28 дней</p>
            <div className="button_wrapper-services">
              <MyButton>Подробнее</MyButton>
            </div>
          </div>
          <div className="link-block js-modal-open">
            <h2 className="text-color-brand text-color-brand-hover">Лендинг</h2>
            <h5 className="link-block-content">
              Продумаем и разработаем так, чтобы пользователь точно достиг цели
            </h5>
            <p>5-7 дней</p>
            <div className="button_wrapper-services">
              <MyButton fvclassname="background">Подробнее</MyButton>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default HomePage
