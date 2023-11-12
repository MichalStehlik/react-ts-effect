import {useEffect} from "react"

interface EffectProps {
    value: number
}

export const EffectDemo: React.FC<EffectProps> = ({value}) => {
    console.log("rendering");
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
    return <p>Doing nothing {value}</p>
}

export default EffectDemo;