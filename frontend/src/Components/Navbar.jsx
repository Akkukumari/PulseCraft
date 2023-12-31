// 'use client'

// import {
//   Box,
//   Flex,
//   Text,
//   IconButton,
//   Button,
//   Stack,
//   Collapse,
//   Icon,
//   Image,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   useColorModeValue,
//   useBreakpointValue,
//   useDisclosure,
// } from '@chakra-ui/react'

// import {
//   HamburgerIcon,
//   CloseIcon,
//   ChevronDownIcon,
//   ChevronRightIcon,
// } from '@chakra-ui/icons'

// import { Link as RouterLink } from "react-router-dom";


// export default function Navbar() {
//   const { isOpen, onToggle } = useDisclosure()

//   return (
//     <>
  
//     <Box  backgroundColor={"white"}>
//       <Flex 
//        color={useColorModeValue('black.800', 'black')}
//         minH={'85px'}
//         py={{ base: 2 }}
//         px={{ base: 4 }}
//         borderBottom={1}
//         borderStyle={'solid'}
//         borderColor={useColorModeValue('white', 'white')}
//         align={'center'}>
//         <Flex 
//           flex={{ base: 1, md: 'auto' }}
//           ml={{ base: -2 }}
//           display={{ base: 'flex', md: 'none' }}>
//           <IconButton
//             onClick={onToggle}
//             icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
//             variant={'ghost'}
//             aria-label={'Toggle Navigation'}
//           />
//         </Flex>
//         <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} >
          
// {/* <Image src="assets/Images/logo.png"/> */}


//           <Flex display={{ base: 'none', md: 'flex' }} ml={10} >
//             <DesktopNav />
//           </Flex>
//         </Flex>

//         <Stack
//           flex={{ base: 1, md: 0 }}
//           justify={'flex-end'}
//           direction={'row'}
//           spacing={6}>
//              <RouterLink to="">
//                   <Button
//             as={'a'}
//             display={{ base: 'none', md: 'inline-flex' }}
//             fontSize={'sm'}
//             fontWeight={600}
//             color={'white'}
//             // bg={'pink.400'}
//             bg={'red'}
//             w={"100px"}
//             href={'#'}
//             _hover={{
//               bg: 'grey.800',
//             }}>
//            Connect
//           </Button>
//           </RouterLink>
//         </Stack>
//       </Flex>

//       <Collapse in={isOpen} animateOpacity>
//         <MobileNav />
//       </Collapse>
//     </Box>
//     </>
//   )
// }

// const DesktopNav = () => {
//   const linkColor = useColorModeValue('black.000', 'black.200')
//   const linkHoverColor = useColorModeValue('gray.800', 'white')
//   const popoverContentBgColor = useColorModeValue('white', 'white')

//   return (<>
//     <Stack direction={'row'} spacing={4}>
//       {NAV_ITEMS.map((navItem) => (
//         <Box key={navItem.label}>
//           <Popover trigger={'hover'} placement={'bottom-start'}>
//             <PopoverTrigger>
//               <Box
//                 as="a"
//                 p={2}
//                 href={navItem.href ?? '#'}
//                 // fontSize={'sm'}
//                 fontSize={'18px'}
//                 fontWeight={500}
//                 color={linkColor}
//                 _hover={{
//                   textDecoration: 'none',
//                   color: linkHoverColor,
//                 }}>
//                 {navItem.label}
//               </Box>
//             </PopoverTrigger>

//             {navItem.children && (
//               <PopoverContent
//                 border={0}
//                 boxShadow={'xl'}
//                 bg={popoverContentBgColor}
//                 p={4}
//                 rounded={'xl'}
//                 minW={'sm'}>
//                 <Stack>
//                   {navItem.children.map((child) => (
//                     <DesktopSubNav key={child.label} {...child} />
//                   ))}
//                 </Stack>
//               </PopoverContent>
//             )}
//           </Popover>
//         </Box>
//       ))}
//     </Stack>
//     </>
//   )
// }

