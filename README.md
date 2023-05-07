The Date constructor function creates an object storing the current date and time. The next function gives such a date object.

const date = () => {
return new Date();
};

The useState hook allows adding state into a function component.
It is basically a function that returns a variable for reading the state and a function for changing that state data.

const [time, setTime] = useState(date().toLocaleTimeString())

Here is Clock component so far.
The refreshClock changes the current date object with a new one storing the current date and time.

function Clock() {
const [time, setTime] = useState(date().toLocaleTimeString());
const refreshClock = () => setTime(date().toLocaleTimeString());

useEffect(() => {
const intID = setInterval(() => {
refreshClock();
}, 1000);

    return () => {
      clearInterval(intID);
    };

}, []);

return <span>{time}</span>;
}
