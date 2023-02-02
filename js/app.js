var str = 'Abdulaziz'
console.log(
  str
    .split('')
    .reduceRight((a, e) =>
      a + e
    , '')
)