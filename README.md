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
import React from 'react';
import JsonAutocompleteInput from 'json-autocomplete-input';

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
      data={data}
      onChange={value => console.log(value)}
      placeholder="Type a JSON path..."
    />
  );
}

export default App;
```

## Props
| Prop         | Type     | Description                                 |
|--------------|----------|---------------------------------------------|
| `data`       | object   | The JSON object to provide path suggestions |
| `onChange`   | function | Callback when input value changes           |
| `placeholder`| string   | Input placeholder text                      |
| ...others    | any      | Pass other input props as needed            |

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
- [Report Issues](https://github.com/Priyanshu85/json-auto-complete-input/issues)
