import { Pedido } from "./Pedido"
import { Produto } from "./Produto"

export class ItemPedido{
  public id: number
  public quantidade: number
  public valorTotal: number
  public produto: Produto
  public Pedido: Pedido
}
