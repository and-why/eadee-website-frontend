import dynamic from 'next/dynamic';
import BannerImageText from './blocks/BannerImageText';
import { ColouredBlock } from './blocks/ColouredBlock';
import { FeatureBlockTitleAndText } from './blocks/FeatureBlockTitleAndText';
import { FullPageCenteredBlock } from './blocks/FullPageCenteredBlock';
import { FullWidthBlock } from './blocks/FullWidthBlock';
import { CallToActionBlock } from './blocks/CallToActionBlock';
import FeatureBlockImageTextOnly from './FeatureBlockImageTextOnly';
import TextAndMedia from './blocks/TextAndMedia';
import StatBlock from './blocks/StatBlock';

const DynamicLargeTextAndImageBlock = dynamic(() => import('./blocks/LargeTextAndImage'));
export function componentSwitch(block) {
  switch (block.__component) {
    case 'blocks.full-page-block':
      return <FullPageCenteredBlock content={block} />;
    case 'blocks.banner-image-and-text':
      return <BannerImageText content={block} />;
    case 'blocks.large-text-and-image':
      return <DynamicLargeTextAndImageBlock content={block} />;
    case 'blocks.coloured-block':
      return <ColouredBlock content={block} />;
    case 'blocks.full-width':
      return <FullWidthBlock content={block} />;
    case 'blocks.call-to-action-block':
      return <CallToActionBlock content={block} />;
    case 'blocks.feature-block-title-and-text':
      return <FeatureBlockTitleAndText content={block} />;
    case 'blocks.feature-block-image-text':
      return <FeatureBlockImageTextOnly content={block} />;
    case 'blocks.stats-block':
      return <StatBlock content={block} />;
    case 'blocks.text-and-media':
      return <TextAndMedia content={block} />;
    default:
      return <p>This block cannot be added</p>;
  }
}
