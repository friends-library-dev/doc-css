import css from 'x-syntax';

export default css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    letter-spacing: -0.01em;
    -webkit-hyphens: none;
    hyphens: none;
    word-wrap: break-word;
  }

  .own-page {
    -webkit-column-break-before: always;
    page-break-before: always;
  }

  /* cover */
  body.cover,
  body.cover figure {
    height: 99%;
    /* 99% b/c legacy RMSDK applies blank page after if 100% */
  }

  body.cover figure {
    margin: 0;
    text-indent: 0;
    text-align: center;
  }

  body.cover img {
    width: auto;
    max-width: 100%;
    /* Note: KF8 doesn't support max-width hence "width: auto;" as fallback */
    height: 100%;
    /* We try to prevent blank page after */
    max-height: 95%;
    /* Max value iBooks enforces */
  }

  @supports (height: 99vh) {
    body.cover,
    body.cover figure,
    body.cover image {
      height: 99vh;
      /* 99% b/c legacy RMSDK applies blank page after if 100% */
    }
  }

  /* front matter */
  .half-title-page h1 {
    margin-top: 35%;
    text-align: center;
    font-weight: bold;
  }

  .half-title-page .byline {
    text-align: center;
    font-style: italic;
  }

  .half-title-page .editor {
    margin-top: 5em;
  }

  .original-title-page {
    margin-top: 22%;
    /* NOT padding-top for mobi7 */
  }

  .originally-titled__label {
    font-style: italic;
    text-align: center;
    font-size: 0.9em;
  }

  .originally-titled__title {
    text-align: center;
    -webkit-hyphens: none;
    hyphens: none;
  }

  .copyright-page ul {
    text-align: left;
    font-size: 0.4em;
    font-style: italic;
    list-style-type: none;
    padding-left: 0;
  }

  .copyright-page li {
    line-height: 1.2em;
    padding-bottom: 0.65em;
  }

  .footnote-helper {
    margin-top: 4em;
    /* NOT padding-top for mobi7 */
  }

  .footnote-helper h3 {
    font-size: 0.95em;
  }

  .footnote-helper p {
    font-size: 0.95em;
    font-style: italic;
    hyphens: none;
    -webkit-hyphens: none;
  }

  .footnote-helper p span {
    /* back symbol */
    font-style: normal;
  }

  /* toc */
  .content-toc div {
    font-size: 0.5em;
  }

  /* chapter titles */
  h2 {
    margin-top: 5em;
    text-transform: uppercase;
    font-size: 1.1em;
  }

  .chapter-heading__sequence {
    font-size: 0.9em;
  }

  .chapter-heading__title {
    display: block;
    margin: 0.6em 0 2em;
    hyphens: none;
    text-transform: uppercase;
    -webkit-hyphens: none;
  }

  .style-blurb .chapter-heading {
    margin-bottom: 2em;
  }

  .chapter-subtitle--blurb {
    margin-top: 0.5em;
  }

  .paragraph {
    text-indent: 1.4em;
    widows: 2;
    orphans: 2;
  }

  /* blockquotes */
  blockquote {
    font-size: 0.94em;
    line-height: 155%;
    margin-right: 1em;
    margin-left: 1.5em;
  }

  .attributed-quote figcaption {
    text-align: right;
    font-style: italic;
    font-size: 0.9em;
    margin-top: -0.8em;
  }

  /* footnotes */
  sup.footnote {
    font-size: 0.675em;
    line-height: 1.2;
    vertical-align: super;
    vertical-align: 35%;
    margin-left: -0.35em;
  }

  sup.footnote a::before {
    content: '[';
  }

  sup.footnote a::after {
    content: ']';
  }

  #footnotes .footnote + .footnote {
    margin-top: 1.5em;
  }

  #footnotes .footnote > a {
    font-size: 0.8em;
    margin-right: 0.4em;
    text-decoration: underline;
  }

  div.asterism {
    text-align: center;
    padding-top: 0.5em;
    vertical-align: middle;
    line-height: 2em;
  }

  .small-break {
    height: 0.5em;
  }

  .copyright-page #isbn {
    display: none;
  }
`;
