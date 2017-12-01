export interface Event<T> {
  name: symbol;
  data: T;
}

export const TYPE_ADDTO = Symbol('addTo');
