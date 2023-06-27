import _ from 'lodash';
import React, { createContext, ReactNode, useContext, useState } from 'react';

type ShoppingCartContextType = {
  items: [{ quantity: number; price: string; image: string; name: string }];
  setItemList: (items) => void;
  updateItem: (item, updateQuantity) => void;
  removeItem: (id) => void;
  emptyCart: () => void;
  taxPrice: number;
  totalItems: number;
  totalPrice: number;
  totalPriceBeforeTax: number;
};

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export const ShoppingCartProvider = ({ children }: { children?: ReactNode }) => {
  const [items, setItems] = useState<any>({});

  const setItemList = (items: any) => setItems(items);
  const updateItem = (item, updateQuantity) => {
    const { objectID, id, price, image, name } = item;
    const key = objectID || id;
    let { quantity } = items[key] || { quantity: 0 };
    quantity = quantity + updateQuantity;
    if (quantity < 1) {
      removeItem(key);
      return;
    }
    const newItems = _.setWith({ ...items }, `${key}`, {
      quantity,
      price,
      image,
      name,
    });
    setItems(newItems);
  };
  const removeItem = (id) => {
    setItems(
      _.omitBy({ ...items }, (_, key) => {
        return key == id;
      }),
    );
  };
  const emptyCart = () => {
    setItems({});
  };
  const totalItems = _.flow(
    (items) => _.filter(items, ({ quantity }) => quantity > 0),
    (items) => _.sumBy(items, 'quantity'),
  )(items);

  const totalPriceBeforeTax = Number(
    _.flow(
      (items) => _.filter(items, ({ quantity }) => quantity > 0),
      (items) =>
        _.sumBy(items, ({ quantity, price }) => {
          return _.toNumber(quantity * price);
        }),
    )(items),
  );

  const taxPrice = 55;

  const totalPrice = Number(
    (
      _.flow(
        (items) => _.filter(items, ({ quantity }) => quantity > 0),
        (items) =>
          _.sumBy(items, ({ quantity, price }) => {
            return _.toNumber(quantity) * _.toNumber(price);
          }),
      )(items) + (!_.isEmpty(items) ? taxPrice : 0.0)
    ),
  );

  const ProviderValues = { items, totalItems, taxPrice, totalPriceBeforeTax, totalPrice, emptyCart, removeItem, setItemList, updateItem };
  return <ShoppingCartContext.Provider value={ProviderValues}>{children}</ShoppingCartContext.Provider>;
};

export const useShoppingCart = () => useContext(ShoppingCartContext);
