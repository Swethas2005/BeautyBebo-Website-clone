import { Menu, MenuButton, MenuList, MenuItem,} from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import {useState} from 'react'
import {Flex} from '@chakra-ui/react'

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
                <MenuButton style={{fontSize:"15px",fontFamily:"sans-serif",margin:"1px",padding:"12px,10px",color:"#ffffff",fontWeight:"bold"}}
                as={IconButton}
                aria-label="User"
                variant="ghost">
                Makeup
                </MenuButton>
                {menuOpen && (
                    <MenuList>
                        <Flex style={{gap:"20px",marginLeft:"20px",marginTop:"10px"}}>
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