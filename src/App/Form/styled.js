import styled from "styled-components";

export const Header = styled.header`
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    border-radius: 10px;
    padding: 10px;
    text-align: left;
`;

export const LabelText = styled.span`
    width: 100%;
    max-width: 170px;
    display: inline-block;
    margin-right: 5px;
`;

export const Field = styled.input`
    border: 1px solid ${({ theme }) => theme.color.silver};
    padding: 10px;
    width: 100%;
    max-width: 400px;
    border-radius: 5px;
`;

export const Button = styled.button`
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    padding: 10px;
    border-radius: 10px;

    &:hover {
        filter: brightness(110%)
    }

    &:active {
        filter: brightness(120%)
    }
`;

export const Loading = styled.p`
    color: ${({ theme }) => theme.color.teal};
`;

export const Failure = styled.p`
    color: ${({ theme }) => theme.color.crimson};
`;
