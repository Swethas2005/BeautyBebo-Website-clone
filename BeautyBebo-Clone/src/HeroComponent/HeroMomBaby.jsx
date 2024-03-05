import { Menu, MenuButton, MenuList, MenuItem,} from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import {useState} from 'react'
import {Flex} from '@chakra-ui/react'
import {Box} from '@chakra-ui/react'

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
                <MenuButton style={{fontSize:"15px",fontFamily:"sans-serif",margin:"1px",padding:"12px,10px",color:"#000000",fontWeight:"bold"}}
                as={IconButton}
                aria-label="User"
                colorScheme="teal"
                variant="ghost">
                <Box display={"flex"} gap={"5px"}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#dd0285'><path d="M400-400q-50 0-85-35t-35-85q0-22 7-41.5t21-35.5q-4-10-6-21t-2-22q0-38 20.5-67.5T374-751q20-23 47-36t59-13q32 0 59 13t47 36q33 14 53.5 43.5T660-640q0 11-2 22t-6 21q14 16 21 35.5t7 41.5q0 50-35 85t-85 35H400Zm0-80h160q17 0 28.5-12t11.5-28q0-7-2.5-13t-7.5-12q-11-13-14.5-25.5T572-594q0-16 4-27.5t4-18.5q0-12-7-22t-18-15q-9-4-16.5-9T525-699q-5-6-16.5-13.5T480-720q-17 0-28.5 8T435-698q-6 7-13.5 12t-16.5 9q-11 5-18 15t-7 22q0 7 4 18.5t4 27.5q0 11-3.5 23.5T370-545q-5 6-7.5 12t-2.5 13q0 16 11.5 28t28.5 12ZM160-80v-112q0-34 17.5-62.5T224-298q62-31 126-46.5T480-360q66 0 130 15.5T736-298q29 15 46.5 43.5T800-192v112H160Zm80-80h480v-32q0-11-5.5-20T700-226q-54-27-109-40.5T480-280q-56 0-111 13.5T260-226q-9 5-14.5 14t-5.5 20v32Zm240 0Zm0-320Z"/></svg>
                <p style={{fontSize:"15px",fontFamily:"sans-serif",marginTop:"5px",margin:"1px",padding:"12px,10px",color:"grey",fontWeight:"lighter"}}>Mom & Baby Care</p>
                </Box>
                </MenuButton>
                {menuOpen && (
                    <MenuList>
                        <Flex>
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

                       {/* BATH & SHOWER */}
                       <MenuList>BATH & SHOWER
                    <MenuItem>Body Soaps</MenuItem>
                    <MenuItem>Shower Gel</MenuItem>
                       </MenuList>
                    <img style={{width:"700px",height:"400px",padding:"0,15px",marginLeft:"23px",marginRight:"23px",marginTop:"20px" ,borderRadius:"5px"}} src="https://www.beautybebo.com/pub/media/mega-menu/baby_care.png" alt ="Mom and Baby Care logo"/>
                        </Flex>
                    </MenuList>
                )}
                </Menu>
        </div>
    )
        
}


export default MomBabyCare