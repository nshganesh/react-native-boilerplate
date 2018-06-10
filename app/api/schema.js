import { schema } from "normalizr";

export const address = new schema.Entity("addresses", {}, { idAttribute: 'city' });
export const company = new schema.Entity("companies", {}, { idAttribute: 'name' });

export const user = new schema.Entity("users", {
  address,
  company,
});

export const userList = new schema.Array(user);
