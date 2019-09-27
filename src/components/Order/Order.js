import React from 'react';
import './Order.sass';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Input from 'muicss/lib/react/input';
import InputMask from 'react-input-mask';
import Button from 'muicss/lib/react/button';
import Textarea from 'muicss/lib/react/textarea';

const TelInput = (props) => (
  <InputMask
    mask="+7 (999) 999-9999"
    maskChar=" "
    value={props.value}
    onChange={props.onChange}>
    {(inputProps) => (
      <Input
        {...inputProps}
        //className="info__name"
        label="Телефон"
        type="tel"
        floatingLabel={true}
        required={true}
      />
    )}
  </InputMask>
);

class Order extends React.Component {
  render() {
    return (
      <div className="order">
        <Select
          className="order__branch"
          name="branch"
          label="Филиал:"
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
        {/*<form className="address">
          <legend className="address__desc">Адрес доставки:</legend>
          <Row>
            <Col md="8" xs="12">
              <Input
                className="address__street"
                label="Улица"
                type="text"
                floatingLabel={true}
                required={true}
              />
            </Col>
            <Col md="4" xs="6">
              <Input
                className="address__building"
                label="Дом"
                type="text"
                floatingLabel={true}
                required={true}
              />
            </Col>
            <Col md="4" xs="6">
              <Input
                className="address__apartment"
                label="Кв."
                type="text"
                floatingLabel={true}
                required={true}
              />
            </Col>
            <Col md="4" xs="6">
              <Input
                className="address__entrance"
                label="Подъезд"
                type="text"
                floatingLabel={true}
                required={true}
              />
            </Col>
            <Col md="4" xs="6">
              <Input
                className="address__floor"
                label="Этаж"
                type="text"
                floatingLabel={true}
                required={true}
              />
            </Col>
          </Row>
          <div className="confirm">
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
            <Button
              className="confirm__btn-submit"
              size="small"
              variant="raised"
            >
              Рассчитать
            </Button>
          </div>
          <Button className="address__btn-submit" variant="raised">
            Найти адрес
          </Button>
        </form>*/}
        <div className="info">
          <form >
            <Row>
              <Col md="6" xs="6">
                <Input
                  className="info__name"
                  label="Имя"
                  type="text"
                  floatingLabel={true}
                  required={true}
                />
              </Col>
              <Col md="6" xs="6">
                <TelInput />
              </Col>
              <Col md="6" xs="6">
                <Input
                  //className="info__name"
                  label="Цена заказа"
                  type="number"
                  min="1"
                  floatingLabel={true}
                  required={true}
                />
              </Col>
              <Col md="6" xs="6">
                <Input
                  //className="info__name"
                  label="Иметь сдачу с"
                  type="number"
                  min="100"
                  floatingLabel={true}
                  required={true}
                />
              </Col>
              <Col md="12" xs="12">
                <Textarea
                  className="info__comment"
                  label="Комментарий"
                  rows="2"
                  floatingLabel={true}
                />
              </Col>
            </Row>
          </form>
          <p className="info__price">
            Стоимость доставки: <span>99</span>&nbsp;руб.
          </p>
          <p className="info__time">
            Приблизительное время доставки: <span>16:46 (через 45&nbsp;мин.)</span>
          </p>
          <p className="info__arriving">
            Время прибытия в ресторан: <span>16:17 (через 16&nbsp;мин.)</span>
          </p>
          <p className="info__length">
            Общая длина маршрута: <span>1</span>&nbsp;км
          </p>
          <Row>
            <Col md="8" xs="8">
              <Button
                className="info__btn-submit"
                size="small"
                variant="raised"
              >
                Отправить
              </Button>
            </Col>
            <Col md="4" xs="4">
              <Button
                className="info__btn-back"
                size="small"
                variant="raised"
                color="danger"
              >
                Назад
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Order;