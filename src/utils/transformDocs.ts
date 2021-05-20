import { Document } from "mongoose";
import { IProductDocument } from "src/products/product.model";

export function transformDoc(doc: any) {
  if (!doc) return null;
  return {
    id: doc._id,
    name: doc.name,
    quantity: doc.quantity
  };
}

export function transformDocs(docs: any[]) {
  return docs.map((node) => transformDoc(node)).filter(Boolean);
}
