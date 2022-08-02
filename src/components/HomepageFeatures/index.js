import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: "Fast Log Ingestion",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>Simple and high performance data ingestion with SDK less REST API</>
    ),
  },
  {
    title: "Cloud Native Design",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Deploy on Kubernetes in seconds and start collecting logs from all
        containers
      </>
    ),
  },
  {
    title: "Parquet Format",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>Store log data as high compress and analytics friendly Parquet format</>
    ),
  },
  {
    title: "Parquet Format",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>Store log data as high compress and analytics friendly Parquet format</>
    ),
  },
  {
    title: "Parquet Format",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>Store log data as high compress and analytics friendly Parquet format</>
    ),
  },
  {
    title: "Parquet Format",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>Store log data as high compress and analytics friendly Parquet format</>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--left shadow--md margin-bottom--md padding-vert--lg padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
