import { Menu, MenuButton, MenuList, MenuItem,} from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import {useState} from 'react'
import {Flex} from '@chakra-ui/react'

function WomenFashion() {

    const [menuOpen, setMenuOpen] = useState(false);
    
    const handleMenuHover = (isOpen) => {
        setMenuOpen(isOpen);
      };
    
    return (
        <div
        onMouseEnter={() => handleMenuHover(true)}
        onMouseLeave={() => handleMenuHover(false)} 
        >
            <Menu isOpen={menuOpen}>
                <MenuButton style={{fontSize:"15px",margin:"1px",padding:"12px,10px",fontFamily:"sans-serif",color:"#ffffff",fontWeight:"bold"}}
                as={IconButton}
                aria-label="User"
                colorScheme="teal"
                variant="ghost">
                Women Fashion
                </MenuButton>
                {menuOpen && (
                    <MenuList>
                        <Flex style={{gap:"50px",marginLeft:"10px",marginTop:"10px"}}>
                       {/* Women Fashions*/}
                       <MenuList>Women Fashions
                   <MenuItem>Lehenga</MenuItem>
                   <MenuItem>Sarees</MenuItem>
                   <MenuItem>Kurtis</MenuItem>
                   <MenuItem>Salwar Kameez</MenuItem>
                   <MenuItem>Gowns</MenuItem>
                       </MenuList>
                        </Flex>
                    </MenuList>
                )}
                </Menu>
        </div>
    )
        
}


export default WomenFashion