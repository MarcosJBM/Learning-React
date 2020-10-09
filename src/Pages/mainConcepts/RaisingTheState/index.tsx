import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

function toCelsius(fahrenheit: number) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius: number) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature: string, convert: any) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props: { celsius: number }) {
  if (props.celsius >= 100) {
    return <p>A água ferveria.</p>;
  }
  return <p>A água não ferveria.</p>;
}

class TemperatureInput extends React.Component<{}, { temperature: string }> {
  constructor(props: { temperature: string }) {
    super(props);
    this.state = { temperature: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ temperature: event.target.value });
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Informe a temperatura em {scaleNames.c}</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component<{}, { scale: string[] }> {
  render() {
    return (
      <div>
        <TemperatureInput />
        <TemperatureInput />
      </div>
    );
  }
}

export default function RaisingTheState() {
  return (
    <div>
      <h1>Elevando o State</h1>
      <p>
        Com frequência, a modificação de um dado tem que ser refletida em vários
        componentes. Recomendamos elevar o state compartilhado ao elemento pai
        comum mais próximo.
      </p>
      <p>
        Nessa seção, criaremos uma calculadora de temperatura que calcula se a
        água ferveria em determinada temperatura.
      </p>
      <p>
        Vamos iniciar com um componente chamado BoilingVerdict. Ele recebe a
        temperatura por meio da prop celsius e retorna uma mensagem indicando se
        a temperatura é suficiente para a água ferver.
      </p>
      <BoilingVerdict celsius={100} />
      <p>
        A seguir, criaremos um componente chamado Calculator. Ele renderiza um{' '}
        {'<input>'} que recebe a temperatura e a mantém em
        this.state.temperature.
      </p>
      <p>
        Além disso, ele renderiza o BoilingVerdict de acordo com o valor atual
        do input.
      </p>
      <h2>Adicionando um Segundo Input</h2>
      <p>
        Nosso novo requisito é que, além de um input para grau Celsius, também
        tenhamos um input para grau Fahrenheit e que ambos estejam
        sincronizados.
      </p>
      <p>
        Agora podemos modificar o Calculator para renderizar dois inputs de
        temperatura separados:
      </p>
      <Calculator />
      <p>
        Agora nós temos dois inputs. Porém, quando a temperatura é inserida em
        um deles, o outro não atualiza. Isso contraria nosso requisito: queremos
        que eles estejam sincronizados.
      </p>
      <p>
        Também não podemos renderizar o BoilingVerdict a partir do Calculator,
        porque esse não conhece a temperatura atual já que ela está escondida
        dentro do TemperatureInput.
      </p>
      <h2>Codificando Funções de Conversão</h2>
      <p>
        Primeiro, vamos criar duas funções para converter de Celsius para
        Fahrenheit e vice-versa:
      </p>
      <p>
        Essas duas funções convertem números. Vamos criar outra função que
        recebe uma string temperature e uma função de conversão como argumentos
        e retorna uma string. Vamos usá-la para calcular o valor de um input com
        base no outro input.
      </p>
      <p>
        Retorna uma string vazia quando temperature for inválido e mantém o
        retorno arredondado até a terceira casa decimal.
      </p>
      <p>
        Por exemplo, tryConvert('abc', toCelsius) retona uma string vazia e
        tryConvert('10.22', toFahrenheit) retorna '50.396'.
      </p>
      <h2>Codificando Funções de Conversão</h2>
      <p>
        Atualmente, ambos os componentes TemperatureInput mantém, de modo
        independente, o valor em seu state local.
      </p>
      <p>
        Porém, queremos que esses dois inputs estejam sincronizados um com o
        outro. Quando o input de Celsius for atualizado, o input de Fahrenheit
        deve mostrar a temperatura convertida e vice-versa.
      </p>
      <p>
        No React, o compartilhamento do state é alcançado ao movê-lo para o
        elemento pai comum aos componentes que precisam dele. Isso se chama
        “elevar o state” (state lift). Vamos remover o state local do
        TemperatureInput e colocá-lo no Calculator.
      </p>
      <p>
        Se o Calculator é dono do state compartilhado, ele se torna a “fonte da
        verdade” para a temperatura atual em ambos os inputs. Ele pode instruir
        ambos a terem valores que são consistentes um com o outro. Já que as
        props de ambos os TemperatureInput vem do mesmo componente pai,
        Calculator, os dois inputs sempre estarão sincronizados.
      </p>
      <p>
        Sabemos que props são somente leitura. Quando a temperature estava no
        state local, o TemperatureInput podia simplesmente chamar
        this.setState() para modificá-lo. Porém, agora que a temperature vem do
        elemento pai como uma prop, o TemperatureInput não tem controle sobre
        ela.
      </p>
      <p>
        No React, isso é comumente solucionado ao tornar um componente comum em
        um “componente controlado”. Assim como o {'<input>'} do DOM aceita ambas
        as props value e onChange, o componente personalizado TemperatureInput
        também pode aceitar ambas as props temperature e onTemperatureChange do
        Calculator, seu componente pai.
      </p>
      <p>
        Agora, quando o TemperatureInput quiser atualizar sua temperatura, ele
        executa this.props.onTemperatureChange
      </p>
      <p>
        A prop onTemperatureChange será fornecida juntamente com a prop
        temperature pelo componente pai Calculator. Esse irá cuidar das
        alterações ao modificar seu próprio state local, fazendo com que ambos
        os inputs sejam renderizados com novos valores.
      </p>
      <p>
        Nós removemos o state local dele, então ao invés de ler
        this.state.temperature, agora lemos this.props.temperature. Ao invés de
        chamar this.setState() quando quisermos fazer uma alteração chamamos
        this.props.onTemperatureChange() que será fornecido pelo Calculator
      </p>
      <p>
        Vamos armazenar no state local os valores temperature e scale referentes
        ao input atual. Eles representam o state que “foi elevado” dos inputs e
        servirá como “fonte da verdade” para ambos. É a representação mínima de
        todos os dados necessários para conseguir renderizar ambos os inputs.
      </p>
    </div>
  );
}
