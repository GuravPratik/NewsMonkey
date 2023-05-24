import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
  }
  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=${process.env.REACT_APP_NEWS_API}&page=${
      this.state.page - 1
    }&pagesize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

  handleNextClick = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=${process.env.REACT_APP_NEWS_API}&page=${
      this.state.page + 1
    }&pagesize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <div className="container my-4">
          <h1 className="my-4 text-center">NewsMonkey - Top Headlines</h1>
          {this.state.loading && <Spinner />}
          <div className="row my-3">
            {!this.state.loading &&
              this.state.articles.map((article, index) => {
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
              Math.ceil(this.state.totalResults / this.props.pageSize) <
              this.state.page + 1
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
