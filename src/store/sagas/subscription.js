import { retry, put } from "redux-saga/effects";

import { Creators as SubscriptionTypes } from "../ducks/subscription";

import { iuguApi } from "../../../services/api";

export function* subscriptionCreate(action) {
  const requestBody = {
    email: action.data.email,
    name: action.data.name,
    notes: action.data.notes,
    phone: action.data.phone,
    cpf_cnpj: action.data.cnpj,
    street: action.data.address
  };

  try {
    const response = yield retry(
      2,
      1000,
      iuguApi.post,
      "customers",
      requestBody
    );

    console.log(response);
  } catch (e) {
    yield put();
  }
}
