import { useState } from "react";
import { Result } from "./Result";
import { useRatesData } from "./useRatesData";
import { Button, Field, Header, LabelText, Loading, Failure } from "./styled";

export const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            sourseAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form onSubmit={onSubmit}>
            <Header>
                Exchange
            </Header>
            {ratesData.state === "loading"
                ? (
                    <Loading>
                        Loading....
                    </Loading>
                )
                : (
                    ratesData.state === "error" ? (
                        <Failure>
                            Error... Check your internet connection
                        </Failure>
                    ) : (
                        <>
                            <p>
                                <label>
                                    <LabelText>
                                        Enter the amount PLN*:
                                    </LabelText>
                                    <Field
                                        value={amount}
                                        onChange={({ target }) => setAmount(target.value)}
                                        placeholder=" Enter the amount PLN"
                                        type="number"
                                        autoFocus
                                        required
                                        step="0.01"
                                    />
                                </label>
                            </p>
                            <p>
                                <label>
                                    <LabelText>
                                        Currency:
                                    </LabelText>
                                    <Field
                                        as="select"
                                        value={currency}
                                        onChange={({ target }) => setCurrency(target.value)}
                                    >
                                        {Object.keys(ratesData.rates).map(((currency) => (
                                            <option
                                                key={currency}
                                                value={currency}
                                            >
                                                {currency}
                                            </option>
                                        )))}
                                    </Field>
                                </label>
                            </p>
                            <p>
                                <Button>Calculate!</Button>
                            </p>

                            <Result result={result} />
                        </>
                    )
                )}
        </form>
    );
};