// const DesktopSubNav = ({ label, href, subLabel }) => {
//   return (
//     <Box 
//       as="a"
//       href={href}
//       role={'group'}
//       display={'block'}
//       p={2}
//       rounded={'md'}
//       _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
//       <Stack direction={'row'} align={'center'} border={"10px solid red"}>
//         <Box >
//           <Text
//             transition={'all .3s ease'}
//             _groupHover={{ color: 'pink.400' }}
//             fontWeight={500}>
//             {label}
//           </Text>
//           <Text fontSize={'sm'}>{subLabel}</Text>
//         </Box>
//         <Flex
//           transition={'all .3s ease'}
//           transform={'translateX(-10px)'}
//           opacity={0}
//           _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
//           justify={'flex-end'}
//           align={'center'}
//           flex={1}>
//           <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
//         </Flex>
//       </Stack>
//     </Box>
//   )
// }

// const MobileNav = () => {
//   return (
//     <Stack bg={useColorModeValue('white', 'white')} p={4} display={{ md: 'none' }} >
//       {NAV_ITEMS.map((navItem) => (
//         <MobileNavItem key={navItem.label} {...navItem} />
//       ))}
//     </Stack>
//   )
// }

// const MobileNavItem = ({ label, children, href }) => {
//   const { isOpen, onToggle } = useDisclosure()

//   return (
//     <Stack spacing={4} onClick={children && onToggle}>
//       <Box 
//         py={2}
//         as="a"
//         href={href ?? '#'}
//         justifyContent="space-between"
//         alignItems="center"
//         _hover={{
//           textDecoration: 'none',
//         }}>
//         <Text fontWeight={800} color={useColorModeValue('gray.600', 'gray.200')}>
//           {label}
//         </Text>
//         {children && (
//           <Icon
//             as={ChevronDownIcon}
//             transition={'all .25s ease-in-out'}
//             transform={isOpen ? 'rotate(180deg)' : ''}
//             w={6}
//             h={6}
//           />
//         )}
//       </Box>

//       <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
//         <Stack
//           mt={2}
//           pl={4}
//           borderLeft={1}
//           borderStyle={'solid'} 
//           borderColor={useColorModeValue('black.1200', 'black.1700')}
//           align={'start'}>
//           {children &&
//             children.map((child) => (
//               <Box as="a" key={child.label} py={2} href={child.href}>
//                {child.label}
//               </Box>
//             ))}
//         </Stack>
//       </Collapse>
//     </Stack>
//   )
// }


// const NAV_ITEMS  = [
//   {
//     label: 'Logo',
//   },
//   {
//     label: 'Home',
//   },
//   {
//     label: 'Event ',
//     href: '#',
//   },
//   {
//     label: 'Schedule ',
//     href: '',
//   },
// ]

import React from 'react';
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
   <div className='navbody'> 
   <div className='navbar'>
    
    <div>Logo</div>

    <div className='rightnavbar'>
    <div className='navright'>
      <div className='righttop'>
       <h5>ABOUT</h5>
       <h5>CAREERS</h5>
       <h5>AWARDS</h5>
       <h5>LEADERSHIP</h5>
       <h5>LOCATIONS</h5>
       <h5>NEWSROOM</h5>
      </div>
      </div>

      <div className='navright1'>
      <div className='rightdown'>
       <h5>STRATEGY</h5>
       <h5>TECHNOLOGY</h5>
       <h5>MANAGES SERVICES</h5>
       <h5>INDUSTRIES</h5>
       <h5>PUBLIC SECTOR</h5>
       <h5>INSIGHTS</h5>
       <h5>PARTNERS</h5>
       <button className='btn'>CONNECT</button>
      </div>
      </div>
   
    </div>

    
   </div>
   </div>
    </>
  )
}
