import { Menu, MenuButton, MenuList, MenuItem,} from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import {useState} from 'react'
import {Flex} from '@chakra-ui/react'
import {Box} from '@chakra-ui/react'

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
                <MenuButton style={{fontSize:"15px",fontFamily:"sans-serif",margin:"1px",padding:"12px,10px",color:"#000000",fontWeight:"bold"}}
                as={IconButton}
                aria-label="User"
                colorScheme="teal"
                variant="ghost">
                <Box display={"flex"} gap={"5px"}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="#dd0285" viewBox="0 -960 960 960" width="24"><path d="M480-240q134 0 227-93.5T800-560q0-31-5-59.5T779-675q-27 17-57 26t-62 9q-54 0-101.5-24.5T480-734q-31 45-78.5 69.5T300-640q-32 0-62-9t-57-26q-11 27-16 55.5t-5 59.5q0 133 93.5 226.5T480-240ZM360-470q21 0 35.5-14.5T410-520q0-21-14.5-35.5T360-570q-21 0-35.5 14.5T310-520q0 21 14.5 35.5T360-470Zm240 0q21 0 35.5-14.5T650-520q0-21-14.5-35.5T600-570q-21 0-35.5 14.5T550-520q0 21 14.5 35.5T600-470ZM300-720q58 0 99-41t41-99v-18q-68 8-125 43t-95 89q18 12 38 19t42 7Zm360 0q22 0 42-6.5t38-19.5q-38-54-94.5-89T520-878v18q0 58 41 99t99 41ZM88-80q-35 0-59-26T8-167l36-395q8-84 45.5-157t96-126.5q58.5-53.5 134-84T480-960q85 0 160.5 30.5t134 84Q833-792 870.5-719T916-562l36 395q3 35-21 61t-59 26H88Zm392-80q-125 0-225-69.5T110-408L88-160h784l-22-248q-45 109-144.5 178.5T480-160Zm40-718Zm-80 0Zm40 718h392H88h392Z"/></svg>
                <p style={{fontSize:"15px",fontFamily:"sans-serif",margin:"1px",padding:"12px,10px",marginTop:"5px",color:"grey",fontWeight:"lighter"}}>Hair</p>
                </Box>
                </MenuButton>
                {menuOpen && (
                    <MenuList>
                        <Flex>
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
                    <img style={{width:"800px",height:"400px",padding:"0,15px",marginLeft:"23px",marginRight:"28px",marginTop:"20px" ,}} src="https://www.beautybebo.com/pub/media/mega-menu/hair.png" alt="Hair-logo" />
                        </Flex>
                    </MenuList>
                )}
                </Menu>
        </div>
    )
        
}


export default Hair