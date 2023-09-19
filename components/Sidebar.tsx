"use client";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Button,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";

function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  const width = useBreakpointValue({
    md: "80px!important",
    lg: "260px!important",
  });
  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      <Drawer onClose={onClose} isOpen={isOpen} placement="left">
        <DrawerOverlay />
        <DrawerContent w={width}>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Sidebar;
