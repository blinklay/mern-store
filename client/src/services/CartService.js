import { $api } from "../http";

export class CartService {
  static fetchCart() {
    return $api.get("/user/cart")
  }

  static addToCart(slug, variant = null, count = 1) {
    return $api.post(`/user/cart/add/${slug}?variant=${variant}&count=${count}`)
  }

  static removeFromCart(slug, variant = null, count = 1) {
    return $api.post(`/user/cart/remove/${slug}?variant=${variant}&count=${count}`)
  }
}