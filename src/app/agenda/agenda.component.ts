import { Component, OnInit } from '@angular/core';

interface Tasks {
  id: number;
  data: string;
  tarefa: string;
  tipo: string;
  concluida: boolean;
  exibirID: () => any;
}

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  listaTarefas: Array<Tasks>;

  constructor() { 
    this.listaTarefas = [
      {
        id: 1,
        data: '01/01/2021',
        tarefa: 'Estudar Angular.js',
        tipo: 'LEMBRETE',
        concluida: false,
        exibirID: function() {
          this.concluida = !this.concluida;
          alert(`A tarefa ${this.id} teve seu status alterado.`);
        }
      },
      {
        id: 2,
        data: '02/01/2021',
        tarefa: 'Estudar React.js',
        tipo: 'LEMBRETE',
        concluida: true,
        exibirID: function() {
          this.concluida = !this.concluida;
          alert(`A tarefa ${this.id} teve seu status alterado.`);
        }
      },
      {
        id: 3,
        data: '03/01/2021',
        tarefa: 'Estudar Vue.js',
        tipo: 'LEMBRETE',
        concluida: false,
        exibirID: function() {
          this.concluida = !this.concluida;
          alert(`A tarefa ${this.id} teve seu status alterado.`);
        }
      },
      {
        id: 4,
        data: '04/01/2021',
        tarefa: 'Estudar Bootstrap',
        tipo: 'LEMBRETE',
        concluida: false,
        exibirID: function() {
          this.concluida = !this.concluida;
          alert(`A tarefa ${this.id} teve seu status alterado.`);
        }
      },
      {
        id: 5,
        data: '05/01/2021',
        tarefa: 'Estudar UX Design',
        tipo: 'IMPORTANTE',
        concluida: false,
        exibirID: function() {
          this.concluida = !this.concluida;
          alert(`A tarefa ${this.id} teve seu status alterado.`);
        }
      },
      {
        id: 6,
        data: '06/01/2021',
        tarefa: 'Estudar UI Design',
        tipo: 'IMPORTANTE',
        concluida: false,
        exibirID: function() {
          this.concluida = !this.concluida;
          alert(`A tarefa ${this.id} teve seu status alterado.`);
        }
      },
      {
        id: 7,
        data: '07/01/2021',
        tarefa: 'Estudar JavaScript',
        tipo: 'IMPORTANTE',
        concluida: false,
        exibirID: function() {
          this.concluida = !this.concluida;
          alert(`A tarefa ${this.id} teve seu status alterado.`);
        }
      },
      {
        id: 8,
        data: '08/01/2021',
        tarefa: 'Estudar Node.js',
        tipo: 'IMPORTANTE',
        concluida: false,
        exibirID: function() {
          this.concluida = !this.concluida;
          alert(`A tarefa ${this.id} teve seu status alterado.`);
        }
      }
    ]
  }
  

  ngOnInit(): void {
    console.log('AGENDA DE ANDRÉ ALVES');
  }

}
