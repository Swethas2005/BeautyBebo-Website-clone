import { Menu, MenuButton, MenuList, MenuItem,} from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import {useState} from 'react'
import {Flex} from '@chakra-ui/react'

function Hair() {

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
                <MenuButton style={{fontSize:"15px",fontFamily:"sans-serif",margin:"1px",padding:"12px,10px",color:"#ffffff",fontWeight:"bold"}}
                as={IconButton}
                aria-label="User"
                variant="ghost">
                Hair
                </MenuButton>
                {menuOpen && (
                    <MenuList>
                        <Flex style={{gap:"30px",marginLeft:"20px",marginTop:"10px"}}>
                       {/* Hair Care*/}
                       <MenuList>Hair Care
                     <MenuItem>Color Protection</MenuItem>
                     <MenuItem>Dandruff</MenuItem>
                     <MenuItem>Dry Shampoo</MenuItem>
                     <MenuItem>Gels & Waxes</MenuItem>
                     <MenuItem>Hair Spray</MenuItem>
                     <MenuItem>Hair Color /Dye</MenuItem>
                     <MenuItem>Hair Creams & Masks </MenuItem>
                     <MenuItem>Hair Styling</MenuItem>
                     <MenuItem>Hairfall & Thinning </MenuItem>
                     <MenuItem>Straighteners </MenuItem>
                       </MenuList>

                       {/* Hair Loss*/}
                       <MenuList>Hair Loss
                    <MenuItem>Conditioner</MenuItem>
                    <MenuItem>Hair Oil</MenuItem>
                    <MenuItem>Hair Serum</MenuItem>
                    <MenuItem>Hair Growth Solutions</MenuItem>
                    <MenuItem>Shampoo</MenuItem>
                       </MenuList>
                    <img style={{width:"500px",height:"400px",padding:"0,15px",marginLeft:"5px",marginRight:"5px",marginTop:"10px" ,}} src="https://www.beautybebo.com/pub/media/ads/hair_care_1_2.png" alt="Hair-logo" />
                        </Flex>
                    </MenuList>
                )}
                </Menu>
        </div>
    )
        
}


export default Hair