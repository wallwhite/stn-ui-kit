import * as Yup from 'yup';

export const AddChatModalFormSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Enter longer name!').max(120, 'Name is too long!').required('Name is required.'),
  category: Yup.object({
    value: Yup.string().required('Category is required.'),
  }).required('Select a category!'),
  prompt: Yup.string()
    .min(10, 'Prompt must be longer than 10 symbols.')
    .max(4000, 'Your prompt is too long!')
    .required('Required'),
  creativity: Yup.string().required('Please choose AI creativity.'),
});
