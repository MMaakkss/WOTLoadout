const tanksList = [
  { id: 1, name: "Leopard" },
  { id: 2, name: "E100" },
  { id: 3, name: "T-100" },
]

export class TankService {
  async getList() {
    return tanksList
  }
}
