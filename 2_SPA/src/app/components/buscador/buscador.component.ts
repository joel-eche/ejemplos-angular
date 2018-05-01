import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../_services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  termino: string = "";
  heroes: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
    });
  }

}
