import React, { useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';

// Create context
const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedText() {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ color: theme === 'dark' ? 'white' : 'black' }}>
        This is {theme} theme
      </Text>
    </View>
  );
}

function ThemeToggleButton() {
  const { toggleTheme } = useContext(ThemeContext);
  return <Button title="Toggle Theme" onPress={toggleTheme} />;
}

function ThemedContainer({ children }) {
  const { theme } = useContext(ThemeContext);
  const backgroundColor = theme === 'dark' ? '#222' : '#fff';

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: backgroundColor }}>
      {children}
    </View>
  );
}

// Main App component
export default function App() {
  return (
    <ThemeProvider>
      <ThemedContainer>
        <ThemedText />
        <ThemeToggleButton />
      </ThemedContainer>
    </ThemeProvider>
  );
}