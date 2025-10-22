export default function useColorChanger() {
    return (answer: number | string)=> {
        const text: string = String(answer);
        let color;
        if (typeof answer === "number") {
            if (answer < 0) {
                color = "red";
            } else {
                color = "black";
            }
        } else {
            color = "red"; //not number :(
        }
        return { text, color };
    };
}

