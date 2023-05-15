// interfaces
import {Iproduct, IproductVariant, IproductVariantOption} from 'src/types/Products';
import {complianceProviderTypes} from './orders';

const prodAgeToNum: {[key: string]: number} = {
  None: 0,
  EighteenPlus: 18,
  TwentyonePlus: 21,
};

export const initialProductModalData = {
  groupId: 0,
  image: '',
  minimumPrice: 0,
  name: '',
  variants: [],
  productInfo: null,
};

export const productTypes = {
  qty: 'SoldByQuantity',
  weight: 'SoldByWeight',
};

export const getProductStock = (product: Iproduct) => {
  let stock = 0;
  if (product.productInfo !== null) {
    stock += product.productInfo.stock;
  }
  product.variants.forEach((pv: IproductVariant) => {
    if (pv.productInfo !== null) {
      stock += pv.productInfo.stock;
    }
    if (pv.options !== null) {
      pv.options.forEach((pvo: IproductVariantOption) => {
        if (pvo.productInfo !== null) {
          stock += pvo.productInfo.stock;
        }
      });
    }
  });

  return Math.floor(stock * 1000) / 1000;
};

export const getProductMedIdReqMsg = (product: Iproduct) => {
  const msgProdOrAllMedIdReq = 'Medical ID Required';
  if (product.productInfo !== null && product.productInfo.medicalIdRestricted) {
    return msgProdOrAllMedIdReq;
  }

  const msgSomeVarOptReqMedId = 'Some Variants/Options Require Medical ID';
  const maxVariantsWithoutOptions =
    product.variants === null
      ? 0
      : product.variants.filter((pv: IproductVariant) => pv.options === null || pv.options.length === 0).length;
  let varWithMedId = 0;
  let maxOptions = 0;
  let optWithMedId = 0;
  product.variants.forEach((pv: IproductVariant) => {
    if (pv.productInfo !== null && pv.productInfo.medicalIdRestricted) {
      varWithMedId++;
    }
    if (pv.options !== null) {
      pv.options.forEach((pvo: IproductVariantOption) => {
        maxOptions++;
        if (pvo.productInfo !== null && pvo.productInfo.medicalIdRestricted) {
          optWithMedId++;
        }
      });
    }
  });

  return (maxVariantsWithoutOptions !== 0 && maxVariantsWithoutOptions !== varWithMedId && varWithMedId > 0) ||
    (maxOptions !== 0 && maxOptions !== optWithMedId && optWithMedId > 0)
    ? msgSomeVarOptReqMedId
    : maxVariantsWithoutOptions !== 0 &&
      maxVariantsWithoutOptions === varWithMedId &&
      maxOptions !== 0 &&
      maxOptions === optWithMedId
    ? msgProdOrAllMedIdReq
    : '';
};

export const getUserAddCartUnavailableMsg = (
  prodReqMedId: boolean | null,
  prodAgeReq: string | null,
  usrMedicalId: string,
  usrMedicalIdExp: string,
  usrBirthday: string,
  complianceProvider: string,
) => {
  // edge case, product not yet selected
  if (prodReqMedId === null || prodAgeReq === null) {
    return '';
  }

  // check age
  const reqAgeDate = new Date();
  reqAgeDate.setFullYear(reqAgeDate.getFullYear() - prodAgeToNum[prodAgeReq]);
  const usrBirthdayDate = new Date(usrBirthday);
  if (prodAgeToNum[prodAgeReq] > 0 && usrBirthdayDate > reqAgeDate) {
    return `Must be at least ${prodAgeToNum[prodAgeReq]} to purchase product`;
  }

  // medId not required
  if (!prodReqMedId) {
    return '';
  }

  // medId not required for metric?
  if (complianceProvider === complianceProviderTypes.MetrcIntegration) {
    return '';
  }

  // user has medical id
  if (usrMedicalId === null) {
    return 'Medical ID Required';
  }

  // user medical id is not expired
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const medicalIdExpDate = new Date(usrMedicalIdExp);
  if (today > medicalIdExpDate) {
    return 'Medical ID Expired';
  }

  return '';
};

export const formatProductWeight = (weight: number) => {
  return Math.floor(weight * 1000) / 1000;
};

export const productModalTypes = {
  none: 0,
  isSendingApi: 1,
  isApiSendComplete: 2,
  isApiSendFailed: 3,
  main: 4,
  variantsAndOptions: 5,
  requireMedIdPrompt: 6,
  recreationalLimitPrompt: 7,
  recreationalLimitAndMedIdRequiredPrompt: 8,
  medicalLimitPrompt: 9,
  concentratedLimitPrompt: 10,
};

export function productHasVariants(unknownProd: any) {
  return 'variants' in unknownProd && unknownProd.variants.length > 0;
}

export function productHasOptions(unknownProd: any) {
  let prodHasOptions = false;
  if (!('variants' in unknownProd) || unknownProd.variants === null) {
    return prodHasOptions;
  } else if (unknownProd.variants.length === 0) {
    return prodHasOptions;
  }
  let varI = 0;
  while (varI < unknownProd.variants.length && !prodHasOptions) {
    if (unknownProd.variants[varI].options?.length > 0) {
      prodHasOptions = true;
    }
    varI++;
  }
  return prodHasOptions;
}

export function variantHasOptions(variant: any) {
  return variant.options !== null && variant.options.length > 0;
}

export function isProductVariantOrOption(unknownProd: any) {
  return !('groupId' in unknownProd);
}

export function getVariantNameFromProduct(prod: any, variantIndex: number) {
  return prod.variants[variantIndex].name;
}

export function getOptionNameFromProduct(prod: any, variantIndex: number, optionIndex: number) {
  return prod.variants[variantIndex].options[optionIndex].name;
}

export const getSubNameFromProduct = (prod: any, variantIndex: number, optionIndex: number) => {
  /* returns one of the following strings:
  ''
  'variantName'
  'variantName - optionName'
  */
  if (!productHasVariants(prod)) {
    return '';
  }

  const variantName = prod.variants[variantIndex].name;
  if (!variantHasOptions(prod.variants[variantIndex])) {
    return variantName;
  }

  return `${variantName} - ${prod.variants[variantIndex].options[optionIndex].name}`;
};
