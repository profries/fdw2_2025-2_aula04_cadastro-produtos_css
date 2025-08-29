import { Component } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  imports: [],
  templateUrl: './card-produto.html',
  styleUrl: './card-produto.css'
})
export class CardProduto {
  produto: any = { id:1, nome:"Produto 1", preco: 100 };
}
