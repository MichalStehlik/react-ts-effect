import {useId} from "react"

interface IInputProps {
    value : string | undefined;
    inputAction: (value: string) => void;
}

export const ManagedInput: React.FC<IInputProps> = ({value, inputAction}) => {
    const id = useId();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        inputAction(event.target.value);
    }

    return (
        <div>
            <label htmlFor={`${id}-txt`}>Heslo</label>
            <input type="text" id={`${id}-txt`} value={value} onChange={handleChange} />
        </div>
    );
}

export default ManagedInput;