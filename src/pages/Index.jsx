// Online Betting Website Page Component
import { Box, Flex, Heading, Text, Button, Input, Image, VStack, HStack, Link } from "@chakra-ui/react";
import { FaArrowRight, FaMoneyBillWave, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="xl">
          BetMaster
        </Heading>
        <Image src="https://images.unsplash.com/photo-1641310724581-48c5c81b9a76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZXR0aW5nJTIwbG9nb3xlbnwwfHx8fDE3MTMzNjEyNTV8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="50px" />
      </Flex>
      <Text fontSize="lg" mt={2}>
        Your ultimate destination for online betting. Based on the latest odds from Bovada.
      </Text>

      <VStack spacing={4} mt={10}>
        <HStack width="100%" justifyContent="space-between">
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading size="md">Football</Heading>
            <Text mt={2}>Bet on your favorite teams!</Text>
            <Button rightIcon={<FaArrowRight />} colorScheme="teal" mt={4}>
              Place Bet
            </Button>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading size="md">Basketball</Heading>
            <Text mt={2}>Experience the thrill of the game!</Text>
            <Button rightIcon={<FaArrowRight />} colorScheme="teal" mt={4}>
              Place Bet
            </Button>
          </Box>
        </HStack>

        <HStack width="100%" justifyContent="space-between">
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading size="md">Baseball</Heading>
            <Text mt={2}>Hit a home run with your bets!</Text>
            <Button rightIcon={<FaArrowRight />} colorScheme="teal" mt={4}>
              Place Bet
            </Button>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading size="md">Soccer</Heading>
            <Text mt={2}>Score big by betting on soccer!</Text>
            <Button rightIcon={<FaArrowRight />} colorScheme="teal" mt={4}>
              Place Bet
            </Button>
          </Box>
        </HStack>
      </VStack>

      <Flex alignItems="center" justifyContent="center" mt={10}>
        <Link href="https://www.bovada.com" isExternal>
          <Button rightIcon={<FaChartLine />} colorScheme="blue">
            View Full Odds
          </Button>
        </Link>
      </Flex>

      <Flex justifyContent="space-between" alignItems="center" mt={10}>
        <Text fontSize="sm">© 2023 BetMaster. All rights reserved.</Text>
        <Button leftIcon={<FaMoneyBillWave />} colorScheme="green">
          Deposit Funds
        </Button>
      </Flex>
    </Box>
  );
};

export default Index;
