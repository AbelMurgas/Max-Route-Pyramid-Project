class Pyramid {
  #listMaxRouteWeigthSum;
  #pyramidList;

  constructor(listPyramid) {
    //  Change to recive string pyramid
    listMaxRouteWeigthSum = this.#obtainListRouteMaxWeightSum(listPyramid);
  }

  #obtainListRouteMaxWeightSum(pyramid) {
    const listRouteSum = [];
    listRouteSum.push(pyramid[pyramid.length - 1]);
    maxHeigthPyramid = pyramid.length;
    indexListRouteSum = 0;
    for (let i = maxHeigthPyramid - 2; i >= 0; i--) {
      // 2 0  1 1 0 2
      let temp = this.#obtainReduceRouteMaxWeithSum(
        pyramid[i],
        listRouteSum[indexListRouteSum]
      );
      listRouteSum.push(temp);
      indexListRouteSum++;
    }
    return listRouteSum.reverse();
  };

  #obtainReduceRouteMaxWeithSum(firstRow, lastRow){
    return firstRow.map((element, index) => {
      return Math.max(element + lastRow[index], element + lastRow[index + 1]);
    });
  };

  getListIndexMaxRouteWeith(listRouteMaxWeightSum){
    let arrow = 0;
    let listIndexMaxRouteWeith = [0];
    for (let i = 1; i < listRouteMaxWeightSum.length; i++) {
      arrow = listRouteMaxWeightSum[i].indexOf(
        Math.max(
          listRouteMaxWeightSum[i][arrow],
          listRouteMaxWeightSum[i][arrow + 1]
        ), arrow
      );
      listIndexMaxRouteWeith.push(arrow);
    }
    return listIndexMaxRouteWeith;
  };

  pyramidStringToList() {
    return 0;
  }

  getListIndexMaxRouteWeith() {
    return 0;
  }

  getPyramidList() {
    return this.#pyramidList;
  }

  getTotalMaxRoute() {
    return this.#listRouteSum[0];
  }

  getListRouteSum() {
    return this.#listRouteSum;
  }
}

const pyramidListTest = [
  // TODO:
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20, 04, 82, 47, 65],
  [19, 01, 23, 75, 03, 34],
  [88, 02, 77, 73, 07, 63, 67],
  [99, 65, 04, 28, 06, 16, 70, 92],
  [41, 41, 26, 40, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23],
];
