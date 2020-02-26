import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets';


class App extends React.Component {
  render() {
    const allTweets = tweets.tweets.map(tweet => {
      return (
        <section>
            <User user={tweet.user}/>
            <Tagname user={tweet.user}/>
            <Entities entities={tweet.entities} />
            {tweet.text}
            <Favcount user={tweet.user}/>
            <Retweetcount user={tweet.user}/>
            <Image url={tweet.user}/>
        </section>
        )
    })
    return (

      <main>
        {allTweets}
      </main>
    );
  }
}

class User extends React.Component {
  render() {
    return (
      <h1 className="user">
        {this.props.user.screen_name}
      </h1>
    );
  }
}

class Entities extends React.Component {
  render() {
    return (
      <article>
        {this.props.entities.urls.length}
      </article>
    );
  }
}

class Tagname extends React.Component {
    render() {
        return (
            <div>
                <a href={this.props.user.url}>@{this.props.user.screen_name}</a>
            </div>
            )
    }
}

class Favcount extends React.Component {
    render(){
        return (
            <div>
                Favourites count:{this.props.user.favourites_count}
            </div>
            )
    }
}

class Retweetcount extends React.Component {
    render(){
        return (
            <div>
                Retweet count: {this.props.user.retweet_count}
            </div>
            )
    }
}

class Image extends React.Component {
    render(){
        return (
            <div>
                Picture: <img src={this.props.url} width="100" height="50" />
            </div>
            )
    }
}



const element = document.getElementById('app');

ReactDOM.render(<App />, element );//
console.log("tweet react");