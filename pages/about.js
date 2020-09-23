import React from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  Icon
} from '@chakra-ui/core';

import Container from '../components/Container';
import { CustomLink } from '../components/MDXComponents';

const url = 'https://jonton.dev/about';
const title = 'About Me – Lee Robinson';

const About = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              About Me
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Hey, I’m Jonathan. I'm a web developer
              &nbsp;I work at <CustomLink href="https://www.codecast.io/hello_world">CodeCast.io</CustomLink> as a Web Developer.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              This site was built off of the original design by <CustomLink href="https://leerob.io/">Lee Robinson</CustomLink>.
              All credit for this platform goes to his work - you can <CustomLink href="https://github.com/leerob/leerob.io">check out the original repository here.</CustomLink>
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              {/* TODO */}
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              {/* TODO */}
            </Text>
            {/* TODO <Heading size="md" as="h3" mb={2} fontWeight="medium">
              <Link
                display="flex"
                href="/recruiting-engineers-talent42-lee-robinson.pdf"
                isExternal
              >
                <Flex align="center">
                  Recruiting Engineers (From An Engineer's Perspective)
                  <Icon name="external-link" mx={2} size="16px" />
                </Flex>
              </Link>
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={8}>
              Hiring talent is becoming increasingly difficult with low
              unemployment rates and the tech industry booming. What you can do
              to stick out? Learn from an engineer who's been involved on both
              sides - both as a candidate and with hiring - on what candidates
              really want out of a position.
            </Text> */}
            {/* <iframe
              height="280"
              src="https://www.google.com/maps/d/embed?mid=1QOGi-u8d4vwoQ4vC4zQjKxrSfsDIQdOK&hl=en"
              title="Jonathan's Travel Map"
              width="100%"
            /> */}
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
