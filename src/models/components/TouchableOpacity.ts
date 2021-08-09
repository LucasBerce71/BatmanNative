import { TouchableOpacityProps } from "react-native";

type TouchableOpacityModel = TouchableOpacityProps & {
  title: string;
  isIconRight?: boolean;
}

export default TouchableOpacityModel;