import 'styled-components';

declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
};

declare module "*.jpg"{
  const path: string;
  export default path;
};
declare module "*.png"{
  const path: string;
  export default path;
};
declare module "*.jpeg"{
  const path: string;
  export default path;
};
declare module "*.gif"{
  const path: string;
  export default path;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    lemuseeblack_100:string;
    lemuseeblack_90:string;
    lemuseeblack_80:string;
    lemuseeblack_70:string;
    lemuseeblack_60:string;
    lemuseeblack_50:string;
    lemuseeblack_40:string;
    lemuseeblack_30:string;
    lemuseeblack_20:string;
    lemuseeblack_10:string;
    lemuseeblack_00:string;
    error_red:string;
    pretendard:string;
    logoBlack:string;
    logoWhite:string;
  }
};

declare module 'styled-components' {
  export interface DefaultFont {
    pretendard_44:string;
    pretendard_24:string;
    pretendard_21:string;
    pretendard_19:string;
    pretendard_17:string;
    pretendard_15:string;
    pretendard_13:string;
    pretendard_11:string;
  }
};