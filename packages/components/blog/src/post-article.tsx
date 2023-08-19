/* eslint-disable react/no-danger */
import { FC, ReactNode } from 'react';
import { postArticleCX } from '@stn-ui/theme';

export interface PostArticleProps {
  image?: ReactNode;
  content: string | ReactNode;
}

export const PostArticle: FC<PostArticleProps> = ({ image, content }) => {
  const renderContent = (): ReactNode => {
    if (typeof content === 'string') {
      return <div className={postArticleCX.content()} dangerouslySetInnerHTML={{ __html: content }} />;
    }

    return <div className={postArticleCX.content()}>{content}</div>;
  };

  return (
    <div className={postArticleCX.wrapper()}>
      {image && <div className={postArticleCX.image()}>{image}</div>}
      {renderContent()}
    </div>
  );
};
