# json-autocomplete-input

A React component for JSON path-based autocomplete input fields. Easily integrate smart, context-aware autocompletion for JSON data structures in your React apps.

## Features
- Autocomplete suggestions based on JSON paths
- Customizable and themeable
- Lightweight and easy to use
- TypeScript support

## Installation

```bash
npm install json-autocomplete-input
```

or

```bash
yarn add json-autocomplete-input
```

## Usage

```tsx
import React,{useState} from 'react';
import JsonAutocompleteInput from 'json-autocomplete-input';

const [value,setValue] = useState<string>();
const data = {
  user: {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      zip: '10001'
    }
  }
};

function App() {
  return (
    <JsonAutocompleteInput
      jsonData={data}
      onChange={value => console.log(value)}
      placeholder="Type a JSON path..."
      value={value}
    />
  );
}

export default App;
```

## Props

| Prop              | Type                          | Description                                             |
|-------------------|-------------------------------|---------------------------------------------------------|
| `jsonData`        | any                           | The JSON object to provide path suggestions             |
| `value`           | string                        | The current value of the input                          |
| `onChange`        | (value: string) => void       | Callback when input value changes                       |
| `placeholder`     | string (optional)             | Input placeholder text                                  |
| `label`           | string (optional)             | Label for the input field                               |
| `inputStyle`      | CSSProperties (optional)      | Inline styles for the input                             |
| `popoverStyle`    | CSSProperties (optional)      | Inline styles for the suggestion popover                |
| `suggestionStyle` | CSSProperties (optional)      | Inline styles for each suggestion item                  |
| `suggestionActiveStyle`| CSSProperties (optional)  | Inline styles for the active suggestion item            |
| `className`       | string (optional)             | Custom CSS class for the input                          |
| ...others         | any                           | Pass other input props as needed                        |

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

MIT © [Priyanshu Gupta](https://github.com/Priyanshu85)

## Links

- [GitHub Repository](https://github.com/Priyanshu85/json-auto-complete-input)
- [Live Demo](https://json-auto-complete-example.vercel.app/)
- [Report Issues](https://github.com/Priyanshu85/json-auto-complete-input/issues)
