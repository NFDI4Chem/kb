import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Roles',
    Svg: require('../../static/img/role_white.svg').default,
    link: '/docs/role/guide',
  },
  {
    title: 'Domains',
    Svg: require('../../static/img/domain_white.svg').default,
    link: '/docs/domains/guide',
  },
  {
    title: 'Problems',
    Svg: require('../../static/img/problem_white.svg').default,
    link: '/docs/problems/dmp',
  },
  {
    title: 'Topics & Concepts',
    Svg: require('../../static/img/topics_white.svg').default,
    link: '/docs/topics/fair',
  },
];

function Feature({ Svg, title, link }) {
  return (
    <div className={clsx('col')} style={{
      width: 250,
      padding: 5,
      //backgroundColor: 'red',
    }}>
      <div className='text--center'>
        {link ? (
          <Link
            className={clsx('button button--secondary button--lg')} style={{
              width: 250,
            }}
            // ? <Link className={clsx('')}
            to={link}>
              <Svg className={styles.featureSvg} alt={title} /><br/>
            {title}
          </Link>
        ) : (
          <p>{title}</p>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function RoleButton() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row--3'>
          <Feature {...FeatureList[0]} />
        </div>
      </div>
    </section>
  );
}

export function DomainButton() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row--3'>
          <Feature {...FeatureList[1]} />
        </div>
      </div>
    </section>
  );
}

export function ProblemButton() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row--3'>
          <Feature {...FeatureList[2]} />
        </div>
      </div>
    </section>
  );
}

export function TopicButton() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row--3'>
          <Feature {...FeatureList[3]} />
        </div>
      </div>
    </section>
  );
}