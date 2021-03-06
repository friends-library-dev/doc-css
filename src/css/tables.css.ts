import css from 'x-syntax';

export default css`
  table.tableblock {
    width: 100%;
    margin: 1em 0;
    border-collapse: collapse;
  }

  table.tableblock p.tableblock {
    line-height: 115%;
    margin: 0;
  }

  table.tableblock th + th,
  table.tableblock td + td {
    padding-left: 1em;
  }

  table.tableblock.table-vertical-lines th + th,
  table.tableblock.table-vertical-lines td + td {
    padding: 0 0.2em;
  }

  table.tableblock.table-vertical-lines td:first-child,
  table.tableblock.table-vertical-lines th:first-child {
    padding-right: 0.2em;
  }

  table.tableblock.table-vertical-lines td:last-child,
  table.tableblock.table-vertical-lines th:last-child {
    padding-left: 0.2em;
  }

  table.tableblock.table-vertical-lines tr:last-child,
  table.tableblock.table-vertical-lines thead {
    border-bottom-width: 0;
  }

  table.tableblock.table-vertical-lines td + td {
    border-left: 1px solid rgba(0, 0, 0, 0.2);
  }

  table.tableblock tr {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    vertical-align: bottom;
  }

  table.tableblock td,
  table.tableblock th {
    vertical-align: bottom;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
  }

  table.tableblock.table-valign-middle td,
  table.tableblock.table-valign-middle th {
    vertical-align: middle;
  }

  table.tableblock tr:last-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.75);
  }

  table.tableblock thead {
    padding-bottom: 0.25em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.75);
  }

  table.tableblock + table.tableblock {
    margin-top: 2em;
  }

  table.tableblock.table-align-center td,
  table.tableblock.table-align-center td > *,
  table.tableblock.table-tail-align-center td,
  table.tableblock.table-tail-align-center th {
    text-align: center;
  }

  table.tableblock.table-tail-align-right td,
  table.tableblock.table-tail-align-right th {
    text-align: right;
  }

  table.tableblock.table-tail-align-center td:first-child,
  table.tableblock.table-tail-align-center th:first-child,
  table.tableblock.table-tail-align-right td:first-child,
  table.tableblock.table-tail-align-right th:first-child {
    text-align: left;
  }

  table.tableblock.table-header-tail-x-small th {
    font-size: 0.74em;
  }

  table.tableblock.table-header-tail-x-small th:first-child {
    font-size: inherit;
  }

  table.tableblock p.tableblock + p.tableblock {
    margin-top: 1em;
  }

  table.tableblock.table-last-col-secondary td:last-child {
    font-size: 0.85em;
    font-style: italic;
  }
`;
