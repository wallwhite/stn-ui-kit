import { FC, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { Text } from '@stn-ui/text';
import { addChatFormCreativityCX } from '@stn-ui/theme';

interface AddChatCreativityItemProps {
  title: string;
  icon: ReactNode;
  version?: {
    name: string;
    variant: string;
  };
  temperature: number;
  topP: number;
  name: string;
  value: string;
}

export const AddChatCreativityItem: FC<AddChatCreativityItemProps> = ({
  title,
  icon,
  version,
  temperature,
  topP,
  name,
  value,
}) => {
  const { watch } = useFormContext();

  const currentValue = watch(name);

  const iconClassNames = addChatFormCreativityCX.icon({
    isActive: currentValue && currentValue === value,
  });
  const versionClassNames = addChatFormCreativityCX.version({
    isPrimary: version?.variant === 'primary',
    isSecondary: version?.variant === 'secondary',
  });

  return (
    <span className={addChatFormCreativityCX.wrapper()}>
      <span className={iconClassNames}>{icon}</span>
      <span className={addChatFormCreativityCX.content()}>
        <span className={addChatFormCreativityCX.mainInfo()}>
          <Text variant="black" size="m">
            {title}
          </Text>
          {version && <span className={versionClassNames}>{version.name}</span>}
        </span>
        <span className={addChatFormCreativityCX.additionalInfo()}>
          <span className={addChatFormCreativityCX.infoItem()}>
            <Text type="caption" variant="default" className={addChatFormCreativityCX.infoText()}>
              Temperature:
            </Text>
            <Text type="caption" variant="default">
              {temperature}
            </Text>
          </span>
          <span className={addChatFormCreativityCX.infoItem()}>
            <Text type="caption" variant="default" className={addChatFormCreativityCX.infoText()}>
              Top P:
            </Text>
            <Text type="caption" variant="default">
              {topP}
            </Text>
          </span>
        </span>
      </span>
    </span>
  );
};
