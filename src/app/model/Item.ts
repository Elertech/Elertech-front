import { Carrinho } from "./Carrinho"
import { Produto } from "./Produto"

export class Item{
  public id: number
  public quantidade: number
  public valorTotal: number
  public produto: Produto
  public carrinho: Carrinho
}
