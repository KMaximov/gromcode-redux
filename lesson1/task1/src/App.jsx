import React from 'react';
import ThemedButton from './ThemedButton';
import { themes, ThemeContext } from './themes-context';

class App extends React.Component {
  state = {
    theme: themes.dark,
  };

  toogleTheme = () => {
    const newTheme = this.state.theme === themes.dark
      ? themes.light
      : themes.dark;

    this.setState({
      theme: newTheme,
    });
  };

  render () {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton onClick={this.toogleTheme}>Dynamic Theme</ThemedButton>
        </ThemeContext.Provider>
        <ThemedButton onClick={this.toogleTheme}>Default Theme</ThemedButton>
      </div>
    )
  }
}

export default App;
