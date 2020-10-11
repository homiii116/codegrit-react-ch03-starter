import React, { Component } from 'react';  //親コンポーネント
import Header from './Header';
import Body from './Body';
import ThemeSwitcher from './ThemeSwitcher';

export default class extends Component {
  state = {
    theme: 'light' // 'light'または'dark'
  }

  onSwitchTheme = (theme, e = null) => {
    if (e) e.preventDefault();
    this.setState({ theme })
  }

  render() {
    /* themeを基にarticleのclassを、変更します。
      themeが'light'なら'insta-card'、
      themeが'dark'なら'insta-card insta-card-dark'と
      クラス名が変わるようにします。
    */
    const {
      theme
    } = this.state;

    let instaCard = 'insta-card';
    if (theme === 'dark') {
      instaCard = 'insta-card insta-card-dark';
    }

    return (
      <div className="card-wrapper">
        <ThemeSwitcher  
          theme = {theme}
          switchTheme = {this.onSwitchTheme}
        />
        <article className = {instaCard}>
          <Header />
          <Body />
        </article>
      </div>
    );
  }
}