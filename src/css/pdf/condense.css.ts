import css from 'x-syntax';

export default css`
  html {
    font-size: 9.6pt;
  }

  h2 {
    margin-top: 90pt;
  }

  .chapter {
    page-break-before: avoid;
  }

  .copyright-page {
    height: var(--condensed-copyright-page-height);
  }

  .half-title-page {
    height: var(--condensed-half-title-page-height);
  }

  @page {
    margin-top: var(--condensed-page-top-margin);
    margin-bottom: var(--condensed-page-bottom-margin);

    @top-center {
      margin-top: 0.25in;
    }
  }

  @page:left {
    margin-left: 0.55in;
    margin-right: 0.75in;
  }

  @page:right {
    margin-left: 0.75in;
    margin-right: 0.55in;
  }
`;
