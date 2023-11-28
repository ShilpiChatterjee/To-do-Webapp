import { Box, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Button,Text  } from "@chakra-ui/react";
import { Link } from "react-router-dom";





export default function NavbarAfterLogin({children}){


    return (
        <Box w="100vw" h="100vh" backgroundColor="gray.100">
            <Flex w="100%" h="10%" fontSize="20px" backgroundColor="blue.400" color="white" alignItems="center" justifyContent="flex-end">
                <Text>To-do App</Text>
                <Flex w="85%" alignItems="center" justifyContent="center" gap="50px">
                    <Link to="/">Create Task</Link>
                    <Link to="/task">All Task</Link>
                </Flex>
                <Menu w="10%">
                    <MenuButton as={Button} colorScheme='pink'>
                        Home
                    </MenuButton>
                    <MenuList>
                        <Link to="/"><MenuItem color="black" fontSize="16px">Logout</MenuItem></Link> 
                    </MenuList>
                </Menu>
            </Flex>
            <Box w="90vw" margin="auto" mt="30px">
                {children}
            </Box>
        </Box>
    )
}