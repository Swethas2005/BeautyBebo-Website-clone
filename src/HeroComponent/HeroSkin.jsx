import { Menu, MenuButton, MenuList, MenuItem, Box,} from '@chakra-ui/react'
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
                <MenuButton style={{fontSize:"15px",fontFamily:"sans-serif",margin:"1px",padding:"12px,10px",color:"#000000",fontWeight:"bold"}}
                as={IconButton}
                aria-label="User"
                colorScheme="teal"
                variant="ghost">
                    <Box style={{display:"flex",gap:"5px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" BackgroundColor="pink" fill="#dd0285"><path d="M360-390q-21 0-35.5-14.5T310-440q0-21 14.5-35.5T360-490q21 0 35.5 14.5T410-440q0 21-14.5 35.5T360-390Zm240 0q-21 0-35.5-14.5T550-440q0-21 14.5-35.5T600-490q21 0 35.5 14.5T650-440q0 21-14.5 35.5T600-390ZM480-160q134 0 227-93t93-227q0-24-3-46.5T786-570q-21 5-42 7.5t-44 2.5q-91 0-172-39T390-708q-32 78-91.5 135.5T160-486v6q0 134 93 227t227 93Zm0 80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-54-715q42 70 114 112.5T700-640q14 0 27-1.5t27-3.5q-42-70-114-112.5T480-800q-14 0-27 1.5t-27 3.5ZM177-581q51-29 89-75t57-103q-51 29-89 75t-57 103Zm249-214Zm-103 36Z"/></svg>
                    <p style={{fontSize:"15px",fontFamily:"sans-serif",color:"grey",marginTop:"8px",margin:"1px",padding:"12px,10px",fontWeight:"lighter"}}>Skin</p>
                    </Box>
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
                        </Flex>
                    </MenuList>
                )}
                </Menu>
        </div>
    )
        
}


export default Skin