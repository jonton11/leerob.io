import React from 'react';
import NextLink from 'next/link';
import { Flex, Link, IconButton } from '@chakra-ui/core';

import NowPlaying from './NowPlaying';

const Footer = () => (
  <Flex align="center" mb={4} direction="column">
    <NowPlaying />
    <div>
      <Link href="https://twitter.com/Jwnathan_W" title="Twitter" isExternal>
        <IconButton
          aria-label="Twitter"
          icon="twitter"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="https://github.com/jonton11" title="GitHub" isExternal>
        <IconButton
          aria-label="GitHub"
          icon="github"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/jwnathan"
        title="LinkedIn"
        isExternal
      >
        <IconButton
          aria-label="LinkedIn"
          icon="linkedin"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      {/* <Link
        href="https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw"
        title="YouTube"
        isExternal
      >
        <IconButton
          aria-label="YouTube"
          icon="youtube"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link> */}
      <Link href="mailto:jonathan.jkw.wong@gmail.com" title="Email" isExternal>
        <IconButton
          aria-label="Email"
          icon="mail"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
    </div>
    <div>
      <NextLink href="/tools" passHref>
        <Link
          fontSize="sm"
          color="gray.500"
          minWidth="100px"
          mr={2}
          title="tools"
        >
          /tools
        </Link>
      </NextLink>
      <Link
        fontSize="sm"
        color="gray.500"
        minWidth="100px"
        mr={2}
        href="https://www.instagram.com/jonton/"
        title="Photos"
        isExternal
      >
        /photos
      </Link>
      {/* <NextLink href="/newsletter" passHref>
        <Link
          fontSize="sm"
          color="gray.500"
          minWidth="100px"
          mr={2}
          title="Newsletter"
        >
          /newsletter
        </Link>
      </NextLink> */}
    </div>
  </Flex>
);

export default Footer;
