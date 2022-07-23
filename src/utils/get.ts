import { get } from 'lodash';

export default (obj: unknown, path: string, defaultValue?: unknown) =>
  get(obj, path, defaultValue);
