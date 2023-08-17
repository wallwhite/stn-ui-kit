import { BoxIcon } from '@stn-ui/icons';
import { Feature, FeaturesList } from '../src';

export default {
  title: 'Components/Features',
  component: Feature,
  tags: ['autodocs'],
};

export const Default = () => (
  <FeaturesList>
    <Feature
      title="Expansion of Knowledge Base"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero."
      icon={<BoxIcon />}
      image={<img src="https://picsum.photos/id/2/640/420" alt="some" />}
    />
    <Feature
      title="Machine Learning Algorithms"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero."
      icon="🤩"
      image={<img src="https://picsum.photos/id/1/640/420/" alt="some" />}
    />
  </FeaturesList>
);
