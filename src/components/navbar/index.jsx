
//  import { useSelector } from 'react-redux';
// import { useAuth0 } from '@auth0/auth0-react';
// import {
//   IconButton,
//   Avatar,
//   Box,
//   Flex,
//   HStack,
//   VStack,
//   Icon,
//   Text,
//   Drawer,
//   DrawerContent,
//   useDisclosure,
//   Menu,
//   MenuButton,
//   MenuDivider,
//   MenuItem,
//   MenuList,
//   Button,
//   useColorMode,
//   useColorModeValue,
//   CloseButton
// } from '@chakra-ui/react';
// import { FiMenu, FiChevronDown, FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings, FiMoon, FiSun } from 'react-icons/fi';
// import { Link } from 'react-router-dom';

// const LinkItems = [
//   { name: 'Home', icon: FiHome },
//   { name: 'Trending', icon: FiTrendingUp },
//   { name: 'Explore', icon: FiCompass },
//   { name: 'Favorites', icon: FiStar },
//   { name: 'Settings', icon: FiSettings },
// ];

// const SidebarContent = ({ onClose, ...rest }) => {
//   const { isAuthenticated, isLoading, user } = useSelector((state) => state.auth);
//   const { loginWithRedirect, logout } = useAuth0();

//   const userName = user?.name || 'User';

//   return (
//     <Box
//       transition="3s ease"
//       bg={useColorModeValue('white', 'gray.900')}
//       borderRight="1px"
//       borderRightColor={useColorModeValue('gray.200', 'gray.700')}
//       w={{ base: 'full', md: 60 }}
//       pos="fixed"
//       h="full"
//       {...rest}
//     >
//       <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
//         <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
//           Logo
//         </Text>
//         <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
//       </Flex>
//       {LinkItems.map((link) => (
//         <NavItem key={link.name} icon={link.icon}>
//           <Link to={`/${link.name.toLowerCase()}`}>{link.name}</Link>
//         </NavItem>
//       ))}
//       <Box p="4" borderTopWidth="1px" borderTopColor={useColorModeValue('gray.200', 'gray.700')}>
//         {!isLoading && !isAuthenticated && (
//           <Button onClick={() => loginWithRedirect()} colorScheme="teal" w="full">
//             Register/Log In
//           </Button>
//         )}
//         {isAuthenticated && (
//           <Flex alignItems={'center'} mt={4}>
//             <Menu>
//               <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
//                 <HStack>
//                   <Avatar
//                     size={'sm'}
//                     name={userName}  // Use user's name to display initials
//                   />
//                   <VStack
//                     display={{ base: 'none', md: 'flex' }}
//                     alignItems="flex-start"
//                     spacing="1px"
//                     ml="2"
//                   >
//                     <Text fontSize="sm">{userName}</Text>
//                   </VStack>
//                   <Box display={{ base: 'none', md: 'flex' }}>
//                     <FiChevronDown />
//                   </Box>
//                 </HStack>
//               </MenuButton>
//               <MenuList
//                 bg={useColorModeValue('gray.200', 'gray.900')}
//                 borderColor={useColorModeValue('gray.200', 'gray.700')}
//               >
//                 <MenuItem>Profile</MenuItem>
//                 <MenuItem>Settings</MenuItem>
//                 <MenuDivider />
//                 <MenuItem onClick={() => logout({ returnTo: import.meta.env.VITE_RETURN_URL })}>
//                   Sign out
//                 </MenuItem>
//               </MenuList>
//             </Menu>
//           </Flex>
//         )}
//       </Box>
//     </Box>
//   );
// };

// const NavItem = ({ icon, children, href, ...rest }) => (
//   <Box
//     as="a"
//     href={href}
//     style={{ textDecoration: 'none' }}
//     _focus={{ boxShadow: 'none' }}
//   >
//     <Flex
//       align="center"
//       p="4"
//       mx="4"
//       borderRadius="lg"
//       role="group"
//       cursor="pointer"
//       _hover={{
//         bg: 'cyan.400',
//         color: 'white',
//       }}
//       {...rest}
//     >
//       {icon && (
//         <Icon
//           mr="4"
//           fontSize="16"
//           _groupHover={{
//             color: 'white',
//           }}
//           as={icon}
//         />
//       )}
//       {children}
//     </Flex>
//   </Box>
// );

// const MobileNav = ({ onOpen }) => {
//   const { colorMode, toggleColorMode } = useColorMode();

//   return (
//     <Flex
//       ml={{ base: 0, md: 60 }}
//       px={{ base: 4, md: 4 }}
//       height="20"
//       alignItems="center"
//       bg={useColorModeValue('white', 'gray.900')}
//       borderBottomWidth="1px"
//       borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
//       justifyContent={{ base: 'space-between', md: 'flex-end' }}
//     >
//       <IconButton
//         display={{ base: 'flex', md: 'none' }}
//         onClick={onOpen}
//         variant="outline"
//         aria-label="open menu"
//         icon={<FiMenu />}
//       />
//       <Text
//         display={{ base: 'flex', md: 'none' }}
//         fontSize="2xl"
//         fontFamily="monospace"
//         fontWeight="bold"
//       >
//         Logo
//       </Text>
//       <HStack spacing={{ base: '0', md: '6' }}>
//         <IconButton
//           aria-label="Toggle dark mode"
//           icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
//           onClick={toggleColorMode}
//         />
//       </HStack>
//     </Flex>
//   );
// };

