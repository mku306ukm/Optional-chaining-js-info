let obj = {
  person: {
    name: "umesh",
  },
  arr: [1, 2, 3, 4],
  func: () => {
    console.log("ya!!Function called!");
  },
};
// obj?.arr?.[2] (ye run karne par 3 aayega)
// 3

// obj?.func?.()   (ise run karne par func call ho jayega)
// ya!!Function called!
// undefined
