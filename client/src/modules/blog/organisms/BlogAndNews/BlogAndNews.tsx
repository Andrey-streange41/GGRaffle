import React from 'react'
import BlogContainer from '../../molecules/BlogContainer/BlogContainer';
import { BlogTitleType } from '../../../../lib/common/constants/BlogTitleType';

interface BlogAndNewsProps{
    category :BlogTitleType
}

const BlogAndNews = ({category}:BlogAndNewsProps) => {
  return (
    <BlogContainer title={category}>
       {category}
    </BlogContainer>
  )
}

export default BlogAndNews