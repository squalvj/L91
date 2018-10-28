var coin = [200, 100, 50, 25, 5, 1]
var arr = []
var count = 300;
var i = 0
while (count > 0) {

   if (count - coin[i] > 0) {
      count -= coin[i]
   } else {
      i++
   }
   console.log(count)
   arr.push(coin[i])

   if (count <= 0) break;
}
console.log(arr)