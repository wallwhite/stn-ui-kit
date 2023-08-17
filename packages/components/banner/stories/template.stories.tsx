import { Button } from '@stn-ui/button';
import { BoxIcon } from '@stn-ui/icons';
import { Banner } from '../src';

export default {
  title: 'Components/Banner',
  component: Banner,
  tags: ['autodocs'],
};

export const Default = () => (
  <Banner
    title="Banner Title"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris."
    icon={<BoxIcon />}
  >
    <Button size="m">Do some action</Button>
  </Banner>
);
