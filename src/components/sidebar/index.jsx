import React from 'react';
import { Box, Flex, VStack, Text, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react';
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings } from 'react-icons/fi';

const LinkItems = [
  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
];

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg="gray.100">
      <SidebarContent onClose={onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg="white"
      borderRight="1px"
      borderRightColor="gray.200"
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{ bg: 'cyan.400', color: 'white' }}
      {...rest}
    >
      {icon && <Icon as={icon} mr="4" />}
      {children}
    </Flex>
  );
};

export default SidebarWithHeader;
