import { Component } from '@angular/core';
import { HeroiServicesService } from './service/heroi/heroi-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'heroi-angular';
  accessToken: '';
  nameHero: '';
  herois: any[] = [];

  constructor(private heroiServices: HeroiServicesService) {}

  btnPesquisar() {
    if (!this.accessToken) {
      alert('Seu código de acesso não pode ser vazio');
      return;
    }
    if (!this.nameHero) {
      alert('Nome do heroi não pode ser vazio');
      return;
    }
    this.herois = [];
    this.heroiServices.getHeroName(this.accessToken, this.nameHero).subscribe(
      (sucess: any) => {
        if (sucess.response !== 'success') {
          alert(sucess.error);
          return;
        }

        this.herois = sucess.results.map((heroi) => {
          heroi.powerstats = Object.entries(heroi.powerstats);
          return heroi;
        });

        this.herois;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  btnPesquisarAleatorio() {
    if (!this.accessToken) {
      alert('Seu código de acesso não pode ser vazio');
      return;
    }
    this.herois = [];

    for (let index = 0; index < 10; index++) {
      this.heroiServices
        .getHeroiId(this.accessToken, this.retornarNumeroAleatorio())
        .subscribe(
          (sucess: any) => {
            debugger;
            if (sucess.response !== 'success') {
              alert(sucess.error);
              return;
            }

            sucess.powerstats = Object.entries(sucess.powerstats);

            this.herois.push(sucess);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  retornarNumeroAleatorio() {
    return Math.floor(Math.random() * 731) + 1;
  }
}
