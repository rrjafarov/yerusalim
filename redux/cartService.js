import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const cartService = createApi({
  reducerPath: "cartService",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers) => {
      const guestUUID = Cookies.get("guest_uuid");
      if (guestUUID) {
        headers.set("Guest-UUID", guestUUID);
      }

      const token = Cookies.get("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      const preferredLanguage = Cookies.get("NEXT_LOCALE") || "az";
      headers.set("Lang", preferredLanguage);

      return headers;
    },
  }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => ({ url: "/cart/list", method: "GET" }),
      providesTags: ["Cart"],
    }),

    // addToCart: builder.mutation({
    //   query: ({ productId, quantity }) => ({
    //     url: `/cart/add/${productId}`,
    //     method: "POST",
    //     body: { quantity },
    //   }),
    //   invalidatesTags: ["Cart"],
    // }),

    addToCart: builder.mutation({
      query: ({ productId, quantity = 1, selectedVariantIndex = 0 }) => {
        const formData = new FormData();
        formData.append(
          "product_variant",
          `product_variants[${selectedVariantIndex + 1}]`,
        );
        formData.append("qty", String(quantity));

        return {
          url: `/cart/add/${productId}`,
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["Cart"],
    }),

    removeFromCart: builder.mutation({
      query: (productId) => ({
        url: `/cart/delete/${productId}`,
        method: "POST",
        body: { productId },
      }),
      invalidatesTags: ["Cart"],
    }),
    increaseCartItem: builder.mutation({
      query: (productId) => ({
        url: `/cart/plus/${productId}`,
        method: "POST",
        body: { productId },
      }),
      invalidatesTags: ["Cart"],
    }),
    decreaseCartItem: builder.mutation({
      query: (productId) => ({
        url: `/cart/minus/${productId}`,
        method: "POST",
        body: { productId },
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useIncreaseCartItemMutation,
  useDecreaseCartItemMutation,
} = cartService;
