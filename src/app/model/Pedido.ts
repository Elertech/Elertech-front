import { ItemPedido } from "./ItemPedido"
import { Usuario } from "./Usuario"

export class Pedido{
  public id: number
  public quantidadeItens: number
  public valorTotalPedido: number
  public enderecoEntrega: string
  public formaPagamento: string
  public dataPedido: Date
  public usuario: Usuario
  public item: ItemPedido[]
}
