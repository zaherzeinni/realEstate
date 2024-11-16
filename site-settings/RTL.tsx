import { create } from "jss";
import rtl from "jss-rtl";

import { StylesProvider, jssPreset } from "@material-ui/core/styles";

interface RtlProps {
  children: React.ReactNode;
}

const jss = create({ plugins: [...jssPreset().plugins, 
  
  //  typeof window !== 'undefined'  && localStorage.getItem('language') === 'ar' && rtl()

] });

export default function RTL(props: RtlProps) {
  return <StylesProvider jss={jss}>{props.children}</StylesProvider>;
}
