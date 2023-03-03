import Button from './Button.js';

function App() {
    return <div>App
        <div>
            <Button primary outline>Click me</Button>
        </div>
        <div>
            <Button danger rounded>Kliknij mnie</Button>
        </div>
        <div>
            <Button warning>Kup teraz</Button>
        </div>
        <div>
            <Button success outline>Zamów do domu</Button>
        </div>
        <div>
            <Button secondary outline rounded>Dodaj do listy</Button>
        </div>
    </div>;
}

export default App;