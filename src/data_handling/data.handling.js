import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { customData } from "./data";
import * as S from "./data.handling.style";

export default withRouter(function DataHandlingExample() {
    const [data, setData] = useState({});

    useEffect(() => {
        setData(customData);
    }, []);

    return (
        <>
            <h1>data handle</h1>
            <br></br>

            <S.Container>
                {data.data &&
                    data.data.map((item, idx) => {
                        return (
                            <S.Box key={idx}>
                                <S.Image src={`${item.productImage}`}></S.Image>
                                <S.BoxBottom>
                                    <S.Title>{item.productName}</S.Title>

                                    <S.PriceBox>
                                        <S.Price>
                                            {item.price
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )}
                                            원
                                        </S.Price>
                                        <S.Time>{item.updatedBefore}</S.Time>
                                    </S.PriceBox>
                                </S.BoxBottom>
                            </S.Box>
                        );
                    })}
            </S.Container>
        </>
    );
});
