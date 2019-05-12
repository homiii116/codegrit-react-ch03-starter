import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import ThemeSwitcher from './ThemeSwitcher';

export default class extends Component {
  state = {
    theme: 'light', // 'light'または'dark'
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
    return (
      <div className="card-wrapper">
        <ThemeSwitcher  />
        <article className="insta-card">
          <Header />
          <Body />
        </article>
      </div>
    );
  }
}