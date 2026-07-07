export type ProductCategoryId = "shoes" | "bags" | "wallets" | "accessories" | (string & {});

export type Money = {
  amount: number;
  currency: "BDT";
};

export type ProductSummary = {
  id: string;
  slug: string;
  name: string;
  categoryId: ProductCategoryId;
  price: Money;
  descriptionBn?: string;
  image?: {
    src: string;
    alt: string;
  };
};
