import React from "react";
import { Col } from "reactstrap";
import "../../styles/blog-item.css";
import { Link } from "react-router-dom";
import blogData from "../../assets/data/blogData";

const BlogList = () => {
  return (
    <>
      {blogData.map((item) => (
        <BlogItem item={item} key={item.id} />
      ))}
    </>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title, author, date, description, time } = item;

  return (
    <Col lg="4" md="6" sm="6" className="mb-5">
      <div className="blog__item">
        <div className="blog__image">
          <img src={imgUrl} alt={title} className="w-100" />
          <div className="blog__overlay">
            <span className="blog__category">Expertise Automobile</span>
          </div>
        </div>

        <div className="blog__content">
          <div className="blog__meta">
            <span className="blog__author">
              <i className="ri-user-3-line"></i> {author}
            </span>
            <span className="blog__date">
              <i className="ri-calendar-2-line"></i> {date}
            </span>
          </div>

          <Link to={`/blogs/${title}`} className="blog__title">
            {title}
          </Link>

          <p className="blog__description">
            {description.length > 120
              ? description.substring(0, 120) + "..."
              : description}
          </p>

          <div className="blog__footer">
            <Link to={`/blogs/${title}`} className="read__more__btn">
              <span>Lire l'article</span>
              <i className="ri-arrow-right-line"></i>
            </Link>

            <div className="blog__time">
              <i className="ri-time-line"></i>
              <span>{time}</span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default BlogList;
