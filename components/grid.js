const Bricks = typeof window !== 'undefined' ? require('bricks.js') : undefined;

const sizes = [
  { columns: 2, gutter: 10 },
  { mq: '768px', columns: 3, gutter: 25 },
  { mq: '1024px', columns: 4, gutter: 50 },
];

const instance = Bricks({
  container: '.brick-grid',
  packed: 'data-packed',
  sizes,
});

instance
  .on('pack', () => console.log('ALL grid items packed.'))
  .on('update', () => console.log('NEW grid items packed.'))
  .on('resize', size => console.log('The grid has be re-packed to accommodate a new BREAKPOINT.'));

if (Bricks) {
  if (document.readyState === 'complete') {
    instance
        .resize(true)     // bind resize handler
        .pack();           // pack initial items
  }
}
