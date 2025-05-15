/** @format */

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getProduct, removeProduct } from "../../action/products";

export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getProduct.fulfilled,
      (state: ProductState, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
      }
    );
    builder.addCase(
      removeProduct.fulfilled,
      (state: ProductState, action: PayloadAction<Product>) => {
        state.products = state.products.filter(
          (item) => item.id !== action.payload.id
        );
      }
    );
  },
});

export default productSlice.reducer;
