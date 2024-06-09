import { CSSProperties } from "react";
import { ImageSourcePropType, ViewStyle } from "react-native";

export interface MyViewProps {
    children?:any;
    style?:CSSProperties|ViewStyle|object;
    barStyle?: 'default' | 'light-content' | 'dark-content';
    titleBarHidden?:boolean;
}
export interface TextProps {
    text:string;
    textStyle?:CSSProperties|ViewStyle|object;
    barStyle?: 'default' | 'light-content' | 'dark-content';
}
export interface SpacerType {
    v?:number,
    h?:number,
}
export interface TextInputProps {
    placeholder?:string,
    placeholderTextColor?:string,
    inputStyle?:CSSProperties|ViewStyle;
    styleBox?:CSSProperties|ViewStyle;
    firstImageStyle?:CSSProperties|ViewStyle;
    secondImageStyle?:CSSProperties|ViewStyle;
    firstImage?:ImageSourcePropType;
    secondImage?:ImageSourcePropType;
    value?:string;
    onChangeText?:()=>void;
}