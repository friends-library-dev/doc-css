import css from 'x-syntax';

export default css`
  @page {
    @footnotes {
      max-height: 80%;
      background: url(line.svg) no-repeat top left;
      padding-left: 12pt;
      padding-top: 2pt;
      margin-top: 8px;
      footnote-style-position: outside;
    }

    @bottom-center {
      content: counter(page);
      font-size: 0.9rem;
      padding: 0 !important;
      vertical-align: text-top;
      margin-top: 5pt;
    }

    @top-center {
      margin-top: 0.35in;
      font-size: 0.9rem;
      font-style: italic;
    }
  }

  @page:left {
    @top-center {
      content: var(--running-head-title);
    }
  }

  @page:right {
    @top-center {
      content: string(chapter, last);
    }
  }

  @page:first {
    @top-center {
      content: normal;
    }
  }

  .letter-heading {
    -webkit-hyphens: none !important;
    hyphens: none !important;
  }

  .body {
    font-family: Georgia, 'Bitstream Charter', serif;
  }

  div.asterism {
    text-align: center;
    letter-spacing: 0.15em;
    vertical-align: middle;
    line-height: 2em;
    margin: 1em 0 0.6em 0;
  }

  .paragraph {
    text-indent: 1.5em;
    text-align: justify;
    margin: 0;
    hyphens: auto;
  }

  .own-page {
    page-break-before: always;
    page-break-after: always;
  }

  #footnotes {
    display: none;
  }

  .chapter {
    counter-reset: footnote;
  }

  *::footnote-call {
    content: counter(footnote);
    vertical-align: super;
    line-height: none;
  }

  *::footnote-marker {
    content: counter(footnote);
    padding-right: 7pt;
    opacity: 0.9;
  }

  .footnote {
    float: footnote;
    padding-top: 0.5em;
    text-indent: 0;
    text-align: justify !important;
    font-weight: 400;
    text-transform: none !important;
    font-variant: normal !important;
    font-style: normal;
  }

  .blank-page {
    page: blank;
  }

  @page blank {
    @bottom-center {
      content: normal;
    }
    @top-center {
      content: normal;
    }
  }

  @page:blank {
    @bottom-center {
      content: normal;
    }
    @top-center {
      content: normal;
    }
  }

  .embedded-content-document {
    margin-left: 1.3em;
    font-family: 'Times New Roman', Palatino, Arial, serif;
  }

  .chapter-heading {
    string-set: chapter attr(data-short);
  }
`;
