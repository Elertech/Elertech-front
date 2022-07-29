import { Item } from "./Item"
import { Usuario } from "./Usuario"

export class Carrinho{
  public id: number
  public quantidadeItem: number
  public valorTotalItem: number
  public usuario: Usuario
  public item: Item[]
}
