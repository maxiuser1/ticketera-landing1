import set from '@utils/set';
import type {
  FieldError,
  FieldsAsError,
  FieldValues
} from '@validations/types';

export default <TFieldValues extends FieldValues>(
  errors: Record<string, FieldError>
): FieldsAsError<TFieldValues> => {
  const fieldErrors = {} as FieldsAsError<TFieldValues>;

  for (const path in errors) {
    set(fieldErrors, path, errors[path]);
  }

  return fieldErrors;
};
