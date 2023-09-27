import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { ColorAvatar } from '@stn-ui/color-avatar';
import { FormInput, FormRow, FormSelect } from '@stn-ui/form';
import { SelectOption } from '@stn-ui/inputs';
import { ModalBody } from '@stn-ui/modal';
import { AddCategoryFormFields, CATEGORY_COLORS } from '../../constants';

export const AddCategoryModalFormBody: FC = () => {
  const { watch } = useFormContext();

  const selectedColor = watch(AddCategoryFormFields.Color);

  return (
    <ModalBody>
      <FormRow isSplit>
        <FormInput
          scale="l"
          name={AddCategoryFormFields.Name}
          label="Category name"
          placeholder="Enter category name"
          isWide
        />
        <FormSelect
          scale="l"
          name={AddCategoryFormFields.Color}
          label="Category color"
          placeholder="Select category color"
          elementLeft={<ColorAvatar color={selectedColor?.value} />}
          isWide
        >
          {CATEGORY_COLORS.map((value) => (
            <SelectOption key={value.id} value={value} elementLeft={<ColorAvatar color={value?.value} />}>
              {value.title}
            </SelectOption>
          ))}
        </FormSelect>
      </FormRow>
    </ModalBody>
  );
};
