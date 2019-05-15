import {
  connectorsComponent,
  bankAccounts,
  taxCodes,
  paymentMethods,
  products,
  transactionStats,
  transactions,
  accounts,
} from './fakeData';

export const fetchConnectorsService = () =>
  new Promise(resolve => {
    setTimeout(resolve({ connectorsComponent }), 3000);
  })
    .then(response => response)
    .catch(error => error);

export const fetchBankAccountsService = () =>
  new Promise(resolve => {
    setTimeout(resolve({ bankAccounts }), 3000);
  })
    .then(response => response)
    .catch(error => error);

export const fetchTaxCodeService = () =>
  new Promise(resolve => {
    setTimeout(resolve({ taxCodes }), 3000);
  })
    .then(response => response)
    .catch(error => error);

export const fetchPaymentMethodsService = () =>
  new Promise(resolve => {
    setTimeout(resolve({ paymentMethods }), 3000);
  })
    .then(response => response)
    .catch(error => error);

export const fetchProductsService = () =>
  new Promise(resolve => {
    setTimeout(resolve({ products }), 3000);
  })
    .then(response => response)
    .catch(error => error);

export const fetchTransactionStatsService = () =>
  new Promise(resolve => {
    setTimeout(resolve({ transactionStats }), 3000);
  })
    .then(response => response)
    .catch(error => error);

export const fetchTransactionsService = () =>
  new Promise(resolve => {
    setTimeout(resolve({ transactions }), 3000);
  })
    .then(response => response)
    .catch(error => error);

export const fetchAccountsService = () =>
  new Promise(resolve => {
    setTimeout(resolve({ accounts }), 3000);
  })
    .then(response => response)
    .catch(error => error);
