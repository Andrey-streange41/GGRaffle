import React from 'react';
import './BlogContainer.scss';
import { BlogTitleType } from '../../../../lib/common/constants/BlogTitleType';
import getTitlePicture from '../../../lotery/utils/getTitlePicture';

interface BlogContainerProps{
    title:BlogTitleType;
    children:React.ReactNode;
}

const BlogContainer = ({title,children}:BlogContainerProps) => {

  const titlePic = getTitlePicture(title)
  return (
    <div className='blog-container'>
        <div className='blog-glow'>
           <img src={titlePic} alt="titlePic" />
        </div>
        {
          children
        }
    </div>
  )
}

export default BlogContainer