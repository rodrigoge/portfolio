import { StaticImageData } from "next/image";

export interface OverlayCardType {
    srcImage: StaticImageData,
    linkTo: string, 
    projectName: string,
    altImage: string
}