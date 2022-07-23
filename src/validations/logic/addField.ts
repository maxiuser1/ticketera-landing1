import get from '@utils/get';
import set from '@utils/set';
import type { FieldValues, FormState } from '@validations/types';
import type { Writable } from 'svelte/store';

export default <TFieldValues extends FieldValues>(
    store: Writable<FormState<TFieldValues>>
  ) =>
  (name: string, value: unknown) => {
    store.update((current) => {
      const previousValue = get(current.values, name);

      return {
        ...current,
        values: set(current.values, name, [...(previousValue || []), value])
      };
    });
  };
