import React, {
    useState,
    useEffect,
    type KeyboardEvent,
    type FC,
    type CSSProperties,
  } from 'react';
  
  type JsonAutoCompleteInputProps =  {
    jsonData: any;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
    inputStyle?: CSSProperties;
    popoverStyle?: CSSProperties;
    suggestionStyle?: CSSProperties;
  }
  
 const JsonAutoCompleteInput = (
  { jsonData, value, onChange, placeholder, label, inputStyle, popoverStyle, suggestionStyle }: JsonAutoCompleteInputProps
 )=> {
    const [inputValue, setInputValue] = useState(value);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [popoverOpen, setPopoverOpen] = useState(false);
  
    useEffect(() => {
      if (!inputValue) {
        setSuggestions([]);
        return;
      }
  
      const pathParts = inputValue.split('.').map((part) => part.trim());
      let current = jsonData;
  
      for (let i = 0; i < pathParts.length - 1; i++) {
        const part = pathParts[i];
        if (Array.isArray(current?.[part])) {
          current = current[part][0];
        } else {
          current = current?.[part];
        }
        if (!current) {
          setSuggestions([]);
          return;
        }
      }
  
      const lastPart = pathParts[pathParts.length - 1];
      const keys = current && typeof current === 'object'
        ? Array.isArray(current)
          ? current[0] && typeof current[0] === 'object'
            ? Object.keys(current[0])
            : []
          : Object.keys(current)
        : [];
  
      setSuggestions(keys.filter((key) => key.startsWith(lastPart)));
      setPopoverOpen(true);
    }, [inputValue, jsonData]);
  
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'ArrowDown') {
        setSelectedIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
      } else if (e.key === 'ArrowUp') {
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        setSelectedIndex(0);
        if (suggestions.length > 0) {
          handleSelect(suggestions[selectedIndex]);
        }
      } else if (e.key === 'Escape') {
        setPopoverOpen(false);
      }
    };
  
    const handleSelect = (suggestion: string) => {
      const pathParts = inputValue.split('.');
      pathParts[pathParts.length - 1] = suggestion;
      const newVal = pathParts.join('.');
      setInputValue(newVal);
      onChange(newVal);
      setPopoverOpen(false);
    };
  
    return (
      <div style={{ position: 'relative', width: '100%' }}>
        {label && <label>{label}</label>}
        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            onChange(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          onFocus={() => setPopoverOpen(true)}
          placeholder={placeholder}
          style={{
            padding: '8px',
            width: '100%',
            fontSize: '14px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            ...inputStyle,
          }}
        />
        {popoverOpen && suggestions.length > 0 && (
          <ul
            style={{
              position: 'absolute',
              zIndex: 1000,
              background: '#fff',
              border: '1px solid #ccc',
              marginTop: '2px',
              listStyle: 'none',
              padding: 0,
              maxHeight: '150px',
              overflowY: 'auto',
              width: '100%',
              ...popoverStyle,
            }}
          >
            {suggestions.map((sugg, i) => (
              <li
                key={sugg}
                style={{
                  padding: '6px 10px',
                  backgroundColor: i === selectedIndex ? '#eee' : '#000',
                  cursor: 'pointer',
                  color: i === selectedIndex ? '#000' : '#fff',
                  ...suggestionStyle,
                }}
                onMouseDown={() => handleSelect(sugg)}
              >
                {sugg}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

export default JsonAutoCompleteInput
  