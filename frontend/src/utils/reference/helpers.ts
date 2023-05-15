export const copyByValue: any = (obj: any) => {
  /*
    performs a deep copy by value of any type of variable(array, object, date, ect...)
    meant to handle deep nested variables that shallow copy by values cannot perform.
  */
  let cloneValue: any;

  // handle the primitive data types, and null/undefined
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // handle date
  if (obj instanceof Date) {
    cloneValue = new Date();
    cloneValue.setTime(obj.getTime());
    return cloneValue;
  }

  // handle array
  if (obj instanceof Array) {
    cloneValue = [];
    for (let i = 0; i < obj.length; i++) {
      cloneValue[i] = copyByValue(obj[i]);
    }
    return cloneValue;
  }

  // handle set
  if (obj instanceof Set) {
    cloneValue = new Set();
    obj.forEach((val) => cloneValue.add(copyByValue(val)));
    return cloneValue;
  }

  // handle object
  if (obj instanceof Object) {
    cloneValue = {};
    for (const attr in obj) {
      if (attr in obj) {
        cloneValue[attr] = copyByValue(obj[attr]);
      }
    }
    return cloneValue;
  }

  throw new Error('Unable to clone object by value! Object value type is not supported');
};

export function isObjectEmpty(obj: any) {
  if (typeof obj !== 'object' || obj === null || obj === undefined || (Array.isArray(obj) && obj.length === 0)) {
    return true;
  }

  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

export function lowerCaseFirstLetter(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

export function isJsonString(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
