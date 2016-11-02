import React from 'react';
import { render } from 'react-dom';

import ButtonGroup from './ButtonGroup.jsx';
import AddBtn from './AddBtn.jsx';
import Gifs from './Gifs.jsx';

const key = `&api_key=dc6zaTOxFJmzC`;
const giphy = `http://api.giphy.com/v1/gifs/search?q=`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [
        'cats',
        'dogs',
        'penguins',
        'giraffes',
        'elephants',
        'dragons',
        'hedgehog',
        'frog'
      ],
      gifs: []
    };
  }

  fetchGifs(topic) {
    fetch(`${giphy}${topic}${key}`).then(res => res.json()).then(res => {
      return res.data.map(gif => {
        const original = gif.images.original.url;
        const still = gif.images.original_still.url;
        const {rating} = gif;
        const playing = false;
        return {original, still, playing, rating};
      })
    }).then((gifs) => {
      this.setState({gifs});
    });
  }

  addBtn(e) {
    const { which, target } = e.nativeEvent
    if (which === 13) {
      const topic = target.value;
      this.setState({
        topics: [
          topic, ...this.state.topics
        ]
      }, () => {
        target.value = '';
      });
    }
  }

  toggleGif(index) {
    const gifs = this.state.gifs.slice();
    const gif = gifs[index];
    gif.playing = !gif.playing;
    this.setState({ gifs });
  }

  render() {
    const { topics, gifs } = this.state;
    return (
      <div>

        <AddBtn
          handleKeyUp={this.addBtn.bind(this)} />

        <ButtonGroup
          topics={topics}
          handleClick={this.fetchGifs.bind(this)} />

        <Gifs
          gifs={gifs}
          handleClick={this.toggleGif.bind(this)} />

      </div>
    )
  }
}

render(
  <App/>, document.getElementById('app'));
