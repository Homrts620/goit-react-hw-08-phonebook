import styled from 'styled-components';

export const Section = styled.section`
  // position: fixed;
    width: 100%;
    background-image: radial-gradient(circle at center, #ecab8b 5%, #c39498 45%);
    z-index: -1;
    display: block;
    overflow: scroll;
    padding-bottom: 30px;
`;
export const Wrapper = styled.h2`
    font-size: 20px;
    margin: 0 auto;
    text-align: center;
    color: brown;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 21px;
    border: 3px solid brown;
    border-radius: 15px;
    height: 40%;
    margin: 0 auto;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    color: #000000;
    font-size: 20px;
`;

export const Input = styled.input`
    color: #53545af5;
    padding: 8px 12px;
    font: inherit;
    cursor: pointer;
    margin-top: 5px;
`;

export const Button = styled.button`
    padding: 8px 10px;
    font: inherit;
    cursor: pointer;
    border-radius: 4px;
    border: 3px solid #1e5292;
    color: #fff;
    background-color: #2ce3d4;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

&:hover {
    background-color: #2ed4d6;
}
`;