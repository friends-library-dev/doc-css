import css from 'x-syntax';

export default css`
  .original-title-page {
    text-align: center;
    padding-top: 5rem;
    page: original-title;
  }

  .originally-titled__label {
    font-style: italic;
  }

  @page original-title {
    @bottom-center {
      content: normal;
    }

    @top-center {
      content: normal;
    }
  }
`;
