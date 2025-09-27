module.exports = class ProductDto {
  product;
  title;
  image;
  slug;
  variant;
  count;
  priceAtPurchase;

  constructor(cartItem) {
    this.product = cartItem.product._id;
    this.title = cartItem.product.title;
    this.slug = cartItem.product.slug;
    this.image = cartItem.product.images.find(i => i.isPrimary);
    this.variant = cartItem.variant;
    this.count = cartItem.count;
    this.priceAtPurchase = cartItem.priceAtAdd;
  }
}