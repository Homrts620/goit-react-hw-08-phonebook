import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding-right: 10px;
`;

export const Wrapper = styled.h3`
    color: #c29de3;
`;
export const Button = styled.button`
    padding: 0 20px;
    font: inherit;
    cursor: pointer;
    border-radius: 4px;
    border: 3px solid #3e3462;
    color: #fff;
    background-color: #2db0c4;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 40px;
    margin-right: 10px;
    &:hover {
        background-color: #3ad0a3;
    }
`;