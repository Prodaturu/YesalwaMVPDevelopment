import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillPlusSquare } from 'react-icons/ai';
import { Container, Flex, HStack, Button } from '@chakra-ui/react';
import { useColorMode, useColorModeValue } from '../components/ui/color-mode';
import { Image } from '@chakra-ui/react';
import YesalwaLogo from '../assets/YesalwaLogo.png';

const Navbar = () => {
  // Use Chakra UI's color mode hook
  const { colorMode, toggleColorMode } = useColorMode();

  // Define transparent silver shade for the Navbar background
  const navbarBg = useColorModeValue('rgba(192, 192, 192, 0.1)', 'rgba(192, 192, 192, 0.2)'); // Silver shade with slight transparency
  const iconColor = useColorModeValue('black', 'white'); // Icon color depending on color mode

  return (
    <Container
      className="navbarContainer"
      maxW="90vw"
      height="3.5vw"
      px={4}
      bg={navbarBg} // Slight silver-transparent background
      position="fixed"
      top="2vh"
      left="50%"
      transform="translateX(-50%)"
      zIndex="1000"
      borderRadius="md"
      boxShadow="lg" // Add a slight shadow for better visibility if needed
    >
      <Flex h="100%" alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <Link to={"/home"}>
          <Image alt="Logo" src={YesalwaLogo} height="2vw" />
        </Link>

        {/* Right side of the Navbar */}
        <HStack spacing={2} alignItems="center">
          {/* Link Button */}
          <Link to="/questionnaire">
            <Button bg="transparent" _hover={{ bg: 'rgba(255, 255, 255, 0)' }}>
              <AiFillPlusSquare fontSize={20} color={iconColor} />
            </Button>
          </Link>

          {/* Color Mode Toggle */}
          <Button
            onClick={toggleColorMode}
            bg="transparent"
            _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
          >
            {colorMode === 'dark' ? '🌛' : '🌞'}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
