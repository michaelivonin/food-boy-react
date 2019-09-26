import React from 'react';
import './Order.sass';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

class Order extends React.Component {
  render() {
    return (
      <div className="order">
        <Select
          className="order__branch"
          name="branch"
          label="Филиал"
          defaultValue="option1"
          required={true}
        >
          <Option value="option1" label="Автоматически" />
          <Option value="option2" label="Фрунзе, 40" />
        </Select>
        {/*<p className="order__msg-clarify">
          Мы не смогли найти дом, уточните пожалуйста его на карте.
        </p>
        <p className="order__msg-choose">
          Найдено несколько адресов, выберите корректный ниже и при необходимости уточните на карте.
        </p>
        <p className="order__msg-not-found">
          К сожалению, мы не смогли найти адрес на карте города, попробуйте заново!
        </p>*/}
        <form className="address">
          <legend className="address__desc">Адрес доставки</legend>
          <div className="address__group">
            <Input
              className="address__street"
              label="Улица"
              floatingLabel={true}
              required={true}
            />
            <Input
              className="address__building"
              label="Дом"
              floatingLabel={true}
              required={true}
            />
            <Input
              className="address__apartment"
              label="Кв."
              floatingLabel={true}
              required={true}
            />
            <Input
              className="address__entrance"
              label="Подъезд"
              floatingLabel={true}
              required={true}
            />
            <Input
              className="address__floor"
              label="Этаж"
              floatingLabel={true}
              required={true}
            />
          </div>
          {/*<div className="confirm">
            <Select
              className="confirm__options"
              name="options"
              defaultValue="option1"
            >
              <Option value="option1" label="Омск, улица Ленина, 12" />
              <Option value="option2" label="село Пушкино, улица Ленина, 12" />
              <Option value="option3" label="разъезд Левобережный, улица Ленина, 12" />
              <Option value="option4" label="поселок Омский, улица Ленина, 12" />
              <Option value="option5" label="село Троицкое, улица Ленина, 12" />
              <Option value="option6" label="посёлок Новоомский, улица Ленина, 12" />
              <Option value="option7" label="поселок Иртышский, улица Ленина, 12" />
              <Option value="option8" label="Омск, площадь Ленина" />
            </Select>
            <Button className="confirm__btn-submit" variant="raised">
              Рассчитать
            </Button>
          </div>*/}
          <Button className="address__btn-submit" variant="raised">
            Найти адрес
          </Button>
        </form>
        <div className="info">

        </div>
      </div>
    );
  }
}

export default Order;