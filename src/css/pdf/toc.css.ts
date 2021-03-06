import css from 'x-syntax';

export default css`
  .toc {
    page: toc;
    page-break-before: recto; /* keep TOC on recto */
  }

  .toc h1 {
    padding-top: 15%;
    font-size: 1.4rem;
    margin-bottom: 2.5rem;
  }

  .toc a {
    text-decoration: none;
    color: black;
  }

  .toc a > span {
    display: inline-block;
    width: 85%;
  }

  .toc a[href]::after {
    content: leader(' ') target-counter(attr(href), page);
    vertical-align: top;
  }

  .toc-intermediate-title a[href]::after {
    content: '';
  }

  @page toc {
    @bottom-center {
      content: normal;
    }
    @top-center {
      content: normal;
    }
  }

  .toc-intermediate-title {
    text-align: center;
    font-variant: small-caps;
    font-size: 95%;
    line-height: 100%;
    margin: 2em 0 0 0;
  }

  .toc-intermediate-title + p {
    margin-top: 0;
  }

  .multicol-toc-entry > a {
    display: flex;
  }

  .multicol-toc-entry .multicol-toc-chapter {
    flex-basis: 2.5em;
    text-align: center;
  }

  .multicol-toc-entry .multicol-toc-main {
    padding: 0 2em 0 1em;
  }
`;
