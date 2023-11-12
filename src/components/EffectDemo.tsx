import {useEffect, useState} from "react"

interface EffectProps {
    value: number
}

export const EffectDemo: React.FC<EffectProps> = ({value}) => {
    console.log("rendering");
    const [word, setWord] = useState<string>("");
    useEffect(() => {
        console.log("effect always on rerender");
    });
    useEffect(()=>{
        console.log("mount");
        return () => {console.log("unmount");}
    },[]);
    useEffect(()=>{
        console.log("value changed or mounted");
    },[value]);
    useEffect(()=>{
        const handleKeyDown = (event: KeyboardEvent) => {
            console.log(`Pressed key: ${event.key}`);
            setWord(x => x + event.key);
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => {window.removeEventListener("keydown", handleKeyDown)}
    },[]);
    return (
        <>
            <p>Doing nothing {value}</p>
            <p>{word}</p>
        </>
    );
}

export default EffectDemo;