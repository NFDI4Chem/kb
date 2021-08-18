import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Role',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    link: '/docs/Role/Guide',
    description: <>Enter via your role</>,
  },
  {
    title: 'User profiles',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    link: '/docs/User%20profiles/Guide',
    description: <>Enter via your chemical domain</>,
  },
  {
    title: 'Problems',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    link: '/docs/Problems/Data%20Management%20Plan',
    description: <>Enter via presented problems</>,
  },
  {
    title: 'Topics & Concepts',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    link: '/docs/Topics%20and%20Concepts/ELN',
    description: <>Go directly to topics and concepts</>,
  },
];

function Feature({ Svg, title, link, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        {link ? (
          <Link
            className={clsx('button button--primary button--lg')}
            // ? <Link className={clsx('')}
            to={link}>
            {description}
          </Link>
        ) : (
          <p>{description}</p>
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
