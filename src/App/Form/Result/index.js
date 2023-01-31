import { Wrapper } from "./styled";

export const Result = ({ result }) => (
    <Wrapper>
        {result !== undefined && (
            <>
                {result.sourceAmount}&nbsp;PLN&nbsp;=&nbsp;
                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </Wrapper>
);

