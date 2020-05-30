function clacSpecialNum() {
  const nums = [1, 5, 6, 2, 4, 1, 0, 1, 11, 52, 0, 3,3,3,5,4,8,2];
 // const sumNum = Array();
  let len = 0;
  let lenTotal = 0;

  while (len < nums.length) {
    while (lenTotal < nums.length) {
      if (len != lenTotal && nums[len] + nums[lenTotal] === 8) {
        console.log(nums[len] + " " + nums[lenTotal]);
      }
      lenTotal = lenTotal + 1;
    }
    len = len + 1;
    lenTotal = 0;
  }
}

clacSpecialNum();