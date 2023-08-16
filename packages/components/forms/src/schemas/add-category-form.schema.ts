import * as Yup from 'yup';

export const AddCategoryFormSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Enter longer name!').max(120, 'Name is too long!').required('Name is required.'),
  color: Yup.object({
    value: Yup.string().required('Color is required.'),
  }).required('Color is required.'),
});
