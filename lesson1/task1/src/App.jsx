import React from 'react';
import ThemedButton from './ThemedButton';
import { themes, ThemeContext } from './themes-context';

class App extends React.Component {
  state = {
    theme: themes.light,
  };

  toogleTheme = () => {
    const newTheme = this.state.theme === themes.light
      ? themes.dark
      : themes.light;

    this.setState({
      theme: newTheme,
    });
  };

  render () {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton onClick={this.toogleTheme}>Dynamic Theme</ThemedButton>
          <ThemedButton onClick={this.toogleTheme}>Default Theme</ThemedButton>
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App;
