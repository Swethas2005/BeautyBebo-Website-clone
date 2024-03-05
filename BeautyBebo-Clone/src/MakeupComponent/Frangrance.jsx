import { Menu, MenuButton, MenuList, MenuItem,} from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import {useState} from 'react'
import {Flex} from '@chakra-ui/react'

function Frangrance() {

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
                varient="ghost" 
                colorScheme="#dd0285">
                Frangrance
                </MenuButton>
                {menuOpen && (
                    <MenuList>
                        <Flex>
                       {/* frangrance*/}
                       <MenuList>Frangrances
                    <MenuItem>Perfumes</MenuItem>
                    <MenuItem>Deodorants roll ons</MenuItem>
                    <MenuItem>Body Mist/Spray</MenuItem>
                       </MenuList>
                        </Flex>
                    </MenuList>
                )}
                </Menu>
        </div>
    )
        
}


export default Frangrance