import { Menu, MenuButton, MenuList, MenuItem,} from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import {useState} from 'react'
import {Flex} from '@chakra-ui/react'

function MomBabyCare() {

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
                Mom & Baby Care
                </MenuButton>
                {menuOpen && (
                    <MenuList>
                        <Flex style={{gap:"50px",marginLeft:"20px",marginTop:"10px"}}>
                       {/* BABY CARE */}
                       <MenuList>BABY CARE
                    <MenuItem>Bath Time</MenuItem>
                    <MenuItem>Diapers</MenuItem>
                    <MenuItem>Lotions & Creams</MenuItem>
                    <MenuItem>Oils</MenuItem>
                    <MenuItem>Powder</MenuItem>
                    <MenuItem>Shampoo</MenuItem>
                    <MenuItem>Soaps</MenuItem>
                    <MenuItem>Sterilizer & Cleaners</MenuItem>
                    <MenuItem>Rash Cream</MenuItem>
                    <MenuItem>Wipes</MenuItem>
                       </MenuList>

                       {/* MOM CARE*/}
                       <MenuList>MOM CARE
                    <MenuItem>Lotion & Cream</MenuItem>
                    <MenuItem>Personal Care</MenuItem>
                       </MenuList>
                    <img style={{width:"600px",height:"400px",padding:"0,15px",marginLeft:"2px",marginRight:"23px",marginTop:"20px" ,borderRadius:"5px"}} src="https://www.beautybebo.com/pub/media/mega-menu/mom_baby_cata.jpg" alt ="Mom and Baby Care logo"/>
                        </Flex>
                    </MenuList>
                )}
                </Menu>
        </div>
    )
        
}


export default MomBabyCare