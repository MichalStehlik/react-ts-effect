import {useId, useState} from "react"

interface IPasswordProps {
    value : string | undefined;
    inputAction: (value: string) => void;
}

export const PasswordInput: React.FC<IPasswordProps> = ({value, inputAction}) => {
    const id = useId();
    const [input, setInput] = useState<string>(String(value));
    const [strength, setStrength] = useState<number>(input.length);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
        inputAction(event.target.value);
        setStrength(event.target.value.length);
    }

    return (
        <div>
            <label htmlFor={`${id}-password`}>Heslo</label>
            <input type="text" id={`${id}-password`} value={input} onChange={handleChange} />
            <span>{strength}</span>
        </div>
    );
}

export default PasswordInput;