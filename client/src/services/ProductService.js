import { $api } from "../http";

export class ProductService {
  static fetchProducts() {
    return $api.get("/product/all")
  }
}