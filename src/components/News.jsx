import React, { Component } from "react";
import NewsItem from "./NewsItem";
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
    };
  }
  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_NEWS_API}&page=${this.state.page}&pagesize=20`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
      process.env.REACT_APP_NEWS_API
    }&page=${this.state.page - 1}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
    });
  };

  handleNextClick = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
      process.env.REACT_APP_NEWS_API
    }&page=${this.state.page + 1}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
    });
  };

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
                        : "https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    newsUrl={article.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between my-4">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              Math.ceil(this.state.totalResults / 20) < this.state.page + 1
            }
            type="button"
            onClick={this.handleNextClick}
            className="btn btn-primary"
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}
