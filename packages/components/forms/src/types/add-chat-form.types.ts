import { SelectItemValue } from '@stn-ui/inputs';
import { AddChatFormFields, ChatCreativity } from '../constants';

export interface AddChatFormData extends ObjectLiteral {
  [AddChatFormFields.Name]: string;
  [AddChatFormFields.Category]: Maybe<SelectItemValue>;
  [AddChatFormFields.Prompt]: string;
  [AddChatFormFields.Creativity]: Maybe<ChatCreativity>;
}

export interface ChatCategoryOption {
  id: string | number;
  value: string;
  title: string;
  color: string;
}