// const Navbar = () => {
//   const { isAuthenticated, isLoading } = useSelector((state) => state.auth);
//   const { loginWithRedirect } = useAuth0();
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
//       <SidebarContent onClose={onClose} display={{ base: 'none', md: 'block' }} />
//       <Drawer
//         isOpen={isOpen}
//         placement="left"
//         onClose={onClose}
//         returnFocusOnClose={false}
//         onOverlayClick={onClose}
//         size="full"
//       >
//         <DrawerContent>
//           <SidebarContent onClose={onClose} />
//         </DrawerContent>
//       </Drawer>
//       <MobileNav onOpen={onOpen} />
//       <Box ml={{ base: 0, md: 60 }} p="4">
//         {/* Other content can be placed here */}
//       </Box>
//     </Box>
//   );
// };

// export default Navbar;


//...........................//

import React from 'react';
import { useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
  useColorMode,
  useColorModeValue,
  CloseButton
} from '@chakra-ui/react';
import { FiMenu, FiChevronDown, FiMoon, FiSun } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImage from '../image/Logo1.svg'; // Replace with the correct path to your PNG file
import HomeIcon from '../image/Home.svg'; // Replace with the correct path to your SVG files
import ContactIcon from '../image/Contact.svg';
import MailIcon from '../image/Mail.svg';
import MenuIcon from '../image/Menu.svg';
import Telegram from '../image/Telegram.svg';
import BoxIcon from '../image/Box.svg';
import GraphIcon from '../image/Graph.svg';

const LinkItems = [
  { name: '', icon: HomeIcon },
  { name: '', icon: ContactIcon },
  { name: '', icon: MailIcon },
  { name: '', icon: Telegram },
  { name: '', icon: MenuIcon },
  { name: '', icon: BoxIcon },
  { name: '', icon: GraphIcon }
];

const SidebarContent = ({ onClose, ...rest }) => {
  const { isAuthenticated, isLoading, user } = useSelector((state) => state.auth);
  const { loginWithRedirect, logout } = useAuth0();

  const userName = user?.name || 'User';

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 40 }} // Decreased width
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" justifyContent="center">
        <img src={logoImage} alt="Logo" style={{ maxHeight: '40px' }} /> {/* Logo image */}
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.icon}>
          <Link to={`/${link.name.toLowerCase()}`}>
            <img src={link.icon} alt={`${link.name} icon`} style={{ width: '24px' }} />
            {link.name}
          </Link>
        </NavItem>
      ))}
      <Box p="4" borderTopWidth="1px" borderTopColor={useColorModeValue('gray.200', 'gray.700')}>
        {!isLoading && !isAuthenticated && (
          <Button onClick={() => loginWithRedirect()} colorScheme="teal" w="full">
            Register/Log In
          </Button>
        )}
        {isAuthenticated && (
          <Flex alignItems={'center'} mt={4}>
            <Menu>
              <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                <HStack>
                  <Avatar
                    size={'sm'}
                    name={userName} // Display initials if no profile picture
                  />
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">{userName}</Text>
                  </VStack>
                  <Box display={{ base: 'none', md: 'flex' }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue('gray.200', 'gray.900')}
                borderColor={useColorModeValue('gray.200', 'gray.700')}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuDivider />
                <MenuItem onClick={() => logout({ returnTo: import.meta.env.VITE_RETURN_URL })}>
                  Sign out
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        )}
      </Box>
    </Box>
  );
};

const NavItem = ({ icon, children, href, ...rest }) => (
  <Box
    as="a"
    href={href}
    style={{ textDecoration: 'none' }}
    _focus={{ boxShadow: 'none' }}
  >
    <Flex
      align="center"
      justifyContent="center" // Center the icons
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: 'cyan.400',
        color: 'white',
      }}
      {...rest}
    >
      {icon && (
        <img
          src={icon}
          alt="icon"
          style={{ 
            width: '28px',
            height: '28px',
            padding: '2.5px 2px 1.5px 2px',
            borderRadius: '4px 0px 0px 0px',
            opacity: 1 // Changed from 0px to 1 for visibility
          }}
        />
      )}
      {children}
    </Flex>
  </Box>
);


const MobileNav = ({ onOpen }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      ml={{ base: 0, md: 40 }} // Match the sidebar width
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
       <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
          onClick={toggleColorMode}
        />
      </HStack>
    </Flex>
  );
};

const Navbar = () => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth);
  const { loginWithRedirect } = useAuth0();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 40 }} p="4"> {/* Adjust margin-left to match sidebar */}
        {/* Other content can be placed here */}
      </Box>
    </Box>
  );
};

export default Navbar;

