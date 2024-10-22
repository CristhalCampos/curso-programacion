import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"

/**
 * Schema for products
 * @typedef {Object} productSchema
 * @property {String} name
 * @property {String} description
 * @property {Number} price
 * @property {Number} stock
 * @property {String} image
 * @property {Boolean} free_shipping
 */

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      validate: /^[a-zA-Z0-9 ]+$/,
      unique: true,
    },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },
    image: { type: String },
    free_shipping: { type: Boolean, default: false },
  },
  { timestamps: true }
);

/**
 * Plugin for pagination
 */

productSchema.plugin(mongoosePaginate);

/**
 * Model for products
 * @typedef {Object} Product
 */

const Product = mongoose.model("Products", productSchema);

export { Product };