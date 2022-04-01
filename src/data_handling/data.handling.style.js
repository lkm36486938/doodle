import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Box = styled.div`
    margin: 0 11px 11px 0;
    width: 196px;
    border: 1px solid rgb(238, 238, 238);
    background: rgb(255, 255, 255);
    cursor: pointer;
`;

const Image = styled.img`
    width: 194px;
    aspect-ratio: auto 194 / 194;
    height: 194px;
    vertical-align: bottom;
    border-style: none;
`;

const BoxBottom = styled.div`
    padding: 15px 10px;
`;

const Title = styled.p`
    position: relative;
    font-size: 14px;
    padding-bottom: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const PriceBox = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    height: 20px;
`;

const Price = styled.p`
    font-size: 16px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const Time = styled.p`
    font-size: 12px;
    color: rgb(136, 136, 136);
`;

export { Container, Box, Image, BoxBottom, Title, Price, PriceBox, Time };
