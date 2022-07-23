import { cloneDeep } from 'lodash';

export default <T>(obj: T) => cloneDeep(obj);
