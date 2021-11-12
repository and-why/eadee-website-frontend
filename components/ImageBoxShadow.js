import Image from 'next/image';
import styled from 'styled-components';

export default function ImageBoxShadow({ image }) {
  return (
    <ImageContainer>
      <Image
        src={`${
          process.env.NODE_ENV === 'production' ? image.url : `http://localhost:1337${image.url}`
        }`}
        alt={image.alternativeText}
        height='600px'
        width='900px'
        objectFit='cover'
        objectPosition='center'
        quality={100}
      />
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
  span {
    overflow: visible !important;
    transition: all 0.25s ease;
    &:hover {
      transition: all 0.25s ease;
      transform: translateY(-4px);
    }
  }
  img {
    border-radius: var(--m);
    box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.05);
    transition: all 0.25s ease;
    overflow: hidden;
    &:hover {
      transition: all 0.25s ease;
      box-shadow: 0 10px 80px -10px rgba(0, 0, 0, 0.05);
    }
  }
  @media (min-width: 700px) {
    width: 100%;
    align-items: center;
  }
`;