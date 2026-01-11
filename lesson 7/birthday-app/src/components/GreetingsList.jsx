import react from "react";
import GreetingCard from "./GreetingCard";

function GreetingsList({ greetings }) {
    return (
        <div>
            <h3>your greetings</h3>
            {greetings.map((greeting, index) => (
                <GreetingCard key={index} greeting={greeting}></GreetingCard>
            ))}
        </div>
    )

}
export default GreetingsList;