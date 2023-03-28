import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import N4CFeatures from '../components/N4CFeatures';
import Translate,{translate} from '@docusaurus/Translate';

var desc = <Translate>A place for all knowledge regarding Research Data Management (RDM) in Chemistry</Translate>;

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={desc}>
      <div className="hero">
        <div className="container hero__container">
          <div className="row">
            <div className="col">
              <h1 className='hero__title text'>
                {siteConfig.title}
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col col--8">
              <p className="hero__subtitle">
              {desc}
              </p>
            </div>
            <div className="col col--2">
              <div className="buttons">
                <Link
                  className="button button--negative button--lg"
                  to="/docs/intro">
                  <Translate>Get started</Translate>
                </Link>
              </div>
            </div>
          </div>
          <N4CFeatures feature="entry" />
        </div>
      </div>
    </Layout>
  );
}
