/** @format */

import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Product } from "../features/product/productSlice";

export const getProduct = createAsyncThunk<Product[], void>(
  "products/get",
  async () => {
    const res = await fetch(
      "https://66f4177577b5e889709844a8.mockapi.io/product"
    ).then((data) => data.json());
    return res;
  }
);
export const removeProduct = createAsyncThunk<Product, void>(
  "products/delete",
  async (id) => {
    console.log(id);

    const res = await fetch(
      `https://66f4177577b5e889709844a8.mockapi.io/product/${id}`,
      {
        method: "DELETE",
      }
    ).then((data) => data.json());
    return res;
  }
);
