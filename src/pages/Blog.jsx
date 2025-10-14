import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import BlogList from "../components/UI/BlogList";

const Blog = () => {
  return (
    <Helmet title="Magazine Automobile">
      <CommonSection title="MAGAZINE AUTO • ACTUALITÉS & TENDANCES" />

      <section className="blog__section">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Actualités & Conseils</h6>
              <h2 className="section__title">
                Explorez l'Univers de l'Excellence Automobile
              </h2>
              <p className="section__description mx-auto" style={{ maxWidth: '600px' }}>
                Découvrez nos articles exclusifs rédigés par nos experts automobiles.
                Conseils pratiques, innovations technologiques, et guides de voyage
                pour enrichir votre expérience de conduite.
              </p>
            </Col>
          </Row>

          <Row>
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Blog;
