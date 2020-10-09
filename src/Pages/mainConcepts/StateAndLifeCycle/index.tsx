import React from 'react';

interface ClockProps {
  date: Date;
  timerID: number;
  tick: () => Date;
}

class Clock extends React.Component<{}, ClockProps> {
  constructor(props: ClockProps) {
    super(props);
    this.state = {
      date: new Date(),
      timerID: 0,
      tick: () => new Date(),
    };
  }

  componentDidMount(this: ClockProps) {
    this.timerID = window.setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(this: ClockProps) {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h3>Hello, world!</h3>
        <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
      </div>
    );
  }
}

export default function StateAndLifeCycle() {
  return (
    <div>
      <h1>Estado e Ciclo de Vida</h1>
      <p>
        Esta seção, aprenderemos como tornar o componente Clock verdadeiramente
        reutilizável e encapsulado. Ele irá configurar seu próprio temporizador
        e se atualizar a cada segundo.
      </p>
      <p>
        No entanto, falta um requisito crucial: o fato de que o Clock configura
        um temporizador e atualiza a UI a cada segundo deve ser um detalhe de
        implementação do Clock.
      </p>
      <p>
        Para implementá-lo, precisamos adicionar um “state” ao componente Clock.
      </p>
      <p>
        O state do componente é similar as props, mas é privado e totalmente
        controlado pelo componente.
      </p>
      <h2>Convertendo uma Função para uma Classe</h2>
      <p>
        Você pode converter um componente de função como Clock em uma classe em
        cinco etapas:
      </p>
      <ul>
        <li>
          Criar uma classe ES6, com o mesmo nome, estendendo React.component.
        </li>
        <li>Adicionar um único método vazio chamado render().</li>
        <li>Mova o corpo da função para o método render().</li>
        <li>Substitua props por this.props no corpo de render().</li>
        <li>Exclua a declaração da função vazia restante.</li>
      </ul>
      <h2>Adicionando Métodos de Ciclo de Vida a Classe</h2>
      <p>
        Em aplicações com muitos componentes, é muito importante limpar os
        recursos utilizados pelos componentes quando eles são destruídos.
      </p>
      <p>
        Quando a saída do Clock é inserida no DOM, o React chama o método do
        ciclo de vida componentDidMount(). Dentro dele, o componente Clock pede
        ao navegador para configurar um temporizador para chamar o método tick()
        do componente uma vez por segundo.
      </p>
      <p>
        A cada segundo o navegador chama o método tick(). Dentro dele, o
        componente Clock agenda uma atualização de UI chamando setState() com um
        objeto contendo a hora atual. Graças à chamada setState(), o método
        render() será diferente e, portanto, a saída de renderização incluirá a
        hora atualizada.
      </p>
      <p>
        Se o componente Clock for removido do DOM, o React chama o método do
        ciclo de vida componentWillUnmount() para que o temporizador seja
        interrompido.
      </p>
      <p>Resultado:</p>
      <Clock />
      <h2>Usando o State Corretamente</h2>
      <p>Existem três coisas que você deve saber sobre setState().</p>
      <span>Errado</span>
      <p>this.state.comment = 'Hello';</p>
      <p>Em vez disso, use setState():</p>
      <span>Correto</span>
      <p>{"this.setState({comment: 'Hello'});"}</p>
      <p>
        O único lugar onde você pode atribuir this.state é o{' '}
        <strong>construtor</strong> .
      </p>
    </div>
  );
}
