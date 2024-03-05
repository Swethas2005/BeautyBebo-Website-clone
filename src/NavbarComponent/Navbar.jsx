import { useState } from 'react';
import { Flex, Input, IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { SearchIcon, StarIcon , LockIcon} from '@chakra-ui/icons'; 
import { Image } from '@chakra-ui/react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartMenuToggle = () => {
    setIsCartMenuOpen(!isCartMenuOpen);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="#ffffff"
      color="grey"
    >
      {/* Logo */}
      <Image style={{width:"242px",height:"54px",padding:"0,15px",marginLeft:"23px"}} src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png" alt="logo" />

        <Flex align="center">
        <Menu >
       <MenuButton 
          as={IconButton}
          aria-label="Categories"
          colorScheme="grey"
          width={"245px"}
          height={"40px"}
          borderRadius={"5px"}
          margin={"3px"}
          fontSize={"12px"}
          fontFamily={"sans-serif"}
          padding={"15px"}
          onClick={handleMenuToggle}
          bg={"#ffffff"}
          marginLeft={"2px"}
          boxShadow={"0 1px 4px rgba(0, 0, 0, 0.1)"}
          
        >
          <h4 style={{color:"#AAAAAA",fontWeight:"medium",fontSize:"14px"}}>All Categories</h4>
        </MenuButton>
        <MenuList >
          {/* Add your menu items here */}
          <MenuItem>Makeup</MenuItem>
          <MenuItem>Face</MenuItem>
          <MenuItem>Foundation</MenuItem>
          <MenuItem>Blush</MenuItem>
          <MenuItem>Highlighters</MenuItem>
          <MenuItem>Concealer</MenuItem>
          <MenuItem>Compact Powder</MenuItem>
          <MenuItem>Face Primer</MenuItem>
          <MenuItem>Makeup Brush</MenuItem>
          <MenuItem>Makeup Powder</MenuItem>
          <MenuItem> Makeup Remover</MenuItem>
          <MenuItem>CC Cream</MenuItem>
          <MenuItem>Eye</MenuItem>
          <MenuItem>Eye Liner</MenuItem>
          <MenuItem>Eye Shadow</MenuItem>
          <MenuItem>Eye Primer</MenuItem>
          <MenuItem> Eye Contour</MenuItem>
          <MenuItem>kajal</MenuItem>
          <MenuItem>maskara</MenuItem>
          <MenuItem>Eye Lash</MenuItem>
          <MenuItem>False lashes</MenuItem>
          <MenuItem>Eye Concealer</MenuItem>
          <MenuItem>Lips</MenuItem>
          <MenuItem>Lipstick</MenuItem>
          <MenuItem>Lip balm</MenuItem>
          <MenuItem>Lip gloss</MenuItem>
          <MenuItem>Lip pen</MenuItem>
          <MenuItem>Lip liner</MenuItem>
          <MenuItem>Brushes</MenuItem>
          <MenuItem>Makeup Tools</MenuItem>
          {/* Add more items as needed */}
        </MenuList>
       </Menu>
       <Flex align="center" marginRight="50px">
         {/* Search Bar */}
      <Input
        placeholder="Enter you search...."
        color="grey"
        size="15px"
        width="290px"
        height={"40px"}
        marginRight={"260px"}
        borderRadius={"5px"}
        boxShadow={"0 1px 4px rgba(0, 0, 0, 0.1)"}
      />

      {/* Search Button */}
      <IconButton
        aria-label="Search"
        icon={<SearchIcon />}
        color={"#ffffff"}
        width={"53px"}
        height={"40px"}
        bg={"#dd0285"}
        borderRadius={"5px"}
        marginLeft={"-260px"}
      />
       </Flex>
        </Flex>

      {/* Wishlist Button */}
      <IconButton
        aria-label="Wishlist"
        icon={<StarIcon />}
        marginRight={"+40px"}
        backgroundColor={"#ffffff"}
      />

          {/* My Cart Button */}
          <Menu>
          <p style={{color:"#000000",marginRight:"30px",fontWeight:"medium",fontSize:"14px"}}>My Account</p>
          <MenuButton
           as={IconButton}
           aria-label="My Cart"
           icon={<LockIcon />}
           colorScheme="grey"
           color={"#000000"}
           onClick={handleCartMenuToggle}
           marginLeft={"-80px"}>

          </MenuButton>

        {isCartMenuOpen && (
          <MenuList>
            {/* Cart options */}
            <a href='https://www.beautybebo.com/customer/account/login/'>
            <MenuItem>Login</MenuItem>
            </a>
            <MenuItem>Register</MenuItem>
          </MenuList>
        )}
      </Menu>
    </Flex>
  );
};

export default Navbar;
