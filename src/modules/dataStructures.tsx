export class Product {
  category: string = "";
  desc: string = "";
  name: string = "";
  mrp: number = 0;
  purchasePrice: number = 0;
  sellingPrice: number = 0;
  unit: string = "";
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
  qty: number = 1;
  price: number = 0;
}

export class Sale {
  customer: string = "";
  date: string = "";
  note: string = "";
  list: PurchaseEach[] = [new SaleEach()];
}

export class SaleEach {
  product: string = "";
  qty: number = 1;
  price: number = 0;
  cgst: number = 9;
  sgst: number = 9;
}

export class User {
  name: string = "";
  user: string = "";
  password: string = "";
  phone: string = "";
  phone2: string = "";
  email: string = "";
  dob: string = "";
  doj: string = "";
  type: string = "Staff";
  salary: string = "";
}
