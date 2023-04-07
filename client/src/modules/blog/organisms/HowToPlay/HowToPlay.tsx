import React from 'react'
import { BlogTitleType } from '../../../../lib/common/constants/BlogTitleType'
import BlogContainer from '../../molecules/BlogContainer/BlogContainer'
import   './HowToPlay.scss';

interface HowToPlayProps{
    category:BlogTitleType
}

const HowToPlay = ({category} : HowToPlayProps) => {
  return (
    <BlogContainer title={category}>
        <img className={'steps'} src={require('../../assets/images/steps.png')} alt="" />
    </BlogContainer>
  )
}

export default HowToPlay