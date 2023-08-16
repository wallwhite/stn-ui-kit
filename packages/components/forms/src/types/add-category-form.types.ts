import { SelectItemValue } from '@stn-ui/inputs';
import { AddCategoryFormFields } from '../constants';

export interface AddCategoryFormData extends ObjectLiteral {
  [AddCategoryFormFields.Name]: string;
  [AddCategoryFormFields.Color]: Maybe<SelectItemValue>;
}
