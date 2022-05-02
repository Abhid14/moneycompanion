import Head from 'next/head'

import {
  Box,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Flex,
  Progress,
  Button,
  Center,
  ButtonGroup,
  Spacer,
  Tag,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
export default function HomePage() {
  return (
    <Box
    //bg={useColorModeValue('blue.100', 'gray.900')}
    //color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Head>
        <title>Money Companion | Savings made simple</title>
        <meta name="description" content="Savings made simple with Money Comapnion. Start saving today!" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <Box zIndex={300} top={0} position="fixed" backgroundColor="rgba(255, 
 255, 255, 0.8)" backdropFilter="saturate(160%) blur(3px)"
        w="100%">
        <Flex mx={4} my={2} minWidth='max-content' justifyContent="space-between" alignItems='center'>

          <Image src='/mcbanner.png' h={[12, 14]} />

          <ButtonGroup colorScheme={"yellow"} size="lg" gap='1'>
            <Button>Sign Up</Button>
            <Button>Log in</Button>
          </ButtonGroup>
        </Flex>
      </Box>
      <Box mb={-6} bgGradient='linear(to-r, gray.200, yellow.100, orange.100)'>
        <Flex h="620px" alignItems="center" justifyContent="center">
          <Flex mt="70px" gap={8} alignItems="flex-start" flexDirection="column">
            <Text
              textAlign="left"
              fontWeight="bold"
              lineHeight="none"
              fontSize="7xl"
              overflow="visible"
              width="670px"
            >
              Managing money, made simple
            </Text>
            <Button colorScheme={"yellow"} size="lg">
              Sign up for free
            </Button>
            <Text fontSize="2xl" fontWeight="bold">#SaveWithYelowMoneyCompanion</Text>
            <Text fontSize="2xl" fontWeight="bold">Available on:</Text>
            <Image mt={-8} src='./mappstore.png'></Image>
          </Flex>
          <Image
            src="https://3000-abhid14-moneycompanion-7uc321mzspz.ws-us43.gitpod.io/coins.png"
            maxHeight="250px"
          />
        </Flex>
      </Box>
      <Center zIndex={5}><Button borderRadius="full" size={"lg"} fontSize={"2xl"} colorScheme={"yellow"}>Scroll to see how we can help you save money</Button></Center>
      <Box mt={-6} mb={-6} bgGradient='linear(to-r,gray.100, blue.100)'>
        <Flex h="680px" gap={10} flexDirection={"column"} alignItems="center" justifyContent="center">
          <Text maxW={1000} textAlign="center" lineHeight="none"
            fontSize="6xl"
            overflow="visible" fontWeight="bold">
            Track budget, create goals and more features packed in one place!
          </Text>
          <Box boxSize="300px"><video src="./fbudget.mp4" autoPlay loop muted></video></Box>
          <Button colorScheme={"yellow"} size="lg">
            Sign up for free
          </Button>
        </Flex>
      </Box>

      <Center zIndex={5}><Button borderRadius="full" size={"lg"} fontSize={"2xl"} colorScheme={"yellow"}>Save even more 💲 with Yelow Pay</Button></Center>
      <Box mt={-6} bgGradient='linear(to-r,gray.100, red.100)'>
        <Flex h="700px" gap={10} flexDirection={"column"} alignItems="center" justifyContent="center">
          <Text maxW={1000} textAlign="center" lineHeight="none"
            fontSize="6xl"
            overflow="visible" fontWeight="bold">
            The Dynamic Duo
            Of Rewards
            & Convenience
          </Text>
          <Image h={300} src='https://www.yelow.club/Assets/hero.png' />
          <Button colorScheme={"yellow"} size="lg">
            Download Now
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}