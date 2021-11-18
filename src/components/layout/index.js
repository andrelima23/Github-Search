import React from "react";
import Body from "../body";
import * as S from "./styled";

const Layout = ({ children }) => {
    return (
        <S.WrapperLayout>
            <Body/>
            {children}
        </S.WrapperLayout>
    );
};

export default Layout;
