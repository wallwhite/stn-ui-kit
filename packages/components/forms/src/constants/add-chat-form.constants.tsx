import { CreativityHighIcon, CreativityLowIcon, CreativityMediumIcon, CreativitySuperIcon } from '@stn-ui/icons';

export enum ChatCreativity {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
  Super = 'super',
}

export enum AddChatFormFields {
  Name = 'name',
  Category = 'category',
  Prompt = 'prompt',
  Creativity = 'creativity',
}

export const CHAT_CREATIVITY_OPTIONS = [
  {
    value: ChatCreativity.Low,
    title: 'Low',
    temperature: 0.1,
    topP: 0.4,
    icon: <CreativityLowIcon />,
    version: { name: 'gpt-3', variant: 'default' },
  },
  {
    value: ChatCreativity.Medium,
    title: 'Medium',
    temperature: 0.4,
    topP: 0.5,
    icon: <CreativityMediumIcon />,
    version: { name: 'gpt-3.5', variant: 'default' },
  },
  {
    value: ChatCreativity.High,
    title: 'High',
    temperature: 1,
    topP: 1,
    icon: <CreativityHighIcon />,
    version: { name: 'gpt-3.5-turbo', variant: 'secondary' },
  },
  {
    value: ChatCreativity.Super,
    title: 'Super',
    temperature: 1.5,
    topP: 1,
    icon: <CreativitySuperIcon />,
    version: { name: 'gpt-4', variant: 'primary' },
  },
];
