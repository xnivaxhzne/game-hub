import { HStack, Icon } from "@chakra-ui/react";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox
} from "react-icons/fa";
import { SiSega } from "react-icons/si";

import type Platform from "@/entities/Platform";
import type { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

interface Props {
  platforms?: Platform[];
}

const NoRender = () => null;

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    sega: SiSega
  };
  return (
    <HStack marginTop={1}>
      {platforms?.map((platform) => (
        <Icon
          as={iconMap[platform.slug] || NoRender}
          key={platform.id}
          color="gray.500"
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
