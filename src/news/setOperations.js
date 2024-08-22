//isDisjointFrom, isSubsetOf, isSupersetOf
function SetTest() {
  let sABC = new Set(["A", "B", "C"]);
  let sCDE = new Set(["C", "D", "E"]);
  let unionArr = sABC.union(sCDE);
  unionArr = Array.from(unionArr);
  let intersectionArr = sABC.intersection(sCDE);
  intersectionArr = Array.from(intersectionArr);
  let sDArr = sABC.symmetricDifference(sCDE);
  sDArr = Array.from(sDArr);
  let differenceArr = sABC.difference(sCDE);
  differenceArr = Array.from(differenceArr);
  return (
    <div>
      <p>
        {`union: ${unionArr},
                 intersection:${intersectionArr},
                 symmetricDifference:${sDArr},
                 difference:${differenceArr},
                  `}
      </p>
    </div>
  );
}

export default SetTest;
