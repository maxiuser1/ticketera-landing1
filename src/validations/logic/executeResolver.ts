import type { FieldValues, FormState, Resolver } from '@validations/types';
import { type Writable, get as getFromStore } from 'svelte/store';

export default <TFieldValues extends FieldValues>(
    store: Writable<FormState<TFieldValues>>
  ) =>
  (resolver: Resolver<TFieldValues>) =>
    resolver(getFromStore(store).values);
