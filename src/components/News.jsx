import React, { Component } from "react";
import NewsItem from "./NewsItem";
export default class News extends Component {
  article = [];
  constructor() {
    super();
    this.state = {
      articles: this.article,
    };
  }
  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_NEWS_API}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
    });
  }
  render() {
    return (
      <>
        <div className="container my-4">
          <h1 className="my-4">NewsMonkey - Top Headlines</h1>
          <div className="row my-3">
            {this.state.articles.map((article, index) => {
              return (
                <div className="col-md-4 my-3" key={index}>
                  <NewsItem
                    title={article.title ? article.title : ""}
                    description={
                      article.description
                        ? article.description.slice(0, 88) + "..."
                        : ""
                    }
                    imageUrl={
                      article.urlToImage
                        ? article.urlToImage
                        : "https://www.bonjourgroup.net/wp-content/uploads/2016/04/dummy-post-horisontal-thegem-blog-default.jpg"
                    }
                    newsUrl={article.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
