export default function decorate(block) {
  [...block.children].forEach((item) => {
    // decorate accordion item label
    const label = item.heading;
    const summary = document.createElement('summary');
    summary.className = 'accordion-item-label';
    summary.append(...label.childNodes);
    // decorate accordion item body
    const { body } = item;
    body.className = 'accordion-item-body';
    // decorate accordion item
    const details = document.createElement('details');
    details.className = 'accordion-item';
    details.append(summary, body);
    item.replaceWith(details);
  });
}

// [...block.children].forEach((row) => {
//   // decorate accordion item label
//   const label = row.children[0];
//   const summary = document.createElement('summary');
//   summary.className = 'accordion-item-label';
//   summary.append(...label.childNodes);
//   // decorate accordion item body
//   const body = row.children[1];
//   body.className = 'accordion-item-body';
//   // decorate accordion item
//   const details = document.createElement('details');
//   details.className = 'accordion-item';
//   details.append(summary, body);
//   row.replaceWith(details);
// });
