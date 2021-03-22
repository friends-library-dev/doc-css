import css from 'x-syntax';

export default css`
  .half-title-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    page: half-title;
  }

  .half-title-page .byline {
    font-style: italic;
    padding-top: 13pt;
  }

  .half-title-page .editor {
    transform: translateY(3in);
  }

  .half-title-page > div {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  @page half-title {
    @bottom-center {
      content: normal;
    }
  }
`;
