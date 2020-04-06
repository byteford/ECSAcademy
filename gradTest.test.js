function createMenuData(data) {
  var output = new Map();
  data.forEach(line => {
    var split = line.split('/')
    addMenuData(split,output)
  });

  console.log(Object.fromEntries(output))
  return output
}
function addMenuData(text, arr){
  if(text.length != 2){
    return;
  }
  if(!arr.has(text[0])){
    arr.set(text[0],new Array())
  }
  arr.get(text[0]).push(text[1])
}

describe("menu Data Generator", () => {
    it("creates correct data structure ", () => {
      const data = [
        "parent1/parent1child",
        "parent1/parent1child2",
        "parent2/parent2child",
        "parent2/parent2child2",
        "parent1/parent1child3",
        "parent3",
        "parent3/parent3child1",
        "parent4"
      ];
  
      const expectedResult = [
        {
          title: "parent1",
          data: ["parent1child", "parent1child2", "parent1child3"]
        },
        { title: "parent2", data: ["parent2child", "parent2child2"] },
        { title: "parent3", data: ["parent3child1"] }
      ];
  
      const actualResult = createMenuData(data);
      expect(actualResult).toMatchObject(expectedResult);
    });
  });