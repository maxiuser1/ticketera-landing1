import { isEqual } from 'lodash';

export default (value: unknown, otherValue: unknown): boolean => {
  return isEqual(value, otherValue);
};
