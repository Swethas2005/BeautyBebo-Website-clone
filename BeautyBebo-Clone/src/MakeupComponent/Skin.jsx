import { Menu, MenuButton, MenuList, MenuItem,} from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import {useState} from 'react'
import {Flex} from '@chakra-ui/react'

function Skin() {

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
                Skin
                </MenuButton>
                {menuOpen && (
                    <MenuList>
                        <Flex>
                       {/* Eye Care */}
                       <MenuList>Eye Care
                    <MenuItem>Dark Circles</MenuItem>
                    <MenuItem>Eye Contour Care</MenuItem>
                    <MenuItem>Eye Cream</MenuItem>
                    <MenuItem>Eye Masks</MenuItem>
                    <MenuItem>Eye Serums</MenuItem>
                    <MenuItem>Puffiness</MenuItem>
                    <MenuItem>Under Eye Creams</MenuItem>
                    <MenuItem>Under Eye Wrinkles</MenuItem>
                       </MenuList>

                       {/* Face Care*/}
                       <MenuList>Face Care
                    <MenuItem>Anti- Ageing Creams</MenuItem>
                    <MenuItem>Bleach Creams</MenuItem>
                    <MenuItem>Brightening Cream</MenuItem>
                    <MenuItem>Face Wash</MenuItem>
                    <MenuItem>Facial Wipes</MenuItem>
                    <MenuItem>Face Oil</MenuItem>
                    <MenuItem>Face Cleansers</MenuItem>
                    <MenuItem>Facial Kits</MenuItem>
                    <MenuItem>Face Tools</MenuItem>
                    <MenuItem>Moisturizer</MenuItem>
                    <MenuItem>Mask & Peels</MenuItem>
                    <MenuItem>Mask & Peels</MenuItem>
                    <MenuItem>Serum</MenuItem>
                    <MenuItem>Toner & Astringents</MenuItem>
                    <MenuItem>Cleansing Creams</MenuItem>
                       </MenuList>

                       {/* Body Care */}
                       <MenuList>Body Care
                   <MenuItem>All Cream</MenuItem>
                   <MenuItem>Body Moisturizers</MenuItem>
                   <MenuItem>Body Toners</MenuItem>
                   <MenuItem>Body Sun Care</MenuItem>
                   <MenuItem>Brightening Lotion</MenuItem>
                   <MenuItem>Dark Circles & Wrinkles</MenuItem>
                   <MenuItem>Dark Circles & Wrinkles</MenuItem>
                   <MenuItem>Day Cream</MenuItem>
                   <MenuItem>Foot Cream</MenuItem>
                   <MenuItem>Hair Remover Cream</MenuItem>
                   <MenuItem>Hand Creams</MenuItem>
                   <MenuItem>Hands & Feet</MenuItem>
                   <MenuItem>Kits & Combos</MenuItem>
                   <MenuItem>Night Cream</MenuItem>
                   <MenuItem>Neck Creams</MenuItem>
                       </MenuList>
                    <img style={{width:"500px",height:"300px",padding:"0,15px",marginLeft:"23px",marginRight:"23px",marginTop:"20px" ,borderRadius:"5px"}} src="https://www.beautybebo.com/pub/media/ads/skin_care_routin.png" alt="Skin-logo" />
                        </Flex>
                    </MenuList>
                )}
                </Menu>
        </div>
    )
        
}


export default Skin