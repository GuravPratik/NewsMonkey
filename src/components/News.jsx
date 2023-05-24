import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
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

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_SECOND}&page=${this.state.page}&pagesize=${this.props.pageSize}`;

    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  async componentDidMount() {
    await this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_SECOND}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
    });
  };
  render() {
    return (
      <>
        <h1 className="my-4 text-center">NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container my-4">
            <div className="row my-3">
              {this.state.articles.map((article, index) => {
                return (
                  <div className="col-md-4 my-3" key={index}>
                    <NewsItem
                      title={article.title ? article.title : " "}
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
                      author={article.author}
                      date={article.publishedAt}
                    />
                    {console.log(
                      this.state.articles.length,
                      this.state.totalResults
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
