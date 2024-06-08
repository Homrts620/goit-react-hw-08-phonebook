import styled from 'styled-components';
export const List = styled.ul`
    list-style: none;
    margin-left: 600px;
    margin-top: 10px;
`;

export const Item = styled.li`
    font-size: 18px;
    color: darkred;
`;

export const Button = styled.button`
    margin-left: 30px;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid #4d43F6;
    color: #fff;
    background-color: #5d83F6;
    font-size: 14px;

    align-items: center;
    justify-content: center;

&:hover {
    background-color: #6E49F6;
`;