function addMenuData(text, menu) {
  if (text.length !== 2) {
    return;
  }
  if (!menu.has(text[0])) {
    menu.set(text[0], []);
  }
  menu.get(text[0]).push(text[1]);
}

function createMenuData(data) {
  const menuTree = new Map();
  const menuJSON = [];
  data.forEach((line) => {
    const split = line.split('/');
    addMenuData(split, menuTree);
  });

  menuTree.forEach((child, parent) => {
    menuJSON.push({ title: parent, data: child });
  });

  return menuJSON;
}


// eslint-disable-next-line no-undef
describe('menu Data Generator', () => {
  // eslint-disable-next-line no-undef
  it('creates correct data structure ', () => {
    const data = [
      'parent1/parent1child',
      'parent1/parent1child2',
      'parent2/parent2child',
      'parent2/parent2child2',
      'parent1/parent1child3',
      'parent3',
      'parent3/parent3child1',
      'parent4',
    ];

    const expectedResult = [
      {
        title: 'parent1',
        data: ['parent1child', 'parent1child2', 'parent1child3'],
      },
      { title: 'parent2', data: ['parent2child', 'parent2child2'] },
      { title: 'parent3', data: ['parent3child1'] },
    ];

    const actualResult = createMenuData(data);
    // eslint-disable-next-line no-undef
    expect(actualResult).toMatchObject(expectedResult);
  });
});
