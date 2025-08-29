import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabelaProdutos } from "./tabela-produtos/tabela-produtos";
import { FormProdutos } from "./form-produtos/form-produtos";
import { CardProduto } from "./card-produto/card-produto";

@Component({
  selector: 'app-root',
  imports: [TabelaProdutos, FormProdutos, CardProduto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
