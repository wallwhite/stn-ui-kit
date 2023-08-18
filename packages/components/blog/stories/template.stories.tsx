import { PostListItem, PostList } from '../src';

export default {
  title: 'Components/Blog',
  component: PostList,
  tags: ['autodocs'],
};

export const Default = () => (
  <div style={{ maxWidth: '940px' }}>
    <PostList>
      <PostListItem
        tag="News"
        title="Lorem ipsum dolor sit amet."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        image={<img src="https://picsum.photos/id/39/440/230" alt="post" />}
        author="John Doe"
        date="2021-01-01"
        route="/blog/1"
      />
      <PostListItem
        tag="Guides"
        title="Lorem ipsum dolor sit amet."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        image={<img src="https://picsum.photos/id/43/440/230" alt="post" />}
        author="Gordon Freeman"
        date="2021-01-01"
        route="/blog/2"
      />
      <PostListItem
        tag="News"
        title="Lorem ipsum dolor sit amet."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        image={<img src="https://picsum.photos/id/33/440/230" alt="post" />}
        author="Alan Turing"
        date="2021-01-01"
        route="/blog/3"
      />
      <PostListItem
        tag="Guides"
        title="Lorem ipsum dolor sit amet."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        image={<img src="https://picsum.photos/id/433/440/230" alt="post" />}
        author="Morgan Freeman"
        date="2021-01-01"
        route="/blog/4"
      />
    </PostList>
  </div>
);
