import { Wrapper } from "./styled";

export const Result = ({ result }) => (
    <Wrapper>
        {result !== undefined && (
            <>
                {result.sourceAmount} {result.targetAmount} =
                <strong>
                    {result.currency}
                </strong>
                &nbsp; {result.targetAmount}
            </>
        )}
    </Wrapper>
);

