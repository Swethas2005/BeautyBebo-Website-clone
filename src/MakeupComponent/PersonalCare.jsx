import { Menu, MenuButton, MenuList, MenuItem,} from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import {useState} from 'react'
import {Flex} from '@chakra-ui/react'

function PersonalCare() {

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
                Personal Care
                </MenuButton>
                {menuOpen && (
                    <MenuList>
                        <Flex style={{gap:"30px",marginLeft:"20px",marginTop:"10px"}}>
                       {/* Bath & Body */}
                       <MenuList>Bath & Body
                    <MenuItem>Body Cleansers</MenuItem>
                    <MenuItem>Body Massage Oil</MenuItem>
                    <MenuItem>Body Wash</MenuItem>
                    <MenuItem>Creams</MenuItem>
                    <MenuItem>Essential Oils</MenuItem>
                    <MenuItem>Foot Cream</MenuItem>
                    <MenuItem>Scrubs & Exfoliants</MenuItem>
                    <MenuItem>Ubtan & Face Packs</MenuItem>
                       </MenuList>

                       {/* BATHING ACCESSORIES*/}
                       <MenuList>BATHING ACCESSORIES
                   <MenuItem>Bath Brushes</MenuItem>
                   <MenuItem>Loofahs</MenuItem>
                   <MenuItem>Shower Caps</MenuItem>
                   <MenuItem>Sponges</MenuItem>
                       </MenuList>

                       {/* BATH & SHOWER */}
                       <MenuList>BATH & SHOWER
                    <MenuItem>Body Soaps</MenuItem>
                    <MenuItem>Shower Gel</MenuItem>
                       </MenuList>
                    <img style={{width:"450px",height:"300px",padding:"0,15px",marginLeft:"23px",marginRight:"23px",marginTop:"20px" ,borderRadius:"5px"}} src="https://www.beautybebo.com/pub/media/ads/personal_care.png" alt="Skin-logo" />
                        </Flex>
                    </MenuList>
                )}
                </Menu>
        </div>
    )
        
}


export default PersonalCare