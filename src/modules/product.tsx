export class Product {
  category: string = "";
  desc: string = "";
  name: string = "";
  mrp: number = 0;
  purchasePrice: number = 0;
  sellingPrice: number = 0;
  unit: string = "Unit";
  stock: number = 0;
}

export class Purchase {
  supplier: string = "";
  date: string = "";
  note: string = "";
  list: PurchaseEach[] = [new PurchaseEach()];
}

export class PurchaseEach {
  product: string = "";
  qty: number = 0;
  price: number = 0;
}
