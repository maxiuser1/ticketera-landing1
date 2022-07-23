import unset from '@utils/unset';
import type { FieldValues, FormState } from '@validations/types';
import type { Writable } from 'svelte/store';

export default <TFieldValues extends FieldValues>(
    store: Writable<FormState<TFieldValues>>
  ) =>
  (name: string) => {
    store.update((current) => ({
      ...current,
      values: unset(current.values, name)
    }));
  };
