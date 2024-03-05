import { Menu, MenuButton, MenuList, MenuItem,} from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import {useState} from 'react'
import {Flex} from '@chakra-ui/react'
import {Box} from '@chakra-ui/react'

function Makeup() {

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
                <MenuButton style={{fontSize:"15px",fontFamily:"sans-serif",margin:"1px",padding:"12px,10px",color:"#000000",fontWeight:"bold"}}
                as={IconButton}
                aria-label="User"
                colorScheme="teal"
                variant="ghost">
                    <Box style={{display:"flex",gap:"5px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#dd0285"><path d="M640-40q-17 0-28.5-11.5T600-80q0-17 11.5-28.5T640-120h120v-40H640q-17 0-28.5-11.5T600-200q0-17 11.5-28.5T640-240h120v-40H640q-17 0-28.5-11.5T600-320q0-17 11.5-28.5T640-360h120v-40H640q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480h120v-40H640q-17 0-28.5-11.5T600-560q0-17 11.5-28.5T640-600h120v-40H640q-17 0-28.5-11.5T600-680q0-17 11.5-28.5T640-720h160q33 0 56.5 23.5T880-640v520q0 33-23.5 56.5T800-40H640ZM320-360q66 0 113-65t47-155q0-90-47-155t-113-65q-66 0-113 65t-47 155q0 90 47 155t113 65Zm0 320q-48 0-79-35.5T217-159l16-141q-68-33-110.5-108.5T80-580q0-125 70-212.5T320-880q100 0 170 87.5T560-580q0 96-42.5 171.5T407-300l16 141q7 48-24 83.5T320-40Z"/></svg>
                    <p style={{fontSize:"15px",fontFamily:"sans-serif",marginTop:"10px",margin:"1px",padding:"12px,10px",color:"grey",fontWeight:"lighter"}}>Makeup</p>
                    </Box>

                </MenuButton>
                {menuOpen && (
                    <MenuList>
                        <Flex>
                       {/* Face */}
                       <MenuList>Face
                    <MenuItem>BB Cream</MenuItem>
                    <MenuItem>Blush</MenuItem>
                    <MenuItem>Bronzer</MenuItem>
                    <MenuItem>CC Cream</MenuItem>
                    <MenuItem>Contour</MenuItem>
                    <MenuItem>Concealer</MenuItem>
                    <MenuItem>Compact & Powder</MenuItem>
                    <MenuItem>Face Primer</MenuItem>
                    <MenuItem>Foundation</MenuItem>
                    <MenuItem>Highlighters</MenuItem>
                    <MenuItem>Loose Powder</MenuItem>
                    <MenuItem>Makeup Kits</MenuItem>
                    <MenuItem>MAkeup Remover</MenuItem>
                    <MenuItem>Setting Spray</MenuItem>
                    <MenuItem></MenuItem>
                       </MenuList>

                       {/* Eye */}
                       <MenuList>Eye
                    <MenuItem>Contact Lenses</MenuItem>
                    <MenuItem>EyeKit</MenuItem>
                    <MenuItem>Eyeliner</MenuItem>
                    <MenuItem>Eye-Shadow</MenuItem>
                    <MenuItem>Eye-Primer</MenuItem>
                    <MenuItem>Eye-Platters</MenuItem>
                    <MenuItem>Eye Makeup Remover</MenuItem>
                    <MenuItem>Eye Brow Enhancers</MenuItem>
                    <MenuItem>False Eyelashes</MenuItem>
                    <MenuItem>Kajal</MenuItem>
                    <MenuItem>Mascara</MenuItem>
                    <MenuItem>Under Eye Concealer</MenuItem>
                       </MenuList>

                       {/* Lip */}
                       <MenuList>Lips
                   <MenuItem>LipStick</MenuItem>
                   <MenuItem>Lip liner</MenuItem>
                   <MenuItem>Lip Gloss</MenuItem>
                   <MenuItem>Liquid Lipstick</MenuItem>
                   <MenuItem>Lip Balm</MenuItem>
                   <MenuItem>Lip Crayon</MenuItem>
                   <MenuItem>Lip Stain</MenuItem>
                   <MenuItem>Lip Plumper</MenuItem>
                       </MenuList>

                       {/* Nails */}
                       <MenuList>Nails
                    <MenuItem>Manicure & Pedicure Kits</MenuItem>
                    <MenuItem>Nail Polish</MenuItem>
                    <MenuItem>Nail Care</MenuItem>
                    <MenuItem>Nail Polish Sets</MenuItem>
                    <MenuItem>Nail Art Kits</MenuItem>
                    <MenuItem>Nail Polish Remover</MenuItem>
                       </MenuList>

                       {/* Tools & Brushes */}
                       <MenuList>ToolsBrushes
                 <MenuItem>Blush Brushes</MenuItem>
                 <MenuItem>Eyelash Curlers</MenuItem>
                 <MenuItem>Eye Brush</MenuItem>
                 <MenuItem>Face Brush</MenuItem>
                 <MenuItem>Lip Brushes</MenuItem>
                 <MenuItem>Makeup Pouches</MenuItem>
                 <MenuItem>Mirrors</MenuItem>
                 <MenuItem>Sponges & Applicators</MenuItem>
                 <MenuItem>Sharpeners</MenuItem>
                 <MenuItem>Tweezers</MenuItem>
                      </MenuList>
                        </Flex>
                    </MenuList>
                )}
                </Menu>
        </div>
    )
        
}


export default Makeup