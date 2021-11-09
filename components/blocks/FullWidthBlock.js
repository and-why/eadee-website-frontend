import { server } from 'config';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Container } from '../styled-components/Container';
import { Section } from '../styled-components/Section';
import Image from 'next/image';

// {
//   "__component": "blocks.full-width",
//   "id": 1,
//   "title": "Here is a full width Column",
//   "content": "## The standard Lorem Ipsum passage, used since the 1500s\nSection 1.10.32 of \"de Finibus Bonorum et Malorum\", written by Cicero in 45 BC\n\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"\n\n##1914 translation by H. Rackham\n\"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?\"\n\n"
// }

export const FullWidthBlock = ({ content }) => {
  console.log('full', content);
  return (
    <Section>
      <Container>
        <FullWidthBlockContainer>
          <TextBlock>
            <h2>{content.title}</h2>
            <ReactMarkdown>{content.content}</ReactMarkdown>
          </TextBlock>
          <ImageBlock>
            <Image
              src={`${process.NODE_ENV ? server : ''}${content.image.url}`}
              alt={content.image.alternativeText}
              width='1290px'
              height='800px'
              objectFit='contain'
            />
          </ImageBlock>
        </FullWidthBlockContainer>
      </Container>
    </Section>
  );
};

const FullWidthBlockContainer = styled.div`
  max-width: 900px;
  margin: auto;
  img {
    width: 100%;
  }
  h2 {
    margin: 0 0 1em 0;
  }
`;

const TextBlock = styled.div`
  padding: var(--l) 0;
`;
const ImageBlock = styled.div`
  padding: var(--l) 0;
`;